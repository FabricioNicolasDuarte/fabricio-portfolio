<template>
  <main id="contenido">
    <HeroSection />
    <p class="mx-auto max-w-6xl px-5 pb-4 sm:px-8">
      <NuxtLink to="/sobre" class="text-sm text-cyan-300 hover:text-cyan-200">{{ t.home.aboutTeaser }} →</NuxtLink>
    </p>
    <HomeHub />
    <ProjectsSection compact />
    <section class="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <div class="glass flex flex-col items-start justify-between gap-4 rounded-2xl p-8 sm:flex-row sm:items-center">
        <div>
          <p class="text-xs tracking-widest text-cyan-400 uppercase">{{ t.book.kicker }}</p>
          <p class="mt-1 font-display text-2xl font-semibold text-white">{{ t.book.title }}</p>
        </div>
        <NuxtLink to="/agendar" class="rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-950">
          {{ t.hero.book }}
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
    <section class="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <div class="glass flex flex-col items-start justify-between gap-4 rounded-2xl p-8 sm:flex-row sm:items-center">
        <div>
          <p class="text-xs tracking-widest text-cyan-400 uppercase">{{ t.book.kicker }}</p>
          <p class="mt-1 font-display text-2xl font-semibold text-white">{{ t.book.title }}</p>
        </div>
        <NuxtLink to="/agendar" class="rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-950">
          {{ t.hero.book }}
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
const { t } = useLocale()
</script>
