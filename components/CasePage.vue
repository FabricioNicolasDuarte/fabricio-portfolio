<template>
  <section class="relative mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-16">
    <PathTrail flush />
    <p class="fd-kicker mt-8">{{ kicker }}</p>
    <h1 class="mt-2 font-display text-4xl font-semibold text-white">{{ title }}</h1>
    <p class="mt-4 text-[15px] leading-relaxed text-slate-400">{{ lead }}</p>
    <div v-if="shots.length" class="mt-8 grid gap-4">
      <figure v-for="shot in shots" :key="shot.src">
        <img
          :src="shot.src"
          :alt="shot.alt"
          class="w-full rounded-2xl border border-white/10 object-cover object-top"
          loading="lazy"
          width="1200"
          height="720"
        />
      </figure>
    </div>
    <ul class="mt-8 space-y-3 text-[15px] leading-relaxed text-slate-300">
      <li v-for="line in lines" :key="line" class="fd-card px-4 py-3">{{ line }}</li>
    </ul>
    <p v-if="note" class="mt-6 text-sm text-muted">{{ note }}</p>
    <div class="mt-8 flex flex-wrap gap-3">
      <NuxtLink to="/agendar" class="fd-btn">{{ t.nav.book }}</NuxtLink>
      <NuxtLink to="/trabajo" class="fd-btn-outline">{{ t.nav.work }}</NuxtLink>
    </div>
  </section>
</template>

<script setup>
defineProps({
  kicker: { type: String, default: '' },
  title: { type: String, default: '' },
  lead: { type: String, default: '' },
  lines: { type: Array, default: () => [] },
  note: { type: String, default: '' },
  shots: { type: Array, default: () => [] },
})
const { t } = useLocale()
</script>
