<template>
  <nav v-if="crumbs.length" :class="flush ? 'pt-2' : 'mx-auto max-w-6xl px-5 pt-6 sm:px-8'" :aria-label="t.nav.trail">
    <p class="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
      <NuxtLink :to="backTo" class="font-medium text-lime-300 hover:text-lime-200">← {{ t.nav.back }}</NuxtLink>
      <span class="text-white/25">·</span>
      <template v-for="(c, i) in crumbs" :key="c.to || c.label">
        <NuxtLink v-if="c.to && i < crumbs.length - 1" :to="c.to" class="hover:text-lime-200">{{ c.label }}</NuxtLink>
        <span v-else class="text-slate-400">{{ c.label }}</span>
        <span v-if="i < crumbs.length - 1" class="text-white/25">/</span>
      </template>
    </p>
  </nav>
  <JsonLd v-if="crumbs.length" :data="breadcrumbLd" />
</template>

<script setup>
defineProps({ flush: Boolean })
const { t, localePath, pagePath } = useLocale()

const crumbs = computed(() => {
  const n = t.value.nav
  const path = pagePath.value
  const home = { to: localePath('/'), label: n.home }
  const table = {
    '/metodo': [home, { label: n.method }],
    '/trabajo': [home, { label: n.work }],
    '/skadia': [home, { label: n.skadia }],
    '/sobre': [home, { label: n.about }],
    '/trayectoria': [home, { to: localePath('/sobre'), label: n.about }, { label: n.path }],
    '/privacidad': [home, { label: n.privacy }],
    '/agendar': [home, { label: n.book }],
    '/agendar/enviado': [home, { to: localePath('/agendar'), label: n.book }, { label: n.sent }],
    '/casos/ecom': [home, { to: localePath('/trabajo'), label: n.work }, { label: n.caseEcom }],
    '/casos/skadia': [home, { to: localePath('/skadia'), label: n.skadia }, { label: n.caseSkadia }],
    '/agtech/lakehouse': [home, { to: localePath('/trabajo'), label: n.work }, { label: n.lakehouse }],
  }
  return table[path] || []
})

const backTo = computed(() => {
  const linked = [...crumbs.value].reverse().find(c => c.to)
  return linked?.to || localePath('/')
})

const origin = 'https://fabricioduarte.tech'
const breadcrumbLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.value.map((c, i) => {
    const item = {
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
    }
    if (c.to) item.item = origin + c.to
    return item
  }),
}))
</script>
