// ALGE home panel runtime — Sprint 8.1
// Masaüstü sol panelini (sekmeler + liste + mini featured kart + arama inputu)
// gerçek data'ya bağlar. Mevcut panel tasarımı/sınıfları korunur; içerik 47 mekan,
// 12 kampanya ve 5 etkinlikten render edilir. Legacy placeholder render'ı
// capture-interception ile devre dışı kalır (index.html koduna dokunulmaz).
import { venues, campaigns, events } from "../data/index.js";

const listEl = document.getElementById("list");
const venueOf = (id) => venues.find((v) => v.id === id);

/* ---- ek stiller (mevcut sınıfların üstüne minimum) ---- */
const style = document.createElement("style");
style.textContent = `
.alge-hrow{cursor:pointer;}
.alge-hrow .alge-vr-desc{font-size:11px;color:var(--alge-text-2,#54677c);line-height:1.3;margin:2px 0 3px;
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.alge-hrow .alge-vr-meta{font-size:10px;color:var(--alge-text-3,#8b9aab);margin-top:2px;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.alge-hrow .alge-vr-meta b{color:#dd7e2f;font-weight:700;}
.alge-hsp{font-size:8.5px;font-weight:800;padding:2px 7px;border-radius:999px;
  background:var(--alge-amber-soft,#fdeedd);color:#dd7e2f;margin-left:6px;vertical-align:1px;}
.alge-hcta{font-size:10px;font-weight:700;color:var(--alge-teal,#157f8d);margin-top:3px;}
`;
document.head.appendChild(style);

/* ---- satır şablonları (mevcut vrow/erow/crow sınıfları yeniden kullanılır) ---- */
const esc = (x) => String(x ?? "");

function venueRow(v) {
  const chips = (v.card.features || []).slice(0, 3)
    .map((f) => `<span class="tagp">${esc(f)}</span>`).join("");
  return `
  <div class="vrow alge-hrow" data-venue="${v.id}">
    <span class="no">${String(v.order).padStart(2, "0")}</span>
    <div class="vr-mid">
      <div class="vr-name">${esc(v.name)}</div>
      <div class="vr-cat">${esc(v.category)} · ${esc(v.subcategory)}</div>
      <div class="alge-vr-desc">${esc(v.card.short)}</div>
      <div class="vr-tags">${chips}</div>
      <div class="alge-vr-meta"><b>Öne çıkan:</b> ${esc(v.card.featuredProduct)}</div>
      <div class="alge-vr-meta"><b>Kampanya:</b> ${esc(v.card.campaign)}</div>
    </div>
    <span class="arr">→</span>
  </div>`;
}

function eventRow(e) {
  const v = venueOf(e.venueId);
  return `
  <div class="erow alge-hrow" data-event="${e.id}" data-venue="${e.venueId}">
    <div class="e-when">${esc(e.dateText)} · ${esc(e.timeText)}</div>
    <div class="e-name">${esc(e.title)}</div>
    <div class="e-venue">${v ? esc(v.name) : esc(e.venueId)}</div>
    <div class="alge-vr-desc">${esc(e.shortDescription)}</div>
    <div class="alge-hcta">Mekanı Gör →</div>
  </div>`;
}

function campaignRow(c) {
  const v = venueOf(c.venueId);
  const price = c.priceText && c.priceText !== "Bilinmiyor" ? `<span class="c-price">${esc(c.priceText)}</span>` : "";
  return `
  <div class="crow alge-hrow" data-camp="${c.id}" data-venue="${c.venueId}">
    <div class="c-mid">
      <div class="c-name">${esc(c.title)}${c.isSponsored ? '<span class="alge-hsp">Sponsorlu</span>' : ""}</div>
      <div class="c-venue">${v ? esc(v.name) : esc(c.venueId)} · ${esc(c.shortLabel)}</div>
      <div class="alge-vr-desc">${esc(c.description)}</div>
      <div class="alge-hcta">Mekanı Gör →</div>
    </div>
    ${price}
  </div>`;
}

/* ---- render ---- */
function bindRows() {
  listEl.querySelectorAll(".alge-hrow").forEach((row) => {
    row.addEventListener("click", () => {
      const opts = { source: "home-venue-list" };
      if (row.dataset.event) { opts.source = "home-event-list"; opts.eventId = row.dataset.event; }
      if (row.dataset.camp) { opts.source = "home-campaign-list"; opts.campaignId = row.dataset.camp; }
      window.ALGE_VENUE_RUNTIME?.focusVenueById(row.dataset.venue, opts);
    });
  });
}

