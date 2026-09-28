<template>
  <main id="contenido" tabindex="-1" class="propuesta-page pb-28">
    <div class="mx-auto max-w-3xl px-5 pt-8 sm:px-8 sm:pt-12">
      <PathTrail flush />

      <div class="mt-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p class="fd-kicker">Propuesta comercial · Confidencial</p>
          <h1 class="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {{ p.title }}
          </h1>
          <p class="mt-2 text-sm text-signal">{{ p.client }}</p>
        </div>
        <button type="button" class="fd-btn-outline no-print shrink-0 text-xs" @click="downloadPdf">
          Descargar PDF
        </button>
      </div>
      <p class="mt-4 text-[16px] leading-relaxed text-slate-300">{{ p.summary }}</p>

      <div class="mt-8 grid gap-3 sm:grid-cols-3">
        <div class="fd-card p-4">
          <p class="text-[11px] uppercase tracking-wider text-muted">Inversión producto</p>
          <p class="mt-1 font-display text-2xl font-semibold text-signal">{{ money(p.investment.proposed) }}</p>
          <p class="mt-1 text-xs text-muted">
            <span class="line-through">{{ money(p.investment.reference) }}</span>
            · {{ p.investment.discountLabel }}
          </p>
        </div>
        <div class="fd-card p-4">
          <p class="text-[11px] uppercase tracking-wider text-muted">Operación mensual</p>
          <p class="mt-1 font-display text-2xl font-semibold text-white">{{ money(p.operation.monthly) }}</p>
          <p class="mt-1 text-xs text-muted">Infra + soporte + versiones</p>
        </div>
        <div class="fd-card p-4">
          <p class="text-[11px] uppercase tracking-wider text-muted">Horizonte</p>
          <p class="mt-1 font-display text-2xl font-semibold text-white">{{ p.horizon }}</p>
          <p class="mt-1 text-xs text-muted">Producto completo</p>
        </div>
      </div>

      <div class="fd-card mt-6 border-signal/25 bg-signal/5 p-5">
        <p class="text-sm font-medium text-signal">Propiedad del producto</p>
        <p class="mt-2 text-sm leading-relaxed text-slate-300">{{ p.ownership }}</p>
      </div>

      <section class="mt-12">
        <h2 class="font-display text-xl font-semibold text-white">Etapas</h2>
        <ol class="mt-5 space-y-4">
          <li
            v-for="s in p.stages"
            :key="s.id"
            class="fd-card p-5"
          >
            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <p class="font-display text-lg font-semibold text-white">
                <span class="text-signal">{{ s.id }}.</span> {{ s.name }}
              </p>
              <p class="text-xs text-muted">{{ s.when }}</p>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ s.text }}</p>
            <p class="mt-3 text-sm">
              <span class="text-muted line-through">{{ money(s.ref) }}</span>
              <span class="mx-2 text-signal font-semibold">{{ money(s.price) }}</span>
              <span v-if="s.priority" class="rounded-full border border-signal/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-signal">Prioridad</span>
            </p>
          </li>
        </ol>
      </section>

      <section class="mt-12">
        <h2 class="font-display text-xl font-semibold text-white">Tecnología</h2>
        <p class="mt-3 text-sm leading-relaxed text-slate-400">{{ p.techNote }}</p>
      </section>

      <section class="mt-12">
        <h2 class="font-display text-xl font-semibold text-white">Operación mensual (USD 150)</h2>
        <p class="mt-2 text-sm text-slate-400">
          Cargo único mensual mientras la app esté en línea. Correo institucional: no se gestiona ni se factura.
        </p>
        <ul class="mt-5 divide-y divide-white/10 rounded-2xl border border-white/10">
          <li
            v-for="row in p.infra"
            :key="row.item"
            class="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <span class="text-sm text-slate-300">{{ row.item }}</span>
            <span class="text-sm font-medium text-white sm:text-right">{{ row.amount }}</span>
          </li>
        </ul>
      </section>

      <section class="mt-12">
        <h2 class="font-display text-xl font-semibold text-white">Planes de pago del producto</h2>
        <div class="mt-5 grid gap-4 sm:grid-cols-2">
          <div
            v-for="plan in p.paymentPlans"
            :key="plan.id"
            class="fd-card p-5"
            :class="plan.featured ? 'border-signal/40' : ''"
          >
            <p class="text-[11px] uppercase tracking-wider text-signal">Plan {{ plan.id }} · {{ plan.name }}</p>
            <p class="mt-2 font-display text-2xl font-semibold text-white">{{ money(plan.total) }}</p>
            <ul class="mt-4 space-y-2 text-sm text-slate-400">
              <li v-for="line in plan.detail" :key="line">{{ line }}</li>
              <li>Operación {{ money(p.operation.monthly) }}/mes desde la publicación</li>
            </ul>
          </div>
        </div>
        <p class="mt-4 text-sm text-slate-400">
          Solo etapa 1 (público): <span class="line-through text-muted">{{ money(1400) }}</span>
          <strong class="text-signal"> {{ money(700) }}</strong>
          — 50% al firmar + 50% al publicar, o 2× {{ money(350) }}.
        </p>
      </section>

      <section class="mt-12">
        <h2 class="font-display text-xl font-semibold text-white">Fuera de alcance</h2>
        <ul class="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-400">
          <li v-for="x in p.excludes" :key="x">{{ x }}</li>
        </ul>
      </section>

      <section class="mt-12 fd-card p-6">
        <h2 class="font-display text-lg font-semibold text-white">Siguiente paso</h2>
        <ol class="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-400">
          <li>Revisar esta propuesta (producto completo o solo etapa 1).</li>
          <li>Elegir Plan A (hitos) o Plan B (cuotas).</li>
          <li>Consultar por WhatsApp para cerrar fecha de arranque.</li>
        </ol>
        <a
          :href="wa"
          class="fd-btn mt-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar por WhatsApp
        </a>
      </section>

      <p class="mt-10 text-xs text-muted">
        Fabricio Duarte ·
        <a class="hover:text-white" href="https://fabricioduarte.tech">fabricioduarte.tech</a>
        · Vigencia 30 días · Montos en USD
      </p>
    </div>

    <!-- CTA fijo -->
    <div class="no-print fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/95 px-4 py-3 backdrop-blur-md">
      <div class="mx-auto flex max-w-3xl flex-wrap items-center justify-end gap-2 sm:justify-between">
        <p class="hidden text-sm text-slate-400 sm:block">
          ¿Dudas sobre la propuesta?
        </p>
        <div class="flex w-full gap-2 sm:w-auto">
          <button type="button" class="fd-btn-outline flex-1 justify-center text-xs sm:flex-none" @click="downloadPdf">
            Descargar PDF
          </button>
          <a
            :href="wa"
            class="fd-btn flex-1 justify-center sm:flex-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { getPropuesta, money, whatsappHref } from '~/content/propuestas.js'

const route = useRoute()
const p = getPropuesta(String(route.params.slug))

if (!p) {
  throw createError({ statusCode: 404, statusMessage: 'Propuesta no encontrada' })
}

const wa = whatsappHref(p.client)

function downloadPdf() {
  if (!import.meta.client) return
  const href = `${p.formalDoc || `/propuestas/${p.slug}-documento.html`}?print=1`
  window.open(href, '_blank', 'noopener')
}

usePageMeta(() => `${p.client} · Propuesta`)
useHead({
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    {
      name: 'description',
      content: `${p.client}: ${p.title}. Inversión ${money(p.investment.proposed)}.`,
    },
  ],
})
</script>
