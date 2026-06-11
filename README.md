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

## Demo Data

Araştırma dokümanlarından üretilen demo data dosyaları `src/data/` altında tutulur.

Doğrulama:

```bash
npm run validate:data
```

`venues.js` ve `searchIndex.js` araştırma dokümanlarından script ile üretilir
(elle düzenlemeyin; kaynak dokümanı düzeltip yeniden üretin):

```bash
npm run build:venues
npm run build:search-index
```

Araştırmadaki "Bilinmiyor" / "(demo önerisi)" / "teyit edilmeli" ifadeleri
veri modelinde bilinçli korunur (`flags.demoSuggestion`, `flags.needsVerification`, `notes`).

## Sprint Notu

Sprint 0: repo foundation ve local çalışma ortamı.
Sprint 1: 47 mekanlık araştırma datası `src/data/` JS data layer'a dönüştürüldü
(venues, zones, qrPoints, campaigns, events, adPlacements, searchIndex, trends)
+ `npm run validate:data` doğrulama scripti. `index.html` değiştirilmedi.
Sprint 2: QR routing + "Buradasın" marker (`src/app/qrRuntime.js`).
URL: `/qr/qr-demo-01..10` veya `/?qr=...`; geçersiz QR -> qr-demo-01.
index.html'e yalnızca `__ALGE3D` köprüsü + module script etiketi eklendi.
