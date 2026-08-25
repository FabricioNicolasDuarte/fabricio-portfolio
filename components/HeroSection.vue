<template>
  <section id="top" class="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
    <div class="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(240px,380px)] lg:gap-16">
      <div>
        <p class="text-[11px] font-medium tracking-[0.22em] text-slate-500 uppercase">
          {{ t.hero.badge }}
        </p>
        <h1 class="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Fabricio Duarte
        </h1>
        <p class="mt-3 text-sm tracking-wide text-slate-400">{{ t.hero.line }}</p>
        <p class="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-300">
          {{ t.hero.lead }}
        </p>
        <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-400">
          {{ t.hero.bodyBefore }}
          <a class="text-slate-200 underline decoration-white/25 underline-offset-4 hover:text-white" href="https://www.frre.utn.edu.ar/" target="_blank" rel="noopener noreferrer">{{ t.hero.utn }}</a>{{ t.hero.bodyMid }}
          <a class="text-slate-200 underline decoration-white/25 underline-offset-4 hover:text-white" href="https://ugr.edu.ar/carreras/ciclo-de-licenciatura-en-ciencia-de-datos/" target="_blank" rel="noopener noreferrer">{{ t.hero.ugr }}</a>.
        </p>
        <p class="mt-6 text-[12px] tracking-[0.14em] text-slate-500 uppercase">
          <template v-for="(step, i) in t.hero.pipeline" :key="step">
            <span v-if="i"> · </span>{{ step }}
          </template>
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <NuxtLink to="/agendar" class="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-lime-300">
            {{ t.hero.book }}
          </NuxtLink>
          <a :href="atsCv.href" :download="atsCv.file" class="text-sm text-slate-300 underline decoration-white/20 underline-offset-4 hover:text-white">
            {{ t.hero.cvAts }}
          </a>
          <a href="/cv/cv-visual.pdf" download="CV_Fabricio_Duarte_Visual.pdf" class="text-sm text-slate-300 underline decoration-white/20 underline-offset-4 hover:text-white">
            {{ t.hero.cvVisual }}
          </a>
          <a href="https://github.com/FabricioNicolasDuarte" target="_blank" rel="noopener noreferrer" class="text-sm text-slate-400 hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/fabricionicolasduarte/" target="_blank" rel="noopener noreferrer" class="text-sm text-slate-400 hover:text-white">LinkedIn</a>
        </div>
      </div>

      <div class="mx-auto w-full max-w-[320px] lg:max-w-none">
        <video
          class="hero-video aspect-[3/4] w-full object-cover object-top"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          poster="/images/hero-poster.jpg"
          aria-label="Fabricio Duarte"
        >
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>
        <img
          src="/images/hero-poster.jpg"
          alt="Fabricio Duarte"
          class="hero-poster hidden aspect-[3/4] w-full object-cover object-top"
        />
      </div>
    </div>

    <dl class="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4">
      <div v-for="s in t.hero.stats" :key="s.label">
        <dt class="text-[11px] tracking-[0.16em] text-slate-500 uppercase">{{ s.label }}</dt>
        <dd class="mt-2 font-display text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">
          <CountUp v-if="s.n != null" :to="s.n" :suffix="s.suffix || ''" />
          <span v-else>{{ s.value }}</span>
        </dd>
        <dd v-if="s.note" class="mt-1 text-sm text-slate-500">{{ s.note }}</dd>
      </div>
    </dl>
  </section>
</template>

<script setup>
const { t, atsCv } = useLocale()
</script>
