<template>
  <main class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
    <a href="/#work" class="text-sm text-cyan-300 hover:text-cyan-200">← {{ isEn ? 'Work' : 'Trabajo' }}</a>
    <p class="mt-8 font-mono text-[11px] tracking-widest text-cyan-400 uppercase">skadia-data-engineering</p>
    <h1 class="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{{ copy.title }}</h1>
    <p class="mt-4 max-w-3xl text-[15px] leading-relaxed text-slate-400">{{ copy.lede }}</p>
    <div class="mt-6 flex flex-wrap gap-3">
      <a class="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950" href="https://github.com/FabricioNicolasDuarte/skadia-data-engineering">{{ copy.repo }}</a>
      <a class="rounded-full border border-cyan-400/40 px-4 py-2 text-sm text-cyan-200" href="/agtech/dashboard.html">{{ copy.openDash }}</a>
    </div>
    <h2 class="mt-12 text-xs font-medium tracking-widest text-cyan-400 uppercase">{{ copy.gold }}</h2>
    <iframe title="gold dashboard" src="/agtech/dashboard.html" class="mt-3 h-[560px] w-full border border-cyan-400/25 bg-slate-950" />
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
        title: 'Medallion pipeline · precision livestock',
        lede: 'Airflow orchestration, PySpark on Delta Lake (bronze / silver / gold), Databricks Free Edition or Spark local[*]. Facts: weighings, herds, hourly THI, BCS, health events, daily occupancy. Serving: ADG, stocking (AU/ha), THI risk hours, % BCS < 4.',
        repo: 'GitHub repository',
        openDash: 'Gold dashboard',
        gold: 'Published gold snapshot',
        clone: 'Full runtime is in the repo (Compose, jobs, DAG, Streamlit). Docker Desktop, ~4 GB RAM. Airflow :8088 admin/admin. Streamlit :8501.',
      }
    : {
        title: 'Pipeline medallón · ganadería de precisión',
        lede: 'Orquestación Airflow, PySpark sobre Delta Lake (bronze / silver / gold), Databricks Free Edition o Spark local[*]. Hechos: pesadas, rodeos, ITH horario, BCS, sanidad, ocupación diaria. Serving: ADG, carga UA/ha, horas ITH en riesgo, % BCS < 4.',
        repo: 'Repositorio en GitHub',
        openDash: 'Dashboard gold',
        gold: 'Snapshot gold publicado',
        clone: 'El runtime completo está en el repo (Compose, jobs, DAG, Streamlit). Docker Desktop, ~4 GB RAM. Airflow :8088 admin/admin. Streamlit :8501.',
      }
)
useHead({ title: 'skadia-data-engineering — Fabricio Duarte' })
</script>
