// ALGE campaign runtime — Sprint 6
// Kampanya karuseli + kampanya/etkinlik sheet'lerini gerçek data'ya bağlar.
// Mevcut poster karuseli korunur; slide'lara data caption'ı eklenir ve tıklamalar
// venue focus'a yönlenir. Alt nav Kampanyalar/Etkinlikler document-capture ile yakalanır.
import { campaigns, events, adPlacements, venues } from "../data/index.js";

const venueOf = (id) => venues.find((v) => v.id === id);

function getActivePlacements(type) {
  return adPlacements
    .filter((item) => item.placementType === type && item.isActive)
    .sort((a, b) => b.priority - a.priority);
}

const carouselPlacement = getActivePlacements("campaign-carousel")[0];
const orderedCampaigns = carouselPlacement
  ? carouselPlacement.campaignIds.map((id) => campaigns.find((c) => c.id === id)).filter(Boolean)
  : campaigns;

let activeCampaign = null;
let activeEvent = null;

/* ---- olaylar ---- */
function fireCampaignAction(campaign, source) {
  activeCampaign = campaign;
  const venue = venueOf(campaign.venueId);
  window.dispatchEvent(new CustomEvent("alge:campaign-action", { detail: { campaign, venue, source } }));
}
function fireEventAction(ev, source) {
  activeEvent = ev;
  const venue = venueOf(ev.venueId);
  window.dispatchEvent(new CustomEvent("alge:event-action", { detail: { event: ev, venue, source } }));
}

function focusCampaign(campaign, source) {
  if (!campaign) return;
  fireCampaignAction(campaign, source);
  closeCampaigns(); closeEvents();
  window.ALGE_VENUE_RUNTIME?.focusVenueById(campaign.venueId, { source, campaignId: campaign.id });
}
function focusEvent(ev, source) {
  if (!ev) return;
  fireEventAction(ev, source);
  closeCampaigns(); closeEvents();
  window.ALGE_VENUE_RUNTIME?.focusVenueById(ev.venueId, { source, eventId: ev.id });
}

/* ---- stiller ---- */
const style = document.createElement("style");
style.textContent = `
#mcar .mslide{position:relative;}
.alge-camp-cap{position:absolute;left:0;right:0;bottom:0;padding:14px 10px 8px;
  background:linear-gradient(transparent, rgba(8,20,32,.82));color:#fff;
  font-family:system-ui,sans-serif;pointer-events:none;border-radius:0 0 inherit inherit;}
.alge-camp-cap b{display:block;font-size:12px;line-height:1.2;}
.alge-camp-cap span{font-size:10px;opacity:.85;}
.alge-camp-cap .alge-camp-tag{display:inline-block;font-size:8.5px;font-weight:800;margin-left:6px;
  padding:2px 6px;border-radius:999px;background:rgba(53,224,242,.25);color:#bdf3fa;vertical-align:1px;}
.alge-csheet{position:fixed;z-index:31;left:0;right:0;bottom:0;top:max(56px, env(safe-area-inset-top));
  background:rgba(248,251,253,.96);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
  border-radius:22px 22px 0 0;box-shadow:0 -12px 44px rgba(10,25,40,.35);display:none;
  flex-direction:column;font-family:system-ui,sans-serif;color:#13293d;max-width:520px;margin:0 auto;}
.alge-csheet.on{display:flex;}
.alge-csheet .cs-head{display:flex;align-items:center;gap:10px;padding:16px 16px 8px;}
.alge-csheet .cs-head h3{flex:1;margin:0;font-size:17px;}
.alge-csheet .cs-close{width:28px;height:28px;border-radius:999px;border:0;cursor:pointer;
  background:rgba(19,41,61,.08);color:#13293d;font-size:13px;line-height:1;}
.alge-csheet .cs-body{flex:1;overflow-y:auto;padding:4px 16px calc(20px + env(safe-area-inset-bottom));}
.alge-csheet .cs-sec{font-size:11px;font-weight:800;letter-spacing:.08em;color:#5b7186;margin:12px 0 8px;}
.alge-citem{background:#fff;border-radius:14px;padding:12px;margin-bottom:9px;cursor:pointer;
  box-shadow:0 2px 8px rgba(10,25,40,.07);}
.alge-citem .ci-head{display:flex;align-items:center;gap:8px;}
.alge-citem b{font-size:13.5px;flex:1;}
.alge-citem .ci-venue{font-size:11px;font-weight:700;color:#0e7a8a;margin:1px 0 3px;}
.alge-citem .ci-desc{font-size:11.5px;color:#42566b;line-height:1.35;margin-bottom:8px;}
.alge-citem .ci-meta{font-size:10.5px;color:#8a97a5;margin-bottom:8px;}
.alge-citem .ci-cta{border:0;border-radius:999px;padding:7px 13px;font-size:11.5px;font-weight:700;
  background:#13293d;color:#fff;cursor:pointer;font-family:inherit;}
.alge-ctag{font-size:9.5px;font-weight:800;padding:3px 8px;border-radius:999px;white-space:nowrap;}
.alge-ctag.sp{background:rgba(212,140,60,.14);color:#9a6420;}
.alge-ctag.cat{background:rgba(53,224,242,.16);color:#0e7a8a;}
`;
document.head.appendChild(style);

