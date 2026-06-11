# HD doku: Real-ESRGAN x4 çıktısı -> x2 (5200x2600) -> üst 468 satır aynalı
# orman uzatması + koyu yeşile erime (tex_full'dan ölçülen profil) -> 5120px tex_hd2.jpg
import numpy as np
from PIL import Image

Image.MAX_IMAGE_PIXELS = None
C = np.array([12.5, 27.9, 10.9], dtype=np.float32)   # ölçülen koyu yeşil
w234 = np.load("/tmp/fade_w.npy").astype(np.float32) # ölçülen 234 satırlık erime profili

x4 = Image.open("/tmp/derinlik-x4.png").convert("RGB")
print("x4:", x4.size)
hd = np.array(x4.resize((5200, 2600), Image.LANCZOS), dtype=np.float32)

EXT = 468  # 234'ün x2'si
# erime profilini 468 satıra yeniden örnekle
w = np.interp(np.linspace(0, 233, EXT), np.arange(234), w234).astype(np.float32)[:, None, None]
# ayna kaynağı: ext satır k = orig satır (EXT-1-k)  (tex_full ile aynı eksen, x2 ölçek)
mir = hd[:EXT][::-1]
ext = (1 - w) * mir + w * C[None, None, :]
full = np.vstack([ext, hd])  # 3068 x 5200
print("uzatılmış:", full.shape)

out = Image.fromarray(np.clip(full + 0.5, 0, 255).astype(np.uint8))
out = out.resize((5120, 3021), Image.LANCZOS)  # tex_hd.jpg ile aynı boyut
out.save("tex_hd2.jpg", quality=88, subsampling=1)
print("yazıldı: tex_hd2.jpg", out.size)
