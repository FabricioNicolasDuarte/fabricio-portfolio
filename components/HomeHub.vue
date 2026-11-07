<template>
  <section class="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
    <!-- 01 · EL MÉTODO: DEL ORIGEN AL INDICADOR -->
    <div class="border-t border-white/10 pt-16">
      <div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div class="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-signal">
            // EL MÉTODO DE INGENIERÍA
          </div>
          <h2 class="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {{ t.home.metodo }}
          </h2>
          <p class="mt-2 max-w-2xl text-[15px] leading-relaxed text-slate-400">
            {{ t.method.intro }}
          </p>
        </div>
        <NuxtLink :to="localePath('/metodo')" class="fd-btn-outline group shrink-0">
          <span>{{ t.nav.method }} completo</span>
          <span class="text-xs text-signal transition-transform duration-200 group-hover:translate-x-1">→</span>
        </NuxtLink>
      </div>

      <!-- 4-Step Interactive Architecture Cards -->
      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(step, i) in t.method.steps"
          :key="step.title"
          class="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#090d14]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-signal/50 hover:bg-white/[0.04]"
        >
          <!-- Step Number & Conduit Indicator -->
          <div>
            <div class="flex items-center justify-between font-mono text-xs">
              <span class="rounded bg-white/5 px-2 py-0.5 font-bold text-signal">
                0{{ i + 1 }}
              </span>
              <span class="text-slate-400 font-mono text-[11px]">FASE {{ i + 1 }}</span>
            </div>
            <h3 class="mt-4 font-display text-lg font-bold text-white group-hover:text-signal transition-colors">
              {{ step.title }}
            </h3>
            <p class="mt-2 text-xs leading-relaxed text-slate-300">
              {{ step.body }}
            </p>
          </div>

          <div v-if="step.detail" class="mt-4 border-t border-white/10 pt-3">
            <p class="text-[11px] leading-relaxed text-slate-400">
              {{ step.detail }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 02 · HISTORIA DE IMPACTO: ANTES VS DESPUÉS (Storytelling de Contraste) -->
    <div v-if="t.caso" class="mt-20 rounded-2xl border border-white/10 bg-[#06090e]/90 p-6 sm:p-10 backdrop-blur-2xl">
      <div class="max-w-2xl">
        <p class="fd-kicker">// LA REALIDAD OPERATIVA</p>
        <h3 class="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
          {{ t.caso.title }}
        </h3>
        <p class="mt-2 text-sm leading-relaxed text-slate-400">
          {{ t.caso.intro }}
        </p>
      </div>

      <!-- Comparison Matrix -->
      <div class="mt-8 grid gap-6 md:grid-cols-2">
        <!-- Col 1: El Caos Tradicional (Antes) -->
        <div class="rounded-xl border border-red-500/20 bg-red-950/10 p-6">
          <div class="flex items-center gap-2 font-mono text-xs font-semibold uppercase text-red-400">
            <span class="h-2 w-2 rounded-full bg-red-400" />
            {{ t.caso.cols[0].kicker }} · {{ t.caso.cols[0].title }}
          </div>
          <ul class="mt-4 space-y-2.5 text-xs text-slate-300">
            <li v-for="line in t.caso.cols[0].lines" :key="line" class="flex items-start gap-2.5">
              <span class="text-red-400 shrink-0">✕</span>
              <span>{{ line }}</span>
            </li>
          </ul>
        </div>

        <!-- Col 2: La Solución en Producción (Después) -->
        <div class="rounded-xl border border-signal/40 bg-signal/[0.04] p-6">
          <div class="flex items-center gap-2 font-mono text-xs font-semibold uppercase text-signal">
            <span class="h-2 w-2 rounded-full bg-signal" />
            {{ t.caso.cols[1].kicker }} · {{ t.caso.cols[1].title }}
          </div>
          <ul class="mt-4 space-y-2.5 text-xs text-slate-300">
            <li v-for="line in t.caso.cols[1].lines" :key="line" class="flex items-start gap-2.5">
              <span class="text-signal shrink-0">✓</span>
              <span>{{ line }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-4 sm:flex-row sm:items-center">
        <p class="text-xs text-slate-400">
          <strong class="text-white">{{ t.caso.resultKicker }}:</strong> {{ t.caso.result }}
        </p>
      </div>
    </div>

    <!-- 03 · PRUEBAS EN PRODUCCIÓN (SHOWCASE DE PROYECTOS) -->
    <div class="mt-20">
      <div class="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p class="fd-kicker">// SISTEMAS EN USO ACTIVO</p>
          <h2 class="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
            {{ t.home.proofs }}
          </h2>
        </div>
        <span class="font-mono text-xs text-slate-400 hidden sm:inline">PRODUCCIÓN VERIFICADA</span>
      </div>

      <!-- Featured Case: ECOM Chaco Executive Workstation -->
      <NuxtLink
        :to="localePath('/casos/ecom')"
        class="group mt-8 block overflow-hidden rounded-2xl border border-white/15 bg-[#080d14]/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:border-signal/50 hover:shadow-[0_20px_60px_rgba(162,255,0,0.12)]"
      >
        <!-- Mockup Window Header Bar -->
        <div class="flex items-center justify-between border-b border-white/10 bg-[#05080e] px-4 py-3 font-mono text-[11px] text-slate-400">
          <div class="flex items-center gap-2">
            <span class="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span class="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span class="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            <span class="ml-2 hidden rounded bg-white/5 px-2 py-0.5 text-slate-400 sm:inline">
              superset.ecom.chaco.gob.ar // ANALYTICS
            </span>
          </div>
          <span class="text-xs font-semibold text-signal">CASO ECOM DE DATOS ↗</span>
        </div>

        <div class="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <!-- Screenshot Preview -->
          <div class="relative overflow-hidden bg-black/40">
            <img
              src="/mockups/superset.png"
              :alt="t.home.ecomAlt"
              class="h-60 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] sm:h-full sm:min-h-[320px]"
              width="1200"
              height="720"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#080d14]/80 hidden lg:block" />
          </div>

          <!-- Narrative and Details -->
          <div class="flex flex-col justify-center p-6 sm:p-10">
            <div class="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-signal">
              <span>ECOM CHACO</span>
              <span>·</span>
              <span class="text-slate-400">ORGANISMOS PÚBLICOS</span>
            </div>

            <h3 class="mt-2 font-display text-2xl font-bold text-white transition-colors group-hover:text-signal sm:text-3xl">
              {{ t.home.ecomTitle }}
            </h3>

            <p class="mt-3 text-[15px] leading-relaxed text-slate-300">
              {{ t.home.ecom }}
            </p>

            <div class="mt-6 flex flex-wrap gap-2 font-mono text-[11px] text-slate-400">
              <span class="rounded border border-white/10 bg-white/5 px-2.5 py-1">PostgreSQL</span>
              <span class="rounded border border-white/10 bg-white/5 px-2.5 py-1">SQL Server</span>
              <span class="rounded border border-white/10 bg-white/5 px-2.5 py-1">Apache Superset</span>
              <span class="rounded border border-white/10 bg-white/5 px-2.5 py-1">Seguridad por Rol</span>
            </div>

            <div class="mt-6 flex items-center gap-2 text-sm font-semibold text-signal">
              <span>{{ t.home.ecomCta }}</span>
            </div>
          </div>
        </div>
      </NuxtLink>

      <!-- Secondary Projects Grid (Agronys, Cocoma, SIGCL) -->
      <div class="mt-6 grid gap-6 sm:grid-cols-3">
        <template v-for="item in secondary" :key="item.kicker">
          <a
            v-if="item.href"
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col justify-between rounded-xl border border-white/10 bg-[#080d14]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-signal/50 hover:bg-white/[0.03] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div>
              <div class="flex items-center justify-between font-mono text-xs">
                <span class="rounded bg-white/5 px-2 py-0.5 text-signal font-semibold">{{ item.kicker }}</span>
                <span class="text-slate-400">LIVE APP ↗</span>
              </div>
              <h3 class="mt-4 font-display text-lg font-bold text-white transition-colors group-hover:text-signal">
                {{ item.title }}
              </h3>
              <p class="mt-2 text-xs leading-relaxed text-slate-400">
                {{ item.body }}
              </p>
            </div>
            <div class="mt-6 border-t border-white/10 pt-3">
              <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-signal">
                {{ item.cta }}
              </span>
            </div>
          </a>

          <NuxtLink
            v-else
            :to="item.to"
            class="group flex flex-col justify-between rounded-xl border border-white/10 bg-[#080d14]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-signal/50 hover:bg-white/[0.03] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div>
              <div class="flex items-center justify-between font-mono text-xs">
                <span class="rounded bg-white/5 px-2 py-0.5 text-signal font-semibold">{{ item.kicker }}</span>
                <span class="text-slate-400">CASO AGTECH ↗</span>
              </div>
              <h3 class="mt-4 font-display text-lg font-bold text-white transition-colors group-hover:text-signal">
                {{ item.title }}
              </h3>
              <p class="mt-2 text-xs leading-relaxed text-slate-400">
                {{ item.body }}
              </p>
            </div>
            <div class="mt-6 border-t border-white/10 pt-3">
              <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-signal">
                {{ item.cta }}
              </span>
            </div>
          </NuxtLink>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const { t, localePath } = useLocale()

const secondary = computed(() => {
  const h = t.value.home
  return [
    {
      kicker: 'agronys.com',
      title: h.sigagTitle,
      body: h.agronys,
      to: localePath('/casos/agronys'),
      cta: h.sigagCta,
    },
    {
      kicker: 'Live App',
      title: h.cocomaTitle,
      body: h.cocoma,
      href: 'https://cocoma-app.onrender.com',
      cta: h.cocomaCta,
    },
    {
      kicker: 'Producto',
      title: h.sigclTitle,
      body: h.sigcl,
      href: 'https://github.com/FabricioNicolasDuarte/SIGCL',
      cta: h.sigclCta,
    },
  ]
})
</script>