/* ---- sheet fabrikası ---- */
function makeSheet(title) {
  const el = document.createElement("div");
  el.className = "alge-csheet";
  el.innerHTML = `<div class="cs-head"><h3>${title}</h3><button class="cs-close" aria-label="Kapat">✕</button></div><div class="cs-body"></div>`;
  document.body.appendChild(el);
  el.querySelector(".cs-close").addEventListener("click", () => el.classList.remove("on"));
  return el;
}
const campSheet = makeSheet("Kampanyalar");
const eventSheet = makeSheet("Etkinlikler");

function closeOverlays() {
  if (window.__ALGE_POPUP?.isOpen()) window.__ALGE_POPUP.closeOpeningAd();
  window.ALGE_SEARCH_RUNTIME?.closeSearch();
  document.querySelectorAll(".alge-vsheet.on").forEach((el) => el.classList.remove("on"));
  document.querySelector(".alge-qr-panel")?.classList.remove("on");
}

const priceRow = (c) => (c.priceText && c.priceText !== "Bilinmiyor" ? ` · ${c.priceText}` : "");

function campaignItem(c) {
  const v = venueOf(c.venueId);
  return `
  <div class="alge-citem" data-camp="${c.id}">
    <div class="ci-head"><b>${c.title}</b>
      ${c.isSponsored ? '<span class="alge-ctag sp">Sponsorlu</span>' : ""}
      <span class="alge-ctag cat">${c.category}</span></div>
    <div class="ci-venue">${v ? v.name : c.venueId}</div>
    <div class="ci-desc">${c.description}</div>
    <div class="ci-meta">${c.shortLabel}${priceRow(c)}</div>
    <button class="ci-cta" type="button">${c.ctaLabel || "Mekanı Gör"}</button>
  </div>`;
}

function renderCampaigns() {
  const body = campSheet.querySelector(".cs-body");
  const sponsored = orderedCampaigns.filter((c) => c.isSponsored);
  const rest = orderedCampaigns.filter((c) => !c.isSponsored);
  body.innerHTML =
    (sponsored.length ? `<div class="cs-sec">SPONSORLU / ÖNE ÇIKAN</div>` + sponsored.map(campaignItem).join("") : "") +
    `<div class="cs-sec">TÜM KAMPANYALAR</div>` + rest.map(campaignItem).join("");
  body.querySelectorAll(".alge-citem").forEach((el) => {
    const c = campaigns.find((x) => x.id === el.dataset.camp);
    el.addEventListener("click", () => focusCampaign(c, "campaign-sheet"));
  });
}

