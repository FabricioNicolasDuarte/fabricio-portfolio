<template>
  <section id="nutrogan" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <div class="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <p class="text-xs font-medium tracking-widest text-cyan-400 uppercase">Producto · agro · datos</p>
        <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Nutrogan</h2>
        <p class="mt-4 text-[15px] leading-relaxed text-slate-400">
          Plataforma ganadera offline-first para gestión de rodeos, indicadores productivos,
          GIS y visión por computadora. Desarrollada en colaboración con el CEDEVA.
          Constitutiva de la base técnica de SIGAG (Sistema Integral de Gestión Agrícola Ganadera).
        </p>
        <p class="mt-4 text-sm text-slate-500">Stack: Vue · Quasar · Pinia · PostgreSQL · TensorFlow.js</p>
        <p class="mt-4 text-sm">
          <a class="text-cyan-300 underline decoration-cyan-500/30 underline-offset-4 hover:text-cyan-200" href="https://github.com/FabricioNicolasDuarte/Nutrogan" target="_blank" rel="noopener noreferrer">github.com/FabricioNicolasDuarte/Nutrogan</a>
        </p>
      </div>
      <div class="relative">
        <div class="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-400/40 via-indigo-500/20 to-transparent blur-md"></div>
        <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950">
          <video controls class="aspect-video w-full" poster="/images/nutrogan-poster.jpg">
            <source src="/images/nutrogan-demo.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </section>
</template>
