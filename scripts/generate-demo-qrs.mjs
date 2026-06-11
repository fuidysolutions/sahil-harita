// 10 demo QR kodunu PNG olarak üretir + manifest yazar. (Sprint 7)
// Kullanım:
//   npm run generate:qrs
//   PUBLIC_BASE_URL=https://example.com npm run generate:qrs
import { mkdirSync, writeFileSync, existsSync, statSync } from "node:fs";
import QRCode from "qrcode";
import { qrPoints } from "../src/data/qrPoints.js";

const rawBase =
  process.env.PUBLIC_BASE_URL ||
  process.env.VITE_PUBLIC_BASE_URL ||
  "http://localhost:5173";
const baseUrl = rawBase.replace(/\/+$/, ""); // trailing slash normalize

const OUT_DIR = "public/qr";
mkdirSync(OUT_DIR, { recursive: true });

const manifest = [];
for (const qr of qrPoints) {
  const url = `${baseUrl}/qr/${qr.id}`;
  const filePath = `${OUT_DIR}/${qr.id}.png`;
  await QRCode.toFile(filePath, url, {
    width: 1024,
    margin: 2,
    errorCorrectionLevel: "H"
  });
  const no = (qr.id.match(/(\d+)$/) || [])[1];
  manifest.push({
    id: qr.id,
    code: `QR-${no}`,
    label: qr.label,
    url,
    image: `/qr/${qr.id}.png`
  });
}
writeFileSync(`${OUT_DIR}/qr-manifest.json`, JSON.stringify(manifest, null, 2) + "\n");

// öz-doğrulama
const errors = [];
if (manifest.length !== 10) errors.push(`manifest 10 değil: ${manifest.length}`);
for (const item of manifest) {
  for (const k of ["id", "label", "url", "image"])
    if (!item[k]) errors.push(`${item.id || "?"}: ${k} eksik`);
  const p = `${OUT_DIR}/${item.id}.png`;
  if (!existsSync(p) || statSync(p).size < 1000) errors.push(`PNG eksik/bozuk: ${p}`);
}
if (errors.length) {
  console.error("ALGE demo QR generation FAILED:");
  for (const e of errors) console.error("  ✗ " + e);
  process.exit(1);
}

console.log("ALGE demo QR generation completed.");
console.log(`QR codes: ${manifest.length}`);
console.log(`Output: ${OUT_DIR}`);
console.log(`Base URL: ${baseUrl}`);
