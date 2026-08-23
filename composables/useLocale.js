import { computed, onMounted } from 'vue'
import { ui } from '~/locales/ui'

export const LOCALES = ['es', 'en', 'pt', 'zh']

export const LOCALE_META = {
  es: { label: 'ES', html: 'es' },
  en: { label: 'EN', html: 'en' },
  pt: { label: 'PT', html: 'pt-BR' },
  zh: { label: '中文', html: 'zh-CN' },
}

export const useLocale = () => {
  const locale = useState('locale', () => 'es')
  const hydrated = useState('locale-hydrated', () => false)
  const isEn = computed(() => locale.value === 'en')

  const setLocale = (next) => {
    locale.value = LOCALES.includes(next) ? next : 'es'
    if (import.meta.client) {
      localStorage.setItem('fd-locale', locale.value)
      document.documentElement.lang = LOCALE_META[locale.value].html
    }
  }

  const tx = (item, key) => {
    const l = locale.value
    const suffix = { es: '', en: 'En', pt: 'Pt', zh: 'Zh' }[l]
    if (suffix && item[key + suffix] != null) return item[key + suffix]
    if (l !== 'es' && item[key + 'En'] != null) return item[key + 'En']
    return item[key]
  }

  onMounted(() => {
    if (hydrated.value) return
    hydrated.value = true
    const saved = localStorage.getItem('fd-locale')
    if (LOCALES.includes(saved)) locale.value = saved
    document.documentElement.lang = LOCALE_META[locale.value].html
  })

  const t = computed(() => ui[locale.value] || ui.es)

  return { locale, isEn, setLocale, tx, t }
}
