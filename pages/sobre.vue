<template>
  <main id="contenido" tabindex="-1">
    <section class="relative mx-auto grid min-h-[calc(100vh-3.5rem)] max-w-6xl lg:grid-cols-2">
      <div class="relative min-h-[38vh] lg:min-h-full">
        <img
          src="/images/profile.jpg"
          alt="Fabricio Duarte"
          class="absolute inset-0 h-full w-full object-cover object-[center_28%] lg:object-[30%_center]"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/40" />
      </div>
      <div class="flex flex-col justify-center px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <PathTrail flush />
        <p class="fd-kicker mt-6">{{ t.place }}</p>
        <h1 class="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {{ t.about.title }}
        </h1>
        <p class="mt-5 text-lg leading-relaxed text-slate-200">{{ t.about.lead }}</p>
        <p class="mt-4 text-[15px] leading-relaxed text-slate-400">{{ t.about.body }}</p>

        <ul class="mt-8 grid gap-3">
          <li v-for="item in t.about.points" :key="item.title" class="fd-card p-4">
            <p class="font-display text-base font-semibold text-white">{{ item.title }}</p>
            <p class="mt-1 text-sm leading-relaxed text-slate-400">{{ item.body }}</p>
          </li>
        </ul>

        <p class="mt-6 text-sm leading-relaxed text-muted">{{ t.about.school }}</p>

        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink :to="localePath('/trabajo')" class="fd-btn">{{ t.nav.work }}</NuxtLink>
          <NuxtLink :to="localePath('/agendar')" class="fd-btn-outline">{{ t.nav.book }}</NuxtLink>
          <NuxtLink :to="localePath('/trayectoria')" class="fd-btn-ghost">{{ t.nav.path }}</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const { t, localePath } = useLocale()
usePageMeta(() => t.value.nav.about)
</script>
