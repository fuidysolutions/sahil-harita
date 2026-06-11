// Genel arama trendleri — bölgesel değildir (ürün kararı).
// İlk üçü sponsorlu trend (adPlacements.search-trend ile uyumlu).
export const trendItems = [
  {
    id: "trend-mado",
    title: "Mado",
    subtitle: "Dondurma, tatlı ve kahvaltı",
    venueId: "mado",
    label: "Trend",
    priority: 100,
    actionType: "openVenue",
    actionTarget: "mado",
    isSponsored: true
  },
  {
    id: "trend-tezgah-burger",
    title: "Tezgah Burger",
    subtitle: "Burger ve hızlı yemek",
    venueId: "tezgah-burger",
    label: "Popüler",
    priority: 90,
    actionType: "openVenue",
    actionTarget: "tezgah-burger",
    isSponsored: true
  },
  {
    id: "trend-shakespeare",
    title: "Shakespeare",
    subtitle: "Kahvaltı ve bistro",
    venueId: "shakespeare",
    label: "Trend",
    priority: 80,
    actionType: "openVenue",
    actionTarget: "shakespeare",
    isSponsored: true
  },
  {
    id: "trend-kfc",
    title: "KFC",
    subtitle: "Kova menü ve çıtır tavuk",
    venueId: "kfc",
    label: "Popüler",
    priority: 70,
    actionType: "openVenue",
    actionTarget: "kfc",
    isSponsored: false
  },
  {
    id: "trend-green-salads",
    title: "Green Salads",
    subtitle: "Salata ve sağlıklı menü",
    venueId: "green-salads",
    label: "Yükselen",
    priority: 60,
    actionType: "openVenue",
    actionTarget: "green-salads",
    isSponsored: false
  }
];
