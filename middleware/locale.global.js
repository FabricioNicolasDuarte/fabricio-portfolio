import { LOCALES, localeFromPath, stripLocalePrefix, withLocalePrefix } from '~/utils/localePath'

export default defineNuxtRouteMiddleware((to) => {
  const locale = useState('locale', () => 'es')
  const queryLang = String(to.query.lang || '')
  const fromQuery = LOCALES.includes(queryLang) ? queryLang : null
  const next = fromQuery || localeFromPath(to.path)
  locale.value = next

  if (!fromQuery) return

  const dest = withLocalePrefix(stripLocalePrefix(to.path), fromQuery)
  const query = { ...to.query }
  delete query.lang
  const samePath = dest === to.path
  const onlyLang = Object.keys(query).length === 0
  if (samePath && onlyLang && !to.hash) {
    return navigateTo(dest, { redirectCode: 301, replace: true })
  }
  return navigateTo({ path: dest, query, hash: to.hash }, { redirectCode: 301, replace: true })
})
