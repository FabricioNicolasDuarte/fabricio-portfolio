<template>
  <div class="relative min-h-screen font-sans text-slate-100">
    <DataField />
    <div class="pointer-events-none fixed inset-0 -z-[9] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_55%)]"></div>
    <NavBar />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const { locale, isEn } = useLocale()

const title = computed(() =>
  isEn.value
    ? 'Fabricio Duarte — Data, analytics, automation, and product'
    : 'Fabricio Duarte — Datos, analítica, automatización y producto'
)

useHead({
  htmlAttrs: { lang: () => locale.value },
  title,
  meta: [
    {
      name: 'description',
      content: () =>
        isEn.value
          ? 'Data engineering and production products: Django, SQL, Superset, Power BI, n8n, Vue/Nuxt, Expo. Resistencia, Chaco, Argentina.'
          : 'Ingeniería de datos y producto en producción: Django, SQL, Superset, Power BI, n8n, Vue/Nuxt, Expo. Resistencia, Chaco, Argentina.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://fabricioduarte.tech' },
    {
      property: 'og:title',
      content: () =>
        isEn.value
          ? 'Fabricio Duarte — Data, analytics, and automation'
          : 'Fabricio Duarte — Datos, analítica y automatización',
    },
    {
      property: 'og:description',
      content: () =>
        isEn.value
          ? 'Pipelines, BI, automation, and applied AI. Django, SQL, n8n, offline-first products.'
          : 'Pipelines, BI, automatización e IA aplicada. Django, SQL, n8n, producto offline-first.',
    },
    { property: 'og:image', content: 'https://fabricioduarte.tech/images/profile.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: () =>
        isEn.value
          ? 'Fabricio Duarte — Data, analytics, and automation'
          : 'Fabricio Duarte — Datos, analítica y automatización',
    },
    { name: 'twitter:description', content: 'Data engineering, analytics, automation, product.' },
    { name: 'twitter:image', content: 'https://fabricioduarte.tech/images/profile.jpg' },
  ],
})
</script>

