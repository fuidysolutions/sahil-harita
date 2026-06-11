// ALGE search runtime — Sprint 5
// Üst arama hapını ve alt bar "Ara" sekmesini gerçek data'ya bağlar:
// venues + searchIndex + trends + campaigns + events üzerinden arama,
// sonuç tıklamasında ALGE_VENUE_RUNTIME.focusVenueById ile odak.
import { venues, searchIndex, trendItems, campaigns, events } from "../data/index.js";
import { normalizeText } from "../utils/normalizeText.js";

const POPULAR = ["filtre kahve", "burger", "dondurma", "kahvaltı", "tatlı", "döner", "pizza", "kozmetik", "spor"];
const SPONSORED = new Set(trendItems.filter((t) => t.isSponsored).map((t) => t.venueId));

let lastQuery = "";
let lastResults = [];

/* ---------- arama ---------- */
function addHit(map, venueId, score, reason, extra) {
  const venue = venues.find((v) => v.id === venueId);
  if (!venue) return;
  let item = map.get(venueId);
  if (!item) {
    item = { venue, score: 0, reasons: [], sponsored: SPONSORED.has(venueId) };
    map.set(venueId, item);
  }
  item.score += score;
  if (reason && !item.reasons.includes(reason) && item.reasons.length < 4) item.reasons.push(reason);
  if (extra) Object.assign(item, extra);
}

function fieldHit(q, value) {
  return normalizeText(value).includes(q);
}

function search(query) {
  const q = normalizeText(query);
  lastQuery = query;
  if (!q) { lastResults = []; renderResults(); return []; }

  const map = new Map();

  // 1) doğrudan mekan eşleşmesi
  for (const v of venues) {
    const nName = v.normalizedName || normalizeText(v.name);
    if (nName === q) addHit(map, v.id, 1000, "mekan adı");
    else if (nName.startsWith(q)) addHit(map, v.id, 800, "mekan adı");
    else if (nName.includes(q)) addHit(map, v.id, 600, "mekan adı");

    for (const [val, score, label] of [
      [v.category, 220, v.category], [v.subcategory, 220, v.subcategory], [v.concept, 120, "konsept"],
      [v.card.short, 140, "açıklama"], [v.card.detail, 100, "açıklama"],
      [v.card.featuredProduct, 260, v.card.featuredProduct]
    ]) {
      if (val && fieldHit(q, val)) addHit(map, v.id, score, label);
    }
    for (const f of v.card.features || []) if (fieldHit(q, f)) addHit(map, v.id, 240, f);
    for (const c of v.menu.categories || []) if (fieldHit(q, c)) addHit(map, v.id, 240, c);
    for (const t of v.menu.topItems || []) if (fieldHit(q, t)) addHit(map, v.id, 260, t);
    for (const k of v.search.keywords || []) if (fieldHit(q, k)) addHit(map, v.id, 280, k);
    for (const k of v.search.filterTags || []) if (fieldHit(q, k)) addHit(map, v.id, 200, k);
  }

  // 2) search index — kök eşleşme:
  //    ileri yön: "kahv" -> "kahve" (nk query'yi içerir)
  //    ters yön: "serpme kahvaltı" -> "kahvaltı"; yalnız nk>=4 karakterse
  //    ("et","su" gibi kısa keyword'lerin yanlış pozitifini engeller)
  for (const s of searchIndex) {
    const nk = s.normalizedKeyword;
    if (!(nk === q || nk.includes(q) || (nk.length >= 4 && q.includes(nk)))) continue;
    const exact = nk === q ? 2 : 1;
    for (const vid of s.venueIds) addHit(map, vid, s.priority * 1.6 * exact, s.keyword);
    for (const vid of s.sponsoredVenueIds || []) addHit(map, vid, 40, null);
  }

  // 3) kampanya eşleşmesi
  for (const c of campaigns) {
    const hay = [c.title, c.description, c.category, ...(c.keywords || [])];
    if (hay.some((h) => h && fieldHit(q, h))) {
      addHit(map, c.venueId, 160, `kampanya: ${c.shortLabel}`, { campaignId: c.id });
    }
  }

  // 4) etkinlik eşleşmesi
  for (const e of events) {
    const hay = [e.title, e.shortDescription, e.category, ...(e.keywords || [])];
    if (hay.some((h) => h && fieldHit(q, h))) {
      addHit(map, e.venueId, 150, `etkinlik: ${e.title}`, { eventId: e.id });
    }
  }

  // sponsorlu küçük bonus + sıralama (tek venue bir kez: Map zaten tekilleştirir)
  const results = [...map.values()];
  for (const r of results) if (r.sponsored) r.score += 50;
  results.sort((a, b) => b.score - a.score || a.venue.order - b.venue.order);
  lastResults = results.slice(0, 20);
  renderResults();
  return lastResults;
}

