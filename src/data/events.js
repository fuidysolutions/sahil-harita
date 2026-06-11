// Demo etkinlikler — araştırmadaki deneyim keyword'lerinden üretildi
// (canlı müzik: Irish Pub, La Rocca / gece: Bragi / aile: Tavuk Dünyası, Mado / kahvaltı: Shakespeare).
// Tarih ve saatler demo amaçlıdır.
export const events = [
  {
    id: "event-irish-pub-canli-muzik",
    title: "Canlı Müzik Gecesi",
    venueId: "irish-pub",
    zoneId: "zone-01-west-start",
    dateText: "Her Cuma ve Cumartesi",
    timeText: "21:00",
    shortDescription: "Irish Pub sahnesinde canlı müzik; fıçı bira seçkisi ve pub atıştırmalıkları eşliğinde.",
    category: "canlı müzik",
    keywords: ["canlı müzik", "pub", "bira", "gece"],
    isSponsored: false,
    ctaLabel: "Mekanı Gör",
    actionType: "openVenue",
    actionTarget: "irish-pub"
  },
  {
    id: "event-bragi-sunset-dj",
    title: "Sunset DJ Set",
    venueId: "bragi",
    zoneId: "zone-01-west-start",
    dateText: "Cumartesi",
    timeText: "18:30",
    shortDescription: "Gün batımında DJ performansı; kokteyl ve gastropub menüsüyle.",
    category: "dj / sunset",
    keywords: ["dj", "sunset", "kokteyl", "gece"],
    isSponsored: false,
    ctaLabel: "Mekanı Gör",
    actionType: "openVenue",
    actionTarget: "bragi"
  },
  {
    id: "event-la-rocca-latin-gecesi",
    title: "Latin Gecesi",
    venueId: "la-rocca-cafe-bistro",
    zoneId: "zone-03-center",
    dateText: "Perşembe",
    timeText: "21:30",
    shortDescription: "La Rocca'nın bilinen Latin geceleri: canlı ritimler, kokteyl ve odun fırını pizza.",
    category: "canlı müzik",
    keywords: ["latin", "canlı müzik", "dans", "kokteyl"],
    isSponsored: false,
    ctaLabel: "Mekanı Gör",
    actionType: "openVenue",
    actionTarget: "la-rocca-cafe-bistro"
  },
  {
    id: "event-tavuk-dunyasi-aile-gunu",
    title: "Aile Günü",
    venueId: "tavuk-dunyasi",
    zoneId: "zone-03-center",
    dateText: "Pazar",
    timeText: "12:00–17:00",
    shortDescription: "Pazar öğlenleri aile masalarına özel ikramlar; çocuk dostu menü seçenekleri.",
    category: "aile",
    keywords: ["aile", "çocuk", "pazar", "öğle yemeği"],
    isSponsored: false,
    ctaLabel: "Mekanı Gör",
    actionType: "openVenue",
    actionTarget: "tavuk-dunyasi"
  },
  {
    id: "event-shakespeare-kahvalti-bulusmasi",
    title: "Hafta Sonu Kahvaltı Buluşması",
    venueId: "shakespeare",
    zoneId: "zone-05-east-end",
    dateText: "Cumartesi ve Pazar",
    timeText: "09:00–13:00",
    shortDescription: "Serpme kahvaltı sofrası deniz kenarında; 2001'den beri Antalya klasiği.",
    category: "kahvaltı",
    keywords: ["kahvaltı", "serpme kahvaltı", "hafta sonu", "bistro"],
    isSponsored: true,
    ctaLabel: "Mekanı Gör",
    actionType: "openVenue",
    actionTarget: "shakespeare"
  }
];
