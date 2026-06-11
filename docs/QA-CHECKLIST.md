# ALGE QR Demo QA Checklist

Sprint 8 QA sonuçları (preview ortamında otomatik + görsel test; işaretliler geçti).

## Runtime
- [x] QR runtime (chip, Buradasın marker, panel, tur hizalama)
- [x] Ad runtime (opening ad açılış sırası + CTA)
- [x] Venue runtime (focus, kart, detay/menü, yol tarifi)
- [x] Search runtime (trendler, arama, sonuç tıklama)
- [x] Campaign runtime (karusel, kampanya/etkinlik sheet)

## URL
- [x] /qr/qr-demo-01
- [x] /qr/qr-demo-05
- [x] /qr/qr-demo-10
- [x] /?qr=qr-demo-03
- [x] /?qr=qr-demo-99 (default QR-01'e düşer)

## Search
- [x] Mado
- [x] burger
- [x] filtre kahve
- [x] döner / doner (normalize aynı sonuç)
- [x] kozmetik
- [x] spor
- [x] kahvaltı

## Overlay / z-index
- [x] Search açılınca kampanya/etkinlik/popup/QR panel kapanır
- [x] Kampanya/etkinlik açılınca search/popup/QR panel kapanır
- [x] QR panel açılınca büyük sheet'ler + popup kapanır
- [x] Venue focus tüm sheet'leri/popup'ı kapatır, kart açılır
- [x] Katman sırası: marker 30 < chip 35 < venue marker 45 < kart 60 <
      venue sheet 65 < search 80 < kampanya 85 < QR panel 90 < popup 100 < toast 120

## Mobile
- [x] 375×812
- [x] 390×844
- [x] 430×932
- [x] Yatay scroll yok
- [x] QR panel scrollable, görseller tam
- [x] Venue card alt barı tamamen kapatmıyor
- [x] Karusel caption'ları okunuyor

## Build
- [x] npm run validate:data
- [x] npm run generate:qrs
- [x] npm run build
- [x] npm run preview

## Console
- [x] Kritik hata yok (yalnızca kasıtlı geçersiz-ID test uyarıları)
