<template>
  <main id="contenido">
    <section class="relative min-h-[calc(100vh-3.5rem)] overflow-hidden">
      <img
        src="/images/profile.jpg"
        alt=""
        class="absolute inset-0 h-full w-full object-cover object-[center_20%]"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
      <div class="relative z-10 mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-6xl flex-col justify-end px-5 pb-16 pt-10 sm:px-8 sm:pb-24">
        <PathTrail flush />
        <p class="mt-8 text-xs font-medium tracking-widest text-lime-300 uppercase">{{ t.about.kicker }}</p>
        <h1 class="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          {{ t.about.title }}
        </h1>
        <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">{{ t.about.p1 }}</p>
        <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-400">{{ t.about.p2 }}</p>
        <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-400">{{ t.about.p3 }}</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink to="/trayectoria" class="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-black">{{ t.nav.path }}</NuxtLink>
          <NuxtLink to="/trabajo" class="rounded-full border border-white/20 px-5 py-2.5 text-sm text-white">{{ t.nav.work }}</NuxtLink>
          <NuxtLink to="/agendar" class="rounded-full border border-white/20 px-5 py-2.5 text-sm text-white">{{ t.nav.book }}</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const { t } = useLocale()
useHead({ title: computed(() => `${t.value.nav.about} — Fabricio Duarte`) })
</script>
