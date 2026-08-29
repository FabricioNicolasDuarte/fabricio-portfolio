<template>
  <main id="contenido" tabindex="-1" class="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-20">
    <PathTrail flush />
    <p class="mt-8 font-mono text-[11px] tracking-widest text-lime-400 uppercase">{{ copy.kicker }}</p>
    <h1 class="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">{{ copy.title }}</h1>
    <p class="mt-4 max-w-3xl text-[17px] leading-relaxed text-slate-200">{{ copy.lede }}</p>
    <p class="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-400">{{ copy.sub }}</p>
    <ul class="mt-6 flex flex-wrap gap-2">
      <li v-for="tag in copy.tags" :key="tag" class="rounded-full border border-lime-400/40 px-3 py-1 font-mono text-[11px] text-lime-200">{{ tag }}</li>
    </ul>
    <div class="mt-6 flex flex-wrap gap-3">
      <a class="fd-btn" href="https://github.com/FabricioNicolasDuarte/skadia-data-engineering">{{ copy.repo }}</a>
      <a class="fd-btn-outline" href="/agtech/dashboard.html">{{ copy.openDash }}</a>
    </div>
    <h2 class="mt-12 text-xs font-medium tracking-widest text-lime-400 uppercase">{{ copy.gold }}</h2>
    <iframe title="gold dashboard" src="/agtech/dashboard.html" class="mt-3 h-[70vh] min-h-[480px] w-full border border-lime-400/25 bg-slate-950" loading="lazy" />
    <h2 class="mt-12 text-xs font-medium tracking-widest text-lime-400 uppercase">{{ copy.field }}</h2>
    <ul class="mt-3 max-w-3xl space-y-2 text-[15px] text-slate-400">
      <li v-for="l in copy.fieldLines" :key="l"><strong class="text-slate-200">{{ l[0] }}</strong> — {{ l[1] }}</li>
    </ul>
    <h2 class="mt-12 text-xs font-medium tracking-widest text-lime-400 uppercase">{{ copy.eng }}</h2>
    <p class="mt-3 max-w-3xl text-[14px] leading-relaxed text-slate-400">{{ copy.engBody }}</p>
    <p class="mt-8 text-sm text-slate-400">{{ copy.clone }}</p>
    <p class="mt-2 font-mono text-xs text-lime-200/90">git clone https://github.com/FabricioNicolasDuarte/skadia-data-engineering.git</p>
    <p class="mt-1 font-mono text-xs text-lime-200/90">docker compose up -d --build && docker compose run --rm pipeline run-all</p>
  </main>
</template>

<script setup>
import { computed } from 'vue'

const { locale } = useLocale()

