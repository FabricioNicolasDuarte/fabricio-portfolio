<template>
  <main id="contenido" tabindex="-1" class="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
    <PathTrail flush />
    <p class="fd-kicker mt-8">Cartera interna</p>
    <h1 class="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
      Propuestas comerciales
    </h1>
    <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">
      Enlaces privados para compartir con clientes. No aparecen en el menú ni en buscadores.
      Cada ficha incluye etapas, costos y un botón de consulta por WhatsApp.
    </p>

    <ul class="mt-10 grid gap-4 sm:grid-cols-2">
      <li v-for="p in list" :key="p.slug">
        <NuxtLink
          :to="localePath(`/propuestas/${p.slug}`)"
          class="fd-card block h-full p-6"
        >
          <div class="flex flex-wrap items-center gap-2">
            <span class="rounded-full border border-signal/30 bg-signal/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-signal">
              {{ p.status }}
            </span>
            <span class="text-xs text-muted">{{ p.horizon }}</span>
          </div>
          <h2 class="mt-4 font-display text-xl font-semibold text-white">{{ p.client }}</h2>
          <p class="mt-1 text-sm text-slate-300">{{ p.title }}</p>
          <p class="mt-3 text-sm leading-relaxed text-slate-400">{{ p.summary }}</p>
          <p class="mt-5 font-display text-lg font-semibold text-signal">
            {{ money(p.investment.proposed) }}
            <span class="text-sm font-sans font-normal text-muted"> producto · {{ money(p.operation.monthly) }}/mes operación</span>
          </p>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script setup>
import { PROPUESTAS, money } from '~/content/propuestas.js'

const { localePath } = useLocale()
const list = PROPUESTAS

usePageMeta(() => 'Propuestas')
useHead({
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>
