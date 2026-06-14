// ALGE QR runtime — Sprint 2
// URL'den QR ID okur, data layer'dan aktif QR/zone'u bulur, "Buradasın" marker'ı,
// QR chip'i ve demo panelini çizer. index.html'e minimum müdahale: bu modül + __ALGE3D köprüsü.
import { qrPoints, zones, venues } from "../data/index.js";
import { showToast } from "./uiToast.js";
import { xToPresenceUV, xToWorldX } from "./mapAnchors.js";
import { createScreenAnchor } from "./markerProjector.js";

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
.alge-you-are-here{position:fixed;z-index:6;transform:translate(-50%,-11px);pointer-events:none;
  display:flex;flex-direction:column;align-items:center;gap:6px;}
/* referans (mobilekran): parlayan cyan nokta + beyaz çip */
.alge-you-are-here__dot{width:16px;height:16px;border-radius:999px;background:#27b9d6;
  border:3px solid #fff;box-shadow:0 0 0 7px rgba(53,224,242,.25);animation:algePulse 2s ease-out infinite;}
@keyframes algePulse{0%{box-shadow:0 0 0 5px rgba(53,224,242,.32)}70%{box-shadow:0 0 0 14px rgba(53,224,242,.06)}100%{box-shadow:0 0 0 5px rgba(53,224,242,.32)}}
.alge-you-are-here__label{padding:6px 12px;border-radius:999px;background:rgba(255,255,255,.96);
  color:#1d3450;font-size:11.5px;font-weight:700;white-space:nowrap;
  font-family:'Urbanist',system-ui,sans-serif;border:1px solid rgba(29,52,80,.10);
  box-shadow:0 4px 14px rgba(20,40,65,.14);}
.alge-qr-chip{position:fixed;z-index:35;top:78px;left:12px;padding:7px 13px;border-radius:999px;
  background:rgba(255,255,255,.96);color:#1d3450;font-size:11.5px;font-weight:700;
  font-family:'Urbanist',system-ui,sans-serif;border:1px solid rgba(29,52,80,.10);
  box-shadow:0 4px 14px rgba(20,40,65,.14);pointer-events:none;}
@media (min-width:769px){.alge-qr-chip{left:auto;right:12px;top:12px;}}
.alge-qr-btn{position:fixed;z-index:88;right:10px;bottom:96px;width:40px;height:40px;border-radius:999px;
  background:#13293d;color:#fff;font-size:12px;font-weight:800;font-family:system-ui,sans-serif;
  border:2px solid rgba(255,255,255,.85);box-shadow:0 2px 10px rgba(0,0,0,.3);cursor:pointer;}
@media (min-width:769px){.alge-qr-btn{bottom:16px;}}
.alge-qr-panel{position:fixed;z-index:90;right:10px;bottom:144px;width:min(86vw,300px);max-height:56vh;
  overflow-y:auto;background:rgba(255,255,255,.97);border-radius:16px;
  box-shadow:0 6px 24px rgba(0,0,0,.25);padding:10px;display:none;font-family:system-ui,sans-serif;}
@media (min-width:769px){.alge-qr-panel{bottom:64px;}}
.alge-qr-panel.on{display:block;}
.alge-qr-card{display:flex;gap:10px;align-items:center;padding:8px;border-radius:12px;margin-bottom:6px;
  border:1.5px solid rgba(19,41,61,.08);}
.alge-qr-card.active{border-color:#35e0f2;background:rgba(53,224,242,.07);}
.alge-qr-card img{width:88px;height:88px;border-radius:8px;background:#fff;flex:0 0 auto;
  image-rendering:pixelated;}
.alge-qr-card .alge-qr-card__mid{flex:1;min-width:0;}
.alge-qr-card b{display:block;font-size:12.5px;color:#13293d;}
.alge-qr-card .alge-qr-card__label{font-size:11px;color:#42566b;line-height:1.25;}
.alge-qr-card .alge-qr-card__link{font-size:9.5px;color:#8a97a5;word-break:break-all;margin-top:2px;}
.alge-qr-card .alge-qr-card__active{display:inline-block;font-size:8.5px;font-weight:800;
  padding:2px 7px;border-radius:999px;background:#35e0f2;color:#063a42;margin-left:5px;vertical-align:1px;}
.alge-qr-card__btns{display:flex;flex-direction:column;gap:5px;}
.alge-qr-card__btns button{border:0;border-radius:999px;padding:6px 10px;font-size:10.5px;font-weight:700;
  cursor:pointer;font-family:inherit;white-space:nowrap;}
.alge-qr-card__btns .alge-qr-open{background:#13293d;color:#fff;}
.alge-qr-card__btns .alge-qr-copy{background:rgba(19,41,61,.08);color:#13293d;}
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
document.body.appendChild(panel);

/* Sprint 8.6: panel içeriği (10 QR görseli dahil) LAZY — ilk açılışta değil,
   butona ilk basışta kurulur; açılışta 10 görsel isteği tasarrufu */
let panelBuilt = false;
function buildPanel() {
  if (panelBuilt) return;
  panelBuilt = true;
  panel.innerHTML = qrPoints
    .map((qr) => {
      const no = (qr.id.match(/(\d+)$/) || [])[1];
      const active = qr.id === activeQrPoint.id;
      return `
      <div class="alge-qr-card${active ? " active" : ""}" data-qr="${qr.id}">
        <img src="/qr/${qr.id}.png" alt="QR-${no}" decoding="async">
        <div class="alge-qr-card__mid">
          <b>QR-${no}${active ? '<span class="alge-qr-card__active">AKTİF</span>' : ""}</b>
          <div class="alge-qr-card__label">${qr.label}</div>
          <div class="alge-qr-card__link">/qr/${qr.id}</div>
        </div>
        <div class="alge-qr-card__btns">
          <button class="alge-qr-open" type="button">Aç</button>
          <button class="alge-qr-copy" type="button">Linki kopyala</button>
        </div>
      </div>`;
    })
    .join("");
  panel.querySelectorAll(".alge-qr-card").forEach((cardEl) => {
    const qrId = cardEl.dataset.qr;
    const fullUrl = `${window.location.origin}/qr/${qrId}`;
    cardEl.querySelector(".alge-qr-open").addEventListener("click", () => {
      window.location.href = `/qr/${qrId}`;
    });
    cardEl.querySelector(".alge-qr-copy").addEventListener("click", async (e) => {
      const btnEl = e.currentTarget;
      try {
        await navigator.clipboard.writeText(fullUrl);
        btnEl.textContent = "Kopyalandı ✓";
        showToast("Kopyalandı ✓");
      } catch {
        // clipboard yoksa güvenli fallback
        window.prompt("QR linki (kopyalamak için):", fullUrl);
        btnEl.textContent = "Linki kopyala";
        return;
      }
      setTimeout(() => { btnEl.textContent = "Linki kopyala"; }, 1500);
    });
  });
}

btn.addEventListener("click", () => {
  const willOpen = !panel.classList.contains("on");
  if (willOpen) {
    buildPanel();
    // büyük sheet'ler ve popup panelle karışmasın (Sprint 8 overlay düzeni)
    window.ALGE_SEARCH_RUNTIME?.closeSearch();
    window.ALGE_CAMPAIGN_RUNTIME?.closeCampaigns();
    window.ALGE_CAMPAIGN_RUNTIME?.closeEvents();
    if (window.__ALGE_POPUP?.isOpen()) window.__ALGE_POPUP.closeOpeningAd();
  }
  panel.classList.toggle("on");
});

/* ---- marker konumlama (Sprint 8.8 pipeline, Sprint 8.9'da projektöre taşındı) ----
   presence anchor (u,v) -> uvToWorld -> world point -> Vector3.project(camera)
   -> ekran x/y -> DOM. Anchor ASLA ekran ofsetiyle kaydırılmaz/kıskaçlanmaz;
   görüş dışına çıkarsa doğal olarak ekran dışına gider (p.z>1'de gizlenir).
   Buradasın anchor'ı = QR datasındaki presenceAnchor varsa o; yoksa
   mekan bandının bahçe/yürüyüş hattı tarafı (xToPresenceUV).
   DOM yazım disiplini (dirty-check, translate3d) markerProjector.js'te. */
const PRESENCE_WORLD_Y = 0.9;   // yürüyüş hattı zemini (bina 1.4'ünden alçak)

createScreenAnchor({
  el: marker,
  worldY: PRESENCE_WORLD_Y,
  baseTransform: "translate(-50%,-11px)",
  getUV: () => activeQrPoint.presenceAnchor || xToPresenceUV(activeQrPoint.mapPosition.x),
  fallback: () => {
    const safeLeft = 28, safeRight = window.innerWidth - 28;
    return {
      x: safeLeft + activeQrPoint.mapPosition.x * (safeRight - safeLeft),
      y: window.innerHeight * 0.42
    };
  }
});

/* mobil turun başlangıcını QR konumuna hizala (köprü varsa) */
(function alignTour() {
  const g = window.__ALGE3D;
  if (g && g.setMobileTourNearX) {
    g.setMobileTourNearX(xToWorldX(activeQrPoint.mapPosition.x));
  } else {
    requestAnimationFrame(alignTour); // köprü henüz kurulmadıysa bekle
  }
})();

