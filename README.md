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

## Canlı Demo

Demo URL: **https://sahil-harita-demo.netlify.app**

QR girişleri: `https://sahil-harita-demo.netlify.app/qr/qr-demo-01` ... `qr-demo-10`

## Deploy

Build:

```bash
npm run build
```

Netlify publish directory: `dist` (ayarlar `netlify.toml`'da; `/qr/*` SPA
yönlendirmesi `public/_redirects` ile sağlanır).

CLI ile yayın:

```bash
npx netlify deploy --prod --dir=dist
```

URL değişirse QR'ları yeni adresle yeniden üretip build + deploy tekrarlanır.

## Demo Akışı

Detaylı demo senaryosu için:

- [docs/DEMO-AKISI.md](docs/DEMO-AKISI.md)
- [docs/QA-CHECKLIST.md](docs/QA-CHECKLIST.md)

## Demo QR Kodları

10 demo QR kodu `public/qr/` altında üretilir (+ `qr-manifest.json`).

Local üretim:

```bash
npm run generate:qrs
```

Belirli demo domainiyle üretim (Netlify vb. yayın sonrası yeniden üretin):

```bash
PUBLIC_BASE_URL=https://example.com npm run generate:qrs
```

QR link formatı: `/qr/qr-demo-01` ... `/qr/qr-demo-10`
(query fallback: `/?qr=qr-demo-01`). Repodaki PNG'ler canlı adresi (sahil-harita-demo.netlify.app) encode eder;
QR demo paneli görselleri `/qr/<id>.png` yolundan okur.

## Sprint Notu

Sprint 0: repo foundation ve local çalışma ortamı.
Sprint 1: 47 mekanlık araştırma datası `src/data/` JS data layer'a dönüştürüldü
(venues, zones, qrPoints, campaigns, events, adPlacements, searchIndex, trends)
+ `npm run validate:data` doğrulama scripti. `index.html` değiştirilmedi.
Sprint 2: QR routing + "Buradasın" marker (`src/app/qrRuntime.js`).
URL: `/qr/qr-demo-01..10` veya `/?qr=...`; geçersiz QR -> qr-demo-01.
index.html'e yalnızca `__ALGE3D` köprüsü + module script etiketi eklendi.
Sprint 3: Açılış pop-up reklamı `adPlacements.js` datasına bağlandı (`src/app/adRuntime.js`).
Sıra garantisi: harita -> marker -> pop-up; rAF throttling'e karşı wall-clock fallback.
CTA `alge:ad-action` eventi yayınlar (uçuş bağı Sprint 4'te). Beam görseli korundu.
Sprint 4: Ortak venue focus / action router (`src/app/venueRuntime.js`).
`window.ALGE_VENUE_RUNTIME.focusVenueById(id)` -> harita odağı + turkuaz aktif marker
+ data-driven kart (Yol Tarifi / Detay / Menü) + `alge:venue-focused` eventi.
`alge:ad-action` (openVenue) artık gerçek focus'a bağlı. Tek seçili mekan gösterilir.
Sprint 5: Search gerçek data'ya bağlandı (`src/app/searchRuntime.js`).
Üst arama hapı + alt bar "Ara" yeni search sheet'i açar; boş query'de genel trendler
+ popüler aramalar, query'de venue/searchIndex/kampanya/etkinlik eşleşmesi
(tr normalize, kök eşleşme). Sonuç tıklaması focusVenueById'e gider.
Sprint 6: Kampanya/etkinlik yüzeyleri data'ya bağlandı (`src/app/campaignRuntime.js`).
Karusel posterleri korunarak data caption'larıyla eşlendi (tema eşlemesi görsel
tespitli); alt nav Kampanyalar/Etkinlikler gerçek sheet'leri açar; tıklamalar
venue focus'a gider; alge:campaign-action / alge:event-action eventleri.
Opening ad posteri aktif reklamın mekanına göre gömülü posterlerden seçilir.
Sprint 7: 10 demo QR PNG'si üretildi (`scripts/generate-demo-qrs.mjs`,
`npm run generate:qrs`, PUBLIC_BASE_URL ile configurable); QR demo paneli
gerçek QR görselleri + AKTİF rozeti + Aç / Linki kopyala butonlarıyla güçlendirildi.
Sprint 8: Demo polish — z-index katman düzeni (marker 30 < chip 35 < venue marker 45
< kart 60 < search 80 < kampanya 85 < QR panel 90 < popup 100 < toast 120),
overlay çakışma yönetimi tamamlandı, ortak toast (uiToast.js), vite build script'i,
docs/DEMO-AKISI.md + docs/QA-CHECKLIST.md.
