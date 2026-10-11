// Demo zenginleştirme (Eki 2026): menü fiyatları, popüler işaretleri, çalışma saatleri, metin temizliği.
// venues.js (araştırmadan üretilen kaynak) DEĞİŞMEZ; bu katman yalnız UI modeline örnek değer ekler.
// Fiyatlar 2026 Antalya sahil AVM seviyesinde ÖRNEK değerlerdir (gerçek mekan fiyatı değildir).
import { normalizeText } from "../utils/normalizeText.js";

// Orta fiyat seviyesinde taban fiyatlar (₺). Anahtar: normalizeText(ürün adı)
const BASE = {
  "kesme dondurma": 290, "kulahta iki top": 170, "cikolatali dondurma": 190, "meyveli sorbe": 180,
  "san sebastian": 290, "cheesecake": 270, "brownie": 220, "tiramisu": 270, "profiterol": 240,
  "serpme kahvalti": 890, "menemen": 290, "avokado tost": 340, "omlet cesitleri": 270, "simit tabagi": 260,
  "izgara kofte": 520, "antrikot": 1150, "tavuk sis": 460, "gunun yemegi": 390,
  "turk kahvesi": 120, "espresso": 110, "americano": 160, "latte": 180, "flat white": 185, "cappuccino": 175,
  "fici bira": 240, "yerli sise bira": 220, "ithal bira": 290, "alkolsuz bira": 190,
  "kokteyl": 520, "mojito": 480, "aperol spritz": 540, "gin tonic": 520, "margarita": 520,
  "patates kizartmasi": 170, "citir tavuk": 380, "sogan halkasi": 180, "nachos": 320,
  "burger": 460, "cheeseburger": 490, "double burger": 620, "tavuk burger": 410, "house burger": 560,
  "mini burger tabagi": 540, "filtre kahve": 150, "iced latte": 195, "iced americano": 175, "cold brew": 200,
  "frozen": 210, "iced mocha": 215, "taro bubble tea": 230, "cay": 45, "bitki cayi": 110, "sahlep": 160,
  "mango cayi": 150, "cilekli smoothie": 230, "matcha latte": 230, "milkshake": 240,
  "gunun onerisi": 420, "mevsim seckisi": 380, "paylasimlik tabak": 690, "ev yapimi limonata": 160,
  "margherita": 420, "quattro formaggi": 520, "sucuklu pizza": 480, "vejetaryen pizza": 450,
  "penne arrabiata": 390, "fettuccine alfredo": 460, "bolonez": 440, "pesto makarna": 430,
  "sezar salata": 390, "tavuklu uzun tabak": 450, "ton balikli salata": 420, "protein bowl": 450,
  "wrap cesitleri": 360, "gelato": 190, "tavuklu sub": 330, "ton balikli sub": 350, "kofteli sub": 340,
  "sebzeli sub": 290, "bragi burger": 640, "bonfile": 1350, "t-bone": 1890, "kasap kofte": 560,
  "citir tavuk burger": 420, "kaburgali burger": 690, "ayran": 55, "limonata": 140, "buzlu cay": 120,
  "taze portakal suyu": 160, "damla sakizli kahve": 140, "dibek kahvesi": 140, "kozde turk kahvesi": 150,
  "waffle": 340, "nargile": 650, "meyveli nargile": 700, "nane nargile": 680, "cift elma": 680,
  "kavun nargile": 700, "et durum": 390, "et doner durum": 380, "tavuk doner durum": 260,
  "porsiyon doner": 460, "pilav ustu doner": 490, "zurna durum": 450, "tavuk durum": 270,
  "soguk icecek": 85, "dondurma": 120, "ayvalik tostu": 290, "karisik tost": 240, "kasarli tost": 210,
  "kumru": 280, "patates": 150, "klasik iskender": 590, "kasarli iskender": 640, "yogurtlu et": 620,
  "porsiyon et doner": 540, "et doner": 480, "kiymali pide": 340, "kusbasili kasarli pide": 460,
  "kasarli pide": 300, "lahmacun": 140, "kori soslu tavuk": 360, "special tavuk": 390, "izgara tavuk": 370,
  "kanat": 340, "kasap kofte burger": 520, "double cheeseburger": 590, "okuz burger": 640,
  "tablet cikolata": 190, "truf kutusu": 420, "sicak cikolata": 180, "caramel frappuccino": 245,
  "chiller": 220, "tavuklu salata": 390, "odun firini pizza": 480, "makarna": 400, "california roll": 420,
  "somonlu sushi set": 690, "nigiri tabagi": 560, "gyoza": 320, "tavuklu wok": 420, "sebzeli noodle": 350,
  "dana wok": 520, "pad thai": 440, "noodle": 360, "dunya kahveleri": 170, "dunya kahveleri seckisi": 190,
  "meksika tabagi": 480, "asya noodle": 420, "akdeniz mezeleri": 460, "ekmek arasi doner": 260, "menu": 420,
  "kasarli et durum": 430, "salata": 320, "cookie": 110, "citir tavuk sandvic": 340, "klasik roast beef": 390,
  "kova menu": 890, "sepet menu": 520, "zinger menu": 420, "kanat sepeti": 450, "zinger burger": 330,
  "truflu burger": 690, "signature burger": 640, "parmesan patates": 220, "kasarli panini": 260,
  "tavuklu panini": 320, "italyan sucuklu panini": 340, "vejetaryen panini": 290,
  // menü sekmesinde değil yalnız "Öne Çıkanlar"da geçenler
  "kunefe": 290, "baklava": 360, "kesme maras dondurmasi": 290, "big mac": 390, "mcchicken": 330,
  "nugget": 260, "mcflurry": 170, "fish chips": 520,
  "kurabiye": 110, "caramel macchiato": 210, "panini": 300, "churros patates": 190, "cerez tabagi": 320,
  "izmir bombasi": 150, "sufle": 240, "kusbasili pide": 420, "sandvic": 290, "kazandibi": 220,
  "whopper": 420, "king chicken": 340, "sundae": 140, "curly fries": 160, "biscuit": 90,
  "shakespeare tost": 360, "granola bowl": 330, "tavuk dunyasi special": 390, "roast beef sandvic": 390,
  "signature hmbrgr": 640, "klasik italyan panini": 340
};
// Perakende (market / mağaza) — seviye çarpanı uygulanmaz, ...9 biter
const RETAIL = {
  "gunes kremi": 449, "after-sun": 329, "plaj topu": 129, "terlik": 179, "ekmek": 20, "sut": 49,
  "yumurta": 129, "konserve": 89, "nemlendirici": 389, "yuz temizleme jeli": 279, "maske cesitleri": 89,
  "serum": 449, "makyaj urunleri": 299, "maskara": 329, "ruj": 279, "fondoten": 499, "bb krem": 349,
  "gunes kremi spf50": 549, "gunes spreyi": 499, "after-sun losyon": 349, "bronzlastirici yag": 399,
  "sampuan": 149, "dus jeli": 129, "dis macunu": 99, "deodorant": 159, "multivitamin": 399, "c vitamini": 249,
  "magnezyum": 349, "gunes sonrasi elektrolit": 189, "deniz gozlugu": 349, "mayo": 599, "bone": 199,
  "snorkel set": 899, "kosu ayakkabisi": 2499, "spor tisort": 399, "tayt": 599, "yoga mati": 549,
  "cadir": 2999, "kamp sandalyesi": 999, "termos": 699, "el feneri": 349, "sehir bisikleti": 12999,
  "kask": 899, "bisiklet isigi": 299, "matara": 199, "plaj raketi": 349, "spor ayakkabi": 1999, "cips": 59
};
const BRAND_CASE = { "mcchicken": "McChicken", "mcflurry": "McFlurry", "big mac": "Big Mac", "izmir bombasi": "İzmir Bombası" };
function titleTR(s) { return s.split(" ").map((w) => w ? w.charAt(0).toLocaleUpperCase("tr") + w.slice(1) : w).join(" "); }
const LEVEL = { "ucuz": 0.88, "orta": 1, "orta-ust": 1.15 };

