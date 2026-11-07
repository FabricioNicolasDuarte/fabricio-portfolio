<template>
  <div id="layout" class="layout-default relative min-h-screen bg-black text-white selection:bg-[#c0fb50] selection:text-black">
    <a
      v-if="!privateChrome"
      href="#contenido"
      class="sr-only focus:not-sr-only focus:fixed focus:left-24 focus:top-4 focus:z-[700] focus:bg-[#c0fb50] focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-bold focus:text-black"
    >
      {{ t.nav.skip }}
    </a>

    <template v-if="!privateChrome">
      <KprPreloader />
      <KprFrame />
      <KprMenu />
      <KprConsole />
    </template>

    <div class="relative z-10">
      <NuxtPage />
    </div>

    <KprFooter v-if="!privateChrome" />
    <JsonLd v-if="!privateChrome" :data="personLd" />
  </div>
</template>

<script setup>
import { computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { LOCALE_META } from '~/utils/localePath'

const { t, locale, pagePath } = useLocale()
const route = useRoute()
const { openConsole, closeMenu, closeConsole, consoleOpen } = useKprState()
const {
  playHover,
  playClick,
  playTextHover,
  playFilter,
  playMenuOpen,
  playMenuClose,
  audioUnlocked,
  enableAudio,
} = useKprAudio()

const privateChrome = computed(() => {
  const p = route.path
  return p.startsWith('/panel') || p.startsWith('/c/') || p === '/ingresar'
})

const publicChrome = computed(() => !privateChrome.value)
useKprSectionAudio(publicChrome)

watch(consoleOpen, (open, was) => {
  if (privateChrome.value) return
  if (open && !was) playMenuOpen()
  if (!open && was) playMenuClose()
})

const origin = 'https://fabricioduarte.tech'
const canonicalUrl = computed(() => {
  const path = route.path === '/' ? '' : route.path.replace(/\/$/, '')
  return `${origin}${path}`
})

const metaDescription = computed(() => {
  const m = t.value.meta
  return m.pages?.[pagePath.value] || m.description
})

const alternateLinks = computed(() => {
  const base = pagePath.value === '/' ? '' : pagePath.value
  return [
    { rel: 'canonical', href: canonicalUrl.value },
    { rel: 'alternate', hreflang: 'es-AR', href: `${origin}${base || '/'}` },
    { rel: 'alternate', hreflang: 'en', href: `${origin}/en${base}` },
    { rel: 'alternate', hreflang: 'pt-BR', href: `${origin}/pt${base}` },
    { rel: 'alternate', hreflang: 'zh-Hans', href: `${origin}/zh${base}` },
    { rel: 'alternate', hreflang: 'x-default', href: `${origin}${base || '/'}` },
  ]
})

const ogImage = `${origin}/images/og-whatsapp.jpg`

useHead(() => ({
  htmlAttrs: {
    lang: LOCALE_META[locale.value]?.html || 'es-AR',
  },
  title: t.value.meta.title,
  link: alternateLinks.value,
  meta: [
    { name: 'description', content: metaDescription.value },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Fabricio Duarte' },
    { property: 'og:title', content: t.value.meta.title },
    { property: 'og:description', content: metaDescription.value },
    { property: 'og:locale', content: LOCALE_META[locale.value]?.og || 'es_AR' },
    { property: 'og:locale:alternate', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'pt_BR' },
    { property: 'og:locale:alternate', content: 'zh_CN' },
    { property: 'og:url', content: canonicalUrl.value },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: '1024' },
    { property: 'og:image:height', content: '537' },
    { property: 'og:image:alt', content: t.value.meta.ogAlt },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t.value.meta.title },
    { name: 'twitter:description', content: metaDescription.value },
    { name: 'twitter:image', content: ogImage },
  ],
}))

const personLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fabricio Nicolás Duarte',
  jobTitle: t.value.meta.jobTitle,
  url: origin,
  email: 'fabricioduarteoficial@gmail.com',
  telephone: '+54-370-402-2201',
  address: { '@type': 'PostalAddress', addressCountry: 'AR' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Universidad Tecnológica Nacional — Facultad Regional Resistencia' },
    { '@type': 'CollegeOrUniversity', name: 'Universidad del Gran Rosario' },
  ],
  knowsAbout: t.value.meta.knowsAbout,
  sameAs: [
    'https://www.linkedin.com/in/fabricionicolasduarte/',
    'https://github.com/FabricioNicolasDuarte',
    'https://agronys.com/',
  ],
  image: `${origin}/images/hero-portrait.jpg`,
  worksFor: { '@type': 'Organization', name: 'ECOM Chaco', url: 'https://www.ecom.com.ar/' },
  founder: { '@type': 'Organization', name: 'Agronys', url: 'https://agronys.com/' },
}))

function onGlobalKeydown(e) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    openConsole()
  } else if (e.key === 'Escape') {
    closeMenu()
    closeConsole()
  }
}

function onGlobalMouseOver(e) {
  // HackyText owns letter-scramble + text rollover SFX — do not steal
  if (e.target?.closest?.('[data-hacky-text], [data-sfx-bound="1"]')) return

  const target = e.target?.closest?.(
    'a, button, [role="button"], [data-sfx], .kpr-clip-card, .fan-card, .fd-card, .fd-btn, select, summary',
  )
  if (!target) return

  // mouseover fires between descendants — only when entering the host
  const from = e.relatedTarget
  if (from && target.contains(from)) return

  if (target.matches('a, [data-sfx="text"]') || target.querySelector?.('[data-hacky-text]')) {
    playTextHover()
  } else {
    playHover()
  }
}

function onGlobalClick(e) {
  if (!audioUnlocked.value) {
    enableAudio(false)
  }
  const target = e.target?.closest?.(
    'a, button, [role="button"], [data-sfx], .fd-btn, select, summary, input[type="checkbox"], input[type="radio"]',
  )
  if (!target) return
  if (target.matches('[data-sfx="filter"], select')) playFilter()
  else playClick()
}

onMounted(() => {
  window.addEventListener('keydown', onGlobalKeydown)
  document.addEventListener('mouseover', onGlobalMouseOver, { passive: true })
  document.addEventListener('click', onGlobalClick, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onGlobalKeydown)
  document.removeEventListener('mouseover', onGlobalMouseOver)
  document.removeEventListener('click', onGlobalClick)
})
</script>
