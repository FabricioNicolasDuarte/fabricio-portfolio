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
  title: 'Fabricio Duarte — Ciencia de datos, analítica y automatización',
  meta: [
    {
      name: 'description',
      content:
        'Ciclo de Licenciatura en Ciencia de Datos, Universidad del Gran Rosario. Data engineering, BI, n8n, IA aplicada. Formosa, Argentina.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://fabricioduarte.tech' },
    { property: 'og:title', content: 'Fabricio Duarte — Datos, analítica y automatización' },
    {
      property: 'og:description',
      content: 'Ciencia de datos (UGR). SQL, BI, n8n, plataformas de producción.',
    },
    { property: 'og:image', content: 'https://fabricioduarte.tech/images/profile.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Fabricio Duarte — Datos, analítica y automatización' },
    { name: 'twitter:description', content: 'Ciencia de datos UGR. Engineering, analytics, n8n.' },
    { name: 'twitter:image', content: 'https://fabricioduarte.tech/images/profile.jpg' },
  ],
})
</script>
