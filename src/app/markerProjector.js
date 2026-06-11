// ALGE marker projektörü — Sprint 8.9 (performans hotfix)
// 8.8 regresyonu: marker'lar hem __ALGE_FRAME_HOOKS hem kendi rAF döngüsüyle
// her karede 2x çalışıp koşulsuz left/top yazıyordu (her karede layout).
// Yeni kural: tek update yolu (frame hook), transform/translate3d ile yazım,
// kamera matrisi değişmediyse hesap yok, 0.5px altı farkta DOM yazımı yok.
//
// Teşhis bayrağı: ?markerMode=optimized(varsayılan)|current(8.8)|legacy(8.7)
// Üretimde bayrak gerekmez; optimized varsayılandır.

export const markerMode = (() => {
  const m = (location.search.match(/[?&]markerMode=(\w+)/) || [])[1];
  return m === "current" || m === "legacy" ? m : "optimized";
})();

const PERF_C = (window.__ALGE_PERF && window.__ALGE_PERF.c) || null;

/* Ana döngünün canlı olup olmadığı: index.html her karede __ALGE_FRAME_TICK damgalar.
   400ms'den eskiyse döngü duruk demektir; yedek interval marker'ı tazeler. */
function mainLoopAlive() {
  return performance.now() - (window.__ALGE_FRAME_TICK || 0) < 400;
}

/* createScreenAnchor: world-anchor'lı bir DOM marker'ını ekrana izdüşürür.
   opts:
     el            — position:fixed marker elemanı
     getUV()       — {u,v} anchor (null dönerse marker gizlenir)
     worldY        — dünya yüksekliği
     baseTransform — merkezleme ofseti, ör. "translate(-50%,-11px)"
     fallback()    — 3D köprüsü yokken {x,y} ekran konumu (null = gizle)
   Dönen API: { update(force), forceUpdate() }                                */
export function createScreenAnchor(opts) {
  const { el, getUV, worldY, baseTransform, fallback } = opts;

  // optimized modda konum transform ile verilir; left/top sabitlenir
  if (markerMode === "optimized") {
    el.style.left = "0px";
    el.style.top = "0px";
    el.style.willChange = "transform";
  }

  // dirty-check durumu
  let lastTransform = "";
  let lastVisible = null;          // null = henüz hiç yazılmadı
  let camKey0 = NaN, camKey1 = NaN, camKey2 = NaN, camKey3 = NaN;
  let lastW = 0, lastH = 0, lastAnchorU = NaN, lastAnchorV = NaN;

  function setVisible(v) {
    if (lastVisible === v) return;
    lastVisible = v;
    el.style.display = v ? "flex" : "none";
    if (PERF_C) PERF_C.dw++;
  }

  function writeTransform(sx, sy) {
    const t = `translate3d(${sx.toFixed(1)}px,${sy.toFixed(1)}px,0) ${baseTransform}`;
    if (t === lastTransform) return;
    lastTransform = t;
    el.style.transform = t;
    if (PERF_C) PERF_C.dw++;
  }

  /* 8.7/8.8 yolları yalnız A/B teşhisi için: left/top yazımı (eski davranış) */
  function writeLegacyLeftTop(sx, sy) {
    el.style.left = sx.toFixed(1) + "px";
    el.style.top = sy.toFixed(1) + "px";
    if (PERF_C) PERF_C.dw += 2;
  }

  function update(force) {
    const g = window.__ALGE3D;
    if (!(g && g.camera && g.uvToWorld)) {
      // köprü yok: statik fallback — yalnız force'ta (init/resize) yaz
      if (!force && lastVisible !== null) return;
      const pt = fallback ? fallback() : null;
      if (!pt) { setVisible(false); return; }
      setVisible(true);
      if (markerMode === "optimized") writeTransform(pt.x, pt.y);
      else writeLegacyLeftTop(pt.x, pt.y);
      return;
    }

    const uv = getUV();
    if (!uv) { setVisible(false); return; }

    if (markerMode === "optimized" && !force) {
      // kamera + viewport + anchor değişmediyse projeksiyon dahi yapma (idle: 0 update)
      const me = g.camera.matrixWorld.elements, pe = g.camera.projectionMatrix.elements;
      const k0 = me[12], k1 = me[13], k2 = me[14], k3 = me[0] + me[1] + me[6] + pe[0] + pe[5];
      if (k0 === camKey0 && k1 === camKey1 && k2 === camKey2 && k3 === camKey3 &&
          innerWidth === lastW && innerHeight === lastH &&
          uv.u === lastAnchorU && uv.v === lastAnchorV) return;
      camKey0 = k0; camKey1 = k1; camKey2 = k2; camKey3 = k3;
      lastW = innerWidth; lastH = innerHeight;
      lastAnchorU = uv.u; lastAnchorV = uv.v;
    }

    if (PERF_C) PERF_C.mu++;
    const p = g.uvToWorld(uv.u, uv.v);
    p.y = worldY;
    p.project(g.camera);
    if (p.z > 1) { setVisible(false); return; }
    setVisible(true);

    const sx = (p.x * 0.5 + 0.5) * innerWidth;
    const sy = (-p.y * 0.5 + 0.5) * innerHeight;
    if (markerMode === "optimized") writeTransform(sx, sy);
    else writeLegacyLeftTop(sx, sy);
  }

  const forceUpdate = () => update(true);

  if (markerMode === "current") {
    // 8.8 davranışı (teşhis): frame hook + kendi rAF döngüsü = karede 2x
    (window.__ALGE_FRAME_HOOKS = window.__ALGE_FRAME_HOOKS || []).push(() => update(false));
    (function loop() { update(false); requestAnimationFrame(loop); })();
  } else if (markerMode === "legacy") {
    // 8.7 davranışı (teşhis): yalnız kendi rAF döngüsü
    (function loop() { update(false); requestAnimationFrame(loop); })();
  } else {
    // optimized: tek yol = ana render döngüsüyle aynı karede (jitter yok);
    // ana döngü duruksa 250ms'lik yedek devreye girer (eski her-frame yedek rAF kaldırıldı)
    (window.__ALGE_FRAME_HOOKS = window.__ALGE_FRAME_HOOKS || []).push(() => update(false));
    setInterval(() => { if (!mainLoopAlive()) update(false); }, 250);
  }

  addEventListener("resize", forceUpdate);
  forceUpdate();

  return { update, forceUpdate };
}
