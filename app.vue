<template>
  <div>
    <div class="relative min-h-screen font-sans text-ink">
      <a href="#contenido" class="skip-to-content sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-black">{{ t.nav.skip }}</a>
      <DataField />
      <NavBar />
      <NuxtPage />
      <AppFooter />
    </div>
    <ClientOnly>
      <CommandPalette />
    </ClientOnly>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { LOCALE_META, withLocalePrefix } from '~/utils/localePath'

const { locale, t, pagePath } = useLocale()
const origin = 'https://fabricioduarte.tech'
const pageUrl = computed(() => origin + withLocalePrefix(pagePath.value, locale.value))
const langHref = (code) => origin + withLocalePrefix(pagePath.value, code)

useHead({
  htmlAttrs: { lang: () => LOCALE_META[locale.value]?.html || 'es' },
  title: computed(() => t.value.meta.title),
  link: [
    { rel: 'canonical', href: () => pageUrl.value },
    { rel: 'alternate', hreflang: 'es', href: () => langHref('es') },
    { rel: 'alternate', hreflang: 'en', href: () => langHref('en') },
    { rel: 'alternate', hreflang: 'pt-BR', href: () => langHref('pt') },
    { rel: 'alternate', hreflang: 'zh-CN', href: () => langHref('zh') },
    { rel: 'alternate', hreflang: 'x-default', href: () => langHref('es') },
  ],
  meta: [
    { name: 'description', content: () => t.value.meta.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: () => pageUrl.value },
    { property: 'og:title', content: () => t.value.meta.title },
    { property: 'og:description', content: () => t.value.meta.description },
    { property: 'og:locale', content: () => LOCALE_META[locale.value]?.html || 'es' },
    { property: 'og:image', content: `${origin}/images/og-banner.jpg` },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '627' },
    { property: 'og:image:alt', content: 'Fabricio Duarte — fabricioduarte.tech' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: () => t.value.meta.title },
    { name: 'twitter:description', content: () => t.value.meta.description },
    { name: 'twitter:image', content: `${origin}/images/og-banner.jpg` },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Fabricio Nicolás Duarte',
        jobTitle: 'Programador senior · Data engineer',
        url: origin,
        email: 'mailto:fabricioduarteoficial@gmail.com',
        telephone: '+54-370-402-2201',
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
