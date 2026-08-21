<template>
  <footer id="contact" class="relative">
    <div class="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <div class="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.12),transparent_50%)]"></div>
        <h2 class="relative font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          ¿Buscás alguien que entregue datos en producción?
        </h2>
        <p class="relative mt-4 max-w-lg text-slate-400">
          Ingeniería de datos, analítica, automatización o producto.
          Resistencia, Chaco · remoto viable. Español, inglés técnico, portugués.
        </p>
        <div class="relative mt-8 flex flex-wrap gap-3">
          <a class="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.3)] transition hover:bg-cyan-300" href="mailto:fabricioduarteoficial@gmail.com">
            fabricioduarteoficial@gmail.com
          </a>
          <a class="rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-200 transition hover:border-cyan-400/50" href="tel:+543704022201">+54 370 402-2201</a>
          <a class="rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-200 transition hover:border-cyan-400/50" href="https://www.linkedin.com/in/fabricionicolasduarte/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a class="rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-200 transition hover:border-cyan-400/50" href="https://github.com/FabricioNicolasDuarte" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a class="rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-200 transition hover:border-cyan-400/50" href="/cv/cv-ats.html" target="_blank">CV ATS</a>
          <a class="rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-200 transition hover:border-cyan-400/50" href="/cv/cv-visual.html" target="_blank">CV visual</a>
        </div>
      </div>
      <p class="mt-8 text-xs text-slate-600">© {{ year }} Fabricio Nicolás Duarte</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
