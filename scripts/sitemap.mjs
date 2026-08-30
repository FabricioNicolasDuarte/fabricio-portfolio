import { writeFileSync } from 'node:fs'
import { LOCALES, LOCALE_META, SITEMAP_ROUTES, withLocalePrefix } from '../utils/localePath.js'

const origin = 'https://fabricioduarte.tech'
const lastmod = new Date().toISOString().slice(0, 10)

function loc(path, lang) {
  const prefixed = withLocalePrefix(path, lang)
  return origin + (prefixed === '/' ? '/' : prefixed)
}

function alternates(path) {
  const links = LOCALES.map((lang) => {
    const hreflang = LOCALE_META[lang].html
    return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${loc(path, lang)}"/>`
  })
  links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${loc(path, 'es')}"/>`)
  return links.join('\n')
}

const urls = SITEMAP_ROUTES.flatMap((path) =>
  LOCALES.map(
    (lang) => `  <url>
    <loc>${loc(path, lang)}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates(path)}
  </url>`,
  ),
)

writeFileSync(
  'public/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`,
)

console.log(`Wrote public/sitemap.xml (${urls.length} urls, lastmod ${lastmod})`)
