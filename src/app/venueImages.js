// Kategori bazlı düşük-KB TEMSİLİ mekan görselleri (Sprint 8.7).
// Gerçek mekan fotoğrafı DEĞİLDİR; demo posterlerden kırpma + marka dokuları.
// Gerçek görseller geldiğinde bu eşleme mekan bazlı path'lerle değiştirilebilir.
import { normalizeText } from "../utils/normalizeText.js";

const BASE = "/assets/venues/";

const RULES = [
  [/dondurma|tatli|cikolata|gelato/, "category-dessert.webp"],
  [/kahvalti/, "category-breakfast.webp"],
  [/burger/, "category-burger.webp"],
  [/pizza|italyan|panini/, "category-pizza.webp"],
  [/pub|bar|lounge|nargile|gece/, "category-pub.webp"],
  [/sushi|wok|uzakdogu/, "category-sushi.webp"],
  [/doner|iskender|durum|pide/, "category-doner.webp"],
  [/fast food|tavuk|sandvic|tost/, "category-fastfood.webp"],
  [/market|bufe/, "category-market.webp"],
  [/kozmetik|kisisel bakim|saglik/, "category-shop.webp"],
  [/spor/, "category-sports.webp"],
  [/kahve|kafe|cafe|icecek|bubble/, "category-cafe.webp"],
  [/restoran|brasserie|bistro|salata|et /, "category-restaurant.webp"]
];

export function getVenueImage(venue) {
  if (!venue) return BASE + "category-restaurant.webp";
  const hay = normalizeText(
    `${venue.subcategory || ""} ${venue.category || ""} ${venue.concept || ""}`
  );
  for (const [re, file] of RULES) if (re.test(hay)) return BASE + file;
  return BASE + "category-restaurant.webp";
}
