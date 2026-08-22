<template>
  <section id="work" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <div class="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="text-xs font-medium tracking-widest text-cyan-400 uppercase">{{ isEn ? 'Selected work' : 'Portafolio' }}</p>
        <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{{ isEn ? 'Work' : 'Trabajo seleccionado' }}</h2>
        <p class="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-400">
          {{ isEn ? 'Data engineering, analytical visualization, automation, and production products.' : 'Ingeniería de datos, visualización analítica, automatización y producto en producción.' }}
        </p>
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
        <p class="mb-2 text-[11px] font-medium tracking-wider text-cyan-300 uppercase">{{ isEn ? (item.kindEn || item.kind) : item.kind }}</p>
        <h3 class="font-display text-2xl font-semibold tracking-tight text-white">{{ isEn ? (item.titleEn || item.title) : item.title }}</h3>
        <p class="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-400">{{ isEn ? (item.summaryEn || item.summary) : item.summary }}</p>
        <p class="mt-3 text-sm text-slate-500"><span class="text-slate-600">{{ isEn ? 'Role · ' : 'Rol · ' }}</span>{{ isEn ? (item.roleEn || item.role) : item.role }}</p>
        <ul class="mt-4 flex flex-wrap gap-2">
          <li v-for="tag in (isEn ? (item.tagsEn || item.tags) : item.tags)" :key="tag" class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300">
            {{ tag }}
          </li>
        </ul>
        <a
          v-if="item.href"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-flex items-center gap-1 text-sm text-cyan-300 transition hover:text-cyan-200"
        >
          {{ isEn ? 'Repo →' : 'Repositorio →' }}
        </a>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const { isEn } = useLocale()
const active = ref('all')
const filters = computed(() => isEn.value
  ? [
      { id: 'all', label: 'All' },
      { id: 'de', label: 'Data engineering' },
      { id: 'da', label: 'Analytics' },
      { id: 'auto', label: 'Automation' },
      { id: 'ecom', label: 'ECOM' },
      { id: 'product', label: 'Product' },
    ]
  : [
      { id: 'all', label: 'Todo' },
      { id: 'de', label: 'Data engineering' },
      { id: 'da', label: 'Analytics' },
      { id: 'auto', label: 'Automatización' },
      { id: 'ecom', label: 'ECOM' },
      { id: 'product', label: 'Producto' },
    ])

const work = [
  {
    featured: true,
    kind: 'Producto · datos · IA',
    title: 'SIGAG — Sistema Integral de Gestión Agrícola Ganadera',
    titleEn: 'SIGAG — Integrated Agricultural and Livestock Management System',
    summary:
      'Plataforma de ganadería de precisión para operación en campo con arquitectura offline-first: captura y persistencia local (WatermelonDB), sincronización diferencial al recuperar conectividad, visión artificial para estimación de condición corporal y reconocimiento de animales, motores analíticos (GMD, ITH, carga, sanidad, next-best-action) e integración de inteligencia artificial conversacional con orquestador inteligente de alertas y flujos (n8n). El dato nace en el potrero y alimenta modelos y tableros cuando hay red.',
    summaryEn:
      'Precision livestock platform for field operations with an offline-first architecture: local capture and persistence (WatermelonDB), differential sync when connectivity returns, computer vision for body-condition estimation and animal recognition, analytic engines (ADG, THI, stocking, health, next-best-action), and conversational AI with an intelligent alert orchestrator (n8n). Data is born in the paddock and feeds models and dashboards when the network is back.',
    role: 'Co-founder · producto y datos. Skadia, 2022–actualidad.',
    roleEn: 'Co-founder · product and data. Skadia, 2022–present.',
    kindEn: 'Product · data · AI',
    tags: ['Expo', 'TypeScript', 'WatermelonDB', 'Visión artificial', 'LLM', 'n8n', 'Supabase'],
    tagsEn: ['Expo', 'TypeScript', 'WatermelonDB', 'Computer vision', 'LLM', 'n8n', 'Supabase'],
    cats: ['product', 'de', 'da', 'auto'],
  },
  {
    featured: true,
    kind: 'Automatización · integración',
    title: 'Orquestación operativa — n8n',
    titleEn: 'Operational orchestration — n8n',
    summary:
      'Diseño e implementación de flujos self-hosted que integran sistemas heterogéneos: webhooks, staging, notificaciones y jobs programados. Prototipado en Make; producción en n8n. Power Automate y Apps Script según el ecosistema del cliente. Objetivo: automatizar procesos repetibles con trazabilidad y control de fallos.',
    summaryEn:
      'Design and implementation of self-hosted flows that integrate heterogeneous systems: webhooks, staging, notifications, and scheduled jobs. Prototyped in Make; production in n8n. Power Automate and Apps Script depending on the client ecosystem. Goal: automate repeatable processes with traceability and failure control.',
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
      'Plataforma de inteligencia de negocios sobre datos consolidados: modelado, pipelines de actualización, embed institucional, RLS por entidad e identidad federada. Apache Superset y Power BI como capa de visualización para análisis multidimensional y soporte a la toma de decisiones con procesos robustos de gobernanza y auditoría.',
    summaryEn:
      'Business intelligence on consolidated data: modeling, refresh pipelines, institutional embed, entity-level RLS, and federated identity. Apache Superset and Power BI as the visualization layer for multidimensional analysis and decision support with governance and audit.',
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
    cats: ['product', 'da', 'de'],
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