function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
const fmt = (n) => "₺" + n.toLocaleString("tr-TR");

// "(demo önerisi)", "(teyit edilmeli)" gibi iç notları görünür metinden ayıkla
export function cleanText(s) {
  return String(s || "")
    .replace(/\s*\((?:[^)]*\b(?:demo|teyit|örnek|ornek|bilinmiyor)\b[^)]*)\)/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export function priceOf(name, venue) {
  const k = normalizeText(name);
  const retail = RETAIL[k];
  const jit = 0.94 + (hash(venue.id + "|" + k) % 1300) / 10000;          // 0.94 – 1.07, mekana özgü sabit
  if (retail != null) {
    if (retail < 30) return retail;
    const f = 0.97 + (hash(venue.id + k) % 60) / 1000;                  // %3 – %9 mağaza farkı
    return Math.max(19, Math.round((retail * f) / 10) * 10 - 1);
  }
  const base = BASE[k];
  if (base == null) return null;
  const lv = LEVEL[normalizeText(venue.priceLevel || "orta")] || 1;
  const v = base * lv * jit;
  return v < 100 ? Math.round(v / 5) * 5 : Math.round(v / 10) * 10;
}

// Kategori bazlı örnek çalışma saatleri
export function hoursOf(venue) {
  const ft = normalizeText(venue.focusType || "");
  const cat = normalizeText(venue.category || "");
  if (ft === "market") return "07:30 – 23:30";
  if (ft === "magaza" || /magaza/.test(cat)) return "10:00 – 22:00";
  if (/pub|bar|lounge/.test(cat) || ft === "mekan") return "12:00 – 02:00";
  if (ft === "fast-food") return "10:00 – 01:00";
  if (ft === "kafe") return "08:00 – 00:00";
  return "10:00 – 23:30";
}

