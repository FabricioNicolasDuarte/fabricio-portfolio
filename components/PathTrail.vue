<template>
  <nav
    v-if="crumbs.length"
    :class="flush ? 'pt-2' : 'frame-container-first pb-2'"
    :aria-label="t.nav.trail"
  >
    <p class="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[10px] uppercase tracking-wider text-white/50">
      <NuxtLink
        :to="backTo"
        data-hacky-host
        class="inline-flex items-center gap-1.5 font-bold text-[#c0fb50] hover:underline"
      >
        <span>←</span>
        <KprHackyText :text="t.nav.back" />
      </NuxtLink>
      <span class="text-white/25">//</span>
      <template v-for="(c, i) in crumbs" :key="c.to || c.label">
        <NuxtLink
          v-if="c.to && i < crumbs.length - 1"
          :to="c.to"
          data-hacky-host
          class="hover:text-[#c0fb50] transition-colors"
        >
          <KprHackyText :text="c.label" />
        </NuxtLink>
        <span v-else class="text-white">{{ c.label }}</span>
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
    '/agronys': [home, { label: n.agronys }],
    '/sobre': [home, { label: n.about }],
    '/trayectoria': [home, { to: localePath('/sobre'), label: n.about }, { label: n.path }],
    '/privacidad': [home, { label: n.privacy }],
    '/agendar': [home, { label: n.book }],
    '/agendar/enviado': [home, { to: localePath('/agendar'), label: n.book }, { label: n.sent }],
    '/casos/ecom': [home, { to: localePath('/trabajo'), label: n.work }, { label: n.caseEcom }],
    '/casos/agronys': [home, { to: localePath('/agronys'), label: n.agronys }, { label: n.caseAgronys }],
    '/agtech/lakehouse': [home, { to: localePath('/trabajo'), label: n.work }, { label: n.lakehouse }],
    '/propuestas': [home, { label: 'Propuestas' }],
    '/propuestas/axia': [home, { to: localePath('/propuestas'), label: 'Propuestas' }, { label: 'AXIA' }],
    '/ingresar': [home, { label: 'Ingresar' }],
  }
  return table[path] || []
})

const backTo = computed(() => {
  const linked = [...crumbs.value].reverse().find((c) => c.to)
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
