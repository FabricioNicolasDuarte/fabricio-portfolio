<template>
  <main id="contenido" tabindex="-1">
    <section class="relative min-h-[calc(100vh-3.5rem)] overflow-hidden">
      <img
        src="/images/profile.jpg"
        alt="Fabricio Duarte"
        class="absolute inset-0 h-full w-full object-cover object-[center_30%] lg:object-[18%_center]"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/25 lg:bg-gradient-to-l lg:from-slate-950 lg:via-slate-950/80 lg:to-transparent"></div>
      <div class="relative z-10 mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-6xl flex-col justify-end px-5 pb-16 pt-10 sm:px-8 sm:pb-24 lg:items-end">
        <div class="w-full max-w-xl">
          <PathTrail flush />
          <p class="fd-kicker mt-8">{{ t.about.kicker }}</p>
          <h1 class="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            {{ t.about.title }}
          </h1>
          <p class="mt-6 text-lg leading-relaxed text-slate-200">{{ t.about.p1 }}</p>
          <p class="mt-4 text-[15px] leading-relaxed text-slate-400">{{ t.about.p2 }}</p>
          <p class="mt-4 text-[15px] leading-relaxed text-slate-400">{{ t.about.p3 }}</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/trayectoria" class="fd-btn">{{ t.nav.path }}</NuxtLink>
            <NuxtLink to="/metodo" class="fd-btn-outline">{{ t.nav.method }}</NuxtLink>
            <NuxtLink to="/agendar" class="fd-btn-outline">{{ t.nav.book }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const { t } = useLocale()
usePageMeta(() => t.value.nav.about)
</script>
