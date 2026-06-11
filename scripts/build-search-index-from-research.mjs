// docs/research/ALGE-QR-Dokuman-3 Bölüm 1 -> src/data/searchIndex.js
// Tablo dokümandan birebir aktarılmıştır; "a / b" başlıkları ayrı keyword'lere açılır.
import { writeFileSync } from "node:fs";
import { normalizeText } from "../src/utils/normalizeText.js";

// Doküman 3'te geçen mekan adı -> Sprint ID
const NAME_TO_ID = {
  "Mado": "mado", "Irish Pub": "irish-pub", "The Beaver Cafe": "the-beaver-cafe",
  "Big Bubble Tea": "big-bubble-tea", "Magnolia Shop Coffee": "magnolia-shop-coffee",
  "Danilos Pizza": "danilos-pizza", "Dospresso": "dospresso", "Robert's": "roberts-coffee",
  "Bragi": "bragi", "Tezgah Burger": "tezgah-burger", "Colombia": "colombia-coffee",
  "Yemen Kahvesi": "yemen-kahvesi", "Bahane Lounge": "bahane-lounge", "Espressolab": "espressolab",
  "Maydonoz Döner": "maydonoz-doner", "Hamlet Market (1)": "hamlet-market-01",
  "Doyuyo": "doyuyo", "HD İskender": "hd-iskender", "Tavuk Dünyası": "tavuk-dunyasi",
  "Öküz": "okuz-burger", "Galata Çikolatacısı": "galata-cikolatacisi", "Watsons": "watsons",
  "Decathlon": "decathlon", "Pidem": "pidem", "Starbucks": "starbucks",
  "Gloria Jeans": "gloria-jeans", "Green Salads": "green-salads",
  "La Rocca Cafe & Bistro": "la-rocca-cafe-bistro", "Coffee's": "coffees", "Mackbear": "mackbear",
  "Yotto": "yotto", "Özsüt": "ozsut", "Varuna": "varuna-gezgin", "Bereket Döner": "bereket-doner",
  "Coffee Di Toee": "coffee-di-toee", "Bex": "bex-coffee", "McDonald's": "mcdonalds",
  "Dürümlé": "durumle", "Burger King": "burger-king", "Subway": "subway", "Arby's": "arbys",
  "Popeyes": "popeyes", "KFC": "kfc", "HMBRGR": "hmbrgr", "Hamlet Market (2)": "hamlet-market-02",
  "Paninaro": "paninaro", "Shakespeare": "shakespeare"
};