function renderVenues() {
  listEl.innerHTML = venues.map(venueRow).join("");
  bindRows();
}
function renderEvents() {
  listEl.innerHTML = events.map(eventRow).join("");
  bindRows();
}
function renderCampaigns() {
  listEl.innerHTML = campaigns.map(campaignRow).join("");
  bindRows();
}

const RENDERERS = { mekan: renderVenues, etkinlik: renderEvents, kampanya: renderCampaigns };

function setActiveTab(tab) {
  if (!RENDERERS[tab]) return;
  document.querySelectorAll(".tabs .tab").forEach((b) =>
    b.classList.toggle("on", b.dataset.tab === tab));
  RENDERERS[tab]();
}

/* ---- sekme + hızlı aksiyon + arama interception'ları ---- */
document.addEventListener("click", (e) => {
  if (!e.target.closest) return;
  const tabBtn = e.target.closest(".tabs .tab");
  if (tabBtn) { e.stopPropagation(); e.preventDefault(); setActiveTab(tabBtn.dataset.tab); return; }
  const quickBtn = e.target.closest("#quick button");
  if (quickBtn) {
    e.stopPropagation(); e.preventDefault();
    setActiveTab(RENDERERS[quickBtn.dataset.q] ? quickBtn.dataset.q : "mekan");
  }
}, true);

const srch = document.getElementById("srch");
if (srch) {
  // sol panel arama alanı gerçek search sheet'ini açar
  srch.addEventListener("focus", () => {
    srch.blur();
    window.ALGE_SEARCH_RUNTIME?.openSearch();
  });
  srch.addEventListener("click", () => window.ALGE_SEARCH_RUNTIME?.openSearch());
}

/* ---- mini featured kart: aktif QR'a en yakın mekan ---- */
let featuredVenueId = "mado";

function renderFeatured() {
  const activeQr = window.ALGE_ACTIVE_QR;
  featuredVenueId = activeQr?.nearbyVenueIds?.[0] || "mado";
  const v = venueOf(featuredVenueId);
  if (!v) return;
  const name = document.getElementById("vmName");
  if (!name) return;
  name.textContent = v.name;
  const p = document.querySelector("#vmini p");
  if (p) p.textContent = v.card.short;
  // çalışma saati datada yok -> o meta satırı yerine fiyat seviyesi gösterilir
  const hours = document.getElementById("vmHours");
  if (hours) hours.textContent = v.priceLevel;
  const campCount = campaigns.filter((c) => c.venueId === v.id).length;
  const camp = document.getElementById("vmCamp");
  if (camp) camp.textContent = campCount > 0 ? `${campCount} aktif kampanya` : v.card.campaign;
  // tematik olmayan eski küçük görsel gizlenir (görsel uydurma yok)
  const thumb = document.getElementById("vmThumb");
  if (thumb) thumb.style.display = "none";
}

/* mini kart butonları: legacy flyToVenue yerine venue runtime (capture ile) */
document.addEventListener("click", (e) => {
  if (!e.target.closest) return;
  const t = e.target;
  if (t.closest("#vmShow")) {
    e.stopPropagation(); e.preventDefault();
    window.ALGE_VENUE_RUNTIME?.focusVenueById(featuredVenueId, { source: "home-featured" });
  } else if (t.closest("#vmMenu")) {
    e.stopPropagation(); e.preventDefault();
    window.ALGE_VENUE_RUNTIME?.openVenueMenu?.(featuredVenueId);
  } else if (t.closest("#vmRoute")) {
    e.stopPropagation(); e.preventDefault();
    const v = venueOf(featuredVenueId);
    const q = encodeURIComponent(v?.directions?.query || v?.name || "");
    window.open(`https://www.google.com/maps/search/?api=1&query=${q}`, "_blank", "noopener,noreferrer");
  }
}, true);

/* ---- başlangıç ---- */
setActiveTab("mekan");
renderFeatured();
window.addEventListener("alge:qr-ready", renderFeatured);

window.ALGE_HOME_PANEL_RUNTIME = { renderVenues, renderCampaigns, renderEvents, setActiveTab };