/* ---------- UI ---------- */
const style = document.createElement("style");
style.textContent = `
#alge-search-dim{position:fixed;inset:0;z-index:30;background:rgba(10,25,40,.35);display:none;}
#alge-search-dim.on{display:block;}
#alge-search{position:fixed;z-index:31;left:0;right:0;bottom:0;top:max(56px, env(safe-area-inset-top));
  background:rgba(248,251,253,.96);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
  border-radius:22px 22px 0 0;box-shadow:0 -12px 44px rgba(10,25,40,.35);display:none;
  flex-direction:column;font-family:system-ui,sans-serif;color:#13293d;max-width:520px;margin:0 auto;}
#alge-search.on{display:flex;}
#alge-search .as-head{display:flex;align-items:center;gap:10px;padding:16px 16px 8px;}
#alge-search .as-head h3{flex:1;margin:0;font-size:17px;}
#alge-search .as-close{width:28px;height:28px;border-radius:999px;border:0;cursor:pointer;
  background:rgba(19,41,61,.08);color:#13293d;font-size:13px;line-height:1;}
#alge-search .as-inputwrap{padding:0 16px 10px;}
#alge-search input{width:100%;box-sizing:border-box;border:1.5px solid rgba(19,41,61,.15);outline:none;
  border-radius:999px;padding:11px 16px;font-size:14px;background:#fff;color:#13293d;font-family:inherit;}
#alge-search input:focus{border-color:#35e0f2;}
#alge-search .as-body{flex:1;overflow-y:auto;padding:4px 16px calc(20px + env(safe-area-inset-bottom));}
#alge-search .as-sec{font-size:11px;font-weight:800;letter-spacing:.08em;color:#5b7186;margin:12px 0 8px;}
#alge-search .as-chips{display:flex;flex-wrap:wrap;gap:7px;}
#alge-search .as-chips button{border:0;border-radius:999px;padding:7px 13px;font-size:12px;font-weight:700;
  background:#fff;color:#13293d;box-shadow:0 1px 5px rgba(10,25,40,.10);cursor:pointer;font-family:inherit;}
.as-trend{display:flex;align-items:center;gap:10px;background:#fff;border-radius:14px;padding:11px 12px;
  margin-bottom:8px;box-shadow:0 2px 8px rgba(10,25,40,.07);cursor:pointer;}
.as-trend .as-trend__txt{flex:1;min-width:0;}
.as-trend b{font-size:13.5px;display:block;}
.as-trend span{font-size:11.5px;color:#5b7186;}
.as-tag{font-size:9.5px;font-weight:800;padding:3px 8px;border-radius:999px;
  background:rgba(53,224,242,.16);color:#0e7a8a;white-space:nowrap;}
.as-tag.sp{background:rgba(212,140,60,.14);color:#9a6420;}
.as-result{background:#fff;border-radius:14px;padding:12px;margin-bottom:9px;
  box-shadow:0 2px 8px rgba(10,25,40,.07);}
.as-result .as-r-head{display:flex;align-items:center;gap:8px;}
.as-result b{font-size:14px;}
.as-result .as-r-cat{font-size:10.5px;font-weight:700;color:#0e7a8a;margin:1px 0 3px;}
.as-result .as-r-why{font-size:10.5px;color:#8a97a5;margin-bottom:3px;}
.as-result .as-r-short{font-size:11.5px;color:#42566b;line-height:1.35;margin-bottom:8px;}
.as-result .as-r-btns{display:flex;gap:7px;}
.as-result .as-r-btns button{border:0;border-radius:999px;padding:7px 13px;font-size:11.5px;font-weight:700;
  cursor:pointer;font-family:inherit;}
.as-result .as-r-btns .as-b-map{background:#13293d;color:#fff;}
.as-result .as-r-btns .as-b-menu{background:rgba(19,41,61,.08);color:#13293d;}
.as-empty{font-size:12.5px;color:#5b7186;padding:14px 4px;}
`;
document.head.appendChild(style);

const dim = document.createElement("div");
dim.id = "alge-search-dim";
document.body.appendChild(dim);

const sheet = document.createElement("div");
sheet.id = "alge-search";
sheet.innerHTML = `
  <div class="as-head"><h3>Ne arıyorsun?</h3><button class="as-close" aria-label="Kapat">✕</button></div>
  <div class="as-inputwrap"><input type="search" placeholder="Mekan, ürün veya ihtiyaç ara" autocomplete="off"></div>
  <div class="as-body"></div>`;
document.body.appendChild(sheet);
const input = sheet.querySelector("input");
const body = sheet.querySelector(".as-body");

