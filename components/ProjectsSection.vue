<template>
  <section id="work" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <div class="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="text-xs font-medium tracking-widest text-cyan-400 uppercase">{{ t.work.kicker }}</p>
        <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{{ t.work.title }}</h2>
        <p class="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-400">{{ t.work.intro }}</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="f in filters"
          :key="f.id"
          class="rounded-full border px-3 py-1.5 text-xs font-medium transition"
          :class="active === f.id
            ? 'border-cyan-400 bg-cyan-400 text-slate-950'
            : 'border-white/10 text-slate-400 hover:border-cyan-400/40 hover:text-cyan-200'"
          @click="active = f.id"
        >
          {{ f.label }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <article
        v-for="item in visible"
        :key="item.title"
        class="group glass relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35 sm:p-7"
        :class="item.featured ? 'md:col-span-2' : ''"
      >
        <div class="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20"></div>
        <p class="mb-2 text-[11px] font-medium tracking-wider text-cyan-300 uppercase">{{ tx(item, 'kind') }}</p>
        <h3 class="font-display text-2xl font-semibold tracking-tight text-white">{{ tx(item, 'title') }}</h3>
        <p class="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-400">{{ tx(item, 'summary') }}</p>
        <p class="mt-3 text-sm text-slate-500"><span class="text-slate-600">{{ t.work.role }}</span>{{ tx(item, 'role') }}</p>
        <ul class="mt-4 flex flex-wrap gap-2">
          <li v-for="tag in (tx(item, 'tags') || item.tags)" :key="tag" class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300">
            {{ tag }}
          </li>
        </ul>
        <a
          v-if="item.href"
          :href="item.href"
          :target="item.external === false ? undefined : '_blank'"
          :rel="item.external === false ? undefined : 'noopener noreferrer'"
          class="mt-4 inline-flex items-center gap-1 text-sm text-cyan-300 transition hover:text-cyan-200"
        >
          {{ tx(item, 'cta') || t.work.repo }}
        </a>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const { t, tx } = useLocale()
const active = ref('all')
const filters = computed(() => t.value.work.filters)

const work = [
  {
    featured: true,
    kind: 'Producto · datos · IA',
    title: 'SIGAG — Sistema Integral de Gestión Agrícola Ganadera',
    titleEn: 'SIGAG — Integrated farm and livestock system',
    titlePt: 'SIGAG — Sistema integrado agrícola e pecuário',
    titleZh: 'SIGAG — 农牧一体化系统',
    summary:
      'App para el campo sin señal: carga pesadas, reconoce animales, estima condición corporal y calcula indicadores (ganancia diaria, calor, carga). Cuando vuelve la red, sincroniza y alimenta tableros. Incluye alertas automáticas (n8n).',
    summaryEn:
      'A farm app that works without signal: weighings, animal ID, body condition, and indicators (daily gain, heat stress, stocking). When the network is back it syncs and feeds dashboards. Alerts run on n8n.',
    summaryPt:
      'App de campo que funciona sem sinal: pesagens, identificação, condição corporal e indicadores (ganho diário, calor, lotação). Quando a rede volta, sincroniza e alimenta painéis. Alertas no n8n.',
    summaryZh:
      '无网络也能用的牧场应用：称重、识别、体况和指标（日增重、热应激、载畜量）。有网后同步并更新看板。告警走 n8n。',
    role: 'Cofundador · producto y datos. Skadia, 2022–actualidad.',
    roleEn: 'Co-founder · product and data. Skadia, 2022–present.',
    rolePt: 'Cofundador · produto e dados. Skadia, 2022–atual.',
    roleZh: '联合创始人 · 产品与数据。Skadia，2022 至今。',
    kindEn: 'Product · data · AI',
    kindPt: 'Produto · dados · IA',
    kindZh: '产品 · 数据 · 人工智能',
    tags: ['Expo', 'TypeScript', 'WatermelonDB', 'Visión artificial', 'LLM', 'n8n', 'Supabase'],
    tagsEn: ['Expo', 'TypeScript', 'WatermelonDB', 'Computer vision', 'LLM', 'n8n', 'Supabase'],
    cats: ['product', 'de', 'da', 'auto', 'agtech'],
  },
  {
    featured: true,
    kind: 'Data engineering · AgTech',
    title: 'De las planillas del campo al tablero (Airflow + PySpark)',
    titleEn: 'From farm spreadsheets to a dashboard (Airflow + PySpark)',
    titlePt: 'Das planilhas do campo ao painel (Airflow + PySpark)',
    titleZh: '从牧场表格到看板（Airflow + PySpark）',
    summary:
      'Toma planillas de pesadas, clima y sanidad y calcula cuatro números: ganancia diaria, animales por hectárea, horas de calor de riesgo y porcentaje de hacienda flaca. Corre con Airflow y PySpark (Databricks o en la PC).',
    summaryEn:
      'Takes weighing, weather and health sheets and computes four numbers: daily gain, animals per hectare, heat-stress hours, and the share of thin cattle. Runs on Airflow and PySpark (Databricks or on a laptop).',
    summaryPt:
      'Lê planilhas de pesagem, clima e sanidade e calcula quatro números: ganho diário, animais por hectare, horas de calor de risco e percentual de gado magro. Roda com Airflow e PySpark (Databricks ou no PC).',
    summaryZh:
      '读取称重、天气和卫生表格，算出四个数：日增重、每公顷牲畜、热应激小时、瘦弱比例。用 Airflow 和 PySpark 运行（Databricks 或本机）。',
    role: 'Pipeline y tablero.',
    roleEn: 'Pipeline and dashboard.',
    rolePt: 'Pipeline e painel.',
    roleZh: '流水线与看板。',
    kindEn: 'Data engineering · AgTech',
    kindPt: 'Engenharia de dados · AgTech',
    kindZh: '数据工程 · 农业科技',
    tags: ['Apache Airflow', 'PySpark', 'Delta Lake', 'Databricks', 'Docker', 'Streamlit'],
    tagsEn: ['Apache Airflow', 'PySpark', 'Delta Lake', 'Databricks', 'Docker', 'Streamlit'],
    cats: ['agtech', 'de', 'da', 'product'],
    href: '/agtech/lakehouse/',
    external: false,
    cta: 'Dashboard + repositorio →',
    ctaEn: 'Dashboard + repository →',
  },
  {
    featured: true,
    kind: 'Automatización · integración',
    title: 'Orquestación operativa — n8n',
    titleEn: 'Operational orchestration — n8n',
    summary:
      'Automatizo procesos que hoy se hacen a mano: avisos, cargas y cruces entre sistemas. Prototipo en Make; en producción uso n8n. Si un paso falla, queda registrado y se avisa.',
    summaryEn:
      'I automate work that is still done by hand: alerts, loads, and hand-offs between systems. Prototype in Make; production in n8n. If a step fails, it is logged and someone is notified.',
    summaryPt:
      'Automatizo o que ainda é feito à mão: avisos, cargas e cruzamentos entre sistemas. Protótipo no Make; produção no n8n. Se um passo falha, registra e avisa.',
    summaryZh:
      '把仍靠人手做的流程自动化：通知、装载、系统对接。原型用 Make，生产用 n8n。失败会记录并告警。',
    role: 'Arquitectura de flujos e integración. 2024–actualidad.',
    roleEn: 'Flow architecture and integration. 2024–present.',
    kindEn: 'Automation · integration',
    tags: ['n8n', 'Make', 'Power Automate', 'Apps Script', 'webhooks'],
    cats: ['auto', 'de'],
  },
  {
    featured: false,
    kind: 'Analytics · ECOM',
    title: 'Tableros institucionales — Apache Superset & Power BI',
    titleEn: 'Institutional dashboards — Apache Superset & Power BI',
    summary:
      'Tableros sobre datos ya unificados: cada organismo ve solo lo suyo. Se actualizan solos y se pueden incrustar en el sistema de trabajo (Apache Superset y Power BI).',
    summaryEn:
      'Dashboards on already-unified data: each organization sees only its own slice. They refresh on their own and can be embedded in the working system (Apache Superset and Power BI).',
    summaryPt:
      'Painéis sobre dados já unificados: cada órgão vê só o que é dele. Atualizam sozinhos e podem ir dentro do sistema de trabalho (Apache Superset e Power BI).',
    summaryZh:
      '基于已统一数据的看板：每个机构只看自己的范围。自动刷新，可嵌进业务系统（Apache Superset 与 Power BI）。',
    role: 'Ingeniería de datos. 2023–actualidad.',
    roleEn: 'Data engineering. 2023–present.',
    kindEn: 'Analytics · ECOM',
    tags: ['Apache Superset', 'Power BI', 'RLS', 'SQL', 'DAX'],
    cats: ['ecom', 'da', 'de'],
  },
  {
    featured: false,
    kind: 'Data engineering · ECOM',
    title: 'Apache Superset — operación analítica',
    titleEn: 'Apache Superset — analytic operations',
    summary:
      'Operación de motor BI en producción: datasets, métricas, embed, Mapbox, CSP y despliegue en cluster. Tableros de datos consolidados para consumo institucional continuo, no entorno de laboratorio.',
    summaryEn:
      'Production BI engine operations: datasets, metrics, embed, Mapbox, CSP, and cluster deployment. Dashboards on consolidated data for continuous institutional use, not a lab environment.',
    role: 'Ops de BI. 2023–actualidad.',
    roleEn: 'BI operations. 2023–present.',
    kindEn: 'Data engineering · ECOM',
    tags: ['Superset', 'SQL', 'Docker', 'Mapbox'],
    cats: ['ecom', 'de', 'da'],
  },
  {
    featured: false,
    kind: 'Data engineering · ECOM',
    title: 'Plataforma de Servicios e Instituciones',
    titleEn: 'Services and Institutions Platform',
    summary:
      'Sistema de gestión de establecimientos, conectividad, GIS, KPIs, auditoría y exportación (CSV/Excel/PDF). Convierte operación territorial en datasets consultables y gobernados.',
    summaryEn:
      'Management of establishments, connectivity, GIS, KPIs, audit, and export (CSV/Excel/PDF). Turns territorial operations into queryable, governed datasets.',
    role: 'Backend y datos. 2023–actualidad.',
    roleEn: 'Backend and data. 2023–present.',
    kindEn: 'Data engineering · ECOM',
    tags: ['Django', 'PostgreSQL', 'PostGIS', 'Python', 'ETL'],
    cats: ['ecom', 'de', 'da'],
  },
  {
    featured: false,
    kind: 'Automatización · integración',
    title: 'Pasarela de cobros',
    titleEn: 'Payment gateway',
    summary:
      'Motor de conciliación asíncrona mediante colas, webhooks y procesamiento por lotes. Orquestación de avisos ante fallos de sincronización y control de estados de liquidación.',
    summaryEn:
      'Asynchronous reconciliation engine using queues, webhooks, and batch processing. Orchestrated alerts on sync failures and settlement-state control.',
    role: 'Integración y datos. 2023–actualidad.',
    roleEn: 'Integration and data. 2023–present.',
    kindEn: 'Automation · integration',
    tags: ['Celery', 'Redis', 'n8n', 'SQL', 'webhooks'],
    cats: ['de', 'auto'],
  },
  {
    featured: false,
    kind: 'Data engineering · ECOM',
    title: 'Plataforma de Gestión de Personas Físicas y Jurídicas',
    titleEn: 'Individuals and Legal Entities Platform',
    summary:
      'Capa de consulta y API sobre legado SQL Server y PostgreSQL: exposición controlada del padrón de personas físicas y jurídicas sin reescritura completa del sistema de origen.',
    summaryEn:
      'Query layer and API over legacy SQL Server and PostgreSQL: controlled exposure of the individuals and legal-entities registry without a full rewrite of the source system.',
    role: 'Integración de datos. 2024–actualidad.',
    roleEn: 'Data integration. 2024–present.',
    kindEn: 'Data engineering · ECOM',
    tags: ['SQL Server', 'PostgreSQL', 'Django', 'DRF'],
    cats: ['ecom', 'de'],
  },
  {
    featured: false,
    kind: 'Producto · EdTech · comercializado',
    title: 'SIGCL — Sistema Integral de Gestión Curricular y Legal',
    titleEn: 'SIGCL — Integrated Curricular and Legal Management System',
    summary:
      'Plataforma de gestión educativa: sedes, matrículas, asistencia, actas, certificados, series temporales y ranking académico. API REST con Laravel Sanctum, roles granulares y reportes. Licencia comercializada (USD 4.500 + mantenimiento).',
    summaryEn:
      'Education management platform: campuses, enrollment, attendance, minutes, certificates, time series, and academic ranking. REST API with Laravel Sanctum, granular roles, and reports. Commercial license (USD 4,500 + maintenance).',
    role: 'Producto y desarrollo.',
    roleEn: 'Product and development.',
    kindEn: 'Product · EdTech · commercialized',
    tags: ['Laravel', 'PHP', 'Vue', 'MySQL', 'Sanctum'],
    cats: ['product', 'da'],
    href: 'https://github.com/FabricioNicolasDuarte/SIGCL',
  },
  {
    featured: false,
    kind: 'Producto · agro · datos',
    title: 'Nutrogan',
    summary:
      'Plataforma ganadera offline-first para gestión de rodeos, indicadores productivos, GIS y visión por computadora aplicada a condición corporal. Desarrollada en colaboración con el CEDEVA. Base técnica de SIGAG.',
    summaryEn:
      'Offline-first livestock platform for herd management, productive indicators, GIS, and computer vision for body condition. Developed in collaboration with CEDEVA. Technical foundation of SIGAG.',
    role: 'Tech lead. Skadia.',
    kindEn: 'Product · agri · data',
    tags: ['Vue', 'Quasar', 'Pinia', 'PostgreSQL', 'TensorFlow.js'],
    cats: ['product', 'da', 'de', 'agtech'],
    href: 'https://github.com/FabricioNicolasDuarte/Nutrogan',
  },
  {
    featured: false,
    kind: 'Analytics · comercializado',
    title: 'Cocoma App: Cálculo y Gestión de Proyectos Tecnológicos',
    titleEn: 'Cocoma App: Cost and Management of Technology Projects',
    summary:
      'Aplicación para estimación de costo y tiempo de software mediante modelos COCOMO I y II, escenarios what-if e informes. Comercializada en USD 1.500.',
    summaryEn:
      'Application for software cost and schedule estimation using COCOMO I and II, what-if scenarios, and reports. Sold for USD 1,500.',
    role: 'Modelo y desarrollo.',
    roleEn: 'Model and development.',
    kindEn: 'Analytics · commercialized',
    tags: ['PHP', 'Laravel', 'Docker', 'analytics'],
    cats: ['da', 'product'],
    href: 'https://github.com/FabricioNicolasDuarte/Cocoma-App',
  },
  {
    featured: false,
    kind: 'Datos espaciales',
    title: 'FormoBus',
    summary:
      'PWA de transporte urbano en Formosa: rutas, líneas, frecuencias e incidentes como dataset de servicio público.',
    summaryEn:
      'Urban transit PWA in Formosa: routes, lines, frequencies, and incidents as a public-service dataset.',
    role: 'Producto. 2025.',
    roleEn: 'Product. 2025.',
    kindEn: 'Spatial data',
    tags: ['PHP', 'MySQL', 'PWA'],
    cats: ['product', 'da'],
    href: 'https://github.com/FabricioNicolasDuarte/formobus',
  },
  {
    featured: false,
    kind: 'Datos públicos · colaboración',
    title: 'SIREG — consulta pública',
    titleEn: 'SIREG — public lookup',
    summary:
      'Colaboración en la implementación de consulta ciudadana de registros provinciales (Asuntos Registrales, Chaco).',
    summaryEn:
      'Collaboration on a citizen lookup of provincial registries (Registry Affairs, Chaco).',
    role: 'Colaboración en producto e implementación. 2025–2026.',
    roleEn: 'Product and implementation collaboration. 2025–2026.',
    kindEn: 'Public data · collaboration',
    tags: ['SQL', 'Django'],
    cats: ['da'],
  },
  {
    featured: false,
    kind: 'Analytics · visualización',
    title: 'Sistema de Compras — CGP Chaco',
    titleEn: 'Procurement system — CGP Chaco',
    summary:
      'Capa de KPIs y visualización analítica sobre el sistema de compras en operación.',
    summaryEn:
      'KPI layer and analytic visualization on the procurement system in production.',
    role: 'Visualización y UX de datos. 2025–2026.',
    roleEn: 'Data visualization and UX. 2025–2026.',
    kindEn: 'Analytics · visualization',
    tags: ['Chart.js', 'KPIs', 'JavaScript'],
    cats: ['da'],
  },
]

const visible = computed(() => {
  if (active.value === 'all') return work
  return work.filter(w => w.cats.includes(active.value))
})
</script>
