// Reklam yerleşim tanımları — Sprint 1 minimum seti.
// Entegrasyon sonraki sprintlerde; burada yalnızca veri modeli kurulur.
export const adPlacements = [
  {
    id: "opening-popup",
    slot: "opening-popup",
    placementType: "opening-popup",
    isActive: true,
    priority: 100,
    title: "Bugünün Fırsatı",
    subtitle: "Mado'da dondurma molası",
    venueId: "mado",
    campaignId: "camp-mado-serpme",
    ctaLabel: "Fırsatı Gör",
    actionType: "openVenue",
    actionTarget: "mado",
    isDemo: true
  },
  {
    id: "search-trend",
    slot: "search-trend",
    placementType: "search-trend",
    isActive: true,
    priority: 90,
    title: "Trend Aramalar",
    subtitle: "Sponsorlu trend listesi",
    sponsoredVenueIds: ["mado", "tezgah-burger", "shakespeare"],
    actionType: "openVenue",
    isDemo: true
  },
  {
    id: "search-sponsored-result",
    slot: "search-sponsored-result",
    placementType: "search-sponsored-result",
    isActive: true,
    priority: 80,
    title: "Sponsorlu Sonuç",
    subtitle: "Eşleşen aramalarda sponsorlu mekan üstte gösterilir",
    rules: [
      { keyword: "burger", venueId: "tezgah-burger" },
      { keyword: "dondurma", venueId: "mado" },
      { keyword: "kahvaltı", venueId: "shakespeare" }
    ],
    actionType: "openVenue",
    isDemo: true
  },
  {
    id: "campaign-carousel",
    slot: "campaign-carousel",
    placementType: "campaign-carousel",
    isActive: true,
    priority: 70,
    title: "Öne Çıkan Kampanyalar",
    subtitle: "Ana ekran kampanya karuseli",
    campaignIds: [
      "camp-mado-serpme",
      "camp-tezgah-burger-menu",
      "camp-shakespeare-kahvalti",
      "camp-irish-pub-happy-hour",
      "camp-danilos-ogle-pizza",
      "camp-espressolab-puan",
      "camp-maydonoz-durum-ayran",
      "camp-watsons-gunes",
      "camp-decathlon-sezon",
      "camp-starbucks-rewards",
      "camp-green-salads-menu",
      "camp-kfc-kova"
    ],
    actionType: "openCampaign",
    isDemo: true
  },
  {
    id: "category-sponsored-card",
    slot: "category-sponsored-card",
    placementType: "category-sponsored-card",
    isActive: true,
    priority: 60,
    title: "Kategori Sponsoru",
    subtitle: "Kategori listelerinde sponsorlu kart",
    rules: [
      { category: "kahvaltı", venueId: "mado" },
      { category: "burger", venueId: "tezgah-burger" },
      { category: "kafe", venueId: "shakespeare" }
    ],
    actionType: "openVenue",
    isDemo: true
  },
  {
    id: "venue-detail-recommendation",
    slot: "venue-detail-recommendation",
    placementType: "venue-detail-recommendation",
    isActive: true,
    priority: 50,
    title: "Buna da Bakın",
    subtitle: "Mekan detay kartı altında öneri",
    strategy: "same-zone-different-category",
    fallbackVenueIds: ["mado", "tezgah-burger", "shakespeare"],
    actionType: "openVenue",
    isDemo: true
  }
];
