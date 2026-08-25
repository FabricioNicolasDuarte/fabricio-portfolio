<template>
  <section class="relative mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-16">
    <PathTrail flush />
    <p class="mt-8 text-xs tracking-widest text-lime-400 uppercase">{{ kicker }}</p>
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
        <figcaption class="mt-2 text-[11px] text-slate-500">{{ t.work.mockup }}</figcaption>
      </figure>
    </div>
    <ul class="mt-8 space-y-3 text-[15px] leading-relaxed text-slate-300">
      <li v-for="line in lines" :key="line" class="glass rounded-2xl px-4 py-3">{{ line }}</li>
    </ul>
    <p v-if="note" class="mt-6 text-sm text-slate-500">{{ note }}</p>
    <div class="mt-8 flex flex-wrap gap-3">
      <NuxtLink to="/agendar" class="rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold text-black">{{ t.nav.book }}</NuxtLink>
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
  shots: { type: Array, default: () => [] },
})
const { t } = useLocale()
</script>
