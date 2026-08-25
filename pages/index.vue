<template>
  <main id="contenido">
    <HeroSection />
    <p class="mx-auto max-w-6xl px-5 pb-4 sm:px-8">
      <NuxtLink to="/sobre" class="text-sm text-lime-300 hover:text-lime-200">{{ t.home.aboutTeaser }} →</NuxtLink>
    </p>
    <HomeHub />
    <ProjectsSection compact />
    <section class="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
      <div class="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
        <div>
          <p class="text-[11px] tracking-[0.18em] text-slate-500 uppercase">{{ t.book.kicker }}</p>
          <p class="mt-2 font-display text-2xl font-semibold text-white">{{ t.book.title }}</p>
        </div>
        <NuxtLink to="/agendar" class="rounded-full bg-lime-400 px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-lime-300">
          {{ t.hero.book }}
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
const { t } = useLocale()
</script>
