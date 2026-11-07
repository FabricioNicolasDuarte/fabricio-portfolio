<template>
  <section id="nutrogan" data-kpr-section="nutrogan" data-kpr-theme="dark" class="frame-container py-16 md:py-20">
    <div class="grid items-center gap-10 border-t border-white/10 pt-12 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <p class="fd-kicker">{{ t.video.kicker }}</p>
        <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Nutrogan</h2>
        <p class="mt-4 text-[15px] leading-relaxed text-slate-400">{{ t.video.body }}</p>
        <p class="mt-4 text-sm text-muted">Stack: Vue · Quasar · Pinia · Supabase · Leaflet</p>
        <p class="mt-4 text-sm">
          <a class="text-lime-300 underline decoration-lime-500/30 underline-offset-4 hover:text-lime-200" :href="NUTROGAN_APP" target="_blank" rel="noopener noreferrer">nutrogan.site</a>
          <span class="text-white/30"> · </span>
          <a class="text-lime-300/80 underline decoration-lime-500/20 underline-offset-4 hover:text-lime-200" :href="AGRONYS_PRODUCTS.nutrogan" target="_blank" rel="noopener noreferrer">agronys.com</a>
        </p>
      </div>
      <div class="overflow-hidden border border-white/10 bg-slate-950">
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
import { AGRONYS_PRODUCTS, NUTROGAN_APP } from '~/utils/agronys'

const { t } = useLocale()
</script>
