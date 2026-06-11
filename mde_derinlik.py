# Depth Anything V2 Small (Apache-2.0) ile derinlik-girdi.jpg'den 16-bit ham derinlik.
import numpy as np
import torch
from PIL import Image
from transformers import AutoImageProcessor, AutoModelForDepthEstimation

MODEL = "depth-anything/Depth-Anything-V2-Small-hf"
SRC = "derinlik-girdi.jpg"

img = Image.open(SRC).convert("RGB")
W, H = img.size
print(f"girdi: {W}x{H}")

processor = AutoImageProcessor.from_pretrained(MODEL)
model = AutoModelForDepthEstimation.from_pretrained(MODEL)
model.eval()

with torch.no_grad():
    inputs = processor(images=img, return_tensors="pt")
    out = model(**inputs)
    depth = out.predicted_depth  # (1, h, w) — büyük değer = yakın (kameraya), yani yüksek

depth = torch.nn.functional.interpolate(
    depth.unsqueeze(1), size=(H, W), mode="bicubic", align_corners=False
).squeeze().numpy()

print(f"ham aralık: min={depth.min():.4f} max={depth.max():.4f}")

# min-max normalize → 16-bit
d = (depth - depth.min()) / (depth.max() - depth.min())
img16 = (d * 65535.0 + 0.5).astype(np.uint16)
Image.fromarray(img16, mode="I;16").save("derinlik-ham-16bit.png")

# 8-bit önizleme
Image.fromarray((d * 255.0 + 0.5).astype(np.uint8), mode="L").save("derinlik-ham-onizleme.png")
print("yazıldı: derinlik-ham-16bit.png, derinlik-ham-onizleme.png")
