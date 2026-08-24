<template>
  <section class="relative mx-auto max-w-3xl px-5 py-16 sm:px-8">
    <p class="text-xs text-cyan-400 uppercase tracking-widest">{{ kicker }}</p>
    <h1 class="mt-2 font-display text-4xl font-semibold text-white">{{ title }}</h1>
    <p class="mt-4 text-[15px] leading-relaxed text-slate-400">{{ lead }}</p>
    <ul class="mt-8 space-y-3 text-[15px] leading-relaxed text-slate-300">
      <li v-for="line in lines" :key="line" class="glass rounded-2xl px-4 py-3">{{ line }}</li>
    </ul>
    <p v-if="note" class="mt-6 text-sm text-slate-500">{{ note }}</p>
    <div class="mt-8 flex flex-wrap gap-3">
      <NuxtLink to="/agendar" class="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950">{{ t.nav.book }}</NuxtLink>
      <NuxtLink to="/trabajo" class="rounded-full border border-white/15 px-5 py-2 text-sm text-slate-300">{{ t.nav.work }}</NuxtLink>
    </div>
  </section>
</template>

<script setup>
defineProps({
  kicker: String,
  title: String,
  lead: String,
  lines: { type: Array, default: () => [] },
  note: String,
})
const { t } = useLocale()
</script>
