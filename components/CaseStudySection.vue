<template>
  <section id="caso" class="relative mx-auto max-w-6xl px-5 pb-8 sm:px-8">
    <p class="fd-kicker">{{ t.caso.kicker }}</p>
    <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{{ t.caso.title }}</h2>
    <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">{{ t.caso.intro }}</p>
    <p class="mt-2 text-xs text-amber-200/80">{{ t.caso.demoTag }}</p>

    <div class="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <article v-for="col in t.caso.cols" :key="col.kicker" class="fd-card p-6" :class="col.accent ? 'border-lime-400/25' : ''">
        <p class="fd-kicker" :class="col.accent ? 'text-signal' : ''">{{ col.kicker }}</p>
        <h3 class="mt-2 font-display text-lg font-semibold text-white">{{ col.title }}</h3>
        <ul class="mt-3 space-y-2 text-[14px] leading-relaxed text-slate-400">
          <li v-for="line in col.lines" :key="line">— {{ line }}</li>
        </ul>
      </article>
    </div>

    <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div v-for="m in t.caso.metrics" :key="m.label" class="fd-card px-5 py-4">
        <p class="fd-kicker">{{ m.label }}</p>
        <p class="mt-1 font-display text-xl font-semibold text-white">{{ m.value }}</p>
        <p class="mt-1 text-[13px] text-slate-400">{{ m.note }}</p>
      </div>
    </div>
    <div class="mt-6 flex flex-wrap gap-4 text-sm">
      <NuxtLink :to="localePath('/casos/ecom')" class="text-lime-300 hover:text-lime-200">{{ t.caso.moreEcom }}</NuxtLink>
      <NuxtLink :to="localePath('/casos/skadia')" class="text-lime-300 hover:text-lime-200">{{ t.caso.moreSkadia }}</NuxtLink>
    </div>
  </section>
</template>

<script setup>
const { t, localePath } = useLocale()
</script>
