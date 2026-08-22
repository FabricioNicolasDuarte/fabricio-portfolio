<template>
  <footer id="contact" class="relative">
    <div class="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <div class="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.12),transparent_50%)]"></div>
        <h2 class="relative font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {{ copy.title }}
        </h2>
        <p class="relative mt-4 max-w-xl text-slate-400">{{ copy.body }}</p>
        <div class="relative mt-8 flex flex-wrap gap-3">
          <a class="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.3)] transition hover:bg-cyan-300" href="mailto:fabricioduarteoficial@gmail.com">
            fabricioduarteoficial@gmail.com
          </a>
          <a class="rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-200 transition hover:border-cyan-400/50" href="tel:+543704022201">+54 370 402-2201</a>
          <a class="rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-200 transition hover:border-cyan-400/50" href="https://www.linkedin.com/in/fabricionicolasduarte/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a class="rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-200 transition hover:border-cyan-400/50" href="https://github.com/FabricioNicolasDuarte" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a
            class="rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-200 transition hover:border-cyan-400/50"
            :href="isEn ? '/cv/cv-ats-en.pdf' : '/cv/cv-ats.pdf'"
            :download="isEn ? 'CV_Fabricio_Duarte_ATS_EN.pdf' : 'CV_Fabricio_Duarte_ATS.pdf'"
          >{{ copy.ats }}</a>
          <a class="rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-200 transition hover:border-cyan-400/50" href="/cv/cv-visual.pdf" download="CV_Fabricio_Duarte_Visual.pdf">{{ copy.visual }}</a>
        </div>
      </div>
      <p class="mt-8 text-xs text-slate-600">© {{ year }} Fabricio Nicolás Duarte</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const year = new Date().getFullYear()
const { isEn } = useLocale()
const copy = computed(() => isEn.value
  ? {
      title: 'Data engineering and applied analytics',
      body: 'Open to roles in data engineering, business intelligence, process automation, and information architecture. Resistencia, Chaco · remote or hybrid. Spanish, technical English, and Portuguese.',
      ats: 'ATS CV (EN)',
      visual: 'Visual CV',
    }
  : {
      title: 'Ingeniería de datos y analítica aplicada',
      body: 'Abierto a roles de data engineering, business intelligence, automatización de procesos y arquitectura de información. Resistencia, Chaco · modalidad remota o híbrida. Español, inglés técnico y portugués.',
      ats: 'CV ATS',
      visual: 'CV visual',
    })
</script>