// [keyword(ler), [mekan adları], öncelik, resultType]
// Doküman 3 Bölüm 1 birebir; "a / b" başlıkları virgülle ayrı keyword olarak girildi.
const TABLE = [
  // Kahve & içecek
  [["kahve"], ["Mado","The Beaver Cafe","Magnolia Shop Coffee","Dospresso","Robert's","Colombia","Yemen Kahvesi","Espressolab","Starbucks","Gloria Jeans","Coffee's","Mackbear","Özsüt","Varuna","Coffee Di Toee","Bex","Galata Çikolatacısı","Shakespeare","La Rocca Cafe & Bistro"], 100],
  [["filtre kahve"], ["Starbucks","Espressolab","Gloria Jeans","The Beaver Cafe","Colombia","Coffee's","Dospresso","Robert's","Bex","Coffee Di Toee","Mackbear","Shakespeare"], 95],
  [["latte"], ["Starbucks","Espressolab","Gloria Jeans","Mackbear","Dospresso","The Beaver Cafe","Magnolia Shop Coffee","Colombia","Bex","Coffee Di Toee","Robert's","Shakespeare"], 90],
  [["espresso"], ["Coffee Di Toee","Espressolab","Starbucks","Dospresso","Mackbear","Bex"], 85],
  [["türk kahvesi"], ["Yemen Kahvesi","Mado","Bahane Lounge","Özsüt"], 85],
  [["soğuk kahve","iced"], ["Dospresso","Espressolab","Starbucks","Gloria Jeans","Mackbear","Bex","Big Bubble Tea"], 85],
  [["frozen"], ["Dospresso","Mackbear"], 60],
  [["frappuccino"], ["Starbucks"], 60],
  [["chiller"], ["Gloria Jeans"], 60],
  [["bubble tea"], ["Big Bubble Tea"], 80],
  [["smoothie"], ["Big Bubble Tea"], 60],
  [["milkshake"], ["Big Bubble Tea","Tezgah Burger","HMBRGR","Arby's"], 70],
  [["çay"], ["Yemen Kahvesi","Bahane Lounge","Mado","Özsüt","Big Bubble Tea"], 70],
  [["limonata"], ["Bex","Öküz","Paninaro","The Beaver Cafe","HMBRGR"], 60],
  [["bira"], ["Irish Pub","Bragi"], 70],
  [["kokteyl"], ["Irish Pub","Bragi","Varuna","La Rocca Cafe & Bistro"], 70],
  // Tatlı & dondurma
  [["dondurma"], ["Mado","Robert's","Özsüt","Galata Çikolatacısı","McDonald's","Hamlet Market (1)","Hamlet Market (2)"], 90],
  [["gelato"], ["Robert's"], 60],
  [["tatlı"], ["Mado","Özsüt","Galata Çikolatacısı","The Beaver Cafe","Gloria Jeans","Mackbear","Coffee Di Toee","Robert's"], 85],
  [["çikolata"], ["Galata Çikolatacısı"], 75],
  [["sıcak çikolata"], ["Galata Çikolatacısı"], 65],
  [["künefe"], ["Mado","HD İskender","Pidem"], 65],
  [["kazandibi"], ["Özsüt"], 60],
  [["cheesecake"], ["Özsüt","The Beaver Cafe","Colombia","Starbucks","Robert's"], 60],
  [["tiramisu"], ["Danilos Pizza","Coffee Di Toee"], 55],
  [["waffle"], ["Yemen Kahvesi","Varuna"], 60],
  [["san sebastian"], ["Mackbear"], 50],
  // Kahvaltı
  [["kahvaltı"], ["Mado","Shakespeare","La Rocca Cafe & Bistro","Özsüt","McDonald's"], 95],
  [["serpme kahvaltı"], ["Mado","Shakespeare","La Rocca Cafe & Bistro","Özsüt"], 90],
  [["tost"], ["Doyuyo","Shakespeare"], 75],
  // Burger & fast food
  [["burger"], ["Burger King","McDonald's","Tezgah Burger","HMBRGR","Öküz","Bragi","Varuna","Shakespeare","Irish Pub"], 100],
  [["hamburger"], ["Tezgah Burger","Burger King","McDonald's","HMBRGR","Öküz"], 90],
  [["whopper"], ["Burger King"], 60],
  [["big mac"], ["McDonald's"], 60],
  [["gourmet burger"], ["HMBRGR","Bragi","Öküz","Tezgah Burger"], 70],
  [["patates"], ["McDonald's","Burger King","KFC","Popeyes","Arby's","Tezgah Burger","HMBRGR","Öküz","Dürümlé"], 65],
  [["nugget"], ["McDonald's","Burger King","Arby's"], 60],
  [["fast food"], ["McDonald's","Burger King","KFC","Popeyes","Arby's","Subway","Maydonoz Döner","Bereket Döner"], 90, "category"],
  // Tavuk
  [["tavuk"], ["Tavuk Dünyası","KFC","Popeyes","Maydonoz Döner","Bereket Döner","Tezgah Burger","HMBRGR"], 90],
  [["çıtır tavuk"], ["KFC","Popeyes","Tavuk Dünyası","Bragi"], 80],
  [["kanat"], ["KFC","Popeyes"], 65],
  [["zinger"], ["KFC"], 55],
  [["kova"], ["KFC"], 65],
  [["ızgara tavuk"], ["Tavuk Dünyası"], 65],
  // Döner & dürüm & Türk mutfağı
  [["döner"], ["Maydonoz Döner","Bereket Döner","HD İskender","Dürümlé"], 90],
  [["dürüm"], ["Maydonoz Döner","Bereket Döner","Dürümlé","Tavuk Dünyası"], 85],
  [["iskender"], ["HD İskender"], 80],
  [["pide"], ["Pidem","HD İskender"], 80],
  [["lahmacun"], ["Pidem"], 70],
  [["kumru"], ["Doyuyo"], 55],
  [["ayran"], ["Maydonoz Döner","Bereket Döner","HD İskender","Pidem","Doyuyo","Dürümlé"], 55],
  // Pizza & İtalyan
  [["pizza"], ["Danilos Pizza","La Rocca Cafe & Bistro"], 95],
  [["makarna"], ["Danilos Pizza","La Rocca Cafe & Bistro","Varuna","Shakespeare"], 75],
  [["italyan"], ["Danilos Pizza","Coffee Di Toee","Paninaro"], 70],
  [["panini"], ["Paninaro","Robert's"], 65],
  // Sandviç & hafif
  [["sandviç"], ["Subway","Doyuyo","Paninaro","Arby's","Coffee's"], 80],
  [["roast beef"], ["Arby's"], 60],
  [["salata"], ["Green Salads","Subway","Danilos Pizza","Tavuk Dünyası","Pidem","Paninaro"], 80],
  [["sağlıklı","fit","diyet"], ["Green Salads","Subway"], 75],
  [["bowl"], ["Green Salads","Shakespeare"], 65],
  // Uzakdoğu
  [["sushi"], ["Yotto"], 80],
  [["wok"], ["Yotto"], 70],
  [["noodle"], ["Yotto"], 65],
  [["japon","asya"], ["Yotto"], 65],
  // Steak & et
  [["steak"], ["Bragi","La Rocca Cafe & Bistro"], 75],
  [["et"], ["Bragi","Öküz","HD İskender","Maydonoz Döner","Bereket Döner","Dürümlé"], 65],
  // Alışveriş & ihtiyaç
  [["kozmetik"], ["Watsons"], 80, "category"],
  [["güneş kremi"], ["Watsons","Hamlet Market (1)","Hamlet Market (2)"], 85],
  [["makyaj"], ["Watsons"], 65],
  [["şampuan"], ["Watsons"], 60],
  [["spor"], ["Decathlon"], 80, "category"],
  [["mayo"], ["Decathlon"], 75],
  [["şnorkel","deniz gözlüğü"], ["Decathlon"], 70],
  [["market"], ["Hamlet Market (1)","Hamlet Market (2)"], 85, "category"],
  [["su"], ["Hamlet Market (1)","Hamlet Market (2)"], 75],
  [["hediyelik"], ["Galata Çikolatacısı","Magnolia Shop Coffee"], 65],
  // Mekan & deneyim
  [["nargile"], ["Yemen Kahvesi","Bahane Lounge"], 80],
  [["canlı müzik"], ["Irish Pub","La Rocca Cafe & Bistro"], 80],
  [["pub","bar","gece"], ["Irish Pub","Bragi","Bahane Lounge"], 75],
  [["çalışma","wifi","laptop"], ["Coffee's","Espressolab","Starbucks"], 70],
  [["çocuk","aile"], ["McDonald's","Mado","Tavuk Dünyası","Danilos Pizza","HD İskender"], 75]
];

