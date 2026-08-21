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
useHead({
  title: 'Fabricio Duarte — Datos, analítica, automatización y producto',
  meta: [
    {
      name: 'description',
      content:
        'Ingeniería de datos y producto en producción: Django, SQL, Superset, Power BI, n8n, Vue/Nuxt, Expo. Formosa / Chaco, Argentina.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://fabricioduarte.tech' },
    { property: 'og:title', content: 'Fabricio Duarte — Datos, analítica y automatización' },
    {
      property: 'og:description',
      content: 'Pipelines, BI, automatización e IA aplicada. Django, SQL, n8n, producto offline-first.',
    },
    { property: 'og:image', content: 'https://fabricioduarte.tech/images/profile.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Fabricio Duarte — Datos, analítica y automatización' },
    { name: 'twitter:description', content: 'Data engineering, analytics, automation, product.' },
    { name: 'twitter:image', content: 'https://fabricioduarte.tech/images/profile.jpg' },
  ],
})
</script>
