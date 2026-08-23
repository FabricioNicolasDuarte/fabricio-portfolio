<template>
  <section id="path" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <p class="text-xs font-medium tracking-widest text-cyan-400 uppercase">{{ t.path.kicker }}</p>
    <h2 class="mt-2 mb-12 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{{ t.path.title }}</h2>

    <ol class="relative space-y-6 before:absolute before:bottom-4 before:left-[11px] before:top-4 before:w-px before:bg-gradient-to-b before:from-cyan-400 before:via-indigo-400/40 before:to-transparent md:before:left-[187px]">
      <li
        v-for="job in jobs"
        :key="job.period + job.org"
        class="glass relative grid gap-3 rounded-2xl p-6 transition hover:border-cyan-400/30 md:grid-cols-[160px_1fr] md:gap-10"
        :class="job.featured ? 'border-cyan-400/25' : ''"
      >
        <p class="pl-7 text-sm text-cyan-300/80 md:pl-0">{{ tx(job, 'period') }}</p>
        <span class="absolute left-[7px] top-7 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] md:left-[181px]"></span>
        <div>
          <h3 class="text-lg font-semibold text-white">{{ tx(job, 'title') }}</h3>
          <p class="mt-0.5 text-sm text-indigo-300">
            <a
              v-if="job.orgHref"
              :href="job.orgHref"
              target="_blank"
              rel="noopener noreferrer"
              class="underline decoration-indigo-400/40 underline-offset-2 transition hover:text-cyan-300"
              v-html="tx(job, 'orgHtml') || tx(job, 'org')"
            />
            <span v-else v-html="tx(job, 'orgHtml') || tx(job, 'org')"></span>
          </p>
          <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">{{ tx(job, 'lead') }}</p>
          <ul v-if="tx(job, 'points')?.length" class="mt-3 max-w-2xl space-y-1.5">
            <li v-for="p in tx(job, 'points')" :key="p" class="text-[14px] text-slate-400">— {{ p }}</li>
          </ul>
        </div>
      </li>
    </ol>

    <div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="glass rounded-2xl p-6">
        <h3 class="text-sm font-medium text-cyan-300">{{ t.path.education }}</h3>
        <p class="mt-3 font-medium text-white">{{ t.path.ds }}</p>
        <p class="mt-1 text-sm leading-relaxed text-slate-400">
          {{ t.path.dsMeta }}
          <a class="text-cyan-300 underline decoration-cyan-500/30 underline-offset-2" href="https://ugr.edu.ar/carreras/ciclo-de-licenciatura-en-ciencia-de-datos/" target="_blank" rel="noopener noreferrer">{{ t.path.ugrPlan }}</a>
        </p>
        <p class="mt-5 font-medium text-white">{{ t.path.tech }}</p>
        <p class="mt-1 text-sm text-slate-400">
          <a class="text-cyan-300 underline decoration-cyan-500/30 underline-offset-2" href="https://www.frre.utn.edu.ar/" target="_blank" rel="noopener noreferrer">Universidad Tecnológica Nacional — Facultad Regional Resistencia</a>.
          {{ t.path.techMeta }}
        </p>
        <p class="mt-5 font-medium text-white">{{ t.path.acc }}</p>
        <p class="mt-1 text-sm text-slate-400">{{ t.path.accMeta }}</p>
      </div>
      <div class="glass rounded-2xl p-6">
        <h3 class="text-sm font-medium text-cyan-300">{{ t.path.langs }}</h3>
        <p class="mt-3 text-sm leading-relaxed text-slate-400">{{ t.path.langsBody }}</p>
        <p class="mt-4 text-sm leading-relaxed text-slate-400">{{ t.path.extra }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t, tx } = useLocale()
