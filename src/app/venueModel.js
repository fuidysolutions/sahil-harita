// ALGE venue model adapter — gerçek venues.js verisini UI'ın beklediği şekle normalize eder.
// venues.js SOURCE OF TRUTH kalır; burada yalnız UI alanlarına eşleme + window'a yayın yapılır.
// Inline UI (index.html) bu listeyi "alge:venues-ready" olayında alır (modüller inline'dan sonra çalışır).
import { venues } from "../data/index.js";
import { xToUV } from "./mapAnchors.js";
import { getVenueImage } from "./venueImages.js";

// Sponsorlu (reklam alanı) mekanlar — gerçek ID'ler. En az 3.
export const SPONSORED_IDS = ["mado", "danilos-pizza", "roberts-coffee"];

// UI kategori grubu (Yerler/Fırsatlar filtreleri): yeme / kafe / beach / alisveris
function mcatOf(v) {
  const ft = (v.focusType || "").toLowerCase();
  if (ft === "kafe") return "kafe";
  if (ft === "market" || ft === "mağaza" || ft === "magaza") return "alisveris";
  const c = (v.category || "").toLocaleLowerCase("tr");
  if (/beach|plaj|sahil/.test(c)) return "beach";
  if (/mağaza|magaza|market|alışveriş|kozmetik/.test(c)) return "alisveris";
  if (/tatlı|dondurma|kahve|kafe/.test(c)) return "kafe";
  return "yeme";
}

function toUI(v) {
  const uv = xToUV((v.mapFocusPoint && v.mapFocusPoint.x) || 0); // flight u,v (Mado↔Shakespeare anchor)
  const card = v.card || {};
  const camp = card.campaign || "";
  const tags = [["Açık", "ok"]];
  if (camp) tags.push(["Kampanya var", "amber"]);
  const thumb = getVenueImage(v);
  const feat = card.featuredProduct
    ? { name: card.featuredProduct, desc: card.promo || card.short || "", img: thumb } // gerçek veride fiyat yok
    : null;
  return {
    id: v.id,
    name: v.name,
    cat: v.category || "",
    mcat: mcatOf(v),
    desc: card.detail || card.short || "",
    desc2: card.short || "",
    u: uv.u,
    v: uv.v,
    tags,
    hours: "",            // gerçek veride çalışma saati yok -> UI'da fallback (gösterilmez)
    camp,
    feat,
    thumb,
    priceLevel: v.priceLevel || "",
    features: card.features || [],
    menu: v.menu || null, // {categories, topItems, sections[{title, items[{name, description}]}]}
    sponsored: false
  };
}

const list = venues.map(toUI);
const spon = new Set(SPONSORED_IDS);
list.forEach((v) => { v.sponsored = spon.has(v.id); });

window.ALGE_VENUES = list;
window.ALGE_SPONSORED_IDS = SPONSORED_IDS;
window.dispatchEvent(new CustomEvent("alge:venues-ready", { detail: { count: list.length } }));
