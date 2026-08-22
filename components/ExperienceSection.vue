<template>
  <section id="path" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <p class="text-xs font-medium tracking-widest text-cyan-400 uppercase">{{ isEn ? 'Path' : 'Trayectoria' }}</p>
    <h2 class="mt-2 mb-12 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{{ isEn ? 'Experience' : 'Experiencia' }}</h2>

    <ol class="relative space-y-6 before:absolute before:bottom-4 before:left-[11px] before:top-4 before:w-px before:bg-gradient-to-b before:from-cyan-400 before:via-indigo-400/40 before:to-transparent md:before:left-[187px]">
      <li
        v-for="job in jobs"
        :key="job.period + job.org"
        class="glass relative grid gap-3 rounded-2xl p-6 transition hover:border-cyan-400/30 md:grid-cols-[160px_1fr] md:gap-10"
        :class="job.featured ? 'border-cyan-400/25' : ''"
      >
        <p class="pl-7 text-sm text-cyan-300/80 md:pl-0">{{ job.period }}</p>
        <span class="absolute left-[7px] top-7 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] md:left-[181px]"></span>
        <div>
          <h3 class="text-lg font-semibold text-white">{{ isEn ? (job.titleEn || job.title) : job.title }}</h3>
          <p class="mt-0.5 text-sm text-indigo-300">
            <a
              v-if="job.orgHref"
              :href="job.orgHref"
              target="_blank"
              rel="noopener noreferrer"
              class="underline decoration-indigo-400/40 underline-offset-2 transition hover:text-cyan-300"
              v-html="job.orgHtml || job.org"
            />
            <span v-else v-html="job.orgHtml || job.org"></span>
          </p>
          <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">{{ isEn ? (job.leadEn || job.lead) : job.lead }}</p>
          <ul v-if="(isEn ? (job.pointsEn || job.points) : job.points)?.length" class="mt-3 max-w-2xl space-y-1.5">
            <li v-for="p in (isEn ? (job.pointsEn || job.points) : job.points)" :key="p" class="text-[14px] text-slate-400">— {{ p }}</li>
          </ul>
        </div>
      </li>
    </ol>

    <div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="glass rounded-2xl p-6">
        <h3 class="text-sm font-medium text-cyan-300">{{ isEn ? 'Education' : 'Formación' }}</h3>
        <p class="mt-3 font-medium text-white">{{ isEn ? 'B.S. in Data Science' : 'Licenciatura en Ciencia de Datos' }}</p>
        <p class="mt-1 text-sm leading-relaxed text-slate-400">
          {{ isEn ? 'Universidad del Gran Rosario. In progress.' : 'Universidad del Gran Rosario. En curso.' }}
          <a class="text-cyan-300 underline decoration-cyan-500/30 underline-offset-2" href="https://ugr.edu.ar/carreras/ciclo-de-licenciatura-en-ciencia-de-datos/" target="_blank" rel="noopener noreferrer">{{ isEn ? 'UGR plan' : 'Plan UGR' }}</a>
        </p>
        <p class="mt-5 font-medium text-white">{{ isEn ? 'University Technician in Programming' : 'Tecnicatura Universitaria en Programación' }}</p>
        <p class="mt-1 text-sm text-slate-400">
          {{ isEn ? 'Universidad Tecnológica Nacional — Facultad Regional Resistencia. Graduated. GPA 9.40.' : 'Universidad Tecnológica Nacional — Facultad Regional Resistencia. Graduado. Promedio general 9.40.' }}
        </p>
        <p class="mt-5 font-medium text-white">{{ isEn ? 'Public Accountant — basic cycle' : 'Contador Público — ciclo básico' }}</p>
        <p class="mt-1 text-sm text-slate-400">{{ isEn ? 'Universidad Nacional de Formosa (UNaF). Incomplete. Accounting and finance foundation.' : 'Universidad Nacional de Formosa (UNaF). Incompleto. Base contable y financiera.' }}</p>
      </div>
      <div class="glass rounded-2xl p-6">
        <h3 class="text-sm font-medium text-cyan-300">{{ isEn ? 'Languages' : 'Idiomas' }}</h3>
        <p class="mt-3 text-sm leading-relaxed text-slate-400">
          {{ isEn ? 'Native Spanish. Intermediate technical English. Intermediate Portuguese.' : 'Español nativo. Inglés técnico intermedio. Portugués intermedio.' }}
        </p>
        <p class="mt-4 text-sm leading-relaxed text-slate-400">
          {{ isEn ? 'Complementary skills in interface design and visual documentation (Figma, Adobe CC) applied to dashboards and technical data communication.' : 'Competencias complementarias en diseño de interfaces y documentación visual (Figma, Adobe CC) aplicadas a tableros y comunicación técnica de datos.' }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { isEn } = useLocale()
const jobs = [
  {
    featured: true,
    period: '2023 — actualidad',
    title: 'Ingeniería de datos y software',
    titleEn: 'Data and software engineering',
    orgHref: 'https://www.ecom.com.ar/',
    orgHtml: '<span class="text-cyan-300 underline decoration-cyan-500/30">ECOM</span> Chaco S.A.',
    lead: 'ECOM es la empresa tecnológica de la Provincia del Chaco (SAPEM): software, conectividad y modernización del Estado y el sector privado. Allí diseño, desarrollo y opero plataformas de datos en producción institucional.',
    leadEn: 'ECOM is the technology company of the Province of Chaco (SAPEM): software, connectivity, and public/private modernization. There I design, build, and operate data platforms in institutional production.',
    points: [
      'Arquitectura de información y tableros analíticos (Apache Superset / Power BI) con seguridad por capas (RLS) e identidad federada.',
      'Backend Django: GIS, KPIs, auditoría y exportación controlada de datasets.',
      'Integración SQL Server / PostgreSQL y procesos asíncronos de conciliación (Celery / Redis).',
    ],
    pointsEn: [
      'Information architecture and analytics dashboards (Apache Superset / Power BI) with layered security (RLS) and federated identity.',
      'Django backends: GIS, KPIs, audit trails, and controlled dataset export.',
      'SQL Server / PostgreSQL integration and asynchronous reconciliation (Celery / Redis).',
    ],
  },
  {
    period: '2026 — actualidad',
    title: 'Asesor tecnológico y de datos',
    org: 'Consultoría independiente — Livio Gutiérrez (Presidencia NBCH)',
    orgHref: 'https://www.nbch.com.ar/institucional/autoridades',
    orgHtml: 'Consultoría independiente — <span class="text-cyan-300">Livio Gutiérrez</span> (Presidencia NBCH)',
    lead: 'Asesoramiento personal en tecnología, datos y modernización de procesos a Livio Gutiérrez, Presidente del Nuevo Banco del Chaco.',
    points: [],
  },
  {
    period: '2022 — actualidad',
    title: 'Lead Developer & CTO',
    org: 'Skadia Startup',
    lead: 'Dirección técnica de productos digitales en agrotech.',
    points: [
      'Arquitectura, stack y pipelines CI/CD.',
      'Gestión de equipos con metodologías ágiles (Jira / Scrum).',
      'SIGAG: Sistema Integral de Gestión Agrícola Ganadera.',
    ],
  },
  {
    period: '2023 — 2026',
    title: 'Asesor tecnológico y de comunicación',
    org: 'Consultoría independiente — Livio Gutiérrez (Coordinación de Gabinete, Chaco)',
    orgHref: 'https://www.nbch.com.ar/institucional/autoridades',
    orgHtml: 'Consultoría independiente — <span class="text-cyan-300">Livio Gutiérrez</span> (Coordinación de Gabinete, Chaco)',
    lead: 'Asesoramiento personal en comunicación y tecnología digital.',
    points: [],
  },
  {
    period: '2018 — actualidad',
    title: 'Asesor tecnológico y de datos',
    titleEn: 'Technology and data advisor',
    org: 'Mg. Méd. Julián Bibolini · Min. Desarrollo Humano / UPLAB · Formosa',
    lead: 'Datos sanitarios e indicadores institucionales para toma de decisión. Modernización de la gestión académica en la Facultad de Medicina.',
    leadEn: 'Health data and institutional indicators for decision-making. Academic management modernization at the Faculty of Medicine.',
    points: [
      'Consolidación y análisis de información sanitaria para seguimiento, priorización y reporte a autoridad.',
      'Tableros y métricas de gestión (Ministerio de Desarrollo Humano / UPLAB) orientados a decisión, no a operación transaccional.',
    ],
    pointsEn: [
      'Consolidation and analysis of health information for monitoring, prioritization, and reporting to authority.',
      'Management dashboards and metrics (Ministry of Human Development / UPLAB) oriented to decisions, not transactional operations.',
    ],
  },
  {
    period: '2019 — 2023',
    title: 'Asesor de comunicación y tecnología',
    org: 'Concejo Municipal de Presidencia Roque Sáenz Peña (Pedro Egea) · Chaco',
    lead: 'Transformación digital de canales institucionales y operación remota.',
    points: [],
  },
  {
    period: '2015 — 2018',
    title: 'Asesor legislativo',
    org: 'Consultoría independiente — Cámara de Diputados del Chaco (Livio Gutiérrez)',
    orgHref: 'https://www.nbch.com.ar/institucional/autoridades',
    orgHtml: 'Consultoría independiente — Cámara de Diputados del Chaco (<span class="text-cyan-300">Livio Gutiérrez</span>)',
    lead: 'Asesoramiento en comunicación y tecnología.',
    points: [],
  },
  {
    period: '2016 — 2017',
    title: 'Capacitador',
    org: 'Plan Nacional de Alfabetización Digital · Ministerio de Modernización',
    lead: 'Capacitación en ofimática y herramientas digitales para inclusión laboral.',
    points: [],
  },
  {
    period: '2016 — 2017',
    title: 'Asesor técnico',
    org: 'Defensoría del Pueblo de Formosa — Defensor Adjunto Hugo Maldonado',
    lead: 'Asistencia técnica en gestión de reclamos y comunicación digital, en el ámbito de la Defensoría del Pueblo Adjunta.',
    points: [],
  },
]
</script>
