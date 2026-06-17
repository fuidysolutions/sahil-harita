// Harita anchor eşlemesi — Sprint 8.2 (v kalibrasyonu: Sprint 13)
// Kullanıcının kaynak görsel üzerinde işaretlediği iki KESİN nokta (kırmızı kutular):
//   Mado (sıra 1, batı ucu)        : u=0.042, v=0.435 (uzatılmış doku koordinatı)
//   Shakespeare (sıra 47, doğu ucu): u=0.907, v=0.414
// Aradaki tüm mekanlar bu iki nokta arasında EŞİT aralıklarla, sırayla dizilir
// (mapFocusPoint.x = (order-1)/46 -> doğrusal interpolasyon; v de interpole edilir,
// şerit hafif eğimli olduğu için).
// Sprint 13: önceki v değerleri (0.385/0.364) odak noktasını bina şeridinin ÜSTÜNDEKİ
// orman bandına düşürüyordu. Canlı izdüşüm doğrulamasıyla (47 mekan, mobil) v ekseni
// uniform +0.05 kaydırılarak şerit bina çatıları üzerine oturtuldu. Yatay (u) ekseni
// doğruydu, değiştirilmedi. Yeni ortalama v≈0.424, eski elle kalibre bina şeridiyle uyumlu.
export const ANCHOR_WEST = { u: 0.042, v: 0.435 }; // Mado
export const ANCHOR_EAST = { u: 0.907, v: 0.414 }; // Shakespeare
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

/* Presence (Buradasın) hattı — Sprint 8.8:
   QR/kullanıcı noktası bina bandında DEĞİL, binaların bahçe/yürüyüş hattı
   tarafındaki birleşim noktasında durur (kullanıcı kararı). Yürüyüş hattı
   kaynak görselde bina bandının deniz tarafında; v eksenine sabit ofset. */
export const PRESENCE_V_OFFSET = 0.085;

export function xToPresenceUV(x) {
  const { u, v } = xToUV(x);
  return { u, v: v + PRESENCE_V_OFFSET };
}
