// ALGE demo data doğrulama — Sprint 1 kabul kontrolleri.
import { venues } from "../src/data/venues.js";
import { zones } from "../src/data/zones.js";
import { qrPoints } from "../src/data/qrPoints.js";
import { campaigns } from "../src/data/campaigns.js";
import { events } from "../src/data/events.js";
import { adPlacements } from "../src/data/adPlacements.js";
import { searchIndex } from "../src/data/searchIndex.js";
import { trendItems } from "../src/data/trends.js";
import { normalizeText } from "../src/utils/normalizeText.js";

const errors = [];
const check = (cond, msg) => { if (!cond) errors.push(msg); };

// 1-7: adetler
check(venues.length === 47, `venues.length 47 olmalı, ${venues.length}`);
check(zones.length === 5, `zones.length 5 olmalı, ${zones.length}`);
check(qrPoints.length === 10, `qrPoints.length 10 olmalı, ${qrPoints.length}`);
check(trendItems.length >= 3, `trendItems.length >= 3 olmalı, ${trendItems.length}`);
check(campaigns.length >= 12, `campaigns.length >= 12 olmalı, ${campaigns.length}`);
check(events.length >= 4, `events.length >= 4 olmalı, ${events.length}`);
check(adPlacements.length >= 6, `adPlacements.length >= 6 olmalı, ${adPlacements.length}`);

// 8: order 1..47 kesintisiz
venues.forEach((v, i) => check(v.order === i + 1, `order kesintili: index ${i} -> order ${v.order}`));

// 9: ID unique
const ids = new Set(venues.map((v) => v.id));
check(ids.size === 47, "venue ID'leri unique değil");

// 10: Hamlet Market iki ayrı ID
check(ids.has("hamlet-market-01"), "hamlet-market-01 eksik");
check(ids.has("hamlet-market-02"), "hamlet-market-02 eksik");

// 11: zorunlu alanlar boş değil
const filled = (x) => Array.isArray(x) ? x.length > 0 : (x !== null && x !== undefined && String(x).trim() !== "");
for (const v of venues) {
  const fields = {
    id: v.id, order: v.order, name: v.name, category: v.category, subcategory: v.subcategory,
    "card.short": v.card?.short, "card.detail": v.card?.detail, "card.features": v.card?.features,
    "card.featuredProduct": v.card?.featuredProduct, "card.campaign": v.card?.campaign,
    "menu.categories": v.menu?.categories, "menu.topItems": v.menu?.topItems,
    "search.keywords": v.search?.keywords, "search.filterTags": v.search?.filterTags,
    "directions.query": v.directions?.query, focusType: v.focusType, zoneId: v.zoneId,
    mapFocusPoint: v.mapFocusPoint && Number.isFinite(v.mapFocusPoint.x) && Number.isFinite(v.mapFocusPoint.y)
  };
  for (const [name, val] of Object.entries(fields))
    check(filled(val) || val === true, `${v.id || "?"}: ${name} boş`);
}

// 11b: menü derinliği (Sprint 8.5)
for (const v of venues) {
  const m = v.menu || {};
  const sections = m.sections || [];
  const total = sections.reduce((a, s) => a + (s.items?.length || 0), 0);
  check((m.categories?.length || 0) >= 3, `${v.id}: menu.categories < 3`);
  check((m.topItems?.length || 0) >= 5, `${v.id}: menu.topItems < 5`);
  check(sections.length >= 3, `${v.id}: menu.sections < 3`);
  check(total >= 12, `${v.id}: toplam menü item < 12 (${total})`);
  for (const s of sections) {
    check(!!(s.title && s.title.trim()), `${v.id}: boş section title`);
    check((s.items?.length || 0) >= 4, `${v.id}/${s.title}: section item < 4`);
    for (const it of s.items || [])
      check(!!(it.name && it.name.trim()), `${v.id}/${s.title}: boş item adı`);
  }
}
// 11c: özel menü testleri
const secTitles = (id) => (venues.find((v) => v.id === id)?.menu.sections || [])
  .map((s) => normalizeText(s.title));
const hasSec = (id, ...keys) => keys.some((k) => secTitles(id).some((t) => t.includes(normalizeText(k))));
check(hasSec("irish-pub", "biralar"), "irish-pub: Biralar bölümü yok");
check(hasSec("mado", "dondurma", "tatlı"), "mado: Dondurma/Tatlılar bölümü yok");
check(hasSec("watsons", "kozmetik", "güneş", "cilt"), "watsons: Kozmetik/Güneş bölümü yok");
check(hasSec("decathlon", "spor", "plaj", "yüzme"), "decathlon: Spor/Plaj bölümü yok");
check(secTitles("shakespeare").length >= 4, "shakespeare: sections < 4");

// 12-14: referans bütünlüğü
const zoneIds = new Set(zones.map((z) => z.id));
for (const v of venues) check(zoneIds.has(v.zoneId), `${v.id}: bilinmeyen zoneId ${v.zoneId}`);
for (const c of campaigns) check(ids.has(c.venueId), `${c.id}: bilinmeyen venueId ${c.venueId}`);
for (const q of qrPoints)
  for (const vid of q.nearbyVenueIds) check(ids.has(vid), `${q.id}: bilinmeyen nearbyVenueId ${vid}`);
for (const s of searchIndex)
  for (const vid of s.venueIds) check(ids.has(vid), `searchIndex "${s.keyword}": bilinmeyen venueId ${vid}`);

// ek bütünlük: event/trend venue bağları ve searchIndex kampanya/etkinlik bağları
const campIds = new Set(campaigns.map((c) => c.id));
const eventIds = new Set(events.map((e) => e.id));
for (const e of events) check(ids.has(e.venueId), `${e.id}: bilinmeyen venueId ${e.venueId}`);
for (const t of trendItems) check(ids.has(t.venueId), `${t.id}: bilinmeyen venueId ${t.venueId}`);
for (const s of searchIndex) {
  for (const cid of s.campaignIds) check(campIds.has(cid), `searchIndex "${s.keyword}": bilinmeyen campaignId ${cid}`);
  for (const eid of s.eventIds) check(eventIds.has(eid), `searchIndex "${s.keyword}": bilinmeyen eventId ${eid}`);
}

// 15: zorunlu aramalar mevcut (normalize edilerek aranır)
const requiredKeywords = ["kahve", "filtre kahve", "burger", "dondurma", "döner", "tavuk", "pizza", "kozmetik", "spor", "kahvaltı"];
const normSet = new Set(searchIndex.map((s) => s.normalizedKeyword));
for (const kw of requiredKeywords)
  check(normSet.has(normalizeText(kw)), `searchIndex'te zorunlu arama eksik: ${kw}`);

if (errors.length) {
  console.error("ALGE demo data validation FAILED:");
  for (const e of errors) console.error("  ✗ " + e);
  process.exit(1);
}

console.log("ALGE demo data validation passed.");
console.log(`Venues: ${venues.length}`);
console.log(`Zones: ${zones.length}`);
console.log(`QR Points: ${qrPoints.length}`);
console.log(`Campaigns: ${campaigns.length}`);
console.log(`Events: ${events.length}`);
console.log(`Ad Placements: ${adPlacements.length}`);
console.log(`Trends: ${trendItems.length}`);
console.log(`Search Index: ${searchIndex.length}`);
