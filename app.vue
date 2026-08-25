<template>
  <div class="relative min-h-screen font-sans text-slate-100">
    <a href="#contenido" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-lime-400 focus:px-4 focus:py-2 focus:text-black">{{ t.nav.skip }}</a>
    <DataField />
    <NavBar />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { LOCALE_META } from '~/composables/useLocale'

const { locale, t } = useLocale()
const route = useRoute()
const origin = 'https://fabricioduarte.tech'
const pageUrl = computed(() => origin + (route.path === '/' ? '/' : route.path.replace(/\/$/, '')))
const langQs = (code) => `${pageUrl.value}?lang=${code}`

useHead({
  htmlAttrs: { lang: () => LOCALE_META[locale.value]?.html || 'es' },
  title: computed(() => t.value.meta.title),
  link: [
    { rel: 'canonical', href: () => pageUrl.value },
    { rel: 'alternate', hreflang: 'es', href: () => langQs('es') },
    { rel: 'alternate', hreflang: 'en', href: () => langQs('en') },
    { rel: 'alternate', hreflang: 'pt-BR', href: () => langQs('pt') },
    { rel: 'alternate', hreflang: 'zh-CN', href: () => langQs('zh') },
    { rel: 'alternate', hreflang: 'x-default', href: () => pageUrl.value },
  ],
  meta: [
    { name: 'description', content: () => t.value.meta.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: () => pageUrl.value },
    { property: 'og:title', content: () => t.value.meta.title },
    { property: 'og:description', content: () => t.value.meta.description },
    { property: 'og:image', content: `${origin}/images/hero-poster.jpg` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: () => t.value.meta.title },
    { name: 'twitter:description', content: () => t.value.meta.description },
    { name: 'twitter:image', content: `${origin}/images/hero-poster.jpg` },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Fabricio Nicolás Duarte',
        jobTitle: 'Data Engineer',
        url: origin,
        email: 'mailto:fabricioduarteoficial@gmail.com',
        address: { '@type': 'PostalAddress', addressLocality: 'Resistencia', addressRegion: 'Chaco', addressCountry: 'AR' },
        alumniOf: [
          { '@type': 'CollegeOrUniversity', name: 'Universidad Tecnológica Nacional — Facultad Regional Resistencia' },
          { '@type': 'CollegeOrUniversity', name: 'Universidad del Gran Rosario' },
        ],
        knowsAbout: ['Data engineering', 'Business intelligence', 'Apache Superset', 'PySpark', 'Django', 'AgTech'],
        sameAs: [
          'https://www.linkedin.com/in/fabricionicolasduarte/',
          'https://github.com/FabricioNicolasDuarte',
          'https://fabricionicolasduarte.github.io/skadia-webgl/',
        ],
        worksFor: { '@type': 'Organization', name: 'ECOM Chaco', url: 'https://www.ecom.com.ar/' },
        founder: { '@type': 'Organization', name: 'Skadia', url: 'https://fabricionicolasduarte.github.io/skadia-webgl/' },
      }),
    },
  ],
})
</script>
