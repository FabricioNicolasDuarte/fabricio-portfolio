<template>
  <main id="contenido" tabindex="-1">
    <HeroSection />
    <HomeHub />
    <section class="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
      <div class="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
        <div>
          <p class="fd-kicker">{{ t.work.kicker }}</p>
          <p class="mt-2 max-w-lg font-display text-2xl font-semibold text-white">{{ t.home.moreWork }}</p>
        </div>
        <div class="flex flex-wrap gap-3">
          <NuxtLink to="/trabajo" class="fd-btn-outline">{{ t.work.more }}</NuxtLink>
          <NuxtLink to="/agendar" class="fd-btn">{{ t.hero.book }}</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const { t } = useLocale()
usePageMeta()
</script>
