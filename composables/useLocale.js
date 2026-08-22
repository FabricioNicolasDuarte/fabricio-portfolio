import { computed, onMounted } from 'vue'

export const useLocale = () => {
  const locale = useState('locale', () => 'es')
  const hydrated = useState('locale-hydrated', () => false)
  const isEn = computed(() => locale.value === 'en')

  const setLocale = (next) => {
    locale.value = next === 'en' ? 'en' : 'es'
    if (import.meta.client) {
      localStorage.setItem('fd-locale', locale.value)
      document.documentElement.lang = locale.value
    }
  }

  onMounted(() => {
    if (hydrated.value) return
    hydrated.value = true
    const saved = localStorage.getItem('fd-locale')
    if (saved === 'en' || saved === 'es') locale.value = saved
    document.documentElement.lang = locale.value
  })

  return { locale, isEn, setLocale }
}