const escAttr = (s) => String(s).replace(/"/g, "&quot;");

function renderTrends() {
  const trends = [...trendItems].sort((a, b) => b.priority - a.priority);
  body.innerHTML =
    `<div class="as-sec">TRENDLER</div>` +
    trends.map((t) => `
      <div class="as-trend" data-venue="${escAttr(t.venueId)}">
        <div class="as-trend__txt"><b>${t.title}</b><span>${t.subtitle}</span></div>
        ${t.isSponsored ? '<span class="as-tag sp">Sponsorlu</span>' : ""}
        <span class="as-tag">${t.label}</span>
      </div>`).join("") +
    `<div class="as-sec">POPÜLER ARAMALAR</div>
     <div class="as-chips">${POPULAR.map((p) => `<button data-q="${escAttr(p)}">${p}</button>`).join("")}</div>`;

  body.querySelectorAll(".as-trend").forEach((el) =>
    el.addEventListener("click", () => pickVenue(el.dataset.venue, { source: "search-trend" })));
  body.querySelectorAll(".as-chips button").forEach((el) =>
    el.addEventListener("click", () => { input.value = el.dataset.q; search(el.dataset.q); }));
}

function renderResults() {
  if (!normalizeText(lastQuery)) { renderTrends(); return; }
  if (!lastResults.length) {
    body.innerHTML = `<div class="as-empty">"${lastQuery}" için sonuç bulunamadı.</div>`;
    return;
  }
  body.innerHTML = lastResults.map((r) => `
    <div class="as-result" data-venue="${escAttr(r.venue.id)}">
      <div class="as-r-head"><b>${r.venue.name}</b>${r.sponsored ? '<span class="as-tag sp">Sponsorlu</span>' : ""}</div>
      <div class="as-r-cat">${r.venue.category} · ${r.venue.subcategory}</div>
      <div class="as-r-why">Eşleşme: ${r.reasons.slice(0, 3).join(", ") || "genel"}</div>
      <div class="as-r-short">${r.venue.card.short}</div>
      <div class="as-r-btns">
        <button class="as-b-map" type="button">Haritada Göster</button>
        <button class="as-b-menu" type="button">Menü</button>
      </div>
    </div>`).join("");

  body.querySelectorAll(".as-result").forEach((el) => {
    const vid = el.dataset.venue;
    const item = lastResults.find((r) => r.venue.id === vid);
    const opts = { source: "search", query: lastQuery };
    if (item?.campaignId) { opts.source = "search-campaign"; opts.campaignId = item.campaignId; }
    if (item?.eventId) { opts.source = "search-event"; opts.eventId = item.eventId; }
    el.querySelector(".as-b-map").addEventListener("click", (e) => { e.stopPropagation(); pickVenue(vid, opts); });
    el.querySelector(".as-b-menu").addEventListener("click", (e) => {
      e.stopPropagation(); closeSearch();
      if (window.ALGE_VENUE_RUNTIME?.openVenueMenu) window.ALGE_VENUE_RUNTIME.openVenueMenu(vid);
      else window.ALGE_VENUE_RUNTIME?.focusVenueById(vid, opts);
    });
    el.addEventListener("click", () => pickVenue(vid, opts));
  });
}

function pickVenue(venueId, opts) {
  closeSearch();
  window.ALGE_VENUE_RUNTIME?.focusVenueById(venueId, opts);
}

/* ---------- aç / kapat ---------- */
function openSearch() {
  if (window.__ALGE_POPUP?.isOpen()) window.__ALGE_POPUP.closeOpeningAd();
  document.querySelectorAll(".alge-vsheet.on").forEach((el) => el.classList.remove("on"));
  document.querySelector(".alge-qr-panel")?.classList.remove("on");
  sheet.classList.add("on");
  dim.classList.add("on");
  input.value = lastQuery = "";
  renderTrends();
  setTimeout(() => input.focus(), 120);
}
function closeSearch() {
  sheet.classList.remove("on");
  dim.classList.remove("on");
}

sheet.querySelector(".as-close").addEventListener("click", closeSearch);
dim.addEventListener("click", closeSearch);
window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSearch(); });

let debounce = 0;
input.addEventListener("input", () => {
  window.clearTimeout(debounce);
  debounce = window.setTimeout(() => search(input.value), 120);
});

/* ---------- mevcut tetikleyiciler ----------
   #mtop (üst arama hapı): baseline'da tıklama dinleyicisi yok, doğrudan bağlanır.
   Alt bar "Ara" butonu: eski 3-mekanlık sheet'i açıyor; document capture fazında
   yakalanıp yenisine yönlendirilir (index.html koduna dokunulmaz). */
document.getElementById("mtop")?.addEventListener("click", openSearch);
document.addEventListener("click", (e) => {
  const araBtn = e.target.closest && e.target.closest('#mbar button[data-v="ara"]');
  if (araBtn) { e.stopPropagation(); e.preventDefault(); openSearch(); }
}, true);

window.ALGE_SEARCH_RUNTIME = {
  openSearch,
  closeSearch,
  search,
  getLastQuery: () => lastQuery,
  getLastResults: () => lastResults
};
