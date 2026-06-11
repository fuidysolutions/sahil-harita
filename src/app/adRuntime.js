// ALGE ad runtime — Sprint 3
// Açılış pop-up reklamını adPlacements datasına bağlar ve açılışı güvenilir hale getirir.
// Açılış sırası garantisi: harita görünür (yükleme overlay'i gizli) + Buradasın marker
// hazır -> rAF 1 kare + 1200 ms -> aç; rAF kısıtlıysa wall-clock fallback 1800 ms.
// Mevcut pop-up DOM'u/beam görseli korunur (index.html __ALGE_POPUP köprüsü).
import { adPlacements, campaigns, venues } from "../data/index.js";

const openingAd = adPlacements
  .filter((ad) => ad.placementType === "opening-popup" && ad.isActive)
  .sort((a, b) => b.priority - a.priority)[0];

window.ALGE_ACTIVE_OPENING_AD = openingAd;
window.dispatchEvent(new CustomEvent("alge:opening-ad-ready", { detail: { openingAd } }));

const campaign = openingAd ? campaigns.find((item) => item.id === openingAd.campaignId) : null;
const venue = openingAd ? venues.find((item) => item.id === openingAd.venueId) : null;

/* ---- CTA ---- */
function fireAdAction() {
  const detail = {
    placementType: openingAd.placementType,
    actionType: openingAd.actionType,
    actionTarget: openingAd.actionTarget,
    venueId: openingAd.venueId,
    campaignId: openingAd.campaignId
  };
  window.dispatchEvent(new CustomEvent("alge:ad-action", { detail }));
  console.info("[ALGE] Opening ad action", detail);
}

// popad'ın tamamına tıklama da CTA sayılır (index.html köprüsü bunu çağırır;
// köprü yoksa eski uçuş davranışı aynen sürer)
window.__ALGE_AD_CTA = () => {
  fireAdAction();
  if (window.__ALGE_POPUP) window.__ALGE_POPUP.closeOpeningAd();
};

/* ---- içerik şeridi: mevcut poster pop-up'ının altına data'dan başlık/alt başlık/CTA ---- */
const style = document.createElement("style");
style.textContent = `
#alge-ad-caption{display:flex;align-items:center;gap:10px;padding:10px 12px;
  background:rgba(255,255,255,.97);font-family:system-ui,sans-serif;}
#alge-ad-caption .alge-ad-caption__text{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;}
#alge-ad-caption strong{font-size:13px;color:#13293d;line-height:1.2;}
#alge-ad-caption span{font-size:11px;color:#42566b;line-height:1.25;}
#alge-ad-caption em{font-style:normal;font-size:10px;font-weight:700;color:#0e7a8a;}
#alge-ad-cta{flex:0 0 auto;border:0;border-radius:999px;background:#13293d;color:#fff;
  font-size:12px;font-weight:700;padding:8px 14px;cursor:pointer;font-family:inherit;}
`;
document.head.appendChild(style);

function injectCaption() {
  const popad = document.getElementById("popad");
  if (!popad || !openingAd || document.getElementById("alge-ad-caption")) return;
  const cap = document.createElement("div");
  cap.id = "alge-ad-caption";
  const extraLabel = venue ? venue.name : campaign ? campaign.shortLabel : "";
  cap.innerHTML =
    `<div class="alge-ad-caption__text"><strong></strong><span></span><em></em></div>` +
    `<button id="alge-ad-cta" type="button"></button>`;
  cap.querySelector("strong").textContent = openingAd.title;
  cap.querySelector("span").textContent = openingAd.subtitle;
  cap.querySelector("em").textContent = extraLabel;
  cap.querySelector("#alge-ad-cta").textContent = openingAd.ctaLabel;
  popad.appendChild(cap);
  cap.querySelector("#alge-ad-cta").addEventListener("click", (e) => {
    e.stopPropagation();
    window.__ALGE_AD_CTA();
  });
}
injectCaption(); // erken enjekte: beam yolu önce açarsa da içerik data'dan gelmiş olur

/* ---- güvenilir açılış zamanlaması ---- */
let hasShownOpeningAd = false;
let scheduled = false;

function mapVisible() {
  const load = document.getElementById("load");
  return !load || load.style.display === "none";
}
function markerReady() {
  return !!document.querySelector(".alge-you-are-here");
}

function openOpeningAdNow() {
  if (hasShownOpeningAd || !openingAd || !window.__ALGE_POPUP) return;
  hasShownOpeningAd = true; // çift açılış koruması (rAF + fallback aynı anda tetiklenemez)
  injectCaption();
  window.__ALGE_POPUP.openOpeningAd();
}

function scheduleOpeningAd() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    window.setTimeout(openOpeningAdNow, 1200);
  });
  // rAF throttling fallback: kareler akmasa da pop-up wall-clock ile açılır
  window.setTimeout(openOpeningAdNow, 1800);
}

/* Kapı: marker hazır (qrRuntime bu modülden önce yüklenir, senkron kurar) +
   harita görünür. Harita görünürlüğü polling ile DEĞİL MutationObserver ile izlenir:
   gizli/throttled sayfalarda zamanlayıcı zinciri (nesting>5) dakikalarca ertelenebilir;
   observer + tek setTimeout (nesting=1) bu riske girmez. */
function whenMapVisible(cb) {
  if (mapVisible()) { cb(); return; }
  const load = document.getElementById("load");
  if (!load) { cb(); return; }
  const mo = new MutationObserver(() => {
    if (mapVisible()) { mo.disconnect(); cb(); }
  });
  mo.observe(load, { attributes: true, attributeFilter: ["style"] });
}

function tryGate() {
  if (scheduled) return true;
  if (markerReady() && window.__ALGE_POPUP) {
    whenMapVisible(scheduleOpeningAd);
    return true;
  }
  return false;
}

window.addEventListener("alge:qr-ready", tryGate);
tryGate();
