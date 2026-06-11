// Harita anchor eşlemesi — Sprint 8.2
// Kullanıcının kaynak görsel üzerinde işaretlediği iki KESİN nokta (kırmızı kutular):
//   Mado (sıra 1, batı ucu)        : u=0.042, v=0.385 (uzatılmış doku koordinatı)
//   Shakespeare (sıra 47, doğu ucu): u=0.907, v=0.364
// Aradaki tüm mekanlar bu iki nokta arasında EŞİT aralıklarla, sırayla dizilir
// (mapFocusPoint.x = (order-1)/46 -> doğrusal interpolasyon; v de interpole edilir,
// şerit hafif eğimli olduğu için).
export const ANCHOR_WEST = { u: 0.042, v: 0.385 }; // Mado
export const ANCHOR_EAST = { u: 0.907, v: 0.364 }; // Shakespeare
export const PW = 120;
export const PD = 120 * 0.5899;

export function xToUV(x) {
  return {
    u: ANCHOR_WEST.u + x * (ANCHOR_EAST.u - ANCHOR_WEST.u),
    v: ANCHOR_WEST.v + x * (ANCHOR_EAST.v - ANCHOR_WEST.v)
  };
}

export function xToWorldX(x) {
  return (xToUV(x).u - 0.5) * PW;
}
