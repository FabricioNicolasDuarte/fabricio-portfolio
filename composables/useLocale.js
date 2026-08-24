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
      const url = new URL(window.location.href)
      url.searchParams.set('lang', locale.value)
      history.replaceState(null, '', url.pathname + url.search + url.hash)
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
    const fromUrl = new URLSearchParams(window.location.search).get('lang')
    const saved = localStorage.getItem('fd-locale')
    if (LOCALES.includes(fromUrl)) locale.value = fromUrl
    else if (LOCALES.includes(saved)) locale.value = saved
    document.documentElement.lang = LOCALE_META[locale.value].html
  })

  const t = computed(() => {
    const raw = ui[locale.value] || ui.es
    const n = raw.nav || {}
    const h = raw.hero || {}
    const c = raw.caso || {}
    const s = raw.skadia || {}
    const f = raw.footer || {}
    return {
      ...raw,
      nav: {
        ...n,
        skip: n.skip ?? n.skip,
        soundOn: n.soundOn ?? n.soundOn,
        soundOff: n.soundOff ?? n.soundOff,
        close: n.close ?? n.close,
      },
      hero: {
        ...h,
        badge: h.badge ?? h.badge,
        bodyBefore: h.bodyBefore ?? h.bodyBefore,
        cvVisual: h.cvVisual ?? h.cvVisual,
        cvAts: h.cvAts ?? h.cvAts,
      },
      caso: {
        ...c,
        demoTag: c.demoTag ?? c.demoTag,
        moreEcom: c.moreEcom ?? c.moreEcom,
        moreSkadia: c.moreSkadia ?? c.moreSkadia,
      },
      skadia: {
        ...s,
        shotAlt: s.shotAlt ?? s.shotAlt,
        cta: s.cta ?? s.cta,
      },
      footer: {
        ...f,
        ats: f.ats ?? f.ats,
        visual: f.visual ?? f.visual,
      },
    }
  })

  const atsCv = computed(() => {
    if (locale.value === 'pt') {
      return { href: '/cv/cv-ats-pt.pdf', file: 'CV_Fabricio_Duarte_ATS_PT.pdf' }
    }
    if (locale.value === 'es') {
      return { href: '/cv/cv-ats.pdf', file: 'CV_Fabricio_Duarte_ATS.pdf' }
    }
    return { href: '/cv/cv-ats-en.pdf', file: 'CV_Fabricio_Duarte_ATS_EN.pdf' }
  })

  return { locale, isEn, setLocale, tx, t, atsCv }
}
