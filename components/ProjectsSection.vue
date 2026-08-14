<template>
  <section id="work" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <div class="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="text-xs font-medium tracking-widest text-cyan-400 uppercase">Seleccionado</p>
        <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Trabajo</h2>
        <p class="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-400">
          Datos, automatización y producto. Cada sistema ECOM por separado.
          Lo que no está en un repo público se describe a nivel de responsabilidad.
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
    kind: 'Automatización',
    title: 'Orquestación operativa — n8n',
    summary:
      'Flujos self-hosted que unen sistemas que no hablan entre sí: webhooks de cobros y padrones, planillas de staging, mails, WhatsApp y jobs nocturnos. Prototipo en Make; producción en n8n. Power Automate donde el organismo vive en Microsoft 365. Apps Script para reportes que antes se armaban a mano. El criterio: si un humano copia de A hacia B más de una vez por semana, el flujo lo hace el motor.',
    role: 'Diseño de flujos e integración. 2024–actualidad.',
    tags: ['n8n', 'Make', 'Power Automate', 'Apps Script', 'webhooks', 'Google Sheets'],
    cats: ['auto', 'de'],
  },
  {
    featured: true,
    kind: 'Producto · datos · IA',
    title: 'SIGAG Mobile',
    summary:
      'App de campo offline-first. Persistencia local, sync, voz con LLM, visión y motores (GMD, ITH, sanidad, next-best-action). El dato nace en el potrero y alimenta el modelo cuando hay red.',
    role: 'Co-founder, producto y datos. Skadia / Axia, 2022–actualidad.',
    tags: ['Expo', 'SQL local', 'Supabase', 'Gemini', 'n8n (alertas)'],
    cats: ['product', 'de', 'da', 'auto'],
  },
  {
    featured: false,
    kind: 'Analytics · ECOM',
    title: 'Tableros institucionales',
    summary:
      'Portal de analítica: Apache Superset y Power BI embebidos, RLS por entidad, identidad federada. Capa entre el dato operativo y quien decide.',
    role: 'Ingeniería de datos. 2023–actualidad.',
    tags: ['Superset', 'Power BI', 'RLS', 'SQL', 'DAX'],
    cats: ['ecom', 'da', 'de'],
  },
  {
    featured: false,
    kind: 'Data engineering · ECOM',
    title: 'Apache Superset — operación',
    summary:
      'Embed, Mapbox, CSP y cluster. El motor de BI queda usable en producción institucional, no como laboratorio.',
    role: 'Ops de BI. 2023–actualidad.',
    tags: ['Superset', 'SQL', 'Docker', 'Mapbox'],
    cats: ['ecom', 'de', 'da'],
  },
  {
    featured: false,
    kind: 'Data engineering · ECOM',
    title: 'Servicios a clientes',
    summary:
      'Establecimientos, conectividad, GIS, KPIs, auditoría y export CSV/Excel/PDF. Operación convertida en dataset consultable.',
    role: 'Backend y datos. 2023–actualidad.',
    tags: ['Django', 'PostgreSQL', 'PostGIS', 'ETL'],
    cats: ['ecom', 'de', 'da'],
  },
  {
    featured: false,
    kind: 'Automatización · ECOM',
    title: 'Pasarela de cobros',
    summary:
      'Conciliación por colas, webhooks y lotes. n8n dispara avisos cuando un lote falla. Sin detalle de proveedores.',
    role: 'Integración. 2023–actualidad.',
    tags: ['Celery', 'Redis', 'n8n', 'SQL'],
    cats: ['ecom', 'de', 'auto'],
  },
  {
    featured: false,
    kind: 'Data engineering · ECOM',
    title: 'Personas / padrón',
    summary:
      'Consulta sobre legado SQL Server + PostgreSQL, API y panel. El padrón no se migra: se expone.',
    role: 'Integración de datos. 2024–actualidad.',
    tags: ['SQL Server', 'PostgreSQL', 'DRF'],
    cats: ['ecom', 'de'],
  },
  {
    featured: false,
    kind: 'Producto · EdTech · comercializado',
    title: 'EDU-API / SIGCL',
    summary:
      'Sistema de gestión educativa: API REST con Laravel Sanctum, carga masiva, alumnos, roles granulares y reportes académicos automáticos. Licencia comercializada en USD 4.500 más mantenimiento mensual. En GitHub, SIGCL cubre sedes, matrículas, asistencia, actas y certificados.',
    role: 'Producto y desarrollo. Licencia vendida + mantenimiento.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Sanctum'],
    cats: ['product', 'da'],
    href: 'https://github.com/FabricioNicolasDuarte/SIGCL',
  },
  {
    featured: false,
    kind: 'Académico · datos',
    title: 'Nutrogan — TFI UTN 2025',
    summary:
      'Ecosistema ganadero offline-first (TFI UTN 2025, máxima calificación). Visión por computadora (TensorFlow / PyTorch) para condición corporal en Brangus. Testing automatizado y despliegue continuo. Base de SIGAG.',
    role: 'Co-founder & lead. Skadia.',
    tags: ['Vue', 'Quasar', 'PostgreSQL', 'ECharts'],
    cats: ['product', 'da', 'de'],
    href: 'https://github.com/FabricioNicolasDuarte/Nutrogan',
  },
  {
    featured: false,
    kind: 'Analytics',
    title: 'Cocoma',
    summary:
      'SaaS de estimación de costo y tiempo de software con COCOMO I y II. Arquitectura orientada a servicios. Comercializado en USD 1.500.',
    role: 'Modelo y desarrollo. Software vendido.',
    tags: ['PHP', 'microservicios', 'Docker', 'COCOMO'],
    cats: ['da', 'product'],
    href: 'https://github.com/FabricioNicolasDuarte/Cocoma-App',
  },
  {
    featured: false,
    kind: 'Datos espaciales',
    title: 'FormoBus',
    summary:
      'PWA de transporte en Formosa: rutas, líneas, frecuencias e incidentes. Grafo urbano como dataset de servicio público.',
    role: 'Producto. 2025.',
    tags: ['PHP', 'MySQL', 'routing'],
    cats: ['product', 'da'],
    href: 'https://github.com/FabricioNicolasDuarte/formobus',
  },
  {
    featured: false,
    kind: 'Datos públicos',
    title: 'SIREG — consulta pública',
    summary:
      'Consulta de registros provinciales (Asuntos Registrales, Chaco). El ciudadano pregunta; el sistema responde.',
    role: 'Producto e implementación. 2025–2026.',
    tags: ['SQL', 'Django templates'],
    cats: ['da'],
  },
  {
    featured: false,
    kind: 'Analytics · visualización',
    title: 'Sistema de Compras — CGP Chaco',
    summary:
      'KPIs y gráficos sobre el sistema de compras en uso. Comunicar el dato; no rehacer el core.',
    role: 'Visualización y UX de datos. 2025–2026.',
    tags: ['Chart.js', 'KPIs'],
    cats: ['da'],
  },
]

const visible = computed(() => {
  if (active.value === 'all') return work
  return work.filter(w => w.cats.includes(active.value))
})
</script>
