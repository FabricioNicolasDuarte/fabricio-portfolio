<template>
  <section id="caso" class="relative mx-auto max-w-6xl px-5 pb-8 sm:px-8">
    <p class="text-xs font-medium tracking-widest text-cyan-400 uppercase">{{ copy.kicker }}</p>
    <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{{ copy.title }}</h2>
    <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">{{ copy.intro }}</p>

    <div class="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <article v-for="col in copy.cols" :key="col.kicker" class="glass rounded-2xl p-6" :class="col.accent ? 'border-cyan-400/25' : ''">
        <p class="text-[11px] font-medium tracking-wider uppercase" :class="col.accent ? 'text-cyan-400' : 'text-slate-500'">{{ col.kicker }}</p>
        <h3 class="mt-2 font-display text-lg font-semibold text-white">{{ col.title }}</h3>
        <ul class="mt-3 space-y-2 text-[14px] leading-relaxed text-slate-400">
          <li v-for="line in col.lines" :key="line">— {{ line }}</li>
        </ul>
      </article>
    </div>

    <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div v-for="m in copy.metrics" :key="m.label" class="glass rounded-2xl px-5 py-4">
        <p class="text-[11px] uppercase tracking-wider text-slate-500">{{ m.label }}</p>
        <p class="mt-1 font-display text-xl font-semibold text-white">{{ m.value }}</p>
        <p class="mt-1 text-[13px] text-slate-400">{{ m.note }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const { isEn } = useLocale()
const copy = computed(() => isEn.value
  ? {
      kicker: 'Case',
      title: 'From fragmented operations to governed decisions',
      intro: 'Synthetic case, no internal schemas. The pattern I apply when data exists in production but is not usable for decisions.',
      cols: [
        { kicker: 'Before', title: 'Indicators in silos', lines: ['Reports assembled by hand from several databases and spreadsheets.', 'Different metric definitions by area or entity.', 'Broad export access, no trail of who queries what.'] },
        { kicker: 'Pipeline', title: 'Contract + model + BI', accent: true, lines: ['Ingest from legacy (SQL Server / PostgreSQL) and APIs, without rewriting the core.', 'Idempotent transformation and async jobs (Celery / Redis).', 'Apache Superset / Power BI datasets and dashboards with RLS and federated identity.', 'n8n alerts on batch failures and operational deviations.'] },
        { kicker: 'After', title: 'One decision layer', lines: ['A single metric per entity, reused in dashboard and export.', 'Continuous institutional consumption (embed), not local copies.', 'Query and export audit; failures visible, not silent.'] },
      ],
      metrics: [
        { label: 'Governance', value: 'RLS + federation', note: 'Data scope follows identity, not a UI filter.' },
        { label: 'Operations', value: 'Jobs + alerts', note: 'Reconciliation and refresh do not depend on a spreadsheet operator.' },
        { label: 'Adoption', value: 'Embedded BI', note: 'The dashboard lives where work happens; it is not a file in email.' },
      ],
    }
  : {
      kicker: 'Caso',
      title: 'De operación fragmentada a decisión gobernada',
      intro: 'Caso sintético, sin datos ni esquemas internos. Resume el patrón que aplico cuando el dato existe en producción pero no es usable para decidir.',
      cols: [
        { kicker: 'Antes', title: 'Indicadores en silos', lines: ['Reportes armados a mano desde varias bases y planillas.', 'Criterios de métrica distintos según área o entidad.', 'Acceso amplio a exportaciones, sin traza de quién consulta qué.'] },
        { kicker: 'Pipeline', title: 'Contrato + modelo + BI', accent: true, lines: ['Ingesta desde legado (SQL Server / PostgreSQL) y APIs, sin migrar el core.', 'Transformación idempotente y jobs asíncronos (Celery / Redis).', 'Datasets y tableros Apache Superset / Power BI con RLS e identidad federada.', 'Alertas n8n sobre fallos de lote y desvíos operativos.'] },
        { kicker: 'Después', title: 'Una capa de decisión', lines: ['Métrica única por entidad, reutilizable en tablero y export.', 'Consumo institucional continuo (embed), no copias locales.', 'Auditoría de consulta y exportación; fallos visibles, no silenciosos.'] },
      ],
      metrics: [
        { label: 'Gobernanza', value: 'RLS + federación', note: 'El recorte de dato sigue a la identidad, no a un filtro de UI.' },
        { label: 'Operación', value: 'Jobs + alertas', note: 'Conciliación y refresco no dependen de un operador en planilla.' },
        { label: 'Adopción', value: 'BI embebido', note: 'El tablero vive donde se trabaja; no es un archivo que viaja por mail.' },
      ],
    })
</script>
