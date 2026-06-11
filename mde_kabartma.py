# MDE boru hattı: 16-bit ham derinlik -> hm_mde2_ext.png (1600x944, 8-bit gri)
# CLAUDE.md tarifi. Tüm yükseklikler piksel=yükseklik/2 ölçeğinde.
import numpy as np
from PIL import Image
from scipy import ndimage

HW, HH = 1600, 800          # orijinal bölge hm boyutu
EXT = 144                   # ayna uzatma satırı
RAMP_BASE = 250             # rampa tabanı (orig satır), tepe=satır 0
SIGMA_BIAS = 60
SEED = np.random.default_rng(42)

# --- girdiler ---
depth = np.array(Image.open("derinlik-ham-16bit.png").resize((HW, HH), Image.LANCZOS),
                 dtype=np.float32) / 65535.0
img = np.array(Image.open("derinlik-girdi.jpg").convert("RGB").resize((HW, HH), Image.LANCZOS),
               dtype=np.float32) / 255.0
r, g, b = img[..., 0], img[..., 1], img[..., 2]

# HSV (v=max, s=1-min/max)
mx = img.max(axis=2); mn = img.min(axis=2)
v = mx; s = np.where(mx > 0, 1 - mn / np.maximum(mx, 1e-6), 0)

# --- maskeler ---
# bina: parlak, düşük doygunluk, soğuk ton (kum b<r*0.88 sıcak; bina b>r*0.92)
seed = (v > 0.66) & (s < 0.24) & (b > r * 0.92)
seed = ndimage.binary_closing(seed, ndimage.generate_binary_structure(2, 1), iterations=3)
seed = ndimage.binary_opening(seed, iterations=2)
# band tespiti 0.27-0.37 penceresinde yoğun satırlar
win0, win1 = int(0.27 * HH), int(0.37 * HH)
rowdens = seed.sum(axis=1)
band_rows = np.where(rowdens > rowdens[win0:win1].max() * 0.15)[0]
band_rows = band_rows[(band_rows > win0 - 40) & (band_rows < win1 + 60)]
b0, b1 = band_rows.min(), band_rows.max()
print(f"band satırları (orig): {b0}-{b1}  (v {b0/HH:.3f}-{b1/HH:.3f})")
# band içi gevşek geçiş
loose = np.zeros_like(seed)
loose[b0:b1 + 1] = ((v > 0.52) & (s < 0.34))[b0:b1 + 1]
bld = ndimage.binary_closing(seed | (loose & ndimage.binary_dilation(seed, iterations=6)),
                             iterations=2)
lab, n = ndimage.label(bld)
keep = np.zeros_like(bld)
for i in range(1, n + 1):
    m = lab == i
    area = m.sum()
    if area <= 800:
        continue
    rs, cs = np.where(m)
    fill = area / ((rs.max() - rs.min() + 1) * (cs.max() - cs.min() + 1))
    if fill > 0.20:
        keep |= m
bld = keep
# buildings.json kutularıyla kesiştir (kort/havuz gibi yanlış pozitifleri eler).
# Kutu uv'leri 1600x944 uzatılmış dokuya göre; orig satır = v*944 - 144.
import json
boxmask = np.zeros_like(bld)
for bx in json.load(open("buildings.json")):
    r0 = max(0, int(bx["v0"] * 944) - EXT - 4); r1 = min(HH, int(bx["v1"] * 944) - EXT + 4)
    c0 = max(0, int(bx["u0"] * HW) - 4); c1 = min(HW, int(bx["u1"] * HW) + 4)
    boxmask[r0:r1, c0:c1] = True
bld &= boxmask
print("bina piksel:", int(bld.sum()))

# yeşillik (ağaç): zemin kestiriminden dışlanır
tree = (g > r * 1.05) & (g > b * 1.02) & (g > 0.15)
tree = ndimage.binary_opening(tree, iterations=1)

# deniz: band altı, mavi baskın
sea = np.zeros_like(bld)
lower = int((b1 + b0) / 2)
sea[lower:] = (b[lower:] > r[lower:] * 1.04) & (b[lower:] >= g[lower:] * 0.98)
sea = ndimage.binary_opening(sea, iterations=2)
sea = ndimage.binary_closing(sea, iterations=4)
# yalnızca alt kenara değen bileşen = gerçek deniz (havuz/gölge taşmasını eler)
slab, sn = ndimage.label(sea)
bottom_ids = set(slab[-10:][slab[-10:] > 0])
sea = np.isin(slab, list(bottom_ids)) if bottom_ids else np.zeros_like(sea)
print("deniz piksel:", int(sea.sum()))

# --- maske görsel kontrol ---
ov = (img * 255).astype(np.uint8).copy()
ov[bld] = [255, 60, 60]; ov[sea] = [60, 120, 255]
ovt = ov.copy(); ovt[tree] = [40, 200, 80]
Image.fromarray(np.vstack([ov, ovt])).save("maskeler-kontrol.png")

# --- 1) sahte eğim: zemin-pikselli normalize konvolüsyon ---
ground = ~(tree | bld)
gf = ndimage.gaussian_filter(depth * ground, SIGMA_BIAS)
gn = ndimage.gaussian_filter(ground.astype(np.float32), SIGMA_BIAS)
bias = gf / np.maximum(gn, 1e-6)
d = np.clip(depth - bias, 0, None)

# --- 2) deniz = 0 ---
d[sea] = 0

# --- 3) %99.5 dilim -> 0.70 yükseklik (0.35 piksel) ---
p = np.percentile(d, 99.5)
print(f"p99.5 (eğim sonrası): {p:.4f}")
d = np.clip(d * (0.35 / p), 0, 1)

# --- 4) bina tabanı 0.45 yükseklik (0.225 piksel) ---
d[bld] = np.maximum(d[bld], 0.225)

# --- 5) tepe rampası: maks 1.0 yükseklik (0.5 px), t^1.25 + gauss38 gürültü x0.12 ---
t = np.clip((RAMP_BASE - np.arange(HH, dtype=np.float32)) / RAMP_BASE, 0, 1)[:, None]
noise = ndimage.gaussian_filter(SEED.standard_normal((HH, HW)).astype(np.float32), 38)
noise /= np.abs(noise).max()
ramp = 0.5 * (t ** 1.25) + 0.06 * noise * t
d = np.clip(d + np.clip(ramp, 0, None), 0, 1)

# --- 6) üst 144 satır ayna uzatma ---
out = np.vstack([d[1:EXT + 1][::-1], d])
assert out.shape == (944, 1600), out.shape
Image.fromarray((out * 255 + 0.5).astype(np.uint8), mode="L").save("hm_mde2_ext.png")
print("yazıldı: hm_mde2_ext.png", out.shape, "max", round(float(out.max()), 3))
