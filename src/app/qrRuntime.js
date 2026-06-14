// ALGE QR runtime — Sprint 2 (görünür QR UI kaldırıldı; route + initial state korundu)
// URL'den QR ID okur, data layer'dan aktif QR/zone'u bulur, durumu yayınlar ve
// mobil turun başlangıcını QR konumuna hizalar.
// Görünür QR UI (konum pill'i / QR floating buton / demo paneli / "Buradasın" noktası) ÇIKARILDI.
import { qrPoints, zones, venues } from "../data/index.js";
import { xToWorldX } from "./mapAnchors.js";

/* ---- QR parse (route + ?qr= parametresi korunur) ---- */
function getQrIdFromUrl() {
  const url = new URL(window.location.href);

  const queryQr = url.searchParams.get("qr");
  if (queryQr) return queryQr;

  const parts = url.pathname.split("/").filter(Boolean);
  const qrIndex = parts.indexOf("qr");
  if (qrIndex !== -1 && parts[qrIndex + 1]) return parts[qrIndex + 1];

  return "qr-demo-01";
}

const requestedQrId = getQrIdFromUrl();
const activeQrPoint =
  qrPoints.find((qr) => qr.id === requestedQrId) ||
  qrPoints.find((qr) => qr.id === "qr-demo-01");
const activeZone = zones.find((zone) => zone.id === activeQrPoint.zoneId);

/* initial state + route durumu (UI yok ama veri/olay korunur) */
window.ALGE_DATA = { qrPoints, zones, venues };
window.ALGE_ACTIVE_QR = activeQrPoint;
window.ALGE_ACTIVE_ZONE = activeZone;
window.dispatchEvent(new CustomEvent("alge:qr-ready", { detail: { activeQrPoint, activeZone } }));

/* mobil turun başlangıcını QR konumuna hizala (köprü varsa) — görsel marker değil, kamera fazı */
(function alignTour() {
  const g = window.__ALGE3D;
  if (g && g.setMobileTourNearX) {
    g.setMobileTourNearX(xToWorldX(activeQrPoint.mapPosition.x));
  } else {
    requestAnimationFrame(alignTour); // köprü henüz kurulmadıysa bekle
  }
})();
