import { computed, onMounted, watch } from 'vue'
import { ui } from '~/locales/ui'
import { LOCALES, LOCALE_META, localeFromPath, stripLocalePrefix, withLocalePrefix } from '~/utils/localePath'

export const useLocale = () => {
  const route = useRoute()
  const locale = useState('locale', () => 'es')
  const hydrated = useState('locale-hydrated', () => false)
  const isEn = computed(() => locale.value === 'en')
  const pagePath = computed(() => stripLocalePrefix(route.path))

  const localePath = (path, code = locale.value) => withLocalePrefix(path, code)

  if (import.meta.server) {
    locale.value = localeFromPath(route.path)
  }

  const setLocale = async (next) => {
    const code = LOCALES.includes(next) ? next : 'es'
    locale.value = code
    if (import.meta.client) {
      localStorage.setItem('fd-locale', code)
      document.documentElement.lang = LOCALE_META[code].html
    }
    const dest = withLocalePrefix(stripLocalePrefix(route.path), code)
    if (dest !== route.path) {
      await navigateTo(dest)
    }
  }

  const tx = (item, key) => {
    const l = locale.value
    const suffix = { es: '', en: 'En', pt: 'Pt', zh: 'Zh' }[l]
    if (suffix && item[key + suffix] != null) return item[key + suffix]
    return item[key]
  }

  watch(() => route.path, (path) => {
    locale.value = localeFromPath(path)
  })

  onMounted(() => {
    if (hydrated.value) return
    hydrated.value = true
    locale.value = localeFromPath(route.path)
    localStorage.setItem('fd-locale', locale.value)
    document.documentElement.lang = LOCALE_META[locale.value].html
  })

  const t = computed(() => ui[locale.value] || ui.es)

  const atsCv = computed(() => {
    if (locale.value === 'pt') {
      return { href: '/cv/cv-ats-pt.pdf', file: 'CV_Fabricio_Duarte_ATS_PT.pdf' }
    }
    if (locale.value === 'es') {
      return { href: '/cv/cv-ats.pdf', file: 'CV_Fabricio_Duarte_ATS.pdf' }
    }
    return {
      href: '/cv/cv-ats-en.pdf',
      file: 'CV_Fabricio_Duarte_ATS_EN.pdf',
      note: locale.value === 'zh' ? t.value.footer.atsEn : undefined,
    }
  })

  return { locale, isEn, setLocale, localePath, pagePath, tx, t, atsCv }
}