const jobs = [
  {
    featured: true,
    period: '2023 — actualidad',
    periodEn: '2023 — present',
    title: 'Ingeniería de datos y software',
    titleEn: 'Data and software engineering',
    titlePt: 'Engenharia de dados e software',
    titleZh: '数据与软件工程',
    period: '2023 — actualidad',
    periodEn: '2023 — present',
    periodPt: '2023 — atual',
    periodZh: '2023 — 至今',
    orgHref: 'https://www.ecom.com.ar/',
    orgHtml: '<span class="text-cyan-300 underline decoration-cyan-500/30">ECOM</span> Chaco S.A.',
    lead: 'ECOM es la empresa de tecnología de la Provincia del Chaco. Ahí diseño y opero plataformas de datos que usan organismos todos los días: tableros, permisos y procesos que corren solos.',
    leadEn: 'ECOM is the technology company of the Province of Chaco. There I design and run data platforms that agencies use every day: dashboards, permissions, and jobs that run on their own.',
    leadPt: 'A ECOM é a empresa de tecnologia da Província do Chaco. Lá desenho e opero plataformas de dados que órgãos usam todo dia: painéis, permissões e processos automáticos.',
    leadZh: 'ECOM 是查科省的科技公司。我在那里设计和运行机构每天使用的数据平台：看板、权限和自动任务。',
    points: [
      'Tableros (Apache Superset / Power BI) con permisos por organismo: cada uno ve solo lo suyo.',
      'Backend Django: mapas, indicadores, registro de quién consulta y exportaciones controladas.',
      'Cruce de SQL Server y PostgreSQL, con procesos en segundo plano (Celery / Redis).',
    ],
    pointsEn: [
      'Dashboards (Apache Superset / Power BI) with per-agency permissions: each one sees only its own data.',
      'Django backends: maps, indicators, a log of who queries, and controlled exports.',
      'SQL Server and PostgreSQL together, with background jobs (Celery / Redis).',
    ],
    pointsPt: [
      'Painéis (Apache Superset / Power BI) com permissão por órgão: cada um vê só o que é dele.',
      'Backend Django: mapas, indicadores, registro de quem consulta e exportações controladas.',
      'SQL Server e PostgreSQL juntos, com processos em segundo plano (Celery / Redis).',
    ],
    pointsZh: [
      '看板（Apache Superset / Power BI）按机构授权：各看各的。',
      'Django 后端：地图、指标、查询记录与受控导出。',
      'SQL Server 与 PostgreSQL 对接，后台任务用 Celery / Redis。',
    ],
  },
  {
    period: '2026 — actualidad',
    periodEn: '2026 — present',
    title: 'Asesor tecnológico y de datos',
    titleEn: 'Technology and data advisor',
    org: 'Consultoría independiente — Livio Gutiérrez (Presidencia NBCH)',
    orgHref: 'https://www.nbch.com.ar/institucional/autoridades',
    orgHtml: 'Consultoría independiente — <span class="text-cyan-300">Livio Gutiérrez</span> (Presidencia NBCH)',
    orgHtmlEn: 'Independent consultancy — <span class="text-cyan-300">Livio Gutiérrez</span> (NBCH Presidency)',
    lead: 'Asesoramiento personal en tecnología, datos y modernización de procesos a Livio Gutiérrez, Presidente del Nuevo Banco del Chaco.',
    leadEn: 'Personal advisory on technology, data, and process modernization for Livio Gutiérrez, President of Nuevo Banco del Chaco.',
    points: [],
  },
  {
    period: '2022 — actualidad',
    periodEn: '2022 — present',
    title: 'Lead Developer & CTO',
    org: 'Skadia Startup',
    lead: 'Dirección técnica de productos digitales en agrotech.',
    leadEn: 'Technical direction of digital products in agrotech.',
    points: [
      'Arquitectura, stack y pipelines CI/CD.',
      'Gestión de equipos con metodologías ágiles (Jira / Scrum).',
      'SIGAG: Sistema Integral de Gestión Agrícola Ganadera.',
    ],
    pointsEn: [
      'Architecture, stack, and CI/CD pipelines.',
      'Team management with agile methods (Jira / Scrum).',
      'SIGAG: Integrated Agricultural and Livestock Management System.',
    ],
  },
  {
    period: '2023 — 2026',
    title: 'Asesor tecnológico y de comunicación',
    titleEn: 'Technology and communications advisor',
    org: 'Consultoría independiente — Livio Gutiérrez (Coordinación de Gabinete, Chaco)',
    orgHref: 'https://www.nbch.com.ar/institucional/autoridades',
    orgHtml: 'Consultoría independiente — <span class="text-cyan-300">Livio Gutiérrez</span> (Coordinación de Gabinete, Chaco)',
    orgHtmlEn: 'Independent consultancy — <span class="text-cyan-300">Livio Gutiérrez</span> (Cabinet Coordination, Chaco)',
    lead: 'Asesoramiento personal en comunicación y tecnología digital.',
    leadEn: 'Personal advisory on communications and digital technology.',
    points: [],
  },
  {
    period: '2018 — actualidad',
    periodEn: '2018 — present',
    title: 'Asesor tecnológico y de datos',
    titleEn: 'Technology and data advisor',
    org: 'Mg. Méd. Julián Bibolini · Min. Desarrollo Humano / UPLAB · Formosa',
    orgEn: 'Mg. Med. Julián Bibolini · Ministry of Human Development / UPLAB · Formosa',
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
    titleEn: 'Communications and technology advisor',
    org: 'Concejo Municipal de Presidencia Roque Sáenz Peña (Pedro Egea) · Chaco',
    orgEn: 'Municipal Council of Presidencia Roque Sáenz Peña (Pedro Egea) · Chaco',
    lead: 'Transformación digital de canales institucionales y operación remota.',
    leadEn: 'Digital transformation of institutional channels and remote operations.',
    points: [],
  },
  {
    period: '2015 — 2018',
    title: 'Asesor legislativo',
    titleEn: 'Legislative advisor',
    org: 'Consultoría independiente — Cámara de Diputados del Chaco (Livio Gutiérrez)',
    orgHref: 'https://www.nbch.com.ar/institucional/autoridades',
    orgHtml: 'Consultoría independiente — Cámara de Diputados del Chaco (<span class="text-cyan-300">Livio Gutiérrez</span>)',
    orgHtmlEn: 'Independent consultancy — Chaco Chamber of Deputies (<span class="text-cyan-300">Livio Gutiérrez</span>)',
    lead: 'Asesoramiento en comunicación y tecnología.',
    leadEn: 'Advisory on communications and technology.',
    points: [],
  },
  {
    period: '2016 — 2017',
    title: 'Capacitador',
    titleEn: 'Instructor',
    org: 'Plan Nacional de Alfabetización Digital · Ministerio de Modernización',
    orgEn: 'National Digital Literacy Plan · Ministry of Modernization',
    lead: 'Capacitación en ofimática y herramientas digitales para inclusión laboral.',
    leadEn: 'Training in office software and digital tools for labor inclusion.',
    points: [],
  },
  {
    period: '2016 — 2017',
    title: 'Asesor técnico',
    titleEn: 'Technical advisor',
    org: 'Defensoría del Pueblo de Formosa — Defensor Adjunto Hugo Maldonado',
    orgEn: 'Ombudsman’s Office of Formosa — Deputy Ombudsman Hugo Maldonado',
    lead: 'Asistencia técnica en gestión de reclamos y comunicación digital, en el ámbito de la Defensoría del Pueblo Adjunta.',
    leadEn: 'Technical support for claims management and digital communications, in the Deputy Ombudsman’s office.',
    points: [],
  },
]
</script>
