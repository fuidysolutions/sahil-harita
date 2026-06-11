// ALGE venue runtime — Sprint 4 (Sprint 8.3-8.4'te sadeleştirildi)
// Ortak venue focus / action router: venueId -> sinematik uçuş (mevcut makine,
// __ALGE_FLY köprüsü) -> varışta legacy detay ekranı (gerçek veriyle) + turkuaz marker.
// Beyaz drawer kart ve beyaz detay/menü sheet'leri KALDIRILDI (kullanıcı kararı,
// Sprint 8.4): mekan ekranı tek — uçuş sonunda açılan detay ekranı.
import { venues, campaigns } from "../data/index.js";
import { xToUV, xToWorldX } from "./mapAnchors.js";
import { getVenueImage } from "./venueImages.js";

const MARKER_WORLD_Y = 1.4;

let activeVenue = null;

/* ---- stiller (yalnız aktif mekan marker'ı) ---- */
const style = document.createElement("style");
style.textContent = `
.alge-venue-marker{position:fixed;z-index:7;transform:translate(-50%,-9px);pointer-events:none;
  display:none;flex-direction:column;align-items:center;}
.alge-venue-marker__dot{width:14px;height:14px;border-radius:999px;background:#35e0f2;
  border:2px solid #fff;box-shadow:0 0 0 8px rgba(53,224,242,.20);}
.alge-venue-marker__label{margin-top:6px;padding:4px 8px;border-radius:999px;background:rgba(19,41,61,.92);
  color:#fff;font-size:11px;font-weight:700;white-space:nowrap;font-family:system-ui,sans-serif;}
`;
document.head.appendChild(style);

/* ---- aktif venue marker ---- */
const marker = document.createElement("div");
marker.className = "alge-venue-marker";
marker.innerHTML = '<div class="alge-venue-marker__dot"></div><div class="alge-venue-marker__label"></div>';
document.body.appendChild(marker);

function updateVenueMarker() {
  if (!activeVenue) { marker.style.display = "none"; return; }
  const g = window.__ALGE3D;
  if (g && g.camera && g.uvToWorld) {
    const { u, v } = xToUV(activeVenue.mapFocusPoint.x);
    const p = g.uvToWorld(u, v);
    p.y = MARKER_WORLD_Y;
    p.project(g.camera);
    if (p.z > 1) { marker.style.display = "none"; return; }
    // Sprint 8.8: kıskaç yok — anchor world noktasında kalır, kamera dönerken kaymaz
    marker.style.display = "flex";
    marker.style.left = ((p.x * 0.5 + 0.5) * window.innerWidth).toFixed(1) + "px";
    marker.style.top = ((-p.y * 0.5 + 0.5) * window.innerHeight).toFixed(1) + "px";
  } else {
    const safeLeft = 28, safeRight = window.innerWidth - 28;
    marker.style.display = "flex";
    marker.style.left = (safeLeft + activeVenue.mapFocusPoint.x * (safeRight - safeLeft)) + "px";
    marker.style.top = (window.innerHeight * 0.38) + "px";
  }
}
(window.__ALGE_FRAME_HOOKS = window.__ALGE_FRAME_HOOKS || []).push(updateVenueMarker);
(function loop() { updateVenueMarker(); requestAnimationFrame(loop); })();

/* ---- ortak focus: uçuş + varışta legacy detay ekranı ---- */
function focusVenueById(venueId, options = {}) {
  const venue = venues.find((v) => v.id === venueId);
  if (!venue) {
    console.warn(`[ALGE] Bilinmeyen venueId: ${venueId}`);
    return null;
  }
  activeVenue = venue;

  // açık overlay'ler kapanır
  if (window.__ALGE_POPUP && window.__ALGE_POPUP.isOpen()) window.__ALGE_POPUP.closeOpeningAd();
  window.ALGE_SEARCH_RUNTIME?.closeSearch();
  window.ALGE_CAMPAIGN_RUNTIME?.closeCampaigns();
  window.ALGE_CAMPAIGN_RUNTIME?.closeEvents();
  document.querySelector(".alge-qr-panel")?.classList.remove("on");

  // sinematik uçuş (bezier + blur) -> varışta legacy detay ekranı gerçek veriyle
  const { u, v } = xToUV(venue.mapFocusPoint.x);
  const flew = window.__ALGE_FLY?.toVenue?.({
    name: venue.name,
    cat: `${venue.category} · ${venue.subcategory}`,
    u, v,
    desc: venue.card.detail,
    maps: venue.directions?.query,
    // TAM menü yapısı (Sprint 8.5): detay ekranı section/item'ları gösterir
    menu: venue.menu || { categories: [], topItems: [], sections: [] },
    featuredProduct: venue.card?.featuredProduct,
    campaign: venue.card?.campaign,
    features: venue.card?.features || [],
    priceLevel: venue.priceLevel,
    img: getVenueImage(venue)   // temsili kategori görseli (Sprint 8.7)
  }) || false;

  if (!flew && window.__ALGE3D?.setMobileTourNearX) {
    // fallback (uçuş kullanılamıyorsa): kamerayı mekana kaydır
    window.__ALGE3D.setMobileTourNearX(xToWorldX(venue.mapFocusPoint.x));
  }

  marker.querySelector(".alge-venue-marker__label").textContent = venue.name;
  updateVenueMarker();

  window.dispatchEvent(new CustomEvent("alge:venue-focused", {
    detail: { venue, source: options.source || "unknown" }
  }));
  return venue;
}

const getActiveVenue = () => activeVenue;

/* Menü istekleri de uçuşa gider; menü, varıştaki detay ekranındaki
   "Menüyü Gör" ile açılır (beyaz menü sheet'i kaldırıldı) */
function openVenueMenu(venueId) {
  return focusVenueById(venueId, { source: "search-menu" });
}

window.ALGE_VENUE_RUNTIME = { focusVenueById, getActiveVenue, openVenueMenu };

/* ---- alge:ad-action -> venue focus ---- */
window.addEventListener("alge:ad-action", (event) => {
  const detail = event.detail || {};
  if (detail.actionType !== "openVenue") return;
  let venueId = detail.venueId;
  if (!venueId && detail.campaignId) {
    const campaign = campaigns.find((item) => item.id === detail.campaignId);
    venueId = campaign?.venueId;
  }
  if (!venueId) venueId = detail.actionTarget;
  if (venueId) focusVenueById(venueId, { source: "opening-ad" });
});
