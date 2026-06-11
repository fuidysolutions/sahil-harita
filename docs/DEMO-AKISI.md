# ALGE QR Demo Akışı

Müşteri gösteriminde önerilen sıra. Local: `npm run dev` → `http://localhost:5173`.

## 1. QR ile Açılış
`/qr/qr-demo-01`

Beklenen:
- Harita açılır
- Kırmızı **Buradasın** marker'ı görünür (QR chip: "QR-01 · Mado Önü")
- ~2 sn sonra opening ad açılır ("Bugünün Fırsatı / Mado'da dondurma molası")

## 2. Reklamdan Mekana Geçiş
Opening ad **Fırsatı Gör** CTA → Mado kartı açılır, harita batı uca odaklanır,
turkuaz Mado marker'ı görünür.

## 3. Search Demo
Üst arama hapı veya alt bar **Ara**. Boş query'de trendler + popüler aramalar.
Önerilen aramalar:
- `burger` → Tezgah Burger, Öküz, HMBRGR, Burger King…
- `filtre kahve` → Espressolab, Colombia, Coffee's…
- `kozmetik` → Watsons
- `spor` → Decathlon
- `kahvaltı` → Shakespeare, Mado, Özsüt…
- `doner` (Türkçe karaktersiz de çalışır)

Sonuçta **Haritada Göster** → kart + odak; **Menü** → menü sheet'i.

## 4. Kampanya Demo
Alt karusel kartına tıkla (caption'lar data'dan) veya alt bar **Kampanyalar** →
12 kampanya (Sponsorlu bölümü üstte) → kampanya tıkla → mekan odağı.

## 5. Etkinlik Demo
Alt bar **Etkinlikler** → 5 etkinlik → "Hafta Sonu Kahvaltı Buluşması"
(Shakespeare) → mekan odağı.

## 6. QR Nokta Değişimi
Sağ alttaki **QR** butonu → panel → QR-10 "Shakespeare Çevresi" → **Aç** →
`/qr/qr-demo-10` açılır, chip + Buradasın marker doğu uca geçer, panelde
QR-10 **AKTİF** işaretlenir. **Linki kopyala** ile link panoya alınır.

## 7. Yol Tarifi
Venue card → **Yol Tarifi** → Google Maps yeni sekmede mekan araması
(`directions.query`) ile açılır.

Not: Telefonda test için QR PNG'leri `public/qr/` altında
(`PUBLIC_BASE_URL=<canlı-adres> npm run generate:qrs` ile yeniden üretin).
