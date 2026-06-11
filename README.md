# Sahil Harita / ALGE QR Demo

## Kurulum

npm install

## Local çalıştırma

npm run dev

Tarayıcıda `http://localhost:5173/` aç. Vite yalnızca statik sunucu olarak
kullanılıyor; uygulamanın kendisi tek dosyadır ve build gerektirmez.

## Amaç

QR ile açılan, 3D harita destekli ALGE / Beach Park keşif demo Web App'i.

## Mevcut yapı (baseline)

- `index.html` — ANA DOSYA (eski adı `kabartma-3d.html`). Tek dosyalık prototip:
  Three.js IIFE bundle, HD doku, MDE kabartma, posterler base64 gömülü (~6.5 MB).
  İnternetsiz çalışır; bu yapı korunacak.
- `kabartma-mde.html`, `deneme-mde2.html` — kabartma/doku deneme dosyaları.
- `kalibrasyon.html`, `kalibrasyon-mobil.html` — kamera ayar araçları.
- `mde_derinlik.py`, `mde_kabartma.py`, `hd_doku.py` — kabartma + HD doku
  üretim boru hattı (lokal, tekrarlanabilir).
- `docs/research/` — derin araştırma çıktıları (47 mekan datası, özet tablo,
  search index). Henüz uygulamaya entegre edilmedi.
- `CLAUDE.md` — proje devir belgesi ve çalışma kuralları.

## Sprint Notu

Sprint 0: repo foundation ve local çalışma ortamı.
