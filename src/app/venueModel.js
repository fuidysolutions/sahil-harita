// ALGE venue model adapter — gerçek venues.js verisini UI'ın beklediği şekle normalize eder.
// venues.js SOURCE OF TRUTH kalır; burada yalnız UI alanlarına eşleme + window'a yayın yapılır.
// Inline UI (index.html) bu listeyi "alge:venues-ready" olayında alır (modüller inline'dan sonra çalışır).
import { venues } from "../data/index.js";
import { xToUV } from "./mapAnchors.js";
import { getVenueImage } from "./venueImages.js";
import { cleanText, hoursOf, enrichMenu, featPrice } from "./demoEnrich.js";

// Harf/düz renkli yer tutucu görseller (gerçek fotoğraf değil) — anasayfa karuselinde gösterilmez
const PLACEHOLDER_IMG = /category-(market|shop|sports)\.webp$/;

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
  const camp = cleanText(card.campaign);
  const tags = [["Açık", "ok"]];
  if (camp) tags.push(["Kampanya var", "amber"]);
  const thumb = getVenueImage(v);
  const menu = enrichMenu(v);                     // demo: fiyat + popüler işareti (demoEnrich.js)
  const feat = card.featuredProduct
    ? { name: cleanText(card.featuredProduct), desc: cleanText(card.promo || card.short),
        img: thumb, price: featPrice(v, menu, card.featuredProduct) }
    : null;
  return {
    id: v.id,
    name: v.name,
    cat: v.category || "",
    mcat: mcatOf(v),
    desc: cleanText(card.detail || card.short),
    desc2: cleanText(card.short),
    u: uv.u,
    v: uv.v,
    tags,
    hours: hoursOf(v),    // demo: kategori bazlı örnek çalışma saati
    camp,
    feat,
    thumb,
    hasPhoto: !PLACEHOLDER_IMG.test(thumb),
    priceLevel: v.priceLevel || "",
    features: (card.features || []).map(cleanText),
    menu,                 // {categories, topItems[{name,price}], sections[{title, items[{name, description, price, popular}]}]}
    sponsored: false
  };
}

const list = venues.map(toUI);
const spon = new Set(SPONSORED_IDS);
list.forEach((v) => { v.sponsored = spon.has(v.id); });

window.ALGE_VENUES = list;
window.ALGE_SPONSORED_IDS = SPONSORED_IDS;
window.dispatchEvent(new CustomEvent("alge:venues-ready", { detail: { count: list.length } }));
