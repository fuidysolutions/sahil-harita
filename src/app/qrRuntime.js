// ALGE QR runtime — Sprint 2
// URL'den QR ID okur, data layer'dan aktif QR/zone'u bulur, "Buradasın" marker'ı,
// QR chip'i ve demo panelini çizer. index.html'e minimum müdahale: bu modül + __ALGE3D köprüsü.
import { qrPoints, zones, venues } from "../data/index.js";

/* ---- QR parse ---- */
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

window.ALGE_DATA = { qrPoints, zones, venues };
window.ALGE_ACTIVE_QR = activeQrPoint;
window.ALGE_ACTIVE_ZONE = activeZone;
window.dispatchEvent(new CustomEvent("alge:qr-ready", { detail: { activeQrPoint, activeZone } }));

/* ---- stiller (index.html'e CSS eklememek için buradan enjekte) ---- */
const style = document.createElement("style");
style.textContent = `
.alge-you-are-here{position:fixed;z-index:25;transform:translate(-50%,-50%);pointer-events:none;
  display:flex;flex-direction:column;align-items:center;}
.alge-you-are-here__dot{width:14px;height:14px;border-radius:999px;background:#ef233c;
  border:2px solid #fff;box-shadow:0 0 0 8px rgba(239,35,60,.18);animation:algePulse 1.8s ease-out infinite;}
@keyframes algePulse{0%{box-shadow:0 0 0 4px rgba(239,35,60,.30)}70%{box-shadow:0 0 0 12px rgba(239,35,60,.05)}100%{box-shadow:0 0 0 4px rgba(239,35,60,.30)}}
.alge-you-are-here__label{margin-top:6px;padding:4px 8px;border-radius:999px;background:rgba(255,255,255,.92);
  color:#17202a;font-size:11px;font-weight:700;white-space:nowrap;font-family:system-ui,sans-serif;}
.alge-qr-chip{position:fixed;z-index:26;top:78px;left:12px;padding:5px 10px;border-radius:999px;
  background:rgba(255,255,255,.92);color:#13293d;font-size:11px;font-weight:700;
  font-family:system-ui,sans-serif;box-shadow:0 2px 8px rgba(0,0,0,.15);pointer-events:none;}
@media (min-width:769px){.alge-qr-chip{left:auto;right:12px;top:12px;}}
.alge-qr-btn{position:fixed;z-index:27;right:10px;bottom:96px;width:40px;height:40px;border-radius:999px;
  background:#13293d;color:#fff;font-size:12px;font-weight:800;font-family:system-ui,sans-serif;
  border:2px solid rgba(255,255,255,.85);box-shadow:0 2px 10px rgba(0,0,0,.3);cursor:pointer;}
@media (min-width:769px){.alge-qr-btn{bottom:16px;}}
.alge-qr-panel{position:fixed;z-index:28;right:10px;bottom:144px;max-height:50vh;overflow-y:auto;
  background:rgba(255,255,255,.96);border-radius:14px;box-shadow:0 6px 24px rgba(0,0,0,.25);
  padding:8px;display:none;font-family:system-ui,sans-serif;}
@media (min-width:769px){.alge-qr-panel{bottom:64px;}}
.alge-qr-panel.on{display:block;}
.alge-qr-panel a{display:block;padding:7px 10px;border-radius:8px;color:#13293d;
  text-decoration:none;font-size:12px;font-weight:600;white-space:nowrap;}
.alge-qr-panel a.active{background:#13293d;color:#fff;}
.alge-qr-panel a:not(.active):hover{background:rgba(19,41,61,.08);}
`;
document.head.appendChild(style);

/* ---- Buradasın marker ---- */
const marker = document.createElement("div");
marker.className = "alge-you-are-here";
marker.innerHTML = '<div class="alge-you-are-here__dot"></div><div class="alge-you-are-here__label">Buradasın</div>';
document.body.appendChild(marker);

/* ---- QR chip ---- */
const qrNo = (activeQrPoint.id.match(/(\d+)$/) || [])[1] || "01";
const chip = document.createElement("div");
chip.className = "alge-qr-chip";
chip.textContent = `QR-${qrNo} · ${activeQrPoint.label}`;
document.body.appendChild(chip);