function eventItem(e) {
  const v = venueOf(e.venueId);
  return `
  <div class="alge-citem" data-event="${e.id}">
    <div class="ci-head"><b>${e.title}</b>
      ${e.isSponsored ? '<span class="alge-ctag sp">Sponsorlu</span>' : ""}
      <span class="alge-ctag cat">${e.category}</span></div>
    <div class="ci-venue">${v ? v.name : e.venueId}</div>
    <div class="ci-meta">${e.dateText} · ${e.timeText}</div>
    <div class="ci-desc">${e.shortDescription}</div>
    <button class="ci-cta" type="button">${e.ctaLabel || "Mekanı Gör"}</button>
  </div>`;
}

function renderEvents() {
  const body = eventSheet.querySelector(".cs-body");
  body.innerHTML = `<div class="cs-sec">YAKLAŞAN ETKİNLİKLER</div>` + events.map(eventItem).join("");
  body.querySelectorAll(".alge-citem").forEach((el) => {
    const e = events.find((x) => x.id === el.dataset.event);
    el.addEventListener("click", () => focusEvent(e, "event-sheet"));
  });
}

function openCampaigns() { closeOverlays(); eventSheet.classList.remove("on"); renderCampaigns(); campSheet.classList.add("on"); }
function closeCampaigns() { campSheet.classList.remove("on"); }
function openEvents() { closeOverlays(); campSheet.classList.remove("on"); renderEvents(); eventSheet.classList.add("on"); }
function closeEvents() { eventSheet.classList.remove("on"); }

function openCampaignById(campaignId) {
  const c = campaigns.find((x) => x.id === campaignId);
  if (!c) { console.warn(`[ALGE] Bilinmeyen campaignId: ${campaignId}`); return null; }
  focusCampaign(c, "campaign-direct");
  return c;
}
function openEventById(eventId) {
  const e = events.find((x) => x.id === eventId);
  if (!e) { console.warn(`[ALGE] Bilinmeyen eventId: ${eventId}`); return null; }
  focusEvent(e, "event-direct");
  return e;
}

window.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeCampaigns(); closeEvents(); } });

/* ---- mevcut karusel: poster -> data eşlemesi ----
   Slide temaları gömülü posterlerden GÖRSEL olarak tespit edildi (Sprint 6 incelemesi):
   0 burger, 1 pizza, 2 konser, 3 steak, 4 protein bowl, 5 gece/canlı müzik,
   6 levrek, 7 2 top dondurma, 8 serpme kahvaltı, 9 çıtır tavuk, 10 sushi,
   11 san sebastian, 12 et döner, 13 kahve+cookie. */
const SLIDE_MAP = [
  { campaignId: "camp-tezgah-burger-menu" },
  { campaignId: "camp-danilos-ogle-pizza" },
  { eventId: "event-la-rocca-latin-gecesi" },
  { venueId: "bragi" },
  { campaignId: "camp-green-salads-menu" },
  { campaignId: "camp-irish-pub-happy-hour" },
  { sheet: true },                              // levrek: eşleşen mekan yok -> kampanya sheet'i
  { venueId: "mado" },                          // 2 top dondurma
  { campaignId: "camp-mado-serpme" },
  { campaignId: "camp-kfc-kova" },
  { venueId: "yotto" },                         // sushi
  { venueId: "mackbear" },                      // san sebastian
  { campaignId: "camp-maydonoz-durum-ayran" },
  { campaignId: "camp-starbucks-rewards" }
];

function bindCarousel() {
  const slides = [...document.querySelectorAll("#mcar .mslide")];
  slides.forEach((slide, i) => {
    const map = SLIDE_MAP[i];
    if (!map || slide.querySelector(".alge-camp-cap")) return;
    const cap = document.createElement("div");
    cap.className = "alge-camp-cap";
    if (map.campaignId) {
      const c = campaigns.find((x) => x.id === map.campaignId);
      const v = venueOf(c.venueId);
      cap.innerHTML = `<b>${c.shortLabel}${c.isSponsored ? '<span class="alge-camp-tag">Sponsorlu</span>' : ""}</b><span>${v.name}${priceRow(c)} · Mekanı Gör ›</span>`;
    } else if (map.eventId) {
      const e = events.find((x) => x.id === map.eventId);
      const v = venueOf(e.venueId);
      cap.innerHTML = `<b>${e.title}</b><span>${v.name} · ${e.dateText} ›</span>`;
    } else if (map.venueId) {
      const v = venueOf(map.venueId);
      cap.innerHTML = `<b>${v.card.featuredProduct}</b><span>${v.name} · Mekanı Gör ›</span>`;
    } else {
      cap.innerHTML = `<b>Tüm Kampanyalar</b><span>Listeyi gör ›</span>`;
    }
    slide.appendChild(cap);
  });
}
bindCarousel();

