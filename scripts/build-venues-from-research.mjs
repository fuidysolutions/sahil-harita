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

/* ---- Seed menü kütüphanesi (Sprint 8.5) ----
   Demo amaçlıdır; resmi menü/fiyat iddiası yoktur. Bölüm başlığı (doküman menü
   kategorisi) anahtar kelimeyle uygun ürün havuzuna eşlenir; mekanın kendi
   topItems'ları ilgili bölüme yerleştirilir. Kural: her mekan >=3 bölüm,
   her bölüm >=4 ürün, toplam >=12 ürün. */
const POOLS = [
  [/sicak kahve|espresso bazli|kahveler|turk kahve|dunya kahve|filtre/, [
    ["Espresso", "Klasik yoğun espresso."], ["Americano", "Espresso ve sıcak su."],
    ["Latte", "Sütlü yumuşak kahve."], ["Flat White", "Yoğun espresso, ince süt dokusu."],
    ["Cappuccino", "Süt köpüklü klasik."], ["Filtre Kahve", "Günün demlemesi."]]],
  [/soguk kahve|soguk icecek|iced|frozen|chiller|frappuccino/, [
    ["Iced Latte", "Buz üstüne süt ve espresso."], ["Iced Americano", "Buzlu sade kahve."],
    ["Cold Brew", "12 saat soğuk demleme."], ["Frozen", "Meyveli buz karışımı."],
    ["Iced Mocha", "Çikolatalı soğuk kahve."]]],
  [/tatli|cheesecake|sutlu/, [
    ["San Sebastian", "Akışkan merkezli yanık cheesecake."], ["Cheesecake", "Günlük dilim."],
    ["Brownie", "Sıcak servis, çikolata soslu."], ["Tiramisu", "Kahveli İtalyan klasiği."],
    ["Profiterol", "Çikolata soslu."], ["Sufle", "Sıcak çikolata dolgulu."]]],
  [/kahvalti/, [
    ["Serpme Kahvaltı", "Zengin köy kahvaltısı, sınırsız çay."], ["Menemen", "Bol domatesli."],
    ["Avokado Tost", "Ekşi maya üstü avokado."], ["Omlet Çeşitleri", "Sade, kaşarlı, mantarlı."],
    ["Simit Tabağı", "Simit, beyaz peynir, domates."]]],
  [/burger/, [
    ["Cheeseburger", "Cheddar'lı klasik."], ["Double Burger", "Çift köfte, yoğun lezzet."],
    ["Tavuk Burger", "Çıtır tavuklu."], ["House Burger", "Mekanın imza burgeri."],
    ["Mini Burger Tabağı", "Üçlü tadım seti."]]],
  [/yan urun|patates|aperatif|baslangic|atistirmalik(?!lar plaj)/, [
    ["Patates Kızartması", "Çıtır, baharatlı."], ["Çıtır Tavuk", "Ballı hardal sosla."],
    ["Soğan Halkası", "Çıtır kaplamalı."], ["Nachos", "Cheddar soslu."]]],
  [/icecekler$|^icecek|mesrubat/, [
    ["Ayran", "Yayık ayranı."], ["Limonata", "Ev yapımı, naneli."],
    ["Buzlu Çay", "Şeftali / limon."], ["Taze Portakal Suyu", "Günlük sıkım."]]],
  [/bira/, [
    ["Fıçı Bira", "Soğuk, taze fıçı."], ["Yerli Şişe Bira", "Klasik seçki."],
    ["İthal Bira", "Dönemsel ithal etiketler."], ["Alkolsüz Bira", "Alkolsüz alternatif."]]],
  [/kokteyl/, [
    ["Mojito", "Nane ve lime ile."], ["Aperol Spritz", "Gün batımı klasiği."],
    ["Gin Tonic", "Aromatik bitkilerle."], ["Margarita", "Tuz kenarlı klasik."]]],
  [/pub atistirmalik/, [
    ["Fish & Chips", "Pub klasiği, tartar sosla."], ["Çıtır Tavuk", "Baharatlı kaplama."],
    ["Patates Sepeti", "Paylaşımlık."], ["Nachos", "Cheddar ve jalapeno."]]],
  [/doner|durum/, [
    ["Et Döner Dürüm", "Lavaşta közlenmiş et döner."], ["Tavuk Döner Dürüm", "Bol malzemeli."],
    ["Porsiyon Döner", "Pilav ve közlenmiş biberle."], ["Pilav Üstü Döner", "Doyurucu klasik."],
    ["Zurna Dürüm", "Büyük boy."]]],
  [/pide|lahmacun|firin/, [
    ["Kıymalı Pide", "Taş fırından."], ["Kuşbaşılı Kaşarlı Pide", "Bol malzemeli."],
    ["Kaşarlı Pide", "Tereyağlı."], ["Lahmacun", "İnce hamur, acılı/acısız."]]],
  [/pizza/, [
    ["Margherita", "Domates, mozzarella, fesleğen."], ["Quattro Formaggi", "Dört peynirli."],
    ["Sucuklu Pizza", "Yerli dokunuş."], ["Vejetaryen Pizza", "Mevsim sebzeli."]]],
  [/makarna/, [
    ["Penne Arrabiata", "Acılı domates soslu."], ["Fettuccine Alfredo", "Kremalı."],
    ["Bolonez", "Kıymalı klasik."], ["Pesto Makarna", "Fesleğen soslu."]]],
  [/salata|bowl|wrap/, [
    ["Sezar Salata", "Izgara tavuklu."], ["Tavuklu Uzun Tabak", "İmza salata."],
    ["Ton Balıklı Salata", "Protein deposu."], ["Protein Bowl", "Kinoa ve tavukla."],
    ["Wrap Çeşitleri", "Tavuklu / sebzeli."]]],
  [/sushi|nigiri/, [
    ["California Roll", "8'li roll."], ["Somonlu Sushi Set", "Günlük somonla."],
    ["Nigiri Tabağı", "Karışık seçki."], ["Gyoza", "Buharda, soya sosla."]]],
  [/wok|noodle/, [
    ["Tavuklu Wok", "Sebzeli, teriyaki soslu."], ["Sebzeli Noodle", "Acı soslu seçenekli."],
    ["Dana Wok", "Körili."], ["Pad Thai", "Fıstıklı klasik."]]],
  [/dondurma|gelato/, [
    ["Kesme Dondurma", "Keçi sütlü Maraş usulü."], ["Külahta İki Top", "Günün çeşitleri."],
    ["Çikolatalı Dondurma", "Belçika çikolatalı."], ["Meyveli Sorbe", "Süt içermez."]]],
  [/ana yemek|izgara|porsiyon/, [
    ["Izgara Köfte", "El yapımı."], ["Antrikot", "Tereyağlı."],
    ["Tavuk Şiş", "Marine edilmiş."], ["Günün Yemeği", "Şefin önerisi."]]],
  [/steak|et menuleri/, [
    ["Antrikot", "Dry-aged, ızgara."], ["Bonfile", "Tereyağında."],
    ["T-Bone", "Paylaşımlık."], ["Kasap Köfte", "Izgara, közlenmiş sebzeyle."]]],
  [/tavuk(?! burger)/, [
    ["Çıtır Tavuk", "Baharatlı kaplama."], ["Izgara Tavuk", "Marine edilmiş."],
    ["Kanat", "Acılı soslu."], ["Köri Soslu Tavuk", "Pilav eşliğinde."]]],
  [/iskender/, [
    ["Klasik İskender", "Tereyağı sosuyla."], ["Kaşarlı İskender", "Bol kaşarlı."],
    ["Yoğurtlu Et", "Közlenmiş biberle."], ["Porsiyon Et Döner", "Sade servis."]]],
  [/tost|kumru/, [
    ["Ayvalık Tostu", "Bol malzemeli."], ["Karışık Tost", "Kaşar ve sucuklu."],
    ["Kaşarlı Tost", "Klasik."], ["Kumru", "İzmir usulü."]]],
  [/panini/, [
    ["Kaşarlı Panini", "Pizza hamuru ekmeğiyle."], ["Tavuklu Panini", "Pesto soslu."],
    ["İtalyan Sucuklu Panini", "Acılı."], ["Vejetaryen Panini", "Közlenmiş sebzeli."]]],
  [/sandvic|sub/, [
    ["Tavuklu Sub", "Taze malzemelerle."], ["Ton Balıklı Sub", "Hafif."],
    ["Köfteli Sub", "Marinara soslu."], ["Sebzeli Sub", "Vejetaryen."]]],
  [/roast beef/, [
    ["Klasik Roast Beef", "İnce dilim rosto."], ["Double Roast Beef", "Çift katlı."],
    ["Çıtır Tavuk Sandviç", "Alternatif seçim."], ["Curly Fries", "Baharatlı kıvırcık patates."]]],
  [/kova|sepet menu/, [
    ["Kova Menü", "Paylaşımlık çıtır tavuk."], ["Sepet Menü", "Tavuk + patates."],
    ["Zinger Menü", "Acılı tavuk burger."], ["Kanat Sepeti", "Soslu kanatlar."]]],
  [/cikolata|truf/, [
    ["Tablet Çikolata", "El yapımı."], ["Truf Kutusu", "Karışık."],
    ["Sıcak Çikolata", "Yoğun, gerçek çikolatayla."], ["Çikolatalı Dondurma", "Günlük üretim."]]],
  [/nargile/, [
    ["Meyveli Nargile", "Günün harmanı."], ["Nane Nargile", "Ferahlatıcı."],
    ["Çift Elma", "Klasik."], ["Kavun Nargile", "Yazlık seçim."]]],
  [/sicak icecek|cay/, [
    ["Çay", "Demleme."], ["Bitki Çayı", "Ihlamur, adaçayı, kuşburnu."],
    ["Türk Kahvesi", "Közde."], ["Sahlep", "Tarçınlı."]]],
  [/soguk icecekler|mesrubatlar/, [
    ["Su", "Soğuk dolaptan."], ["Maden Suyu", "Sade / meyveli."],
    ["Soğuk Çay", "Şeftali / limon."], ["Gazlı İçecekler", "Çeşitli."]]],
  [/atistirmaliklar/, [
    ["Cips", "Çeşitli boylar."], ["Çikolata & Gofret", "Kasayanı seçki."],
    ["Kuruyemiş", "Paket."], ["Bisküvi", "Çeşitli."]]],
  [/plaj urun|plaj ihtiyac/, [
    ["Güneş Kremi", "SPF 30/50."], ["After-Sun", "Güneş sonrası bakım."],
    ["Plaj Topu", "Şişme."], ["Terlik", "Çeşitli numaralar."]]],
  [/temel gida/, [
    ["Ekmek", "Günlük."], ["Süt", "Soğuk dolap."], ["Yumurta", "10'lu."], ["Konserve", "Çeşitli."]]],
  [/cilt bakim|kozmetik/, [
    ["Nemlendirici", "Yüz ve vücut."], ["Yüz Temizleme Jeli", "Tüm cilt tipleri."],
    ["Maske Çeşitleri", "Kağıt / kil."], ["Serum", "C vitaminli."]]],
  [/gunes urun/, [
    ["Güneş Kremi SPF50", "Yüksek koruma."], ["Güneş Spreyi", "Pratik uygulama."],
    ["After-Sun Losyon", "Yatıştırıcı."], ["Bronzlaştırıcı Yağ", "SPF'li seçenekler."]]],
  [/makyaj/, [
    ["Maskara", "Suya dayanıklı."], ["Ruj", "Yaz tonları."],
    ["Fondöten", "Hafif dokulu."], ["BB Krem", "SPF'li."]]],
  [/kisisel bakim/, [
    ["Şampuan", "Çeşitli tipler."], ["Duş Jeli", "Ferahlatıcı."],
    ["Diş Macunu", "Seyahat boyu mevcut."], ["Deodorant", "Çeşitli."]]],
  [/vitamin/, [
    ["Multivitamin", "Günlük destek."], ["C Vitamini", "Efervesan."],
    ["Magnezyum", "Tablet."], ["Güneş Sonrası Elektrolit", "Toz içecek."]]],
  [/yuzme/, [
    ["Deniz Gözlüğü", "Buğu önleyicili."], ["Mayo", "Kadın / erkek / çocuk."],
    ["Bone", "Silikon."], ["Şnorkel Set", "Maske + şnorkel."]]],
  [/fitness|kosu/, [
    ["Koşu Ayakkabısı", "Hafif taban."], ["Spor Tişört", "Nefes alan kumaş."],
    ["Tayt", "Esnek."], ["Yoga Matı", "Kaymaz."]]],
  [/kamp/, [
    ["Çadır", "2-4 kişilik."], ["Kamp Sandalyesi", "Katlanır."],
    ["Termos", "Paslanmaz."], ["El Feneri", "Şarjlı."]]],
  [/bisiklet/, [
    ["Şehir Bisikleti", "Konfor odaklı."], ["Kask", "Ayarlanabilir."],
    ["Bisiklet Işığı", "USB şarjlı."], ["Matara", "750 ml."]]],
  [/plaj spor/, [
    ["Plaj Raketi", "Toplu set."], ["Plaj Topu", "Şişme."],
    ["Frizbi", "Yumuşak kenarlı."], ["Deniz Yatağı", "Şişme."]]],
  [/bowllar|granola/, [
    ["Granola Bowl", "Yoğurt ve mevsim meyveli."], ["Acai Bowl", "Taze meyveli."],
    ["Smoothie Bowl", "Muz ve yaban mersini."], ["Protein Bowl", "Kinoa ve tavukla."]]],
  [/dunya mutfagi/, [
    ["Dünya Kahveleri Seçkisi", "Origin çekirdekler."], ["Meksika Tabağı", "Fajita ve dip soslar."],
    ["Asya Noodle", "Sebzeli."], ["Akdeniz Mezeleri", "Paylaşımlık."]]],
  [/biralar ve kokteyller|gece/, [
    ["Fıçı Bira", "Soğuk, taze."], ["Kokteyl Seçkisi", "Barmen önerisi."],
    ["Shot Tabağı", "Paylaşımlık."], ["Mocktail", "Alkolsüz kokteyl."]]]
];