// kampanya / etkinlik bağları (keyword -> id'ler)
const CAMPAIGN_LINKS = {
  "kahvaltı": ["camp-mado-serpme", "camp-shakespeare-kahvalti"],
  "serpme kahvaltı": ["camp-mado-serpme", "camp-shakespeare-kahvalti"],
  "çay": ["camp-mado-serpme"],
  "burger": ["camp-tezgah-burger-menu"],
  "hamburger": ["camp-tezgah-burger-menu"],
  "pizza": ["camp-danilos-ogle-pizza"],
  "bira": ["camp-irish-pub-happy-hour"],
  "döner": ["camp-maydonoz-durum-ayran"],
  "dürüm": ["camp-maydonoz-durum-ayran"],
  "güneş kremi": ["camp-watsons-gunes"],
  "kozmetik": ["camp-watsons-gunes"],
  "spor": ["camp-decathlon-sezon"],
  "mayo": ["camp-decathlon-sezon"],
  "şnorkel": ["camp-decathlon-sezon"],
  "salata": ["camp-green-salads-menu"],
  "sağlıklı": ["camp-green-salads-menu"],
  "tavuk": ["camp-kfc-kova"],
  "kova": ["camp-kfc-kova"],
  "kahve": ["camp-espressolab-puan", "camp-starbucks-rewards"],
  "filtre kahve": ["camp-espressolab-puan"]
};
const EVENT_LINKS = {
  "canlı müzik": ["event-irish-pub-canli-muzik", "event-la-rocca-latin-gecesi"],
  "pub": ["event-irish-pub-canli-muzik"],
  "gece": ["event-irish-pub-canli-muzik", "event-bragi-sunset-dj", "event-la-rocca-latin-gecesi"],
  "kokteyl": ["event-bragi-sunset-dj"],
  "aile": ["event-tavuk-dunyasi-aile-gunu"],
  "çocuk": ["event-tavuk-dunyasi-aile-gunu"],
  "kahvaltı": ["event-shakespeare-kahvalti-bulusmasi"],
  "serpme kahvaltı": ["event-shakespeare-kahvalti-bulusmasi"]
};
const SPONSORED = new Set(["mado", "tezgah-burger", "shakespeare"]);

const searchIndex = [];
for (const [keywords, names, priority, resultType] of TABLE) {
  const venueIds = names.map((n) => {
    const id = NAME_TO_ID[n];
    if (!id) { console.error(`Eşleşmeyen mekan adı: ${n}`); process.exit(1); }
    return id;
  });
  for (const keyword of keywords) {
    searchIndex.push({
      keyword,
      normalizedKeyword: normalizeText(keyword),
      resultType: resultType || "venue",
      venueIds,
      campaignIds: CAMPAIGN_LINKS[keyword] || [],
      eventIds: EVENT_LINKS[keyword] || [],
      matchedFields: ["search.keywords", "menu.topItems", "card.features"],
      priority,
      sponsoredVenueIds: venueIds.filter((id) => SPONSORED.has(id))
    });
  }
}

const banner = `// OTOMATİK ÜRETİLDİ — kaynak: docs/research/ALGE-QR-Dokuman-3-Search-Index-ve-Eksikler.md (Bölüm 1)
// Yeniden üretmek için: node scripts/build-search-index-from-research.mjs
`;
writeFileSync("src/data/searchIndex.js",
  banner + "export const searchIndex = " + JSON.stringify(searchIndex, null, 2) + ";\n");
console.log(`yazıldı: src/data/searchIndex.js (${searchIndex.length} keyword)`);
