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
import { LOCALE_META } from '~/composables/useLocale'

const { locale, t } = useLocale()

useHead({
  htmlAttrs: { lang: () => LOCALE_META[locale.value]?.html || 'es' },
  title: computed(() => t.value.meta.title),
  meta: [
    { name: 'description', content: () => t.value.meta.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://fabricioduarte.tech' },
    { property: 'og:title', content: () => t.value.meta.title },
    { property: 'og:description', content: () => t.value.meta.description },
    { property: 'og:image', content: 'https://fabricioduarte.tech/images/profile.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: () => t.value.meta.title },
    { name: 'twitter:description', content: () => t.value.meta.description },
    { name: 'twitter:image', content: 'https://fabricioduarte.tech/images/profile.jpg' },
  ],
})
</script>