/* slide tıklamaları: capture fazında yakala (eski openSheet('kampanya') yerine data aksiyonu) */
document.addEventListener("click", (e) => {
  const t = e.target;
  if (!t.closest) return;

  const slide = t.closest("#mcar .mslide");
  if (slide) {
    e.stopPropagation(); e.preventDefault();
    const i = [...slide.parentNode.children].indexOf(slide);
    const map = SLIDE_MAP[i];
    if (map?.campaignId) focusCampaign(campaigns.find((x) => x.id === map.campaignId), "campaign-carousel");
    else if (map?.eventId) focusEvent(events.find((x) => x.id === map.eventId), "campaign-carousel");
    else if (map?.venueId) { closeCampaigns(); window.ALGE_VENUE_RUNTIME?.focusVenueById(map.venueId, { source: "campaign-carousel" }); }
    else openCampaigns();
    return;
  }
  if (t.closest("#mseeall")) { e.stopPropagation(); e.preventDefault(); openCampaigns(); return; }
  const navBtn = t.closest('#mbar button[data-v="kampanya"], #mbar button[data-v="etkinlik"]');
  if (navBtn) {
    e.stopPropagation(); e.preventDefault();
    navBtn.dataset.v === "kampanya" ? openCampaigns() : openEvents();
    return;
  }
  if (t.closest('#mchips button[data-k="etkinlik"]')) { e.stopPropagation(); e.preventDefault(); openEvents(); }
}, true);

/* ---- opening ad poster uyumu (güvenli görsel seçim) ----
   Aktif opening ad mekanına uygun poster gömülü slide'lardan seçilir;
   eşleşme yoksa mevcut poster aynen kalır. */
const OPENING_POSTER_SLIDE = { "mado": 7, "tezgah-burger": 0, "shakespeare": 8, "kfc": 9, "yotto": 10 };
(function fixOpeningPoster() {
  const ad = window.ALGE_ACTIVE_OPENING_AD;
  const idx = ad ? OPENING_POSTER_SLIDE[ad.venueId] : undefined;
  if (idx === undefined) return;
  const slide = document.querySelectorAll("#mcar .mslide")[idx];
  const img = document.getElementById("popimg");
  const m = slide && slide.style.backgroundImage.match(/url\("?(.+?)"?\)/);
  if (img && m) img.src = m[1];
})();

/* search açılırken kampanya/etkinlik sheet'leri de kapansın:
   searchRuntime'ın tetikleyicilerine paralel dinleyiciler (stopPropagation
   aynı node'daki diğer dinleyicileri engellemez, document-capture güvenli) */
document.getElementById("mtop")?.addEventListener("click", () => { closeCampaigns(); closeEvents(); });
document.addEventListener("click", (e) => {
  if (e.target.closest && e.target.closest('#mbar button[data-v="ara"]')) { closeCampaigns(); closeEvents(); }
}, true);
if (window.ALGE_SEARCH_RUNTIME) {
  const origOpenSearch = window.ALGE_SEARCH_RUNTIME.openSearch;
  window.ALGE_SEARCH_RUNTIME.openSearch = (...args) => {
    closeCampaigns(); closeEvents();
    return origOpenSearch(...args);
  };
}

window.ALGE_CAMPAIGN_RUNTIME = {
  openCampaigns, closeCampaigns,
  openEvents, closeEvents,
  openCampaignById, openEventById,
  getActiveCampaign: () => activeCampaign,
  getActiveEvent: () => activeEvent,
  getActivePlacements
};
