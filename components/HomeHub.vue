<template>
  <section class="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
    <div class="grid gap-4 md:grid-cols-3">
      <NuxtLink to="/metodo" class="glass rounded-2xl p-6 transition hover:border-cyan-400/40">
        <p class="text-[11px] tracking-widest text-cyan-400 uppercase">{{ t.nav.method }}</p>
        <h2 class="mt-2 font-display text-xl font-semibold text-white">{{ t.method.title }}</h2>
        <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ t.home.metodo }}</p>
      </NuxtLink>
      <NuxtLink to="/casos/ecom" class="glass overflow-hidden rounded-2xl transition hover:border-cyan-400/40">
        <img src="/mockups/superset.png" alt="" class="h-36 w-full object-cover object-top" />
        <div class="p-6">
        <p class="text-[11px] tracking-widest text-cyan-400 uppercase">ECOM</p>
        <h2 class="mt-2 font-display text-xl font-semibold text-white">{{ t.home.ecomTitle }}</h2>
        <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ t.home.ecom }}</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/skadia" class="glass overflow-hidden rounded-2xl transition hover:border-cyan-400/40">
        <img src="/mockups/skadia-web.jpg" alt="" class="h-36 w-full object-cover object-top" />
        <div class="p-6">
        <p class="text-[11px] tracking-widest text-cyan-400 uppercase">Skadia</p>
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
