<template>
  <section id="architecture" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <p class="text-xs font-medium tracking-widest text-cyan-400 uppercase">Método</p>
    <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
      Arquitectura de información
    </h2>
    <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">
      El mismo patrón en plataformas institucionales y de producto: fuentes heterogéneas,
      contrato de datos, modelo analítico, visualización gobernada y automatización de excepciones.
    </p>

    <div class="mt-10 grid grid-cols-1 gap-3 md:grid-cols-5">
      <article
        v-for="(step, i) in steps"
        :key="step.title"
        class="glass relative rounded-2xl p-5"
      >
        <p class="font-mono text-[10px] tracking-widest text-cyan-400/80">0{{ i + 1 }}</p>
        <h3 class="mt-2 font-display text-base font-semibold text-white">{{ step.title }}</h3>
        <p class="mt-2 text-[13px] leading-relaxed text-slate-400">{{ step.body }}</p>
        <ul class="mt-3 flex flex-wrap gap-1.5">
          <li
            v-for="tag in step.tags"
            :key="tag"
            class="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-300"
          >
            {{ tag }}
          </li>
        </ul>
        <span
          v-if="i < steps.length - 1"
          class="pointer-events-none absolute -right-2 top-1/2 hidden -translate-y-1/2 text-cyan-400/50 md:block"
          aria-hidden="true"
        >→</span>
      </article>
    </div>

    <p class="mt-6 text-sm text-slate-500">
      Seguridad por capas (RLS, identidad federada) y auditoría de exportación en el serving.
      Los jobs fallidos no se silencian: se orquestan alertas.
    </p>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Ingesta',
    body: 'Sistemas transaccionales, GIS, padrones y archivos de staging. El origen no se reescribe: se expone con contrato.',
    tags: ['SQL Server', 'PostgreSQL', 'APIs', 'CSV'],
  },
  {
    title: 'Transformación',
    body: 'ETL/ELT idempotente, conciliación asíncrona y reglas de calidad. Lotes, colas y reintentos.',
    tags: ['Django', 'Celery', 'Redis', 'Python'],
  },
  {
    title: 'Modelo',
    body: 'Capa analítica: hechos, dimensiones y métricas reutilizables para tableros y APIs de consulta.',
    tags: ['SQL', 'PostGIS', 'datasets'],
  },
  {
    title: 'Visualización',
    body: 'Dashboards de datos consolidados con embed, RLS y federación. Consumo institucional, no laboratorio.',
    tags: ['Superset', 'Power BI', 'DAX'],
  },
  {
    title: 'Acción',
    body: 'Excepciones, jobs y notificaciones. Si un lote falla, el flujo lo detecta y escala.',
    tags: ['n8n', 'webhooks', 'cron'],
  },
]
</script>
