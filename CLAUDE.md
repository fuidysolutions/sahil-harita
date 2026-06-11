# Sahil Yaşam Merkezi — İnteraktif 3D Wayfinding Haritası

Bu dosya, projenin Claude.ai sohbetinde geliştirilen halinin tam devir belgesidir.
Claude Code bu dosyayı okuyarak kaldığı yerden devam etmelidir.

## Proje nedir
Antalya'da ~1 km'lik sahil AVM/resort şeridi (≈18 kafe-restoran) için QR ile telefondan
açılan interaktif 3D harita. Kullanıcı mekan arar, kamera mekana uçar, detay kartı açılır.
Öncelik sırası: 1) görsel vau, 2) bulunabilirlik/arama, 3) mobil performans, 4) kolay güncelleme.

## Çalışma kuralları (kullanıcı tercihleri — UYULACAK)
- Türkçe konuş. Soru sormayı en aza indir; eldeki kanıttan karar ver ve uygula.
- İstenmeyen özellik ekleme, istenmeyen değişiklik yapma.
- Kod yazmadan önce kısa plan göster; büyük işlerde APPROVED onayı bekle.
- Hız değil doğruluk: yavaş ve hassas tercih edilir. Yerleşimler matematikle hesaplanır, göz kararı yapılmaz.
- Lüks/altın efekt dili YASAK (turkuaz #35e0f2 vurgu rengi onaylı).

## Dosyalar
- `index.html` — ANA DOSYA (eski adı kabartma-3d.html). Tek dosya: Three.js 0.160 bundle,
  doku, kabartma, 14 kampanya posteri, pop-up afişi base64 gömülü (~4 MB). Netlify'a zip ile atılıyor.
- `kabartma-mde.html` — DENEME: yapay zekâ derinlik (MDE) kabartması + HD (5120px) doku, salt arka plan,
  serbest döndürme açık. Kullanıcı değerlendiriyor; onaylanırsa ana dosyaya işlenecek.
- `kalibrasyon.html` / `kalibrasyon-mobil.html` — kamera ayar araçları (slider + değer kopyalama).
  Kullanıcı değerleri buradan ayarlayıp metin olarak iletir; koda elle işlenir. Bu iş akışı oturdu, korunsun.
- `tex_full.jpg` — mevcut doku kaynağı 2600×1534 (üstte 234 satır aynalı orman uzatması + koyu yeşile erime).
  Orijinal bölge = alt 1300 satır. `derinlik-girdi.jpg` = o bölgenin dışa verilmiş hali (MDE/upscale girdisi).
- `tex_hd.jpg` — FSRCNN x2 + unsharp ile 5120px HD doku (uzatma dahil). kabartma-mde.html'de gömülü.
- `hm_full_ext.png` — mevcut üretim kabartması 1600×944 (sınıflandırma yöntemi).
- `hm_mde_ext.png` — MDE tabanlı yeni kabartma (deneme dosyasında gömülü).
- `buildings.json` — bina kutu denemesinden kalan bina sınır kutuları (uv, 17 adet). Kutu yaklaşımı REDDEDİLDİ
  ("zeminden kalkmış gibi"), ama kutular bina maskesi/etiketleme için ileride işe yarayabilir.

## 3D sahne mimarisi (index.html)
- PlaneGeometry PW=120, PD=120*RATIO, RATIO=0.5899, SX=700 segment, rotation.x=-π/2.
- uvToWorld(u,v): x=(u-0.5)*PW, y=0.55, z=(v-0.5)*PD. (v görüntünün ÜSTÜNDEN ölçülür.)
- Kabartma: hm piksel = yükseklik/2, applyHeight ölçeği 2.0. Mevcut değerler: bina 0.50, kabin 0.40,
  orman ağacı 0.70, bahçe bandı ağaçları ×0.80, tepe rampası maks 1.0 (t^1.25 + gauss38 gürültü ×0.12).
- Kenar erime alfa haritası: fx=w*0.14, fyTop=h*0.10, fyBot=h*0.30. Sis Fog(0xe9eff5,95,290).
- Three.js modül DEĞİL: esbuild ile IIFE bundle gömülü (window.__THREE__). Sebep: telefonda content://
  ile açılınca CDN modülleri engelleniyordu. Bu yapı bozulMAsın; tüm dosyalar internetsiz çalışır.
- Hata teşhis bandı: window error → üstte kırmızı şerit (mobil hata ayıklamada hayat kurtardı, kalsın).

## Kamera kalibrasyonları (kullanıcının ayarladığı KESİN değerler)
- Masaüstü: hedef(-13.5,1,10), kamera(-13.5,41.2,32.3) [mesafe 46, yükseklik 61°, azimut 0°],
  yay ±14°, süre 26 sn. Sarkaç salınımı; kullanıcı dokununca 4 sn durur, idleAnchor() ile sıçramasız devam.
- Mobil (≤768px): hedef X, Xa=-20 ↔ Xb=38.5 arasında süzülür (sin fazı), Z=3.5, mesafe 61.5,
  yükseklik 57°, azimut 52°, yay ±14.5° aynı fazda, tam tur 44 sn. Dönüşte 1.2 sn harmanla yola girilir.
- controls.enableRotate=false (üründe kullanıcı çeviremez; zoom/pan açık). Deneme dosyalarında açık olabilir.

## Arayüz
- Masaüstü: sol 450px cam panel (petrol-lacivert): başlık, arama, 3 sekme (amber #d4af6d seçili),
  kayan liste (3 zengin mekan satırı + küçük satırlar), altta sabit mini detay kartı + 3 hızlı aksiyon.
  Panel açılır-kapanır, SAYFA KAPALI AÇILIR. Kampanya şeridi: 14 poster, glassmorphism, marquee 70 sn.
- Mobil: APP görünümü (açık tema, lacivert metin #13293d, turuncu vurgu #d2691e): üst arama hapı,
  3D'ye izdüşümlü canlı pin'ler (kahve/burger/plaj), beyaz detay kartı, kategori çipleri,
  "Öne Çıkan Kampanyalar" karuseli (dots), 5 sekmeli alt bar (Keşfet/Kampanyalar/Etkinlikler/Harita/Ara),
  alttan açılan sheet sayfaları. Harita sekmesi = salt sahne.
- Pop-up reklam: sahne +1.5 sn → Marina Burger üzerinde kısa TURKUAZ parlama (0.4 sn büyür, 0.7'de söner)
  → afiş o noktadan ekrana uçar. Afişe tık = kapan + mekana uçuş. Işın sütunu İSTENMEDİ (kaldırıldı).
- Uçuş: bezier, 2.2 sn, FOV 46→40, sonda blur+kart (BLUR_START=0.8, CARD_AT=0.9, BLUR_MAX=16).

## Veri
VENUES[3]: Shakespeare Coffee & Bistro (u .930 v .428), Marina Burger House (.500/.424),
Blue Coast Beach (.180/.428). + SMALL_VENUES, EVENTS(3), CAMPAIGNS(4) dizileri. Hedef: 18 mekana çıkmak.
Tüm liste/sheet içerikleri bu dizilerden render edilir.

## Kabartma üretim boru hattı (Python/scipy, hw=1600 — DOĞRULANMIŞ)
1) bina: (v>0.66 & s<0.24 & b>r*0.92) closing3+opening2 → band tespiti (0.27–0.37) →
   band içi gevşek geçiş (v>0.52,s<0.34) → alan>800, doluluk>0.20. Kum sıcak tonlu (b<r*0.88) ayrımı kritik.
2) kabinler: band altı +%6, alan 120–3000, doluluk>0.45, en-boy<2.2 → 6 kabin.
3) ağaçlar: yeşillik maskesi → silindir profil (dist/2.5, üs 0.45, gauss 0.6).
4) tepe: band üstü rampa + gürültü. 5) üst 144 satır aynalanır (uzatma).
Her üretimde maske GÖRSEL doğrulanır. Görsel değişirse hm aynı hatla yeniden üretilir.

