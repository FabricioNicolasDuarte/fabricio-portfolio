<template>
  <section id="path" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <p class="text-xs font-medium tracking-widest text-cyan-400 uppercase">Timeline</p>
    <h2 class="mt-2 mb-12 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Recorrido</h2>

    <ol class="relative space-y-6 before:absolute before:bottom-4 before:left-[11px] before:top-4 before:w-px before:bg-gradient-to-b before:from-cyan-400 before:via-indigo-400/40 before:to-transparent md:before:left-[187px]">
      <li
        v-for="job in jobs"
        :key="job.period + job.org"
        class="glass relative grid gap-3 rounded-2xl p-6 transition hover:border-cyan-400/30 md:grid-cols-[160px_1fr] md:gap-10"
      >
        <p class="pl-7 text-sm text-cyan-300/80 md:pl-0">{{ job.period }}</p>
        <span class="absolute left-[7px] top-7 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] md:left-[181px]"></span>
        <div>
          <h3 class="text-lg font-semibold text-white">{{ job.title }}</h3>
          <p class="mt-0.5 text-sm text-indigo-300">{{ job.org }}</p>
          <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">{{ job.lead }}</p>
          <ul v-if="job.points?.length" class="mt-3 max-w-2xl space-y-1.5">
            <li v-for="p in job.points" :key="p" class="text-[14px] text-slate-400">— {{ p }}</li>
          </ul>
        </div>
      </li>
    </ol>

    <div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="glass rounded-2xl p-6">
        <h3 class="text-sm font-medium text-cyan-300">Formación</h3>
        <p class="mt-3 font-medium text-white">Licenciatura en Ciencia de Datos</p>
        <p class="mt-1 text-sm leading-relaxed text-slate-400">
          Universidad del Gran Rosario. 2023–2027, en curso.
          <a class="text-cyan-300 underline decoration-cyan-500/30 underline-offset-2" href="https://ugr.edu.ar/carreras/ciclo-de-licenciatura-en-ciencia-de-datos/" target="_blank" rel="noopener noreferrer">Plan UGR</a>
        </p>
        <p class="mt-5 font-medium text-white">Tecnicatura Universitaria en Programación</p>
        <p class="mt-1 text-sm text-slate-400">
          UTN Formosa. Graduado con mención de honor. Promedio general 9.40. TFI Nutrogan, 2025.
        </p>
        <p class="mt-5 font-medium text-white">Contador Público — ciclo básico</p>
        <p class="mt-1 text-sm text-slate-400">UNaF. Incompleto. Base contable y financiera.</p>
      </div>
      <div class="glass rounded-2xl p-6">
        <h3 class="text-sm font-medium text-cyan-300">Idiomas y oficio</h3>
        <p class="mt-3 text-sm leading-relaxed text-slate-400">
          Español nativo. Inglés técnico intermedio. Portugués intermedio.
        </p>
        <p class="mt-4 text-sm leading-relaxed text-slate-400">
          Diseño y multimedia: Photoshop, Illustrator, After Effects, Premiere, Audition, Figma, Adobe XD, AutoCAD y SketchUp.
          Sirven para tableros, contenidos y documentación; no son el eje del perfil de datos.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const jobs = [
  {
    period: '2026 — actualidad',
    title: 'Asesor tecnológico y de datos',
    org: 'Nuevo Banco del Chaco — Presidencia (Livio Gutiérrez)',
    lead: 'Asesoramiento en tecnología, datos y modernización de procesos a la presidencia de la entidad.',
    points: [],
  },
  {
    period: '2023 — 2026',
    title: 'Asesor tecnológico y de comunicación',
    org: 'Livio Gutiérrez — Secretaría de Coordinación de Gabinete · Chaco',
    lead: 'Asesoramiento personal en comunicación y tecnología digital.',
    points: [],
  },
  {
    period: '2022 — actualidad',
    title: 'Lead Developer & CTO',
    org: 'Skadia Startup & Axia (Paraguay)',
    lead: 'Dirección técnica de productos digitales en real estate y agrotech.',
    points: [
      'Definición de arquitectura, stack y pipelines CI/CD.',
      'Gestión de equipos con metodologías ágiles (Jira / Scrum).',
      'SIGAG: plataforma agropecuaria offline-first, visión, LLM y automatización.',
    ],
  },
  {
    period: '2023 — actualidad',
    title: 'Ingeniería de datos y software',
    org: 'ECOM',
    lead: 'Diseño, desarrollo y operación de sistemas de datos en producción.',
    points: [
      'Tableros institucionales Apache Superset y Power BI, con RLS.',
      'GIS de conectividad, auditoría y exportación de datos.',
      'Integración SQL Server / PostgreSQL y conciliación asíncrona.',
    ],
  },
  {
    period: '2018 — actualidad',
    title: 'Asesor tecnológico y de datos',
    org: 'Mg. Méd. Julián Bibolini · Ministerio de Desarrollo Humano / UPLAB · Formosa',
    lead: 'Gestión y análisis de datos sanitarios para la toma de decisiones. Modernización de la gestión académica en la Facultad de Medicina.',
    points: [
      'SIREG: consulta pública de registros provinciales.',
      'Sistema de Compras CGP: indicadores y visualización.',
    ],
  },
  {
    period: '2019 — 2023',
    title: 'Asesor de comunicación y tecnología',
    org: 'Concejo Municipal de Presidencia de la Plaza (P. Egea) · Chaco',
    lead: 'Transformación digital de canales institucionales y operación remota. Comunicación digital y gestión de contenidos.',
    points: [],
  },
  {
    period: '2015 — 2018',
    title: 'Asesor legislativo',
    org: 'Cámara de Diputados del Chaco (Livio Gutiérrez)',
    lead: 'Asesoramiento en comunicación y tecnología.',
    points: [],
  },
  {
    period: '2016 — 2017',
    title: 'Capacitador',
    org: 'Plan Nacional de Alfabetización Digital · Ministerio de Modernización',
    lead: 'Capacitación en ofimática y herramientas digitales para inclusión e inserción laboral.',
    points: [],
  },
  {
    period: '2016 — 2017',
    title: 'Asesor técnico',
    org: 'Defensoría del Pueblo de Formosa',
    lead: 'Asistencia técnica y administrativa en gestión de reclamos. Comunicación digital y contenidos.',
    points: [],
  },
]
</script>
