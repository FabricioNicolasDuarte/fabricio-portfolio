<template>
  <section class="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
    <div class="grid gap-10 border-t border-white/10 pt-12 md:grid-cols-3 md:gap-12">
      <NuxtLink to="/metodo" class="group block">
        <p class="text-[11px] tracking-[0.18em] text-slate-500 uppercase">{{ t.nav.method }}</p>
        <h2 class="mt-3 font-display text-xl font-semibold text-white group-hover:text-lime-300">{{ t.method.title }}</h2>
        <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ t.home.metodo }}</p>
      </NuxtLink>
      <NuxtLink to="/casos/ecom" class="group block">
        <p class="text-[11px] tracking-[0.18em] text-slate-500 uppercase">ECOM</p>
        <h2 class="mt-3 font-display text-xl font-semibold text-white group-hover:text-lime-300">{{ t.home.ecomTitle }}</h2>
        <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ t.home.ecom }}</p>
      </NuxtLink>
      <NuxtLink to="/skadia" class="group block">
        <p class="text-[11px] tracking-[0.18em] text-slate-500 uppercase">Skadia</p>
        <h2 class="mt-3 font-display text-xl font-semibold text-white group-hover:text-lime-300">{{ t.skadia.title }}</h2>
        <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ t.home.skadia }}</p>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const { t } = useLocale()
</script>
