// Sprint 1 zone planı — 47 mekan, 5 zone, soldan sağa (Mado → Shakespeare)
export const zones = [
  {
    id: "zone-01-west-start",
    name: "Batı Başlangıç",
    order: 1,
    orderRange: [1, 9],
    mapArea: { startX: 0.00, endX: 0.19, centerX: 0.095, centerY: 0.5 },
    defaultCameraPose: { targetX: 0.095, targetY: 0.5, zoom: 1.35, rotation: 0, tilt: 42 }
  },
  {
    id: "zone-02-west-mid",
    name: "Batı Orta",
    order: 2,
    orderRange: [10, 18],
    mapArea: { startX: 0.20, endX: 0.39, centerX: 0.295, centerY: 0.5 },
    defaultCameraPose: { targetX: 0.295, targetY: 0.5, zoom: 1.35, rotation: 0, tilt: 42 }
  },
  {
    id: "zone-03-center",
    name: "Merkez",
    order: 3,
    orderRange: [19, 28],
    mapArea: { startX: 0.40, endX: 0.59, centerX: 0.495, centerY: 0.5 },
    defaultCameraPose: { targetX: 0.495, targetY: 0.5, zoom: 1.35, rotation: 0, tilt: 42 }
  },
  {
    id: "zone-04-east-mid",
    name: "Doğu Orta",
    order: 4,
    orderRange: [29, 38],
    mapArea: { startX: 0.60, endX: 0.79, centerX: 0.695, centerY: 0.5 },
    defaultCameraPose: { targetX: 0.695, targetY: 0.5, zoom: 1.35, rotation: 0, tilt: 42 }
  },
  {
    id: "zone-05-east-end",
    name: "Doğu Bitiş",
    order: 5,
    orderRange: [39, 47],
    mapArea: { startX: 0.80, endX: 1.00, centerX: 0.90, centerY: 0.5 },
    defaultCameraPose: { targetX: 0.90, targetY: 0.5, zoom: 1.35, rotation: 0, tilt: 42 }
  }
];
