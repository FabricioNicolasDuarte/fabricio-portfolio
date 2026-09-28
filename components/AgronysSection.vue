<template>
  <section id="agronys" class="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
    <div class="overflow-hidden border border-white/10 p-8 sm:p-10">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p class="fd-kicker">{{ t.agronys.kicker }}</p>
          <h1 class="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{{ t.agronys.title }}</h1>
          <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">{{ t.agronys.body }}</p>
        </div>
        <img src="/agronys/marca-agronys.svg" alt="Agronys" class="h-10 w-auto shrink-0 opacity-90 sm:h-12" />
      </div>

      <a
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
        class="group mt-8 block overflow-hidden border border-white/10"
      >
        <img
          src="/mockups/agronys-web.jpg"
          :alt="t.agronys.shotAlt"
          class="w-full object-cover object-top transition duration-300 group-hover:opacity-95"
        />
      </a>

      <ul class="mt-8 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
        <li v-for="line in t.agronys.lines" :key="line.name">
          <img :src="line.icon" alt="" class="h-8 w-8" />
          <p class="mt-3 font-display text-base font-semibold text-white">{{ line.name }}</p>
          <p class="mt-1 text-[13px] leading-relaxed text-slate-400">{{ line.blurb }}</p>
        </li>
      </ul>

      <div class="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        <a
          :href="href"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1 text-sm text-lime-300 transition hover:text-lime-200"
        >
          {{ t.agronys.cta }}
        </a>
        <NuxtLink :to="localePath('/casos/agronys')" class="inline-flex text-sm text-lime-300 hover:text-lime-200">{{ t.caso.moreAgronys }}</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t, localePath } = useLocale()
const href = 'https://agronys.com/'
</script>
