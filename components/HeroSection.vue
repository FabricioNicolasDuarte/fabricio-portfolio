<template>
  <section id="top" class="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
    <div class="mb-8 inline-flex animate-rise items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1.5 text-xs font-medium text-lime-200">
      <span class="relative flex h-2 w-2">
        <span class="relative inline-flex h-2 w-2 rounded-full bg-lime-400"></span>
      </span>
      {{ t.hero.badge }} · {{ t.hero.open }}
    </div>

    <div class="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div>
        <p class="animate-rise font-display text-sm font-medium tracking-widest text-lime-300/80 uppercase">
          {{ t.hero.line }}
        </p>
        <h1 class="mt-3 animate-rise font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          Fabricio
          <span class="shine-text">Duarte</span>
        </h1>
        <p class="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-slate-300" style="animation-delay: 80ms">
          {{ t.hero.lead }}
        </p>
        <p class="mt-4 max-w-xl animate-rise text-[15px] leading-relaxed text-slate-400" style="animation-delay: 140ms">
          {{ t.hero.bodyBefore }}
          <a class="text-lime-300 underline decoration-lime-500/40 underline-offset-4 hover:text-lime-200" href="https://www.frre.utn.edu.ar/" target="_blank" rel="noopener noreferrer">{{ t.hero.utn }}</a>{{ t.hero.bodyMid }}
          <a class="text-lime-300 underline decoration-lime-500/40 underline-offset-4 hover:text-lime-200" href="https://ugr.edu.ar/carreras/ciclo-de-licenciatura-en-ciencia-de-datos/" target="_blank" rel="noopener noreferrer">{{ t.hero.ugr }}</a>.
        </p>
        <div class="mt-8 flex flex-wrap gap-3 animate-rise" style="animation-delay: 200ms">
          <NuxtLink to="/agendar" class="rounded-full bg-lime-400 px-6 py-2.5 text-sm font-semibold text-black shadow-[0_0_32px_rgba(162,255,0,0.35)] transition hover:bg-lime-300">
            {{ t.hero.book }}
          </NuxtLink>
          <a href="/cv/cv-visual.pdf" download="CV_Fabricio_Duarte_Visual.pdf" class="rounded-full border border-lime-400/40 bg-lime-400/10 px-6 py-2.5 text-sm font-semibold text-lime-100 transition hover:border-lime-300">
            {{ t.hero.cvVisual }}
          </a>
          <a
            :href="atsCv.href"
            :download="atsCv.file"
            class="rounded-full border border-lime-400/40 bg-lime-400/10 px-6 py-2.5 text-sm font-semibold text-lime-100 transition hover:border-lime-300 hover:bg-lime-400/20"
          >
            {{ t.hero.cvAts }}
          </a>
          <a href="https://github.com/FabricioNicolasDuarte" target="_blank" rel="noopener noreferrer" class="rounded-full border border-white/15 px-6 py-2.5 text-sm text-slate-200 transition hover:border-lime-400/50 hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/fabricionicolasduarte/" target="_blank" rel="noopener noreferrer" class="rounded-full border border-white/15 px-6 py-2.5 text-sm text-slate-200 transition hover:border-lime-400/50 hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-[260px] lg:max-w-none">
        <div class="absolute -inset-3 rounded-none bg-lime-400/25 blur-[2px]"></div>
        <div class="relative overflow-hidden border border-lime-400/30 bg-black p-1">
          <img src="/images/profile.jpg" alt="Fabricio Duarte" class="aspect-[4/5] w-full object-cover object-[center_20%]" />
        </div>
      </div>
    </div>

    <ol class="mt-16 grid gap-3 sm:grid-cols-4">
      <li
        v-for="(step, i) in t.hero.pipeline"
        :key="step"
        class="glass group relative overflow-hidden rounded-2xl px-4 py-4 text-center transition duration-300 hover:-translate-y-1 hover:border-lime-400/40"
        :style="{ animationDelay: `${i * 80}ms` }"
      >
        <span class="mb-2 block font-mono text-[10px] tracking-widest text-lime-400/80">0{{ i + 1 }}</span>
        <span class="text-sm font-medium text-slate-100">{{ step }}</span>
        <span class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-0 transition group-hover:opacity-100"></span>
      </li>
    </ol>

    <div class="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
      <div v-for="s in t.hero.stats" :key="s.label" class="glass rounded-2xl p-5 transition hover:border-lime-400/30">
        <p class="text-[11px] uppercase tracking-wider text-slate-500">{{ s.label }}</p>
        <p class="mt-2 font-display font-semibold text-white" :class="s.n != null ? 'text-3xl' : 'text-xl leading-tight sm:text-2xl'">
          <CountUp v-if="s.n != null" :to="s.n" :suffix="s.suffix || ''" />
          <span v-else>{{ s.value }}</span>
        </p>
        <p v-if="s.note" class="mt-1 text-xs text-slate-400">{{ s.note }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t, atsCv } = useLocale()
</script>
