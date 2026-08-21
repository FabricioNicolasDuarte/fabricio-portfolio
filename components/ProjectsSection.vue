<template>
  <section id="work" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <div class="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="text-xs font-medium tracking-widest text-cyan-400 uppercase">Impacto</p>
        <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Trabajo seleccionado</h2>
        <p class="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-400">
          Resultados en producción: plataformas de datos, producto y automatización.
          Detalle operativo sensible se omite a propósito.
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
    kind: 'Automatización · integración',
    title: 'Orquestación operativa — n8n',
    summary:
      'Diseño e implementación de flujos self-hosted que integran sistemas heterogéneos: webhooks, staging en planillas, notificaciones y jobs programados. Prototipado en Make; producción en n8n. Power Automate y Apps Script donde el entorno es Microsoft 365 o Google Workspace. Objetivo: eliminar trabajo manual repetitivo con trazabilidad.',
    role: 'Arquitectura de flujos e integración. 2024–actualidad.',
    tags: ['n8n', 'Make', 'Power Automate', 'Apps Script', 'webhooks', 'TypeScript'],
    cats: ['auto', 'de'],
  },
  {
    featured: true,
    kind: 'Producto · datos · IA',
    title: 'SIGAG Mobile',
    summary:
      'Plataforma agropecuaria offline-first para captura en campo: persistencia local (WatermelonDB), sincronización, voz con LLM, visión y motores de decisión (GMD, ITH, sanidad, next-best-action). El dato operativo nace sin red y alimenta analítica e IA cuando hay conectividad.',
    role: 'Co-founder · producto y datos. Skadia / Axia, 2022–actualidad.',
    tags: ['Expo', 'TypeScript', 'WatermelonDB', 'Supabase', 'Gemini', 'n8n'],
    cats: ['product', 'de', 'da', 'auto'],
  },
  {
    featured: false,
    kind: 'Analytics · ECOM',
    title: 'Tableros institucionales',
    summary:
      'Portal de analítica con Apache Superset y Power BI embebidos, RLS por entidad e identidad federada. Capa de decisión sobre datos operativos con control de acceso institucional.',
    role: 'Ingeniería de datos. 2023–actualidad.',
    tags: ['Superset', 'Power BI', 'RLS', 'SQL', 'DAX', 'Nuxt'],
    cats: ['ecom', 'da', 'de'],
  },
  {
    featured: false,
    kind: 'Data engineering · ECOM',
    title: 'Apache Superset — operación',
    summary:
      'Operación de BI en cluster: embed, Mapbox, CSP y hardening para uso institucional continuo.',
    role: 'Ops de BI. 2023–actualidad.',
    tags: ['Superset', 'SQL', 'Docker', 'Mapbox'],
    cats: ['ecom', 'de', 'da'],
  },
  {
    featured: false,
    kind: 'Data engineering · ECOM',
    title: 'Servicios a clientes',
    summary:
      'Backend Django para establecimientos, conectividad, GIS, KPIs, auditoría y exportación (CSV/Excel/PDF). Operación convertida en dataset consultable y gobernado.',
    role: 'Backend y datos. 2023–actualidad.',
    tags: ['Django', 'PostgreSQL', 'PostGIS', 'Python', 'ETL'],
    cats: ['ecom', 'de', 'da'],
  },
  {
    featured: false,
    kind: 'Automatización · ECOM',
    title: 'Pasarela de cobros',
    summary:
      'Conciliación asíncrona con colas Celery/Redis, webhooks y lotes. Alertas automatizadas ante fallos de sincronización.',
    role: 'Integración. 2023–actualidad.',
    tags: ['Django', 'Celery', 'Redis', 'n8n', 'SQL'],
    cats: ['ecom', 'de', 'auto'],
  },
  {
    featured: false,
    kind: 'Data engineering · ECOM',
    title: 'Personas / padrón',
    summary:
      'Capa de consulta y API sobre legado SQL Server y PostgreSQL: exposición controlada del padrón sin reescritura completa del sistema de origen.',
    role: 'Integración de datos. 2024–actualidad.',
    tags: ['SQL Server', 'PostgreSQL', 'Django', 'DRF'],
    cats: ['ecom', 'de'],
  },
  {
    featured: false,
    kind: 'Producto · EdTech · comercializado',
    title: 'EDU-API / SIGCL',
    summary:
      'Plataforma de gestión educativa: API REST con Laravel Sanctum, carga masiva, roles granulares y reportes académicos. Licencia comercializada (USD 4.500 + mantenimiento).',
    role: 'Producto y desarrollo.',
    tags: ['Laravel', 'PHP', 'Vue', 'MySQL', 'Sanctum'],
    cats: ['product', 'da'],
    href: 'https://github.com/FabricioNicolasDuarte/SIGCL',
  },
  {
    featured: false,
    kind: 'Académico · producto',
    title: 'Nutrogan — TFI UTN 2025',
    summary:
      'PWA ganadera offline-first (máxima calificación UTN). Indicadores, GIS y visión. Base técnica de SIGAG.',
    role: 'Tech lead. Equipo de tres.',
    tags: ['Vue', 'Quasar', 'Pinia', 'PostgreSQL', 'TensorFlow.js'],
    cats: ['product', 'da', 'de'],
    href: 'https://github.com/FabricioNicolasDuarte/Nutrogan',
  },
  {
    featured: false,
    kind: 'Analytics · comercializado',
    title: 'Cocoma',
    summary:
      'SaaS de estimación de costo y tiempo de software (COCOMO I/II). Comercializado en USD 1.500.',
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
      'PWA de transporte urbano en Formosa: rutas, frecuencias e incidentes como dataset de servicio público.',
    role: 'Producto. 2025.',
    tags: ['PHP', 'MySQL', 'PWA'],
    cats: ['product', 'da'],
    href: 'https://github.com/FabricioNicolasDuarte/formobus',
  },
  {
    featured: false,
    kind: 'Datos públicos',
    title: 'SIREG — consulta pública',
    summary:
      'Consulta ciudadana de registros provinciales (Asuntos Registrales, Chaco).',
    role: 'Producto e implementación. 2025–2026.',
    tags: ['SQL', 'Django'],
    cats: ['da'],
  },
  {
    featured: false,
    kind: 'Analytics · visualización',
    title: 'Sistema de Compras — CGP Chaco',
    summary:
      'Capa de KPIs y visualización sobre el sistema de compras en operación.',
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
