/**
 * Rasterize public/brand/fabricio-mark.svg into favicon / apple-touch / PWA icons.
 * Run: node scripts/generate-brand-icons.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import pngToIco from 'png-to-ico'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const brand = join(root, 'public', 'brand')
const pub = join(root, 'public')
const svgPath = join(brand, 'fabricio-mark.svg')

// Ensure FD letter paths are explicitly black (SVG default can vary by renderer)
let svg = readFileSync(svgPath, 'utf8')
if (!svg.includes('fill: #000') && !svg.includes('fill="#000"')) {
  svg = svg.replace(
    /<g>\s*<path d="M154\.15/,
    '<g fill="#000000">\n        <path d="M154.15',
  )
}

const svgBuf = Buffer.from(svg)

async function png(size, out, { pad = 0, bg = null } = {}) {
  const inner = Math.max(1, size - pad * 2)
  let pipeline = sharp(svgBuf, { density: Math.max(72, Math.round((inner / 636.34) * 300)) })
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })

  if (pad > 0 || bg) {
    const background = bg || { r: 0, g: 0, b: 0, alpha: 0 }
    pipeline = sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background,
      },
    }).composite([{ input: await pipeline.png().toBuffer(), left: pad, top: pad }])
  }

  await pipeline.png().toFile(out)
  console.log('wrote', out.replace(root + '\\', '').replace(root + '/', ''))
}

const sizes = [
  { size: 16, out: join(brand, 'favicon-16x16.png') },
  { size: 32, out: join(brand, 'favicon-32x32.png') },
  { size: 48, out: join(brand, 'favicon-48x48.png') },
  { size: 150, out: join(brand, 'mark.png') },
  { size: 180, out: join(brand, 'apple-touch-icon.png'), pad: 18, bg: { r: 8, g: 8, b: 8, alpha: 255 } },
  { size: 192, out: join(brand, 'icon-192.png'), pad: 16, bg: { r: 8, g: 8, b: 8, alpha: 255 } },
  { size: 512, out: join(brand, 'icon-512.png'), pad: 40, bg: { r: 8, g: 8, b: 8, alpha: 255 } },
  { size: 512, out: join(brand, 'mark-on-black.png'), pad: 40, bg: { r: 0, g: 0, b: 0, alpha: 255 } },
]

for (const s of sizes) {
  await png(s.size, s.out, { pad: s.pad || 0, bg: s.bg || null })
}

const ico = await pngToIco([
  join(brand, 'favicon-16x16.png'),
  join(brand, 'favicon-32x32.png'),
  join(brand, 'favicon-48x48.png'),
])
writeFileSync(join(pub, 'favicon.ico'), ico)
console.log('wrote public/favicon.ico')
