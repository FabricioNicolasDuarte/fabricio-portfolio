export const LOCALES = ['es', 'en', 'pt', 'zh']
export const PATH_LOCALES = ['en', 'pt', 'zh']

export const LOCALE_META = {
  es: { label: 'ES', html: 'es' },
  en: { label: 'EN', html: 'en' },
  pt: { label: 'PT', html: 'pt-BR' },
  zh: { label: '中文', html: 'zh-CN' },
}

export function localeFromPath(path) {
  const seg = String(path || '/').split('/').filter(Boolean)[0]
  return PATH_LOCALES.includes(seg) ? seg : 'es'
}

export function stripLocalePrefix(path) {
  const clean = String(path || '/').replace(/\/$/, '') || '/'
  const segs = clean.split('/').filter(Boolean)
  if (PATH_LOCALES.includes(segs[0])) {
    const rest = segs.slice(1).join('/')
    return rest ? `/${rest}` : '/'
  }
  return clean.startsWith('/') ? clean : `/${clean}`
}

export function withLocalePrefix(path, locale) {
  const bare = stripLocalePrefix(path)
  if (!PATH_LOCALES.includes(locale)) return bare
  return bare === '/' ? `/${locale}` : `/${locale}${bare}`
}

export const CORE_ROUTES = [
  '/',
  '/trabajo',
  '/agronys',
  '/sobre',
  '/metodo',
  '/trayectoria',
  '/agendar',
  '/agendar/enviado',
  '/privacidad',
  '/casos/ecom',
  '/casos/agronys',
  '/agtech/lakehouse',
]

/** Rutas privadas: prerender sí, sitemap no */
export const PRIVATE_ROUTES = [
  '/propuestas',
  '/propuestas/axia',
  '/ingresar',
  '/panel',
  '/panel/proyectos',
  '/panel/proyectos/pr-axia-pwa',
  '/panel/clientes',
  '/panel/documentos',
  '/c/axia',
]

export const SITEMAP_ROUTES = CORE_ROUTES.filter((path) => path !== '/agendar/enviado')

export const PRERENDER_ROUTES = [
  ...CORE_ROUTES,
  ...PRIVATE_ROUTES,
  ...PATH_LOCALES.flatMap((lang) =>
    [...CORE_ROUTES, ...PRIVATE_ROUTES].map((path) => withLocalePrefix(path, lang)),
  ),
]