const pack = {
  es: {
    kicker: 'Proyecto · ganadería de precisión · Skadia',
    title: 'De las planillas del campo a un tablero de indicadores',
    lede: 'El peso, el clima, la condición corporal y los tratamientos suelen estar en Excel. Este proyecto toma esas planillas y calcula cuatro números del día a día: cuánto gana el animal por día, cuántos hay por hectárea, cuánto calor de riesgo hubo y qué porcentaje está flaco.',
    sub: 'Abajo está el tablero ya calculado. En GitHub está el Docker para repetirlo (Airflow + PySpark). Si no hay cluster, Spark corre en la PC.',
    tags: ['Apache Airflow', 'PySpark', 'Delta Lake', 'Databricks', 'Docker Compose', 'Streamlit', 'Python'],
    repo: 'Repositorio en GitHub',
    openDash: 'Tablero a pantalla completa',
    gold: 'Resultado publicado',
    field: 'Para quien trabaja en el campo',
    fieldLines: [
      ['ADG', 'kilos que gana el animal por día, entre pesadas'],
      ['Carga', 'hacienda por hectárea útil'],
      ['ITH', 'horas de calor en las que el ganado está en estrés'],
      ['BCS', 'porcentaje de animales flacos (condición menor a 4, escala 1–9)'],
    ],
    eng: 'Para quien trabaja con datos',
    engBody: 'Capas bronze / silver / gold en Delta. Un DAG de Airflow, PySpark y controles de calidad (claves, nulos, BCS 1–9). Dataset de demostración.',
    clone: 'Docker Desktop, unos 4 GB de RAM. Airflow http://localhost:8088 (admin/admin). Streamlit http://localhost:8501.',
  },
  en: {
    kicker: 'Project · precision livestock · Skadia',
    title: 'From farm spreadsheets to a four-metric dashboard',
    lede: 'Weights, weather, body condition and treatments usually sit in Excel. This project loads those files and computes four numbers that matter on the ranch: daily gain, animals per hectare, heat-stress hours, and the share of thin cattle.',
    sub: 'The dashboard below is already computed. GitHub has Docker to replay it (Airflow + PySpark). Spark runs on a laptop if there is no cluster.',
    tags: ['Apache Airflow', 'PySpark', 'Delta Lake', 'Databricks', 'Docker Compose', 'Streamlit', 'Python'],
    repo: 'GitHub repository',
    openDash: 'Full-screen dashboard',
    gold: 'Published result',
    field: 'For operations',
    fieldLines: [
      ['ADG', 'kg gained per day between weighings'],
      ['Stocking', 'livestock units per usable hectare'],
      ['THI', 'hours of heat stress'],
      ['BCS', '% of animals below body-condition score 4 (scale 1–9)'],
    ],
    eng: 'For data engineering',
    engBody: 'Bronze / silver / gold layers on Delta. One Airflow DAG, PySpark, and quality checks (keys, nulls, BCS 1–9). Demonstration dataset.',
    clone: 'Docker Desktop, about 4 GB RAM. Airflow http://localhost:8088 (admin/admin). Streamlit http://localhost:8501.',
  },
  pt: {
    kicker: 'Projeto · pecuária de precisão · Skadia',
    title: 'Das planilhas do campo a um painel de indicadores',
    lede: 'Peso, clima, condição corporal e tratamentos costumam estar no Excel. Este projeto lê essas planilhas e calcula quatro números do dia a dia: ganho por dia, animais por hectare, horas de calor de risco e percentual de gado magro.',
    sub: 'Abaixo está o painel já calculado. No GitHub está o Docker para repetir (Airflow + PySpark). Sem cluster, o Spark roda no PC.',
    tags: ['Apache Airflow', 'PySpark', 'Delta Lake', 'Databricks', 'Docker Compose', 'Streamlit', 'Python'],
    repo: 'Repositório no GitHub',
    openDash: 'Painel em tela cheia',
    gold: 'Resultado publicado',
    field: 'Para quem trabalha no campo',
    fieldLines: [
      ['ADG', 'quilos que o animal ganha por dia, entre pesagens'],
      ['Lotação', 'rebanho por hectare útil'],
      ['ITH', 'horas de calor em que o gado está em estresse'],
      ['BCS', 'percentual de animais magros (condição abaixo de 4, escala 1–9)'],
    ],
    eng: 'Para quem trabalha com dados',
    engBody: 'Camadas bronze / silver / gold em Delta. Um DAG Airflow, PySpark e checagens de qualidade. Dataset de demonstração.',
    clone: 'Docker Desktop, cerca de 4 GB de RAM. Airflow http://localhost:8088 (admin/admin). Streamlit http://localhost:8501.',
  },
  zh: {
    kicker: '项目 · 精准畜牧 · Skadia',
    title: '从牧场表格到四指标看板',
    lede: '体重、天气、体况和用药往往还在 Excel 里。本项目读取这些表，算出牧场天天要用的四个数：日增重、每公顷牲畜、热应激小时、瘦弱比例。',
    sub: '下方看板已经算好。GitHub 上有 Docker 可复现（Airflow + PySpark）。没有集群时 Spark 在电脑上跑。',
    tags: ['Apache Airflow', 'PySpark', 'Delta Lake', 'Databricks', 'Docker Compose', 'Streamlit', 'Python'],
    repo: 'GitHub 仓库',
    openDash: '全屏看板',
    gold: '已发布结果',
    field: '给一线看',
    fieldLines: [
      ['ADG', '两次称重之间每天增重的公斤数'],
      ['载畜', '每可用公顷的牲畜单位'],
      ['ITH', '家畜处于热应激的小时数'],
      ['BCS', '体况低于 4 分（1–9 分）的动物占比'],
    ],
    eng: '给数据工程看',
    engBody: 'Delta 的 bronze / silver / gold 分层。一个 Airflow DAG、PySpark 和质量检查。演示数据集。',
    clone: 'Docker Desktop，约 4 GB 内存。Airflow http://localhost:8088（admin/admin）。Streamlit http://localhost:8501。',
  },
}

const copy = computed(() => pack[locale.value] || pack.es)
usePageMeta(() => copy.value.title)
</script>

