<template>
  <nav v-if="crumbs.length" :class="flush ? 'pt-2' : 'mx-auto max-w-6xl px-5 pt-6 sm:px-8'" :aria-label="t.nav.trail">
    <p class="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
      <NuxtLink :to="backTo" class="font-medium text-cyan-300 hover:text-cyan-200">← {{ t.nav.back }}</NuxtLink>
      <span class="text-slate-700">·</span>
      <template v-for="(c, i) in crumbs" :key="c.to || c.label">
        <NuxtLink v-if="c.to && i < crumbs.length - 1" :to="c.to" class="hover:text-cyan-200">{{ c.label }}</NuxtLink>
        <span v-else class="text-slate-400">{{ c.label }}</span>
        <span v-if="i < crumbs.length - 1" class="text-slate-700">/</span>
      </template>
    </p>
  </nav>
</template>

<script setup>
defineProps({ flush: Boolean })
const { t } = useLocale()
const route = useRoute()

const crumbs = computed(() => {
  const n = t.value.nav
  const path = route.path.replace(/\/$/, '') || '/'
  const home = { to: '/', label: n.home }
  const table = {
    '/metodo': [home, { label: n.method }],
    '/trabajo': [home, { label: n.work }],
    '/skadia': [home, { label: n.skadia }],
    '/sobre': [home, { label: n.about }],
    '/trayectoria': [home, { to: '/sobre', label: n.about }, { label: n.path }],
    '/agendar': [home, { label: n.book }],
    '/casos/ecom': [home, { to: '/trabajo', label: n.work }, { label: n.caseEcom }],
    '/casos/skadia': [home, { to: '/skadia', label: n.skadia }, { label: n.caseSkadia }],
    '/agtech/lakehouse': [home, { to: '/trabajo', label: n.work }, { label: n.lakehouse }],
  }
  return table[path] || []
})

const backTo = computed(() => {
  const linked = [...crumbs.value].reverse().find(c => c.to)
  return linked?.to || '/'
})
</script>
