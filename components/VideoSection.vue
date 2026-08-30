<template>
  <section id="nutrogan" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <div class="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <p class="fd-kicker">{{ t.video.kicker }}</p>
        <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Nutrogan</h2>
        <p class="mt-4 text-[15px] leading-relaxed text-slate-400">{{ t.video.body }}</p>
        <p class="mt-4 text-sm text-muted">Stack: Vue · Quasar · Pinia · PostgreSQL · TensorFlow.js</p>
        <p class="mt-4 text-sm">
          <a class="text-lime-300 underline decoration-lime-500/30 underline-offset-4 hover:text-lime-200" href="https://github.com/FabricioNicolasDuarte/Nutrogan" target="_blank" rel="noopener noreferrer">github.com/FabricioNicolasDuarte/Nutrogan</a>
        </p>
      </div>
      <div class="overflow-hidden rounded-3xl border border-white/10 bg-slate-950">
        <img
          src="/mockups/nutrogan.jpg"
          alt="Nutrogan"
          class="aspect-video w-full object-cover object-top"
          width="1200"
          height="675"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useLocale()
</script>
