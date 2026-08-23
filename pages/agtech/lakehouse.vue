<template>
  <main class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
    <a href="/#work" class="text-sm text-cyan-300 hover:text-cyan-200">← {{ isEn ? 'Work' : 'Trabajo' }}</a>

    <p class="mt-8 text-xs font-medium tracking-widest text-cyan-400 uppercase">{{ copy.kicker }}</p>
    <h1 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{{ copy.title }}</h1>
    <p class="mt-4 max-w-3xl text-[16px] leading-relaxed text-slate-400">{{ copy.lede }}</p>

    <div class="mt-8 overflow-hidden rounded-2xl border border-cyan-400/20">
      <img src="/images/agtech-lakehouse.jpg" alt="" class="h-56 w-full object-cover sm:h-80" />
    </div>

    <ul class="mt-6 flex flex-wrap gap-2">
      <li v-for="t in copy.tags" :key="t" class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{{ t }}</li>
    </ul>

    <h2 class="mt-12 font-display text-xl font-semibold text-white">{{ copy.pipeTitle }}</h2>
    <ol class="mt-4 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-slate-400">
      <li v-for="s in copy.steps" :key="s">{{ s }}</li>
    </ol>

    <div class="mt-10 grid gap-4 md:grid-cols-3">
      <article v-for="col in copy.cols" :key="col.title" class="glass rounded-2xl p-6">
        <h3 class="font-display text-lg font-semibold text-white">{{ col.title }}</h3>
        <p class="mt-2 text-[14px] leading-relaxed text-slate-400">{{ col.body }}</p>
      </article>
    </div>

    <h2 class="mt-12 font-display text-xl font-semibold text-white">{{ copy.kpiTitle }}</h2>
    <div class="mt-4 grid gap-4 sm:grid-cols-4">
      <div v-for="m in copy.kpis" :key="m.label" class="glass rounded-2xl px-5 py-4">
        <p class="text-[11px] uppercase tracking-wider text-slate-500">{{ m.label }}</p>
        <p class="mt-1 font-display text-lg font-semibold text-white">{{ m.value }}</p>
      </div>
    </div>

    <h2 class="mt-12 font-display text-xl font-semibold text-white">{{ copy.runTitle }}</h2>
    <p class="mt-3 max-w-3xl whitespace-pre-line text-[15px] leading-relaxed text-slate-400">{{ copy.run }}</p>
  </main>
</template>

<script setup>
import { computed } from 'vue'

const { isEn } = useLocale()
const copy = computed(() =>
  isEn.value
    ? {
        kicker: 'Demo project · Skadia',
        title: 'From weighing sheets to a 4-KPI dashboard',
        lede: 'A project I built to show Apache Airflow, PySpark and Databricks (Spark in Docker if there is no cluster). It takes farm-style CSVs — weighings, herds, weather/THI, body condition, health — and writes Delta tables bronze → silver → gold. The UI shows ADG, stocking rate, heat-stress hours and % low BCS.',
        tags: ['Apache Airflow', 'PySpark', 'Databricks', 'Delta Lake', 'Docker Compose', 'Streamlit'],
        pipeTitle: 'What the pipeline does',
        steps: [
          'Landing: manga CSVs (including late weighings and bad rows).',
          'Bronze: raw Delta, partitioned by ingest date.',
          'Silver: clean + MERGE (newest capture wins); rejects go to quarantine.',
          'Quality gates: empty keys or out-of-range values stop gold.',
          'Gold + dashboard: KPIs. Local Airflow :8088, Streamlit :8501.',
        ],
        cols: [
          { title: '1. Input', body: 'Spreadsheets: herd, weighings, paddocks, BCS, health, weather station, daily stock.' },
          { title: '2. Engine', body: 'Airflow DAG + PySpark jobs. Same code on Databricks Free Edition or Spark local[*].' },
          { title: '3. Output', body: 'Dark HUD dashboard with four KPIs and a 90-day series.' },
        ],
        kpiTitle: 'Gold metrics',
        kpis: [
          { label: 'ADG', value: 'kg/day between weighings' },
          { label: 'Stocking', value: 'AU per usable hectare' },
          { label: 'THI', value: '% of hours at risk' },
          { label: 'BCS', value: '% of animals below 4' },
        ],
        runTitle: 'Run on a laptop',
        run: 'Repo: skadia-ganaderia-precision\ndocker compose up -d --build\ndocker compose run --rm pipeline run-all\nDashboard http://localhost:8501 · Airflow http://localhost:8088 (admin/admin)\nDemo scale: 2,000 animals × 90 days. Demonstration dataset.',
      }
    : {
        kicker: 'Proyecto demo · Skadia',
        title: 'De la planilla de manga al tablero de 4 KPIs',
        lede: 'Proyecto que armé para mostrar Apache Airflow, PySpark y Databricks (si no hay cluster, Spark en Docker). Toma planillas tipo Excel — pesadas, rodeos, clima/ITH, condición corporal, sanidad — y las deja en Delta bronze → silver → gold. El tablero muestra ADG, carga, ITH de riesgo y % BCS bajo.',
        tags: ['Apache Airflow', 'PySpark', 'Databricks', 'Delta Lake', 'Docker Compose', 'Streamlit'],
        pipeTitle: 'Qué hace el pipeline',
        steps: [
          'Landing: CSV de manga (incluye pesadas tarde y filas sucias).',
          'Bronze: Delta crudo, por fecha de ingesta.',
          'Silver: limpia + MERGE (gana la captura más nueva); lo inválido va a cuarentena.',
          'Quality gates: si rompe PK o rangos, no publica gold.',
          'Gold + tablero: KPIs. Airflow local :8088, Streamlit :8501.',
        ],
        cols: [
          { title: '1. Entrada', body: 'Planillas: hacienda, pesadas, potreros, BCS, sanidad, estación de clima, stock diario.' },
          { title: '2. Motor', body: 'DAG de Airflow + jobs PySpark. El mismo código en Databricks Free Edition o Spark local[*].' },
          { title: '3. Salida', body: 'Tablero oscuro (HUD) con cuatro indicadores y serie de 90 días.' },
        ],
        kpiTitle: 'Indicadores del gold',
        kpis: [
          { label: 'ADG', value: 'kg/día entre pesadas' },
          { label: 'Carga', value: 'UA por hectárea útil' },
          { label: 'ITH', value: '% de horas en alerta' },
          { label: 'BCS', value: '% de animales bajo 4' },
        ],
        runTitle: 'Cómo correrlo',
        run: 'Repo: skadia-ganaderia-precision\ndocker compose up -d --build\ndocker compose run --rm pipeline run-all\nTablero http://localhost:8501 · Airflow http://localhost:8088 (admin/admin)\nEscala del demo: 2.000 animales × 90 días. Dataset de demostración.',
      }
)

useHead({
  title: () => (isEn.value ? 'Livestock pipeline — Fabricio Duarte' : 'Pipeline ganadero — Fabricio Duarte'),
})
</script>
