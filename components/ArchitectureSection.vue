<template>
  <section id="architecture" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <p class="text-xs font-medium tracking-widest text-cyan-400 uppercase">{{ copy.kicker }}</p>
    <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
      {{ copy.title }}
    </h2>
    <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">{{ copy.intro }}</p>

    <div class="mt-10 grid grid-cols-1 gap-3 md:grid-cols-5">
      <article v-for="(step, i) in copy.steps" :key="step.title" class="glass relative rounded-2xl p-5">
        <p class="font-mono text-[10px] tracking-widest text-cyan-400/80">0{{ i + 1 }}</p>
        <h3 class="mt-2 font-display text-base font-semibold text-white">{{ step.title }}</h3>
        <p class="mt-2 text-[13px] leading-relaxed text-slate-400">{{ step.body }}</p>
        <ul class="mt-3 flex flex-wrap gap-1.5">
          <li v-for="tag in step.tags" :key="tag" class="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-300">
            {{ tag }}
          </li>
        </ul>
        <span v-if="i < copy.steps.length - 1" class="pointer-events-none absolute -right-2 top-1/2 hidden -translate-y-1/2 text-cyan-400/50 md:block" aria-hidden="true">→</span>
      </article>
    </div>

    <p class="mt-6 text-sm text-slate-500">{{ copy.note }}</p>
    <p class="mt-3 text-sm">
      <a href="/agtech/lakehouse/" class="text-cyan-300 hover:text-cyan-200">{{ copy.lab }}</a>
    </p>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const { isEn } = useLocale()
const copy = computed(() => isEn.value
  ? {
      kicker: 'Method',
      title: 'Information architecture',
      intro: 'The same pattern across institutional and product platforms: heterogeneous sources, data contract, analytic model, governed visualization, and exception automation.',
      note: 'Layered security (RLS, federated identity) and export audit on the serving layer. Failed jobs are not silent: alerts are orchestrated.',
      lab: 'De las planillas del campo al tablero (Airflow, PySpark, Databricks) →',
      steps: [
        { title: 'Ingest', body: 'Transactional systems, GIS, registries, and staging files. The source is not rewritten: it is exposed under a contract.', tags: ['SQL Server', 'PostgreSQL', 'APIs', 'CSV'] },
        { title: 'Transform', body: 'Idempotent ETL/ELT, Spark jobs, and quality rules. Airflow DAGs or Celery — same contract, different runtime.', tags: ['Airflow', 'PySpark', 'Celery', 'Python'] },
        { title: 'Model', body: 'Analytic layer: facts, dimensions, and reusable metrics for dashboards and query APIs.', tags: ['SQL', 'PostGIS', 'datasets'] },
        { title: 'Visualize', body: 'Dashboards on consolidated data with embed, RLS, and federation. Institutional consumption, not a lab.', tags: ['Superset', 'Power BI', 'DAX'] },
        { title: 'Act', body: 'Exceptions, jobs, and notifications. If a batch fails, the flow detects it and escalates.', tags: ['n8n', 'webhooks', 'cron'] },
      ],
    }
  : {
      kicker: 'Método',
      title: 'Arquitectura de información',
      intro: 'El mismo patrón en plataformas institucionales y de producto: fuentes heterogéneas, contrato de datos, modelo analítico, visualización gobernada y automatización de excepciones.',
      note: 'Seguridad por capas (RLS, identidad federada) y auditoría de exportación en el serving. Los jobs fallidos no se silencian: se orquestan alertas.',
      lab: 'De las planillas del campo al tablero (Airflow, PySpark, Databricks) →',
      steps: [
        { title: 'Ingesta', body: 'Sistemas transaccionales, GIS, padrones y archivos de staging. El origen no se reescribe: se expone con contrato.', tags: ['SQL Server', 'PostgreSQL', 'APIs', 'CSV'] },
        { title: 'Transformación', body: 'ETL/ELT idempotente, jobs Spark y reglas de calidad. DAG Airflow o Celery: el mismo contrato, distinto runtime.', tags: ['Airflow', 'PySpark', 'Celery', 'Python'] },
        { title: 'Modelo', body: 'Capa analítica: hechos, dimensiones y métricas reutilizables para tableros y APIs de consulta.', tags: ['SQL', 'PostGIS', 'datasets'] },
        { title: 'Visualización', body: 'Dashboards de datos consolidados con embed, RLS y federación. Consumo institucional, no laboratorio.', tags: ['Superset', 'Power BI', 'DAX'] },
        { title: 'Acción', body: 'Excepciones, jobs y notificaciones. Si un lote falla, el flujo lo detecta y escala.', tags: ['n8n', 'webhooks', 'cron'] },
      ],
    })
</script>
