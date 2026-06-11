// 10 demo QR noktası — Sprint 1 listesi.
// mapPosition.x = yakın mekanların mapFocusPoint.x ortalaması (x = (order-1)/46).
// cameraPose şimdilik zone varsayılan pozuyla aynı konvansiyonu kullanır;
// gerçek harita üzerinde sonraki sprintlerde manuel ayarlanacak.
export const qrPoints = [
  {
    id: "qr-demo-01",
    code: "ALGE-QR-01",
    label: "Mado Önü",
    zoneId: "zone-01-west-start",
    mapPosition: { x: 0.0217, y: 0.5 },
    cameraPose: { targetX: 0.0217, targetY: 0.5, zoom: 1.35, rotation: 0, tilt: 42 },
    nearbyVenueIds: ["mado", "irish-pub", "the-beaver-cafe"],
    isDemo: true
  },
  {
    id: "qr-demo-02",
    code: "ALGE-QR-02",
    label: "Irish Pub / Beaver Çevresi",
    zoneId: "zone-01-west-start",
    mapPosition: { x: 0.0543, y: 0.5 },
    cameraPose: { targetX: 0.0543, targetY: 0.5, zoom: 1.35, rotation: 0, tilt: 42 },
    nearbyVenueIds: ["irish-pub", "the-beaver-cafe", "big-bubble-tea", "magnolia-shop-coffee"],
    isDemo: true
  },
  {
    id: "qr-demo-03",
    code: "ALGE-QR-03",
    label: "Pizza / Kahve Batı",
    zoneId: "zone-01-west-start",
    mapPosition: { x: 0.1413, y: 0.5 },
    cameraPose: { targetX: 0.1413, targetY: 0.5, zoom: 1.35, rotation: 0, tilt: 42 },
    nearbyVenueIds: ["danilos-pizza", "dospresso", "roberts-coffee", "bragi"],
    isDemo: true
  },
  {
    id: "qr-demo-04",
    code: "ALGE-QR-04",
    label: "Burger / Kahve Geçişi",
    zoneId: "zone-02-west-mid",
    mapPosition: { x: 0.2391, y: 0.5 },
    cameraPose: { targetX: 0.2391, targetY: 0.5, zoom: 1.35, rotation: 0, tilt: 42 },
    nearbyVenueIds: ["tezgah-burger", "colombia-coffee", "yemen-kahvesi", "bahane-lounge", "espressolab"],
    isDemo: true
  },
  {
    id: "qr-demo-05",
    code: "ALGE-QR-05",
    label: "Merkez Restoranlar",
    zoneId: "zone-02-west-mid",
    mapPosition: { x: 0.3533, y: 0.5 },
    cameraPose: { targetX: 0.3533, targetY: 0.5, zoom: 1.35, rotation: 0, tilt: 42 },
    nearbyVenueIds: ["maydonoz-doner", "doyuyo", "hd-iskender", "tavuk-dunyasi"],
    isDemo: true
  },
  {
    id: "qr-demo-06",
    code: "ALGE-QR-06",
    label: "Market / Aile Restoranları",
    zoneId: "zone-03-center",
    mapPosition: { x: 0.3968, y: 0.5 },
    cameraPose: { targetX: 0.3968, targetY: 0.5, zoom: 1.35, rotation: 0, tilt: 42 },
    nearbyVenueIds: ["hamlet-market-01", "hd-iskender", "tavuk-dunyasi", "pidem"],
    isDemo: true
  },
  {
    id: "qr-demo-07",
    code: "ALGE-QR-07",
    label: "Mağaza / Kahve Alanı",
    zoneId: "zone-03-center",
    mapPosition: { x: 0.487, y: 0.5 },
    cameraPose: { targetX: 0.487, targetY: 0.5, zoom: 1.35, rotation: 0, tilt: 42 },
    nearbyVenueIds: ["galata-cikolatacisi", "watsons", "decathlon", "starbucks", "gloria-jeans"],
    isDemo: true
  },
  {
    id: "qr-demo-08",
    code: "ALGE-QR-08",
    label: "Doğu Kafe / Restoran",
    zoneId: "zone-04-east-mid",
    mapPosition: { x: 0.6196, y: 0.5 },
    cameraPose: { targetX: 0.6196, targetY: 0.5, zoom: 1.35, rotation: 0, tilt: 42 },
    nearbyVenueIds: ["green-salads", "la-rocca-cafe-bistro", "coffees", "mackbear", "yotto", "ozsut"],
    isDemo: true
  },
  {
    id: "qr-demo-09",
    code: "ALGE-QR-09",
    label: "Fast Food Hattı",
    zoneId: "zone-05-east-end",
    mapPosition: { x: 0.8478, y: 0.5 },
    cameraPose: { targetX: 0.8478, targetY: 0.5, zoom: 1.35, rotation: 0, tilt: 42 },
    nearbyVenueIds: ["mcdonalds", "durumle", "burger-king", "subway", "arbys", "popeyes", "kfc"],
    isDemo: true
  },
  {
    id: "qr-demo-10",
    code: "ALGE-QR-10",
    label: "Shakespeare Çevresi",
    zoneId: "zone-05-east-end",
    mapPosition: { x: 0.9674, y: 0.5 },
    cameraPose: { targetX: 0.9674, targetY: 0.5, zoom: 1.35, rotation: 0, tilt: 42 },
    nearbyVenueIds: ["hmbrgr", "hamlet-market-02", "paninaro", "shakespeare"],
    isDemo: true
  }
];
