// ALGE venue runtime — Sprint 4
// Ortak venue focus / action router: venueId -> harita odağı + aktif marker + data-driven kart.
// Search, kampanya karuseli vb. sonraki sprintlerde bu katmana bağlanacak.
import { venues, campaigns } from "../data/index.js";

/* qrRuntime ile aynı ölçülü eşleme: mapFocusPoint.x (0..1) -> doku u -> dünya X (PW=120) */
const U_WEST = 0.3333, U_EAST = 0.6667, V_BAND = 0.428, MARKER_WORLD_Y = 1.4, PW = 120;
const xToU = (x) => U_WEST + x * (U_EAST - U_WEST);
const xToWorld = (x) => (xToU(x) - 0.5) * PW;

let activeVenue = null;

/* ---- stiller ---- */
const style = document.createElement("style");
style.textContent = `
.alge-venue-marker{position:fixed;z-index:24;transform:translate(-50%,-50%);pointer-events:none;
  display:none;flex-direction:column;align-items:center;}
.alge-venue-marker__dot{width:14px;height:14px;border-radius:999px;background:#35e0f2;
  border:2px solid #fff;box-shadow:0 0 0 8px rgba(53,224,242,.20);}
.alge-venue-marker__label{margin-top:6px;padding:4px 8px;border-radius:999px;background:rgba(19,41,61,.92);
  color:#fff;font-size:11px;font-weight:700;white-space:nowrap;font-family:system-ui,sans-serif;}
.alge-vcard{position:fixed;z-index:22;left:10px;right:10px;bottom:calc(70px + env(safe-area-inset-bottom));
  max-width:430px;margin:0 auto;background:#fff;border-radius:18px;padding:14px;display:none;
  box-shadow:0 10px 36px rgba(10,25,40,.28);font-family:system-ui,sans-serif;color:#13293d;}
.alge-vcard.on{display:block;}
.alge-vcard__close{position:absolute;top:10px;right:10px;width:26px;height:26px;border-radius:999px;
  border:0;background:rgba(19,41,61,.08);color:#13293d;font-size:13px;cursor:pointer;line-height:1;}
.alge-vcard h3{margin:0 22px 2px 0;font-size:17px;}
.alge-vcard .alge-vcard__cat{font-size:11px;font-weight:700;color:#0e7a8a;margin-bottom:6px;}
.alge-vcard .alge-vcard__short{font-size:12.5px;color:#42566b;line-height:1.35;margin-bottom:8px;}
.alge-vcard .alge-vcard__chips{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:8px;}
.alge-vcard .alge-vcard__chips span{font-size:10.5px;font-weight:700;padding:3px 9px;border-radius:999px;
  background:rgba(53,224,242,.14);color:#0e7a8a;}
.alge-vcard .alge-vcard__row{font-size:11.5px;color:#42566b;margin-bottom:3px;}
.alge-vcard .alge-vcard__row b{color:#13293d;}
.alge-vcard__btns{display:flex;gap:8px;margin-top:10px;}
.alge-vcard__btns button{flex:1;border:0;border-radius:999px;padding:9px 0;font-size:12px;font-weight:700;
  cursor:pointer;font-family:inherit;}
#alge-vbtn-dir{background:#13293d;color:#fff;}
#alge-vbtn-detail,#alge-vbtn-menu{background:rgba(19,41,61,.08);color:#13293d;}
.alge-vsheet{position:fixed;z-index:23;left:0;right:0;bottom:0;max-height:62vh;overflow-y:auto;
  background:#fff;border-radius:18px 18px 0 0;padding:16px 16px calc(16px + env(safe-area-inset-bottom));
  display:none;box-shadow:0 -10px 40px rgba(10,25,40,.3);font-family:system-ui,sans-serif;color:#13293d;}
.alge-vsheet.on{display:block;}
.alge-vsheet h4{margin:0 26px 10px 0;font-size:15px;}
.alge-vsheet__close{position:absolute;top:12px;right:12px;width:26px;height:26px;border-radius:999px;
  border:0;background:rgba(19,41,61,.08);font-size:13px;cursor:pointer;line-height:1;color:#13293d;}
.alge-vsheet p{font-size:12.5px;color:#42566b;line-height:1.45;margin:0 0 8px;}
.alge-vsheet p b{color:#13293d;}
.alge-vsheet .alge-vsheet__tags{display:flex;flex-wrap:wrap;gap:5px;margin-top:4px;}
.alge-vsheet .alge-vsheet__tags span{font-size:10.5px;font-weight:700;padding:3px 9px;border-radius:999px;
  background:rgba(19,41,61,.07);color:#13293d;}
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
    const p = g.uvToWorld(xToU(activeVenue.mapFocusPoint.x), V_BAND);
    p.y = MARKER_WORLD_Y;
    p.project(g.camera);
    if (p.z > 1) { marker.style.display = "none"; return; }
    const sx = (p.x * 0.5 + 0.5) * window.innerWidth;
    const sy = (-p.y * 0.5 + 0.5) * window.innerHeight;
    const bottomSafe = Math.min(window.innerHeight - 190, window.innerHeight * 0.5);
    marker.style.display = "flex";
    marker.style.left = Math.max(44, Math.min(window.innerWidth - 44, sx)).toFixed(1) + "px";
    marker.style.top = Math.max(120, Math.min(bottomSafe, sy)).toFixed(1) + "px";
  } else {
    // fallback: normalize konumu viewport'a eşle
    const safeLeft = 28, safeRight = window.innerWidth - 28;
    marker.style.display = "flex";
    marker.style.left = (safeLeft + activeVenue.mapFocusPoint.x * (safeRight - safeLeft)) + "px";
    marker.style.top = (window.innerHeight * 0.38) + "px";
  }
}
(function loop() { updateVenueMarker(); requestAnimationFrame(loop); })();

/* ---- venue card ---- */
const card = document.createElement("div");
card.className = "alge-vcard";
card.innerHTML = `
  <button class="alge-vcard__close" aria-label="Kapat">✕</button>
  <h3></h3>
  <div class="alge-vcard__cat"></div>
  <div class="alge-vcard__short"></div>
  <div class="alge-vcard__chips"></div>
  <div class="alge-vcard__row alge-vcard__featured"></div>
  <div class="alge-vcard__row alge-vcard__campaign"></div>
  <div class="alge-vcard__btns">
    <button id="alge-vbtn-dir" type="button">Yol Tarifi</button>
    <button id="alge-vbtn-detail" type="button">Detay</button>
    <button id="alge-vbtn-menu" type="button">Menü</button>
  </div>`;
document.body.appendChild(card);

/* ---- detay / menü sheet'leri ---- */
function makeSheet(id) {
  const el = document.createElement("div");
  el.className = "alge-vsheet";
  el.id = id;
  el.innerHTML = `<button class="alge-vsheet__close" aria-label="Kapat">✕</button><h4></h4><div class="alge-vsheet__body"></div>`;
  document.body.appendChild(el);
  el.querySelector(".alge-vsheet__close").addEventListener("click", () => el.classList.remove("on"));
  return el;
}
const detailSheet = makeSheet("alge-vsheet-detail");
const menuSheet = makeSheet("alge-vsheet-menu");
const esc = (s) => String(s ?? "Bilinmiyor");

function openDetailSheet(v) {
  menuSheet.classList.remove("on");
  detailSheet.querySelector("h4").textContent = v.name + " · Detay";
  const d = v.digital || {};
  detailSheet.querySelector(".alge-vsheet__body").innerHTML = `
    <p>${esc(v.card.detail)}</p>
    <p><b>Neden seçer:</b> ${esc(v.search.whyChoose)}</p>
    <p><b>Fiyat:</b> ${esc(v.priceLevel)}</p>
    <p><b>Web:</b> ${esc(d.website)} · <b>IG:</b> ${esc(d.instagram)} · <b>Tel:</b> ${esc(d.phone)}</p>
    ${v.notes ? `<p><b>Not:</b> ${v.notes}</p>` : ""}`;
  detailSheet.classList.add("on");
}

function openMenuSheet(v) {
  detailSheet.classList.remove("on");
  menuSheet.querySelector("h4").textContent = v.name + " · Menü";
  const cats = (v.menu.categories || []).map((c) => `<span>${c}</span>`).join("");
  const tops = (v.menu.topItems || []).map((t) => `<span>${t}</span>`).join("");
  const keys = (v.search.keywords || []).slice(0, 10).map((k) => `<span>${k}</span>`).join("");
  menuSheet.querySelector(".alge-vsheet__body").innerHTML = `
    <p><b>Kategoriler</b></p><div class="alge-vsheet__tags">${cats}</div>
    <p style="margin-top:10px"><b>Öne çıkanlar</b></p><div class="alge-vsheet__tags">${tops}</div>
    <p style="margin-top:10px"><b>Arama etiketleri</b></p><div class="alge-vsheet__tags">${keys}</div>`;
  menuSheet.classList.add("on");
}

function openDirections(venue) {
  const query = venue.directions?.query || venue.name;
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

card.querySelector(".alge-vcard__close").addEventListener("click", () => {
  card.classList.remove("on");
  detailSheet.classList.remove("on");
  menuSheet.classList.remove("on");
  activeVenue = null;
});
card.querySelector("#alge-vbtn-dir").addEventListener("click", () => activeVenue && openDirections(activeVenue));
card.querySelector("#alge-vbtn-detail").addEventListener("click", () => activeVenue && openDetailSheet(activeVenue));
card.querySelector("#alge-vbtn-menu").addEventListener("click", () => activeVenue && openMenuSheet(activeVenue));

function fillCard(v) {
  card.querySelector("h3").textContent = v.name;
  card.querySelector(".alge-vcard__cat").textContent = `${v.category} · ${v.subcategory}`;
  card.querySelector(".alge-vcard__short").textContent = v.card.short;
  card.querySelector(".alge-vcard__chips").innerHTML =
    (v.card.features || []).slice(0, 4).map((f) => `<span>${f}</span>`).join("");
  card.querySelector(".alge-vcard__featured").innerHTML = `<b>Öne çıkan:</b> ${esc(v.card.featuredProduct)}`;
  card.querySelector(".alge-vcard__campaign").innerHTML = `<b>Kampanya:</b> ${esc(v.card.campaign)}`;
  card.classList.add("on");
}

/* ---- ortak focus ---- */
function focusVenueById(venueId, options = {}) {
  const venue = venues.find((v) => v.id === venueId);
  if (!venue) {
    console.warn(`[ALGE] Bilinmeyen venueId: ${venueId}`);
    return null;
  }
  activeVenue = venue;

  // açık overlay'ler: pop-up açıksa kapat, sheet'leri sıfırla, QR paneli kapat
  if (window.__ALGE_POPUP && window.__ALGE_POPUP.isOpen()) window.__ALGE_POPUP.closeOpeningAd();
  detailSheet.classList.remove("on");
  menuSheet.classList.remove("on");
  document.querySelector(".alge-qr-panel")?.classList.remove("on");

  // harita odağı (köprü varsa; mevcut motor değiştirilmez)
  if (window.__ALGE3D?.setMobileTourNearX) {
    window.__ALGE3D.setMobileTourNearX(xToWorld(venue.mapFocusPoint.x));
  }

  marker.querySelector(".alge-venue-marker__label").textContent = venue.name;
  fillCard(venue);
  updateVenueMarker();

  window.dispatchEvent(new CustomEvent("alge:venue-focused", {
    detail: { venue, source: options.source || "unknown" }
  }));
  return venue;
}

const getActiveVenue = () => activeVenue;

/* search sonuç kartındaki Menü butonu için: focus + menü sheet'i */
function openVenueMenu(venueId) {
  const venue = focusVenueById(venueId, { source: "search-menu" });
  if (venue) openMenuSheet(venue);
  return venue;
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
