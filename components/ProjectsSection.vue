<template>
  <section id="work" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <div class="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="text-xs font-medium tracking-widest text-cyan-400 uppercase">Portafolio</p>
        <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Trabajo seleccionado</h2>
        <p class="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-400">
          Ingeniería de datos, visualización analítica, automatización y producto en producción.
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
        <p class="mb-2 text-[11px] font-medium tracking-wider text-cyan-300 uppercase">{{ item.kind }}</p>
        <h3 class="font-display text-2xl font-semibold tracking-tight text-white">{{ item.title }}</h3>
        <p class="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-400">{{ item.summary }}</p>
        <p class="mt-3 text-sm text-slate-500"><span class="text-slate-600">Rol · </span>{{ item.role }}</p>
        <ul class="mt-4 flex flex-wrap gap-2">
          <li v-for="tag in item.tags" :key="tag" class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300">
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
          Repositorio →
        </a>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const active = ref('all')
const filters = [
  { id: 'all', label: 'Todo' },
  { id: 'de', label: 'Data engineering' },
  { id: 'da', label: 'Analytics' },
  { id: 'auto', label: 'Automatización' },
  { id: 'ecom', label: 'ECOM' },
  { id: 'product', label: 'Producto' },
]

const work = [
  {
    featured: true,
    kind: 'Producto · datos · IA',
    title: 'SIGAG — Sistema Integral de Gestión Agrícola Ganadera',
    summary:
      'Plataforma de ganadería de precisión para operación en campo con arquitectura offline-first: captura y persistencia local (WatermelonDB), sincronización diferencial al recuperar conectividad, visión artificial para estimación de condición corporal y reconocimiento de animales, motores analíticos (GMD, ITH, carga, sanidad, next-best-action) e integración de inteligencia artificial conversacional con orquestador inteligente de alertas y flujos (n8n). El dato nace en el potrero y alimenta modelos y tableros cuando hay red.',
    role: 'Co-founder · producto y datos. Skadia, 2022–actualidad.',
    tags: ['Expo', 'TypeScript', 'WatermelonDB', 'Visión artificial', 'LLM', 'n8n', 'Supabase'],
    cats: ['product', 'de', 'da', 'auto'],
  },
  {
    featured: true,
    kind: 'Automatización · integración',
    title: 'Orquestación operativa — n8n',
    summary:
      'Diseño e implementación de flujos self-hosted que integran sistemas heterogéneos: webhooks, staging, notificaciones y jobs programados. Prototipado en Make; producción en n8n. Power Automate y Apps Script según el ecosistema del cliente. Objetivo: automatizar procesos repetibles con trazabilidad y control de fallos.',
    role: 'Arquitectura de flujos e integración. 2024–actualidad.',
    tags: ['n8n', 'Make', 'Power Automate', 'Apps Script', 'webhooks'],
    cats: ['auto', 'de'],
  },
  {
    featured: false,
    kind: 'Analytics · ECOM',
    title: 'Tableros institucionales — Apache Superset & Power BI',
    summary:
      'Plataforma de inteligencia de negocios sobre datos consolidados: modelado, pipelines de actualización, embed institucional, RLS por entidad e identidad federada. Apache Superset y Power BI como capa de visualización para análisis multidimensional y soporte a la toma de decisiones con procesos robustos de gobernanza y auditoría.',
    role: 'Ingeniería de datos. 2023–actualidad.',
    tags: ['Apache Superset', 'Power BI', 'RLS', 'SQL', 'DAX'],
    cats: ['ecom', 'da', 'de'],
  },
  {
    featured: false,
    kind: 'Data engineering · ECOM',
    title: 'Apache Superset — operación analítica',
    summary:
      'Operación de motor BI en producción: datasets, métricas, embed, Mapbox, CSP y despliegue en cluster. Tableros de datos consolidados para consumo institucional continuo, no entorno de laboratorio.',
    role: 'Ops de BI. 2023–actualidad.',
    tags: ['Superset', 'SQL', 'Docker', 'Mapbox'],
    cats: ['ecom', 'de', 'da'],
  },
  {
    featured: false,
    kind: 'Data engineering · ECOM',
    title: 'Plataforma de Servicios e Instituciones',
    summary:
      'Sistema de gestión de establecimientos, conectividad, GIS, KPIs, auditoría y exportación (CSV/Excel/PDF). Convierte operación territorial en datasets consultables y gobernados.',
    role: 'Backend y datos. 2023–actualidad.',
    tags: ['Django', 'PostgreSQL', 'PostGIS', 'Python', 'ETL'],
    cats: ['ecom', 'de', 'da'],
  },
  {
    featured: false,
    kind: 'Automatización · integración',
    title: 'Pasarela de cobros',
    summary:
      'Motor de conciliación asíncrona mediante colas, webhooks y procesamiento por lotes. Orquestación de avisos ante fallos de sincronización y control de estados de liquidación.',
    role: 'Integración y datos. 2023–actualidad.',
    tags: ['Celery', 'Redis', 'n8n', 'SQL', 'webhooks'],
    cats: ['de', 'auto'],
  },
  {
    featured: false,
    kind: 'Data engineering · ECOM',
    title: 'Plataforma de Gestión de Personas Físicas y Jurídicas',
    summary:
      'Capa de consulta y API sobre legado SQL Server y PostgreSQL: exposición controlada del padrón de personas físicas y jurídicas sin reescritura completa del sistema de origen.',
    role: 'Integración de datos. 2024–actualidad.',
    tags: ['SQL Server', 'PostgreSQL', 'Django', 'DRF'],
    cats: ['ecom', 'de'],
  },
  {
    featured: false,
    kind: 'Producto · EdTech · comercializado',
    title: 'SIGCL — Sistema Integral de Gestión Curricular y Legal',
    summary:
      'Plataforma de gestión educativa: sedes, matrículas, asistencia, actas, certificados, series temporales y ranking académico. API REST con Laravel Sanctum, roles granulares y reportes. Licencia comercializada (USD 4.500 + mantenimiento).',
    role: 'Producto y desarrollo.',
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
    role: 'Tech lead. Skadia.',
    tags: ['Vue', 'Quasar', 'Pinia', 'PostgreSQL', 'TensorFlow.js'],
    cats: ['product', 'da', 'de'],
    href: 'https://github.com/FabricioNicolasDuarte/Nutrogan',
  },
  {
    featured: false,
    kind: 'Analytics · comercializado',
    title: 'Cocoma App: Cálculo y Gestión de Proyectos Tecnológicos',
    summary:
      'Aplicación para estimación de costo y tiempo de software mediante modelos COCOMO I y II, escenarios what-if e informes. Comercializada en USD 1.500.',
    role: 'Modelo y desarrollo.',
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
    role: 'Producto. 2025.',
    tags: ['PHP', 'MySQL', 'PWA'],
    cats: ['product', 'da'],
    href: 'https://github.com/FabricioNicolasDuarte/formobus',
  },
  {
    featured: false,
    kind: 'Datos públicos · colaboración',
    title: 'SIREG — consulta pública',
    summary:
      'Colaboración en la implementación de consulta ciudadana de registros provinciales (Asuntos Registrales, Chaco).',
    role: 'Colaboración en producto e implementación. 2025–2026.',
    tags: ['SQL', 'Django'],
    cats: ['da'],
  },
  {
    featured: false,
    kind: 'Analytics · visualización',
    title: 'Sistema de Compras — CGP Chaco',
    summary:
      'Capa de KPIs y visualización analítica sobre el sistema de compras en operación.',
    role: 'Visualización y UX de datos. 2025–2026.',
    tags: ['Chart.js', 'KPIs', 'JavaScript'],
    cats: ['da'],
  },
]

const visible = computed(() => {
  if (active.value === 'all') return work
  return work.filter(w => w.cats.includes(active.value))
})
</script>
