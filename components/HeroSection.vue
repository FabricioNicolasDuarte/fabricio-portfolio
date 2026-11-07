<template>
  <section id="top" class="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
    <!-- Top Grid: Narrative & Workstation Device Frame -->
    <div class="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,400px)] lg:gap-16">
      <!-- Left Column: High-Impact Typography & Value Proposition -->
      <div class="fd-rise flex flex-col items-start">
        <!-- Telemetry Status Pill -->
        <div class="inline-flex items-center gap-2.5 rounded-full border border-signal/30 bg-signal/5 px-3.5 py-1.5 backdrop-blur-md">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          <span class="font-mono text-xs font-semibold tracking-wider uppercase text-signal">
            {{ t.hero.badge }}
          </span>
        </div>

        <!-- Monumental Headline -->
        <h1 class="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Fabricio Duarte
        </h1>

        <!-- Subtitle & Role Tag -->
        <div class="mt-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-400">
          <span class="text-signal">//</span>
          <span>{{ t.hero.open }}</span>
        </div>

        <!-- Lead Narrative -->
        <p class="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-300">
          {{ t.hero.lead }}
        </p>

        <!-- CTA Action Cluster -->
        <div class="mt-8 flex flex-wrap items-center gap-4">
          <NuxtLink
            :to="localePath('/agendar')"
            class="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-signal px-6 py-3 font-semibold text-black shadow-[0_0_25px_rgba(162,255,0,0.25)] transition-all duration-300 hover:bg-[#b8ff33] hover:shadow-[0_0_35px_rgba(162,255,0,0.45)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{{ t.hero.book }}</span>
            <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
              <path d="M3.333 8h9.334M8 3.333L12.667 8 8 12.667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </NuxtLink>

          <NuxtLink
            :to="localePath('/trabajo')"
            class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-300 backdrop-blur-md transition-all duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            <span>{{ t.nav.work }}</span>
            <span class="text-xs text-signal">→</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Right Column: Precision Workstation Console Frame -->
      <div class="relative mx-auto w-full max-w-[360px] fd-rise fd-rise-delay lg:max-w-none">
        <!-- Ambient Glow behind Workstation Frame -->
        <div class="pointer-events-none absolute -inset-2 rounded-[28px] bg-gradient-to-b from-signal/20 via-transparent to-transparent opacity-50 blur-xl" />

        <!-- High-Precision OS Device Frame -->
        <div class="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0a0d14]/90 p-1.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
          <!-- Terminal / Window Header -->
          <div class="flex items-center justify-between border-b border-white/10 px-3.5 py-2.5 font-mono text-[11px] text-slate-400">
            <div class="flex items-center gap-1.5">
              <span class="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span class="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span class="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span class="truncate tracking-wider text-slate-400">duarte-workstation.live</span>
            <span class="flex items-center gap-1 text-[10px] text-signal font-semibold">
              <span class="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
              AR // 24/7
            </span>
          </div>

          <!-- Video Canvas Inside Frame -->
          <div class="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-black">
            <img
              src="/images/hero-portrait.jpg"
              alt="Fabricio Duarte"
              class="hero-poster aspect-[3/4] w-full object-cover object-top"
              width="760"
              height="1013"
            />
            <video
              ref="videoEl"
              class="hero-video absolute inset-0 h-full w-full object-cover object-top"
              autoplay
              muted
              loop
              playsinline
              preload="none"
              aria-hidden="true"
              @play="playing = true"
              @pause="playing = false"
            >
              <source src="/images/hero.mp4" type="video/mp4" />
            </video>

            <!-- Video Pause Control Overlay -->
            <button
              type="button"
              class="hero-pause absolute bottom-3.5 right-3.5 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/80 px-3 py-1.5 font-mono text-[10px] tracking-wider text-white shadow-lg backdrop-blur-md transition-all hover:border-signal hover:text-signal"
              @click="togglePortrait"
            >
              <span
                class="inline-block h-1.5 w-1.5 rounded-full"
                :class="playing ? 'bg-signal' : 'bg-slate-400'"
              />
              {{ playing ? t.hero.pause : t.hero.play }}
            </button>
          </div>

          <!-- Bottom Telemetry Console Footer -->
          <div class="flex items-center justify-between px-3.5 py-2 font-mono text-[10px] text-slate-400">
            <span>RESISTENCIA // LAT -27.45°</span>
            <span class="text-signal">PROMEDIO: 9.40</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Interactive Data Pipeline Architecture Conduit (The 4 Pillars of Data Fidelity) -->
    <div class="mt-16 rounded-2xl border border-white/10 bg-[#070b10]/80 p-6 backdrop-blur-xl sm:p-8">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-4">
        <div>
          <p class="fd-kicker">// ARQUITECTURA DE DATOS EN PRODUCCIÓN</p>
          <p class="font-display text-lg font-semibold text-white">Del dato disperso al indicador auditable</p>
        </div>
        <span class="font-mono text-xs text-signal">ESTÁNDAR: CERO DISCREPANCIAS</span>
      </div>

      <!-- Live Pipeline Flow Conduit -->
      <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Step 1 -->
        <div class="relative rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-signal/50 hover:bg-white/[0.04]">
          <div class="flex items-center justify-between text-xs font-mono text-slate-400">
            <span class="text-signal">01 // INGESTA</span>
            <span>SQL / APIs</span>
          </div>
          <p class="mt-2 font-display text-base font-semibold text-white">Fuentes Operativas</p>
          <p class="mt-1 text-xs leading-relaxed text-slate-400">PostgreSQL, SQL Server y planillas expuestas con periodicidad controlada sin bloquear producción.</p>
        </div>

        <!-- Step 2 -->
        <div class="relative rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-signal/50 hover:bg-white/[0.04]">
          <div class="flex items-center justify-between text-xs font-mono text-slate-400">
            <span class="text-signal">02 // MODELADO</span>
            <span>dbt / SQL</span>
          </div>
          <p class="mt-2 font-display text-base font-semibold text-white">Un Solo Criterio</p>
          <p class="mt-1 text-xs leading-relaxed text-slate-400">Limpieza, reglas de negocio auditadas y un modelo dimensional único que elimina discrepancias.</p>
        </div>

        <!-- Step 3 -->
        <div class="relative rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-signal/50 hover:bg-white/[0.04]">
          <div class="flex items-center justify-between text-xs font-mono text-slate-400">
            <span class="text-signal">03 // GOBIERNO</span>
            <span>Seguridad & Rol</span>
          </div>
          <p class="mt-2 font-display text-base font-semibold text-white">Recorte por Organismo</p>
          <p class="mt-1 text-xs leading-relaxed text-slate-400">Control de acceso estricto por identidad, auditoría de consultas y permisos por jurisdicción.</p>
        </div>

        <!-- Step 4 -->
        <div class="relative rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-signal/50 hover:bg-white/[0.04]">
          <div class="flex items-center justify-between text-xs font-mono text-slate-400">
            <span class="text-signal">04 // DECISIÓN</span>
            <span>Superset / Apps</span>
          </div>
          <p class="mt-2 font-display text-base font-semibold text-white">Tableros Usables</p>
          <p class="mt-1 text-xs leading-relaxed text-slate-400">Apache Superset institucional y aplicaciones offline-first que funcionan sin conexión a red.</p>
        </div>
      </div>
    </div>

    <!-- Bottom Section: Credentials & Stat Counter Cards -->
    <div class="mt-14 border-t border-white/10 pt-10">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <p class="max-w-2xl text-[15px] leading-relaxed text-slate-400">
          {{ t.hero.bodyBefore }}
          <a
            class="text-slate-200 underline decoration-white/25 underline-offset-4 transition hover:text-signal hover:decoration-signal"
            href="https://www.frre.utn.edu.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >{{ t.hero.utn }}</a>{{ t.hero.bodyMid }}
          <a
            class="text-slate-200 underline decoration-white/25 underline-offset-4 transition hover:text-signal hover:decoration-signal"
            href="https://ugr.edu.ar/carreras/ciclo-de-licenciatura-en-ciencia-de-datos/"
            target="_blank"
            rel="noopener noreferrer"
          >{{ t.hero.ugr }}</a>.
        </p>
      </div>

      <!-- Animated Stat Grid with Glass Elevation -->
      <dl class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div
          v-for="s in t.hero.stats"
          :key="s.label"
          class="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0d14]/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-signal/40 hover:bg-white/[0.03]"
        >
          <dt class="font-mono text-xs uppercase tracking-wider text-slate-400">{{ s.label }}</dt>
          <dd class="mt-2 font-display text-3xl font-bold tracking-tight text-white transition-colors group-hover:text-signal sm:text-4xl">
            <CountUp v-if="s.n != null" :to="s.n" :suffix="s.suffix || ''" />
            <span v-else>{{ s.value }}</span>
          </dd>
          <dd v-if="s.note" class="mt-1 text-xs text-signal/80">{{ s.note }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const { t, localePath } = useLocale()
const videoEl = ref(null)
const playing = ref(true)

function togglePortrait() {
  const el = videoEl.value
  if (!el) return
  if (el.paused) el.play()
  else el.pause()
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    videoEl.value?.pause()
    playing.value = false
  }
})
</script>
