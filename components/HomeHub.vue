<template>
  <section class="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
    <div class="grid gap-4 md:grid-cols-3">
      <NuxtLink to="/metodo" class="glass overflow-hidden rounded-2xl transition hover:border-lime-400/40">
        <div class="grid grid-cols-4 gap-px border-b border-white/10 bg-white/5">
          <div v-for="(step, i) in t.hero.pipeline" :key="step" class="px-2 py-4 text-center">
            <p class="font-mono text-[9px] tracking-widest text-lime-400/80">0{{ i + 1 }}</p>
            <p class="mt-1 text-[11px] font-medium leading-tight text-slate-200">{{ step }}</p>
          </div>
        </div>
        <div class="p-6">
          <p class="text-[11px] tracking-widest text-lime-400 uppercase">{{ t.nav.method }}</p>
          <h2 class="mt-2 font-display text-xl font-semibold text-white">{{ t.method.title }}</h2>
          <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ t.home.metodo }}</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/casos/ecom" class="glass overflow-hidden rounded-2xl transition hover:border-lime-400/40">
        <img src="/mockups/superset.png" :alt="t.home.ecomTitle" class="h-36 w-full object-cover object-top" width="640" height="360" />
        <div class="p-6">
          <p class="text-[11px] tracking-widest text-lime-400 uppercase">ECOM</p>
          <h2 class="mt-2 font-display text-xl font-semibold text-white">{{ t.home.ecomTitle }}</h2>
          <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ t.home.ecom }}</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/skadia" class="glass overflow-hidden rounded-2xl transition hover:border-lime-400/40">
        <img src="/mockups/skadia-web.jpg" :alt="t.skadia.shotAlt" class="h-36 w-full object-cover object-top" width="640" height="360" />
        <div class="p-6">
          <p class="text-[11px] tracking-widest text-lime-400 uppercase">Skadia</p>
          <h2 class="mt-2 font-display text-xl font-semibold text-white">{{ t.skadia.title }}</h2>
          <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ t.home.skadia }}</p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const { t } = useLocale()
</script>