const titleCaseTr = (s) =>
  s.split(/\s+/).map((w) => w ? w[0].toLocaleUpperCase("tr") + w.slice(1) : w).join(" ");

function poolFor(title) {
  const n = normalizeText(title);
  for (const [re, items] of POOLS) if (re.test(n)) return items;
  return null;
}

function buildSections(id, categories, topItems) {
  const cats = [...categories];
  while (cats.length < 3) cats.push(["İçecekler", "Atıştırmalıklar"][cats.length % 2]);
  const usedTop = new Set();
  const sections = cats.slice(0, 5).map((cat, si) => {
    const title = titleCaseTr(cat.trim());
    const pool = poolFor(title) || [];
    const items = pool.slice(0, 5).map(([name, description]) => ({ name, description }));
    // mekanın kendi öne çıkanları uygun bölüme eklenir
    for (const t of topItems) {
      if (usedTop.has(t)) continue;
      const tn = normalizeText(t);
      const fits = poolFor(title) && (normalizeText(title).split(" ").some((w) => tn.includes(w.slice(0, 5))) ||
        items.some((it) => normalizeText(it.name) === tn));
      if (fits && !items.some((it) => normalizeText(it.name) === tn)) {
        items.unshift({ name: titleCaseTr(t), description: "Mekanın öne çıkanlarından." });
        usedTop.add(t);
      }
    }
    // havuz eşleşmediyse topItems + dolgu ile en az 4'e tamamla
    let fi = 0;
    const FILLER = [["Günün Önerisi", "Sorunuz."], ["Mevsim Seçkisi", "Dönemsel."],
      ["Paylaşımlık Tabak", "2-3 kişilik."], ["Ev Yapımı Limonata", "Naneli."]];
    while (items.length < 4) {
      const t = topItems.find((x) => !usedTop.has(x));
      if (t) { items.push({ name: titleCaseTr(t), description: "Mekanın öne çıkanlarından." }); usedTop.add(t); }
      else { items.push({ name: FILLER[fi % 4][0], description: FILLER[fi % 4][1] }); fi++; }
    }
    return {
      id: `${id}-sec-${si + 1}`,
      title,
      items: items.slice(0, 6).map((it, ii) => ({
        id: `${id}-sec-${si + 1}-item-${ii + 1}`,
        name: it.name,
        description: it.description,
        tags: [normalizeText(title)]
      }))
    };
  });
  return sections;
}

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
      sections: buildSections(id, menuCategories, topItems)
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