## MDE (yeni nesil kabartma) boru hattı — DENEMEDE
Kaynak: Depth Anything V2 HuggingFace demosu (kullanıcı renkli çıktı verdi; Spectral_r LUT'tan geri çözüldü).
İşlem: zemin-pikselli normalize konvolüsyonla (sigma 60) sahte eğim çıkarılır → deniz renk maskesiyle 0 →
%99.5 dilim 0.70'e ölçeklenir → bina piksellerine 0.45 taban → tepe rampası eklenir → ayna uzatma.
İYİLEŞTİRME FIRSATLARI (Claude Code'da): gri tonlu/16-bit ham derinlik al (renk çözme kaybı biter);
Depth Anything V2'yi lokal çalıştır (Small=Apache-2.0 ticari serbest; Base/Large CC-BY-NC — ticari üründe
Small veya MiDaS/MIT kullan); Real-ESRGAN x2/x4 ile dokuyu lokalde daha kaliteli büyüt.

## Bilinen sınırlar (değişmez fizik)
- Kaynak render gerçek 2172px; aşırı yakınlaşmada bulanıklık kaçınılmaz → ÜRÜNE ZOOM SINIRI konulacak
  (controls.minDistance ≈ 16-18; henüz eklenmedi, yapılacaklarda).
- Tepeden görselde dik yüzey bilgisi yok → bina cepheleri her yöntemde yayılır. Kutu binalar denendi,
  kullanıcı beğenmedi; çözüm değil, kabullenilmiş sınır + zoom sınırı.

## Yol haritası / açık işler
1. MDE kabartma + HD doku kullanıcı onayı → ana dosyaya işle (+ zoom sınırı birlikte).
2. Kalan ~15 mekanın veri girişi (VENUES genişlet; isaretleme-araci.html eski sohbetlerde mevcut —
   tıklama bölgesi çizip JSON veren araç).
3. Dokuları base64 yerine ayrı dosyalara çıkar (Netlify'da klasör deploy) — yükleme hızlanır.
4. Marina ve Blue Coast'a menü içeriği (menu:[] alanı boş).
5. QR kod üretimi (Netlify adresine).
- Yayın akışı: dosya → zip (index.html adıyla) → netlify.com/drop. iOS yerel dosya açmaz, link şart.
