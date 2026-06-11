// docs/research/ALGE-QR-Dokuman-1-Mekan-Detay.md -> src/data/venues.js
// Doküman formatı her mekanda aynıdır; bu script alanları birebir aktarır.
// "Bilinmiyor" / "demo önerisi" / "teyit edilmeli" ifadeleri kaynakta nasılsa öyle korunur.
import { readFileSync, writeFileSync } from "node:fs";
import { normalizeText } from "../src/utils/normalizeText.js";

const SRC = "docs/research/ALGE-QR-Dokuman-1-Mekan-Detay.md";
const OUT = "src/data/venues.js";

// Sprint 1 ID standardı (sıra kesin). Doküman normalize'ı farklıysa notes'a yazılır.
const SPRINT_IDS = [
  "mado", "irish-pub", "the-beaver-cafe", "big-bubble-tea", "magnolia-shop-coffee",
  "danilos-pizza", "dospresso", "roberts-coffee", "bragi", "tezgah-burger",
  "colombia-coffee", "yemen-kahvesi", "bahane-lounge", "espressolab", "maydonoz-doner",
  "hamlet-market-01", "doyuyo", "hd-iskender", "tavuk-dunyasi", "okuz-burger",
  "galata-cikolatacisi", "watsons", "decathlon", "pidem", "starbucks",
  "gloria-jeans", "green-salads", "la-rocca-cafe-bistro", "coffees", "mackbear",
  "yotto", "ozsut", "varuna-gezgin", "bereket-doner", "coffee-di-toee",
  "bex-coffee", "mcdonalds", "durumle", "burger-king", "subway",
  "arbys", "popeyes", "kfc", "hmbrgr", "hamlet-market-02",
  "paninaro", "shakespeare"
];

// Zone ataması: order aralığına göre (src/data/zones.js ile aynı plan)
function zoneIdFor(order) {
  if (order <= 9) return "zone-01-west-start";
  if (order <= 18) return "zone-02-west-mid";
  if (order <= 28) return "zone-03-center";
  if (order <= 38) return "zone-04-east-mid";
  return "zone-05-east-end";
}

