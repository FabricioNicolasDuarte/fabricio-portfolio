<template>
  <section id="skadia" class="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
    <div class="glass overflow-hidden rounded-3xl p-8 sm:p-10">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p class="text-xs font-medium tracking-widest text-lime-400 uppercase">{{ t.skadia.kicker }}</p>
          <h2 class="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{{ t.skadia.title }}</h2>
          <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">{{ t.skadia.body }}</p>
        </div>
        <img src="/skadia/marca-skadia.svg" alt="Skadia" class="h-10 w-auto shrink-0 opacity-90 sm:h-12" />
      </div>

      <a
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
        class="group mt-8 block overflow-hidden rounded-2xl border border-white/10"
      >
        <img
          src="/mockups/skadia-web.jpg"
          :alt="t.skadia.shotAlt"
          class="w-full object-cover object-top"
        />
      </a>
      <p class="mt-2 text-[11px] text-slate-500">{{ t.work.mockup }}</p>

      <ul class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <li v-for="shot in shots" :key="shot.src" class="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <img :src="shot.src" :alt="shot.alt" class="h-40 w-full object-cover object-top" />
          <p class="px-4 py-3 font-display text-sm font-semibold text-white">{{ shot.name }}</p>
        </li>
      </ul>

      <ul class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <li v-for="line in t.skadia.lines" :key="line.name" class="rounded-2xl border border-white/10 bg-white/5 p-4">
          <img :src="line.icon" alt="" class="h-8 w-8" />
          <p class="mt-3 font-display text-base font-semibold text-white">{{ line.name }}</p>
          <p class="mt-1 text-[13px] leading-relaxed text-slate-400">{{ line.blurb }}</p>
        </li>
      </ul>

      <a
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-6 inline-flex items-center gap-1 text-sm text-lime-300 transition hover:text-lime-200"
      >
        {{ t.skadia.cta }}
      </a>
      <NuxtLink to="/casos/skadia" class="mt-3 ml-4 inline-flex text-sm text-lime-300 hover:text-lime-200">{{ t.caso.moreSkadia }}</NuxtLink>
    </div>
  </section>
</template>

<script setup>
const { t } = useLocale()
const href = 'https://fabricionicolasduarte.github.io/skadia-webgl/'
const shots = [
  { name: 'SIGAG', src: '/mockups/sigag.jpg', alt: 'SIGAG' },
  { name: 'Nutrogan', src: '/mockups/nutrogan.jpg', alt: 'Nutrogan' },
  { name: 'Lakehouse', src: '/mockups/skadia-lakehouse.png', alt: 'Lakehouse Skadia' },
]
</script>
