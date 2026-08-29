import { LOCALES, localeFromPath, stripLocalePrefix, withLocalePrefix } from '~/utils/localePath'

export default defineNuxtRouteMiddleware((to) => {
  const locale = useState('locale', () => 'es')
  const raw = Array.isArray(to.query.lang) ? to.query.lang[0] : to.query.lang
  const queryLang = String(raw || '')
  const fromQuery = LOCALES.includes(queryLang) ? queryLang : null
  locale.value = fromQuery || localeFromPath(to.path)

  if (!fromQuery) return

  const dest = withLocalePrefix(stripLocalePrefix(to.path), fromQuery)
  const query = { ...to.query }
  delete query.lang

  return navigateTo({ path: dest, query, hash: to.hash }, { redirectCode: 301, replace: true })
})
