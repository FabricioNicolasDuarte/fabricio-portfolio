<template>
  <main class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
    <a href="/#work" class="text-sm text-cyan-300 hover:text-cyan-200">← {{ isEn ? 'Work' : 'Trabajo' }}</a>

    <p class="mt-8 text-xs font-medium tracking-widest text-cyan-400 uppercase">{{ copy.kicker }}</p>
    <h1 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{{ copy.title }}</h1>
    <p class="mt-4 max-w-2xl text-[16px] leading-relaxed text-slate-400">{{ copy.lede }}</p>

    <div class="mt-8 overflow-hidden rounded-2xl border border-cyan-400/20">
      <img src="/images/agtech-lakehouse.jpg" alt="" class="h-56 w-full object-cover sm:h-80" />
    </div>

    <ul class="mt-6 flex flex-wrap gap-2">
      <li v-for="t in copy.tags" :key="t" class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{{ t }}</li>
    </ul>

    <div class="mt-12 grid gap-4 md:grid-cols-3">
      <article v-for="col in copy.cols" :key="col.title" class="glass rounded-2xl p-6">
        <p class="text-[11px] font-medium tracking-wider text-cyan-400 uppercase">{{ col.kicker }}</p>
        <h2 class="mt-2 font-display text-lg font-semibold text-white">{{ col.title }}</h2>
        <p class="mt-2 text-[14px] leading-relaxed text-slate-400">{{ col.body }}</p>
      </article>
    </div>

    <div class="mt-10 grid gap-4 sm:grid-cols-4">
      <div v-for="m in copy.kpis" :key="m.label" class="glass rounded-2xl px-5 py-4">
        <p class="text-[11px] uppercase tracking-wider text-slate-500">{{ m.label }}</p>
        <p class="mt-1 font-display text-xl font-semibold text-white">{{ m.value }}</p>
      </div>
    </div>

    <p class="mt-10 max-w-3xl text-[15px] leading-relaxed text-slate-400">{{ copy.note }}</p>
    <p class="mt-4 text-sm text-slate-500">{{ copy.local }}</p>
  </main>
</template>

<script setup>
import { computed } from 'vue'

const { isEn } = useLocale()
const copy = computed(() =>
  isEn.value
    ? {
        kicker: 'Skadia · data platform lab',
        title: 'Precision livestock lakehouse',
        lede: 'A public proof that I run Apache Airflow, PySpark and Databricks (Free Edition, with Spark local as fallback) on the Skadia domain: weighings, herds, THI, BCS and health events into a bronze / silver / gold Delta medallion. Complementary to the field product (offline capture) — this is the orchestration and analytic layer.',
        tags: ['Apache Airflow', 'PySpark', 'Databricks', 'Delta Lake', 'quality gates', 'ADG · stocking · THI · BCS'],
        cols: [
          {
            kicker: 'fabricioduarte.tech',
            title: 'What I show here',
            body: 'Stack and method: idempotent DAG, MERGE for late-arriving scale files, quarantine instead of silent drops, KPIs with production rules (minimum weighing gap, sanitary withdrawal).',
          },
          {
            kicker: 'Skadia',
            title: 'Where it belongs',
            body: 'The startup owns the livestock problem. This lab is how planillas become governed KPIs without rewriting the paddock app.',
          },
          {
            kicker: 'Not SIGAG',
            title: 'Clear split',
            body: 'SIGAG is field operations. This repo is the lakehouse demo: same industry, different layer (Airflow + Spark). Dataset is a demonstration pack, unnamed establishments.',
          },
        ],
        kpis: [
          { label: 'ADG', value: 'kg / day' },
          { label: 'Stocking', value: 'AU / ha' },
          { label: 'THI risk', value: '% hours' },
          { label: 'Low BCS', value: '% < 4' },
        ],
        note: 'Run locally: Docker Compose (Airflow + Spark local[*]). Databricks notebooks in the same package when a Free Edition workspace is available.',
        local: 'Repo: skadia-ganaderia-precision on this machine. Publish the GitHub URL when the remote exists.',
      }
    : {
        kicker: 'Skadia · lab de plataforma de datos',
        title: 'Lakehouse de ganadería de precisión',
        lede: 'Prueba pública de Apache Airflow, PySpark y Databricks (Free Edition; Spark local si no hay cluster) sobre el dominio Skadia: pesadas, rodeos, ITH, BCS y sanidad en un medallón Delta bronze / silver / gold. Complementa el producto de campo (captura offline): esta capa es orquestación y analítica.',
        tags: ['Apache Airflow', 'PySpark', 'Databricks', 'Delta Lake', 'quality gates', 'ADG · carga · ITH · BCS'],
        cols: [
          {
            kicker: 'fabricioduarte.tech',
            title: 'Qué muestro acá',
            body: 'Stack y método: DAG idempotente, MERGE por late-arriving de balanza, cuarentena en vez de borrar en silencio, KPIs con reglas de producción (gap mínimo entre pesadas, retiro sanitario).',
          },
          {
            kicker: 'Skadia',
            title: 'Dónde vive',
            body: 'La startup es dueña del problema ganadero. Este lab es cómo las planillas de manga pasan a KPIs gobernados sin reescribir la app del potrero.',
          },
          {
            kicker: 'No es SIGAG',
            title: 'Corte claro',
            body: 'SIGAG es operación de campo. Este repo es el demo de lakehouse: misma industria, otra capa (Airflow + Spark). Dataset de demostración, establecimientos no nominados.',
          },
        ],
        kpis: [
          { label: 'ADG', value: 'kg / día' },
          { label: 'Carga', value: 'UA / ha' },
          { label: 'ITH riesgo', value: '% horas' },
          { label: 'BCS bajo', value: '% < 4' },
        ],
        note: 'Corrida local: Docker Compose (Airflow + Spark local[*]). Notebooks Databricks en el mismo paquete cuando hay workspace Free Edition.',
        local: 'Repo: skadia-ganaderia-precision. Cuando exista remoto en GitHub, esa URL reemplaza esta nota.',
      }
)

useHead({
  title: () => (isEn.value ? 'Precision livestock lakehouse — Fabricio Duarte' : 'Lakehouse ganadería de precisión — Fabricio Duarte'),
})
</script>