// venue.menu → fiyatlı + temiz kopya; topItems ürün eşleşmesi popüler işareti alır
export function enrichMenu(venue) {
  const menu = venue.menu;
  if (!menu || typeof menu !== "object" || Array.isArray(menu)) return menu || null;
  const top = new Set((menu.topItems || []).map(normalizeText));
  const priceByName = new Map();
  const sections = (menu.sections || []).map((sec) => ({
    ...sec,
    title: cleanText(sec.title),
    items: (sec.items || []).map((it) => {
      const p = priceOf(it.name, venue);
      const n = normalizeText(it.name);
      if (p != null) priceByName.set(n, p);
      return { ...it, name: cleanText(it.name), description: cleanText(it.description),
        price: p != null ? fmt(p) : "", popular: top.has(n) };
    })
  }));
  const nameByNorm = new Map();
  sections.forEach((sec) => sec.items.forEach((it) => nameByNorm.set(normalizeText(it.name), it.name)));
  const topItems = (menu.topItems || []).map((t) => {
    const n = normalizeText(t);
    let p = priceByName.get(n);
    if (p == null) p = priceOf(t, venue);
    if (p == null) for (const [k, v] of priceByName) { if (k.includes(n) || n.includes(k)) { p = v; break; } }
    const nm = nameByNorm.get(n) || BRAND_CASE[n] || titleTR(cleanText(t));
    return { name: nm, price: p != null ? fmt(p) : "" };
  });
  return { ...menu, sections, topItems, _priceByName: priceByName };
}

// öne çıkan ürünün fiyatı (menüde eşleşen ürün; yoksa tablo)
export function featPrice(venue, enrichedMenu, featName) {
  if (!featName) return "";
  const n = normalizeText(featName);
  const map = (enrichedMenu && enrichedMenu._priceByName) || new Map();
  let p = map.get(n);
  if (p == null) for (const [k, v] of map) { if (n.includes(k) || k.includes(n)) { p = v; break; } }
  if (p == null) p = priceOf(featName, venue);
  return p != null ? fmt(p) : "";
}