const md = readFileSync(SRC, "utf-8");
const blocks = md.split(/\n---\n/).filter((b) => /^\s*## \d+\./m.test(b));
if (blocks.length !== 47) {
  console.error(`Beklenen 47 mekan bloğu, bulunan: ${blocks.length}`);
  process.exit(1);
}

function field(block, label) {
  // "**Etiket:** içerik" satırını döndürür
  const re = new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+)`);
  const m = block.match(re);
  return m ? m[1].trim() : "";
}

function part(line, label, stopAtPipe = true) {
  // "Etiket: değer | Sonraki: ..." içinden değeri çeker
  const re = new RegExp(`${label}:\\s*([^|]+)`);
  const m = line.match(re);
  return m ? m[1].trim() : "";
}

function splitList(s, sep = ",") {
  return s.split(sep).map((x) => x.trim()).filter(Boolean);
}

const venues = blocks.map((block) => {
  const head = block.match(/## (\d+)\.\s*([^\n—]+?)(?:\s*—\s*\*([^*]+)\*)?\s*\n/);
  const order = Number(head[1]);
  const name = head[2].trim();
  const headNote = head[3] ? head[3].trim() : "";

  const temel = field(block, "Temel");
  const kart = field(block, "Kart");
  const ozellikler = field(block, "Özellikler");
  const oneCikanLine = block.match(/\*\*Öne çıkan:\*\*\s*(.+)/)[1];
  const menuLine = field(block, "Menü");
  const appLine = field(block, "Uygulama");
  const dijital = field(block, "Dijital");

  const docNormalize = (temel.match(/Normalize:\s*`([^`]+)`/) || [])[1] || "";
  const id = SPRINT_IDS[order - 1];

  const category = part(temel, "Kategori");
  const subcategory = part(temel, "Alt");
  const concept = part(temel, "Konsept");
  const priceLevel = part(temel, "Fiyat");

  const cardShort = part(kart, "Kısa");
  const cardDetail = part(kart, "Detay");
  const features = splitList(ozellikler, "·");
  const featuredProduct = part(oneCikanLine, "^", true) ? oneCikanLine.split("|")[0].trim() : "";
  const campaign = ((oneCikanLine.match(/\*\*Kampanya:\*\*\s*([^|]+)/) || [])[1] || "").trim();
  const promo = ((oneCikanLine.match(/\*\*Promo:\*\*\s*(.+)/) || [])[1] || "").trim();

  const menuCategories = splitList(part(menuLine, "Kategoriler"));
  const topItems = splitList(part(menuLine, "Top 5"));
  const menuKeywords = splitList(part(menuLine, "Keywords"));

  const searchKeywords = splitList(part(appLine, "Search"));
  const filterTags = splitList(part(appLine, "Filtre"));
  const whyChoose = part(appLine, "Neden seçer").replace(/\.$/, ".");
  const directionsQuery = ((appLine.match(/Yol tarifi:\s*"([^"]+)"/) || [])[1] || "").trim();
  const focusType = ((appLine.match(/Odak:\s*`([^`]+)`/) || [])[1] || "").trim();

  const website = part(dijital, "Web");
  const instagram = part(dijital, "IG");
  const phone = (dijital.match(/Tel:\s*(.+)$/) || [])[1]?.trim() || "Bilinmiyor";

  // bayraklar: doküman ifadeleri korunur
  // demoSuggestion: yalnızca mekan düzeyinde işaretliyse (başlık notu veya konsept varsayımı);
  // kampanya düzeyindeki "(demo önerisi)" ifadesi kampanya metninde zaten korunuyor.
  const demoSuggestion = /demo önerisi/i.test(headNote) || /doğrulanamadı|varsayım/i.test(concept);
  const needsVerification = /teyit edilmeli|doğrulanamadı/i.test(block);

  const notes = [];
  if (headNote) notes.push(`Doküman işareti: ${headNote}.`);
  if (docNormalize && docNormalize !== id)
    notes.push(`Doküman normalize \`${docNormalize}\`; Sprint 1 ID standardı gereği \`${id}\` kullanıldı.`);
  const conceptNote = concept.match(/\(([^)]*(?:teyit|doğrulanama|not)[^)]*)\)/i);
  if (conceptNote) notes.push(`Konsept notu: ${conceptNote[1]}.`);

  const x = Math.round(((order - 1) / 46) * 10000) / 10000;

  return {
    id,
    order,
    name,
    normalizedName: normalizeText(name),
    category,
    subcategory,
    concept,
    priceLevel,
    zoneId: zoneIdFor(order),
    focusType,
    mapFocusPoint: { x, y: 0.5 },
    card: {
      short: cardShort,
      detail: cardDetail,
      features,
      featuredProduct: oneCikanLine.split("|")[0].trim(),
      campaign,
      promo
    },
    menu: {
      categories: menuCategories,
      topItems,
      sections: [
        {
          id: `${id}-one-cikanlar`,
          title: "Öne Çıkanlar",
          items: topItems.map((item, i) => ({
            id: `${id}-item-${i + 1}`,
            name: item,
            keywords: menuKeywords.filter((k) =>
              normalizeText(item).includes(normalizeText(k)) ||
              normalizeText(k).includes(normalizeText(item).split(" ")[0])
            )
          }))
        }
      ]
    },
    search: {
      keywords: [...new Set([...searchKeywords, ...menuKeywords])],
      filterTags,
      whyChoose
    },
    directions: { query: directionsQuery },
    digital: {
      website,
      instagram,
      phone,
      menuUrl: "Bilinmiyor"
    },
    flags: { demoSuggestion, needsVerification },
    notes: notes.join(" ")
  };
});

const banner = `// OTOMATİK ÜRETİLDİ — kaynak: ${SRC}
// Yeniden üretmek için: node scripts/build-venues-from-research.mjs
// "Bilinmiyor" / "(demo önerisi)" / "teyit edilmeli" ifadeleri araştırma dokümanından
// bilinçli olarak korunmuştur (Sprint 1 kuralı).
`;
writeFileSync(OUT, banner + "export const venues = " + JSON.stringify(venues, null, 2) + ";\n");
console.log(`yazıldı: ${OUT} (${venues.length} mekan)`);
