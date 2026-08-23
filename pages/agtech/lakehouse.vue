<template>
  <main class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
    <a href="/#work" class="text-sm text-cyan-300 hover:text-cyan-200">← {{ isEn ? 'Work' : 'Trabajo' }}</a>
    <p class="mt-8 font-mono text-[11px] tracking-widest text-cyan-400 uppercase">{{ copy.kicker }}</p>
    <h1 class="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">{{ copy.title }}</h1>
    <p class="mt-4 max-w-3xl text-[17px] leading-relaxed text-slate-200">{{ copy.lede }}</p>
    <p class="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-400">{{ copy.sub }}</p>
    <ul class="mt-6 flex flex-wrap gap-2">
      <li v-for="t in copy.tags" :key="t" class="rounded-full border border-cyan-400/40 px-3 py-1 font-mono text-[11px] text-cyan-200">{{ t }}</li>
    </ul>
    <div class="mt-6 flex flex-wrap gap-3">
      <a class="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950" href="https://github.com/FabricioNicolasDuarte/skadia-data-engineering">{{ copy.repo }}</a>
      <a class="rounded-full border border-cyan-400/40 px-4 py-2 text-sm text-cyan-200" href="/agtech/dashboard.html">{{ copy.openDash }}</a>
    </div>
    <h2 class="mt-12 text-xs font-medium tracking-widest text-cyan-400 uppercase">{{ copy.gold }}</h2>
    <iframe title="gold dashboard" src="/agtech/dashboard.html" class="mt-3 h-[560px] w-full border border-cyan-400/25 bg-slate-950" />
    <h2 class="mt-12 text-xs font-medium tracking-widest text-cyan-400 uppercase">{{ copy.field }}</h2>
    <ul class="mt-3 max-w-3xl space-y-2 text-[15px] text-slate-400">
      <li v-for="l in copy.fieldLines" :key="l"><strong class="text-slate-200">{{ l[0] }}</strong> — {{ l[1] }}</li>
    </ul>
    <h2 class="mt-12 text-xs font-medium tracking-widest text-cyan-400 uppercase">{{ copy.eng }}</h2>
    <p class="mt-3 max-w-3xl text-[14px] leading-relaxed text-slate-400">{{ copy.engBody }}</p>
    <p class="mt-8 text-sm text-slate-400">{{ copy.clone }}</p>
    <p class="mt-2 font-mono text-xs text-cyan-200/90">git clone https://github.com/FabricioNicolasDuarte/skadia-data-engineering.git</p>
    <p class="mt-1 font-mono text-xs text-cyan-200/90">docker compose up -d --build && docker compose run --rm pipeline run-all</p>
  </main>
</template>

<script setup>
import { computed } from 'vue'
const { isEn } = useLocale()
const copy = computed(() =>
  isEn.value
    ? {
        kicker: 'Project · precision livestock · Skadia',
        title: 'From farm spreadsheets to a four-metric dashboard',
        lede: 'Weights, weather, body condition and treatments usually sit in Excel or manga sheets. This project loads those files and computes four numbers that matter on the ranch: daily gain, animals per hectare, heat-stress hours, and the share of thin cattle.',
        sub: 'The dashboard below is already computed. The GitHub repo has Docker to replay it (Airflow + PySpark). Spark runs locally if there is no Databricks cluster.',
        tags: ['Apache Airflow', 'PySpark', 'Delta Lake', 'Databricks', 'Docker Compose', 'Streamlit', 'Python', 'Quality gates'],
        repo: 'GitHub repository',
        openDash: 'Full-screen dashboard',
        gold: 'Published result',
        field: 'For operations',
        fieldLines: [
          ['ADG', 'kg gained per day between weighings'],
          ['Stocking', 'livestock units per usable hectare'],
          ['THI', 'hours of heat stress (temperature-humidity index)'],
          ['BCS', '% of animals below body-condition score 4 (1–9)'],
        ],
        eng: 'For data engineering',
        engBody: 'Medallion Delta (bronze/silver/gold). Airflow DAG, PySpark MERGE on captured_at, quarantine, quality gates (PK, nulls, BCS 1–9). ADG: ≥7-day gap, clip (−1.2, 2.4) kg/d, sanitary withdrawal. Stocking = Σ AU-days / (usable ha × days). Default 2,000 animals × 90 days. Demonstration dataset.',
        clone: 'Docker Desktop, ~4 GB RAM. Airflow http://localhost:8088 (admin/admin). Streamlit http://localhost:8501.',
      }
    : {
        kicker: 'Proyecto · ganadería de precisión · Skadia',
        title: 'De las planillas del campo a un tablero de indicadores',
        lede: 'El peso de los animales, el clima, la condición corporal y los tratamientos suelen estar en Excel o en planillas de manga. Este proyecto toma esas planillas y calcula cuatro números del día a día: cuánto gana el animal por día, cuántos hay por hectárea, cuánto calor de riesgo hubo y qué porcentaje está flaco.',
        sub: 'Abajo está el tablero ya calculado. En GitHub está el Docker para repetirlo (Airflow + PySpark). Si no hay cluster, Spark corre en la PC.',
        tags: ['Apache Airflow', 'PySpark', 'Delta Lake', 'Databricks', 'Docker Compose', 'Streamlit', 'Python', 'Quality gates'],
        repo: 'Repositorio en GitHub',
        openDash: 'Tablero a pantalla completa',
        gold: 'Resultado publicado',
        field: 'Para quien trabaja en el campo',
        fieldLines: [
          ['ADG', 'kilos que gana el animal por día, entre pesadas'],
          ['Carga', 'hacienda por hectárea útil (no un conteo de un solo día)'],
          ['ITH', 'horas de calor en las que el ganado está en estrés'],
          ['BCS', 'porcentaje de animales flacos (condición menor a 4, escala 1–9)'],
        ],
        eng: 'Para quien trabaja con datos',
        engBody: 'Medallón Delta (bronze/silver/gold). DAG Airflow, MERGE PySpark por captured_at, cuarentena, quality gates (PK, nulos, BCS 1–9). ADG: gap ≥ 7 días, clip (−1.2, 2.4) kg/d, retiro sanitario. Carga = Σ UA-día / (ha útil × días). Default 2.000 animales × 90 días. Dataset de demostración.',
        clone: 'Docker Desktop, ~4 GB RAM. Airflow http://localhost:8088 (admin/admin). Streamlit http://localhost:8501.',
      }
)
useHead({ title: () => (isEn.value ? 'From farm sheets to a dashboard — Fabricio Duarte' : 'De las planillas del campo al tablero — Fabricio Duarte') })
</script>
