<template>
  <section id="top" class="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
    <div class="mb-8 inline-flex animate-rise items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-200">
      <span class="relative flex h-2 w-2">
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
        <span class="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
      </span>
      Resistencia, Chaco · Disponible para roles de datos y producto
    </div>

    <div class="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div>
        <p class="animate-rise font-display text-sm font-medium tracking-widest text-cyan-300/80 uppercase">
          Data Engineering · Analytics · Automation · Product
        </p>
        <h1 class="mt-3 animate-rise font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          Fabricio
          <span class="shine-text">Duarte</span>
        </h1>
        <p class="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-slate-300" style="animation-delay: 80ms">
          Convierto operación dispersa en sistemas de datos confiables:
          pipelines, BI con gobernanza, automatización e IA aplicada —
          en producción, no en demos.
        </p>
        <p class="mt-4 max-w-xl animate-rise text-[15px] leading-relaxed text-slate-400" style="animation-delay: 140ms">
          Técnico Universitario en Programación (UTN, mención de honor, promedio 9.40).
          Licenciatura en Ciencia de Datos,
          <a class="text-cyan-300 underline decoration-cyan-500/40 underline-offset-4 hover:text-cyan-200" href="https://ugr.edu.ar/carreras/ciclo-de-licenciatura-en-ciencia-de-datos/" target="_blank" rel="noopener noreferrer">Universidad del Gran Rosario</a>.
          Stack principal: Django, SQL (PostgreSQL / SQL Server), Superset, Power BI, n8n, Vue/Nuxt, Expo.
        </p>
        <div class="mt-8 flex flex-wrap gap-3 animate-rise" style="animation-delay: 200ms">
          <a href="/cv/cv-visual.html" target="_blank" class="rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_32px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300 hover:shadow-[0_0_48px_rgba(34,211,238,0.5)]">
            CV visual
          </a>
          <a href="/cv/cv-ats.html" target="_blank" class="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/20">
            CV ATS
          </a>
          <a href="https://github.com/FabricioNicolasDuarte" target="_blank" rel="noopener noreferrer" class="rounded-full border border-white/15 px-6 py-2.5 text-sm text-slate-200 transition hover:border-cyan-400/50 hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/fabricionicolasduarte/" target="_blank" rel="noopener noreferrer" class="rounded-full border border-white/15 px-6 py-2.5 text-sm text-slate-200 transition hover:border-cyan-400/50 hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-[260px] animate-float lg:max-w-none">
        <div class="absolute -inset-3 animate-spinSlow rounded-full bg-[conic-gradient(from_180deg,#22d3ee,#818cf8,#22d3ee)] opacity-70 blur-[1px]"></div>
        <div class="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950 p-1">
          <img src="/images/profile.jpg" alt="Fabricio Duarte" class="aspect-[4/5] w-full rounded-[1.1rem] object-cover" />
        </div>
      </div>
    </div>

    <ol class="mt-16 grid gap-3 sm:grid-cols-4">
      <li
        v-for="(step, i) in pipeline"
        :key="step"
        class="glass group relative overflow-hidden rounded-2xl px-4 py-4 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
        :style="{ animationDelay: `${i * 80}ms` }"
      >
        <span class="mb-2 block font-mono text-[10px] tracking-widest text-cyan-400/80">0{{ i + 1 }}</span>
        <span class="text-sm font-medium text-slate-100">{{ step }}</span>
        <span class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition group-hover:opacity-100"></span>
      </li>
    </ol>

    <div class="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
      <div v-for="s in stats" :key="s.label" class="glass rounded-2xl p-5 transition hover:border-cyan-400/30">
        <p class="text-[11px] uppercase tracking-wider text-slate-500">{{ s.label }}</p>
        <p class="mt-2 font-display text-3xl font-semibold text-white">
          <CountUp v-if="s.n != null" :to="s.n" :suffix="s.suffix || ''" />
          <span v-else>{{ s.value }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const pipeline = ['Ingesta', 'Transformación', 'Modelo', 'Decisión']
const stats = [
  { label: 'Promedio UTN', value: '9.40' },
  { label: 'Productos en mercado', n: 10, suffix: '+' },
  { label: 'Años en tecnología', n: 8, suffix: '+' },
  { label: 'Mención de honor', value: 'UTN' },
]
</script>