/* ---- QR demo paneli ---- */
const btn = document.createElement("button");
btn.className = "alge-qr-btn";
btn.textContent = "QR";
btn.setAttribute("aria-label", "QR test paneli");
document.body.appendChild(btn);

const panel = document.createElement("div");
panel.className = "alge-qr-panel";
panel.innerHTML = qrPoints
  .map((qr) => {
    const no = (qr.id.match(/(\d+)$/) || [])[1];
    const cls = qr.id === activeQrPoint.id ? ' class="active"' : "";
    return `<a${cls} href="/qr/${qr.id}">QR-${no} — ${qr.label}</a>`;
  })
  .join("");
document.body.appendChild(panel);
btn.addEventListener("click", () => panel.classList.toggle("on"));

/* ---- marker konumlama ----
   Tercih: mevcut 3D izdüşüm (window.__ALGE3D köprüsü: camera + uvToWorld).
   QR mapPosition.x (0..1, şerit boyu) -> doku uv eşlemesi.
   Anchors, hizalanmış kamerada bandın ekranda kalan aralığından ÖLÇÜLDÜ
   (375px portre, izdüşüm taraması): batı worldX=-20 -> u=0.3333, doğu worldX=20 -> u=0.6667.
   Böylece her QR noktasında hizalanan kamera marker'ı görür
   (QR-01 sol başlangıç, QR-10 sağ bitiş hissi). Gerçek mekan koordinatları sonraki
   sprintte işaretleme aracıyla girilecek; bu, sprint tanımındaki "ilk demo eşlemesi"dir.
   v=0.428 mekan bandı hattı. */
const U_WEST = 0.3333, U_EAST = 0.6667, V_BAND = 0.428, MARKER_WORLD_Y = 1.4;

function normalizedToScreen(position) {
  const safeLeft = 28;
  const safeRight = window.innerWidth - 28;
  const safeTop = 120;
  const safeBottom = window.innerHeight - 190;
  return {
    x: safeLeft + position.x * (safeRight - safeLeft),
    y: safeTop + position.y * (safeBottom - safeTop)
  };
}

function updateYouAreHereMarkerPosition() {
  const g = window.__ALGE3D;
  if (g && g.camera && g.uvToWorld) {
    const u = U_WEST + activeQrPoint.mapPosition.x * (U_EAST - U_WEST);
    const p = g.uvToWorld(u, V_BAND);
    p.y = MARKER_WORLD_Y;
    p.project(g.camera);
    if (p.z > 1) { marker.style.display = "none"; return; }
    marker.style.display = "flex";
    // baseline'daki openPopAd kalıbı: ekran dışına taşarsa güvenli alana kıskaçla
    const sx = (p.x * 0.5 + 0.5) * window.innerWidth;
    const sy = (-p.y * 0.5 + 0.5) * window.innerHeight;
    // alt sınır: mobil UI yığınının (kart+çipler+karusel) üstünde kalsın
    const bottomSafe = Math.min(window.innerHeight - 190, window.innerHeight * 0.55);
    marker.style.left = Math.max(44, Math.min(window.innerWidth - 44, sx)).toFixed(1) + "px";
    marker.style.top = Math.max(120, Math.min(bottomSafe, sy)).toFixed(1) + "px";
  } else {
    // fallback: 3D köprüsü yoksa normalize konumu viewport'a eşle
    const pt = normalizedToScreen(activeQrPoint.mapPosition);
    marker.style.display = "flex";
    marker.style.left = pt.x + "px";
    marker.style.top = pt.y + "px";
  }
}

window.addEventListener("resize", updateYouAreHereMarkerPosition);

/* mobil turun başlangıcını QR konumuna hizala (köprü varsa; PW=120 sahne genişliği) */
(function alignTour() {
  const g = window.__ALGE3D;
  if (g && g.setMobileTourNearX) {
    const u = U_WEST + activeQrPoint.mapPosition.x * (U_EAST - U_WEST);
    g.setMobileTourNearX((u - 0.5) * 120);
  } else {
    requestAnimationFrame(alignTour); // köprü henüz kurulmadıysa bekle
  }
})();

(function markerLoop() {
  updateYouAreHereMarkerPosition();
  requestAnimationFrame(markerLoop);
})();
