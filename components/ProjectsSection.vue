<template>
  <section id="work" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <div class="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="text-xs font-medium tracking-widest text-lime-400 uppercase">{{ t.work.kicker }}</p>
        <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{{ t.work.title }}</h2>
        <p class="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-400">{{ t.work.intro }}</p>
      </div>
      <div v-if="!compact" class="flex flex-wrap gap-2">
        <button
          v-for="f in filters"
          :key="f.id"
          class="rounded-full border px-3 py-1.5 text-xs font-medium transition"
          :class="active === f.id
            ? 'border-lime-400 bg-lime-400 text-black'
            : 'border-white/10 text-slate-400 hover:border-lime-400/40 hover:text-lime-200'"
          @click="active = f.id"
        >
          {{ f.label }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4" :class="compact ? '' : 'md:grid-cols-2'">
      <article
        v-for="item in visible"
        :key="item.title"
        class="group glass relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/35 sm:p-7"
        :class="item.featured && !compact ? 'md:col-span-2' : ''"
      >
        <div class="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime-400/10 blur-3xl transition group-hover:bg-lime-400/20"></div>
        <p class="mb-2 text-[11px] font-medium tracking-wider text-lime-300 uppercase">{{ tx(item, 'kind') }}</p>
        <h3 class="font-display text-2xl font-semibold tracking-tight text-white">{{ tx(item, 'title') }}</h3>
        <img
          v-if="item.shot"
          :src="item.shot"
          :alt="tx(item, 'shotAlt') || tx(item, 'title')"
          class="mt-4 w-full rounded-xl border border-white/10 object-cover object-top"
          loading="lazy"
          width="1200"
          height="720"
          :class="compact || item.featured ? 'max-h-[420px]' : 'max-h-[240px]'"
        />
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
          class="mt-4 inline-flex items-center gap-1 text-sm text-lime-300 transition hover:text-lime-200"
        >
          {{ tx(item, 'cta') || t.work.repo }}
        </a>
      </article>
    </div>
    <div class="mt-8 flex justify-center" v-if="compact">
      <NuxtLink to="/trabajo" class="rounded-full border border-white/15 px-4 py-2 text-sm text-lime-200 hover:border-lime-400/40">
        {{ t.work.more }}
      </NuxtLink>
    </div>
    <div class="mt-8 flex justify-center" v-else-if="active === 'all' && work.length > PIN_COUNT">
      <button
        type="button"
        class="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-300 transition hover:border-lime-400/40 hover:text-lime-200"
        @click="expanded = !expanded"
      >
        {{ expanded ? t.work.less : t.work.more }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({ compact: Boolean })
const { t, tx } = useLocale()
const active = ref('all')
const expanded = ref(false)
const PIN_COUNT = computed(() => (props.compact ? 3 : 6))
const filters = computed(() => t.value.work.filters)

const work = [
  {
    pin: true,
    featured: true,
    kind: 'Producto · datos · IA',
    title: 'SIGAG — Sistema Integral de Gestión Agrícola Ganadera',
    titleEn: 'SIGAG — Integrated farm and livestock system',
    titlePt: 'SIGAG — Sistema integrado agrícola e pecuário',
    titleZh: 'SIGAG — 农牧一体化系统',
    summary:
      'App para el campo sin señal: carga pesadas, reconoce animales, estima condición corporal y calcula indicadores (ganancia diaria, calor, carga). Cuando vuelve la red, sincroniza y alimenta tableros. Hay varias instalaciones vendidas. Incluye alertas automáticas (n8n).',
    summaryEn:
      'A farm app that works without signal: weighings, animal ID, body condition, and indicators (daily gain, heat stress, stocking). When the network is back it syncs and feeds dashboards. Several installations have been sold. Alerts run on n8n.',
    summaryPt:
      'App de campo que funciona sem sinal: pesagens, identificação, condição corporal e indicadores (ganho diário, calor, lotação). Quando a rede volta, sincroniza e alimenta painéis. Várias instalações vendidas. Alertas no n8n.',
    summaryZh:
      '无网络也能用的牧场应用：称重、识别、体况和指标（日增重、热应激、载畜量）。有网后同步并更新看板。已售出多套安装。告警走 n8n。',
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
    href: '/casos/skadia',
    external: false,
    cta: 'Caso Skadia →',
    ctaEn: 'Skadia case →',
    ctaPt: 'Caso Skadia →',
    ctaZh: 'Skadia 案例 →',
    shot: '/mockups/sigag.jpg',
    shotAlt: 'SIGAG: centro de mando, GIS y asistente de campo.',
    shotAltEn: 'SIGAG: command center, GIS, and field assistant.',
    shotAltPt: 'SIGAG: centro de comando, GIS e assistente de campo.',
    shotAltZh: 'SIGAG：指挥中心、GIS 与田间助手。',
  },
  {
    pin: true,
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
    ctaPt: 'Painel + repositório →',
    ctaZh: '看板 + 仓库 →',
    shot: '/mockups/skadia-lakehouse.png',
    shotAlt: 'Lakehouse Skadia: ADG, carga, ITH y BCS (dataset de demostración).',
    shotAltEn: 'Skadia lakehouse: ADG, stocking, THI and BCS (demo dataset).',
    shotAltPt: 'Lakehouse Skadia: GMD, lotação, ITH e BCS (dataset de demonstração).',
    shotAltZh: 'Skadia lakehouse：日增重、载畜、ITH 与 BCS（演示数据）。',
  },
  {
    pin: false,
    featured: true,
    kind: 'Automatización · integración',
    title: 'Orquestación operativa — n8n',
    titleEn: 'Operational orchestration — n8n',
    titlePt: 'Orquestração operacional — n8n',
    titleZh: '运营编排 — n8n',
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
    kindPt: 'Automação · integração',
    kindZh: '自动化 · 集成',
    rolePt: 'Arquitetura de fluxos e integração. 2024–atual.',
    roleZh: '流程架构与集成。2024 至今。',
    tags: ['n8n', 'Make', 'Power Automate', 'Apps Script', 'webhooks'],
    cats: ['auto', 'de'],
  },
  {
    pin: false,
    featured: false,
    kind: 'Analytics · ECOM',
    title: 'Tableros institucionales — Apache Superset & Power BI',
    titleEn: 'Institutional dashboards — Apache Superset & Power BI',
    titlePt: 'Painéis institucionais — Apache Superset e Power BI',
    titleZh: '机构看板 — Apache Superset 与 Power BI',
    summary:
      'Tableros en Apache Superset (producción y prueba) y Power BI, de uso interno en ECOM: cada organismo ve solo lo suyo. Se actualizan solos y se pueden incrustar en el sistema de trabajo.',
    summaryEn:
      'Apache Superset dashboards (production and test) and Power BI, used internally at ECOM: each organization sees only its own slice. They refresh on their own and can be embedded in the working system.',
    summaryPt:
      'Painéis no Apache Superset (produção e teste) e Power BI, de uso interno na ECOM: cada órgão vê só o que é dele. Atualizam sozinhos e podem ir dentro do sistema de trabalho.',
    summaryZh:
      'ECOM 内部使用的 Apache Superset（生产与测试）与 Power BI 看板：每个机构只看自己的范围。自动刷新，可嵌进业务系统。',
    kindPt: 'Analytics · ECOM',
    kindZh: '分析 · ECOM',
    role: 'Ingeniería de datos. 2023–actualidad.',
    roleEn: 'Data engineering. 2023–present.',
    rolePt: 'Engenharia de dados. 2023–atual.',
    roleZh: '数据工程。2023 至今。',
    tags: ['Apache Superset', 'Power BI', 'RLS', 'SQL', 'DAX'],
    cats: ['ecom', 'da', 'de'],
    href: '/casos/ecom',
    external: false,
    cta: 'Caso ECOM →',
    ctaEn: 'ECOM case →',
    ctaPt: 'Caso ECOM →',
    ctaZh: 'ECOM 案例 →',
    shot: '/mockups/superset.png',
    shotAlt: 'Apache Superset: filtros y tablero institucional.',
    shotAltEn: 'Apache Superset: filters and institutional dashboard.',
    shotAltPt: 'Apache Superset: filtros e painel institucional.',
    shotAltZh: 'Apache Superset：筛选与机构看板。',
  },
  {
    featured: false,
    kind: 'Data engineering · ECOM',
    title: 'Apache Superset — operación analítica',
    titleEn: 'Apache Superset — analytic operations',
    titlePt: 'Apache Superset — operação analítica',
    titleZh: 'Apache Superset — 分析运营',
    summary:
      'Operación de motor BI en producción: datasets, métricas, embed, Mapbox, CSP y despliegue en cluster. Tableros de datos consolidados para consumo institucional continuo, no entorno de laboratorio.',
    summaryEn:
      'Production BI engine operations: datasets, metrics, embed, Mapbox, CSP, and cluster deployment. Dashboards on consolidated data for continuous institutional use, not a lab environment.',
    summaryPt:
      'Operação de motor BI em produção: datasets, métricas, embed, Mapbox, CSP e cluster. Painéis de dados consolidados para uso institucional contínuo, não laboratório.',
    summaryZh:
      '生产环境 BI：数据集、指标、嵌入、Mapbox、CSP 与集群部署。面向机构日常使用的汇总看板，不是实验室。',
    role: 'Ops de BI. 2023–actualidad.',
    roleEn: 'BI operations. 2023–present.',
    rolePt: 'Operação de BI. 2023–atual.',
    roleZh: 'BI 运维。2023 至今。',
    kindEn: 'Data engineering · ECOM',
    kindPt: 'Engenharia de dados · ECOM',
    kindZh: '数据工程 · ECOM',
    tags: ['Superset', 'SQL', 'Docker', 'Mapbox'],
    cats: ['ecom', 'de', 'da'],
  },
  {
    featured: false,
    kind: 'Data engineering · ECOM',
    title: 'Plataforma de Servicios e Instituciones',
    titleEn: 'Services and Institutions Platform',
    titlePt: 'Plataforma de Serviços e Instituições',
    titleZh: '服务与机构平台',
    summary:
      'Sistema de gestión de establecimientos, conectividad, GIS, KPIs, auditoría y exportación (CSV/Excel/PDF). Convierte operación territorial en datasets consultables y gobernados.',
    summaryEn:
      'Management of establishments, connectivity, GIS, KPIs, audit, and export (CSV/Excel/PDF). Turns territorial operations into queryable, governed datasets.',
    summaryPt:
      'Gestão de estabelecimentos, conectividade, GIS, KPIs, auditoria e exportação (CSV/Excel/PDF). Transforma operação territorial em datasets consultáveis e governados.',
    summaryZh:
      '场所、连通性、GIS、KPI、审计与导出（CSV/Excel/PDF）。把属地运营变成可查询、受治理的数据集。',
    role: 'Backend y datos. 2023–actualidad.',
    roleEn: 'Backend and data. 2023–present.',
    rolePt: 'Backend e dados. 2023–atual.',
    roleZh: '后端与数据。2023 至今。',
    kindEn: 'Data engineering · ECOM',
    kindPt: 'Engenharia de dados · ECOM',
    kindZh: '数据工程 · ECOM',
    tags: ['Django', 'PostgreSQL', 'PostGIS', 'Python', 'ETL'],
    cats: ['ecom', 'de', 'da'],
    shot: '/mockups/servicios-instituciones.png',
    shotAlt: 'Plataforma de establecimientos y KPIs.',
    shotAltEn: 'Establishments and KPI platform.',
    shotAltPt: 'Plataforma de estabelecimentos e KPIs.',
    shotAltZh: '场所与 KPI 平台。',
  },
  {
    featured: false,
    kind: 'Automatización · integración',
    title: 'Pasarela de cobros',
    titleEn: 'Payment gateway',
    titlePt: 'Gateway de pagamentos',
    titleZh: '支付网关',
    summary:
      'Motor de conciliación asíncrona mediante colas, webhooks y procesamiento por lotes. Orquestación de avisos ante fallos de sincronización y control de estados de liquidación.',
    summaryEn:
      'Asynchronous reconciliation engine using queues, webhooks, and batch processing. Orchestrated alerts on sync failures and settlement-state control.',
    summaryPt:
      'Motor de conciliação assíncrona com filas, webhooks e lotes. Alertas se a sincronização falha e controle de estados de liquidação.',
    summaryZh:
      '用队列、webhook 和批处理做异步对账。同步失败会告警，并控制清算状态。',
    role: 'Integración y datos. 2023–actualidad.',
    roleEn: 'Integration and data. 2023–present.',
    rolePt: 'Integração e dados. 2023–atual.',
    roleZh: '集成与数据。2023 至今。',
    kindEn: 'Automation · integration',
    kindPt: 'Automação · integração',
    kindZh: '自动化 · 集成',
    tags: ['Celery', 'Redis', 'n8n', 'SQL', 'webhooks'],
    cats: ['de', 'auto'],
  },
  {
    featured: false,
    kind: 'Data engineering · ECOM',
    title: 'Plataforma de Gestión de Personas Físicas y Jurídicas',
    titleEn: 'Individuals and Legal Entities Platform',
    titlePt: 'Plataforma de Pessoas Físicas e Jurídicas',
    titleZh: '自然人与法人平台',
    summary:
      'Capa de consulta y API sobre legado SQL Server y PostgreSQL: exposición controlada del padrón de personas físicas y jurídicas sin reescritura completa del sistema de origen.',
    summaryEn:
      'Query layer and API over legacy SQL Server and PostgreSQL: controlled exposure of the individuals and legal-entities registry without a full rewrite of the source system.',
    summaryPt:
      'Camada de consulta e API sobre legado SQL Server e PostgreSQL: exposição controlada do cadastro de pessoas físicas e jurídicas sem reescrever o sistema de origem.',
    summaryZh:
      '在遗留 SQL Server 与 PostgreSQL 上的查询层和 API：受控暴露自然人与法人名册，不重写源系统。',
    role: 'Integración de datos. 2024–actualidad.',
    roleEn: 'Data integration. 2024–present.',
    rolePt: 'Integração de dados. 2024–atual.',
    roleZh: '数据集成。2024 至今。',
    kindEn: 'Data engineering · ECOM',
    kindPt: 'Engenharia de dados · ECOM',
    kindZh: '数据工程 · ECOM',
    tags: ['SQL Server', 'PostgreSQL', 'Django', 'DRF'],
    cats: ['ecom', 'de'],
  },
  {
    pin: false,
    featured: false,
    kind: 'Producto · formación · comercializado',
    title: 'SIGCL — Sistema Integral de Gestión Curricular y Legal',
    titleEn: 'SIGCL — Integrated Curricular and Legal Management System',
    titlePt: 'SIGCL — Sistema Integral de Gestão Curricular e Legal',
    titleZh: 'SIGCL — 课程与法律综合管理系统',
    summary:
      'Operación de institutos de capacitación: sedes, matrícula, asistencia por QR, arancel, actas y analíticos PDF con verificación pública, aula virtual. Vendida cuatro veces (USD 4.500 + mantenimiento).',
    summaryEn:
      'Training-institute operations: campuses, enrollment, QR attendance, tuition, official minutes and transcripts in PDF with public verification, virtual classroom. Sold four times (USD 4,500 + maintenance).',
    summaryPt:
      'Operação de institutos de capacitação: sedes, matrícula, frequência por QR, mensalidade, atas e históricos em PDF com verificação pública, aula virtual. Vendida quatro vezes (USD 4.500 + manutenção).',
    summaryZh:
      '培训机构运营：校区、招生、二维码考勤、学费、可公开核验的纪要与成绩单 PDF、虚拟课堂。已售出四次（4,500 美元 + 维护）。',
    role: 'Producto y desarrollo.',
    roleEn: 'Product and development.',
    rolePt: 'Produto e desenvolvimento.',
    roleZh: '产品与开发。',
    kindEn: 'Product · training · commercialized',
    kindPt: 'Produto · formação · comercializado',
    kindZh: '产品 · 培训 · 已售',
    tags: ['Laravel', 'Livewire', 'PostgreSQL', 'DomPDF'],
    cats: ['product', 'da'],
    href: 'https://github.com/FabricioNicolasDuarte/SIGCL',
    shot: '/mockups/sigcl.png',
    shotAlt: 'SIGCL: tablero del instituto en escritorio y móvil.',
    shotAltEn: 'SIGCL: institute dashboard on desktop and mobile.',
    shotAltPt: 'SIGCL: painel do instituto em desktop e celular.',
    shotAltZh: 'SIGCL：机构看板，桌面与手机。',
  },
  {
    pin: true,
    featured: false,
    kind: 'Producto · agro · datos',
    title: 'Nutrogan',
    titleEn: 'Nutrogan',
    titlePt: 'Nutrogan',
    titleZh: 'Nutrogan',
    summary:
      'Plataforma ganadera offline-first para rodeos, indicadores, GIS y visión de condición corporal. Hecha con CEDEVA. Está en uso. Base técnica de SIGAG.',
    summaryEn:
      'Offline-first livestock platform for herds, indicators, GIS, and body-condition vision. Built with CEDEVA. In use. Technical foundation of SIGAG.',
    summaryPt:
      'Plataforma pecuária offline-first para rebanhos, indicadores, GIS e visão de condição corporal. Feita com o CEDEVA. Em uso. Base técnica do SIGAG.',
    summaryZh:
      '离线优先畜牧平台：牛群、指标、GIS 与体况视觉。与 CEDEVA 合作。正在使用。是 SIGAG 的技术基础。',
    role: 'Tech lead. Skadia.',
    roleEn: 'Tech lead. Skadia.',
    rolePt: 'Tech lead. Skadia.',
    roleZh: '技术负责人。Skadia。',
    kindEn: 'Product · agri · data',
    kindPt: 'Produto · agro · dados',
    kindZh: '产品 · 农业 · 数据',
    tags: ['Vue', 'Quasar', 'Pinia', 'PostgreSQL', 'TensorFlow.js'],
    cats: ['product', 'da', 'de', 'agtech'],
    href: 'https://github.com/FabricioNicolasDuarte/Nutrogan',
    shot: '/mockups/nutrogan.jpg',
    shotAlt: 'Nutrogan: potreros, mapa y gestión de recursos.',
    shotAltEn: 'Nutrogan: paddocks, map, and resource management.',
    shotAltPt: 'Nutrogan: piquetes, mapa e gestão de recursos.',
    shotAltZh: 'Nutrogan：围场、地图与资源管理。',
  },
  {
    featured: false,
    kind: 'Producto · estimación · comercializado',
    title: 'Cocoma — escritorio de oferta para software',
    titleEn: 'Cocoma — software bid desk',
    titlePt: 'Cocoma — mesa de oferta para software',
    titleZh: 'Cocoma — 软件项目报价台',
    summary:
      'Estima y documenta el costo de un proyecto de software: tarifario por roles, COCOMO I y II, puntos de función, EDT, riesgo P80 y paquete de oferta en PDF/Excel. No gestiona tareas. Comercializada en USD 1.500.',
    summaryEn:
      'Estimates and documents software project cost: role rate card, COCOMO I and II, function points, WBS, P80 risk, and a PDF/Excel bid pack. It does not manage tasks. Sold for USD 1,500.',
    summaryPt:
      'Estima e documenta o custo de um projeto de software: tarifário por função, COCOMO I e II, pontos de função, EDT, risco P80 e pacote de oferta em PDF/Excel. Não gerencia tarefas. Comercializada por USD 1.500.',
    summaryZh:
      '估算并记录软件项目成本：角色费率、COCOMO I/II、功能点、WBS、P80 风险，以及 PDF/Excel 报价包。不负责任务管理。售价 1,500 美元。',
    role: 'Producto y desarrollo.',
    roleEn: 'Product and development.',
    rolePt: 'Produto e desenvolvimento.',
    roleZh: '产品与开发。',
    kindEn: 'Product · estimating · commercialized',
    kindPt: 'Produto · estimativa · comercializado',
    kindZh: '产品 · 估算 · 已售',
    tags: ['Laravel', 'Livewire', 'Tailwind', 'PostgreSQL'],
    cats: ['da', 'product'],
    pin: true,
    href: 'https://github.com/FabricioNicolasDuarte/Cocoma-App',
    shot: '/mockups/cocoma.jpg',
    shotAlt: 'Cocoma: inicio de sesión en escritorio y tarifario maestro en móvil.',
    shotAltEn: 'Cocoma: desktop sign-in and master rate card on mobile.',
    shotAltPt: 'Cocoma: login no desktop e tarifário mestre no celular.',
    shotAltZh: 'Cocoma：桌面登录与手机上的主费率表。',
  },
  {
    featured: false,
    kind: 'Datos espaciales',
    title: 'FormoBus',
    titleEn: 'FormoBus',
    titlePt: 'FormoBus',
    titleZh: 'FormoBus',
    summary:
      'PWA de transporte urbano en Formosa: rutas, líneas, frecuencias e incidentes. Donada; la usa un organismo público.',
    summaryEn:
      'Urban transit PWA in Formosa: routes, lines, frequencies, and incidents. Donated; in use by a public agency.',
    summaryPt:
      'PWA de transporte urbano em Formosa: rotas, linhas, frequências e incidentes. Doada; um órgão público a usa.',
    summaryZh:
      '福尔摩萨城市交通 PWA：线路、班次与事件。已捐赠，由公共机构使用。',
    role: 'Producto. 2025.',
    roleEn: 'Product. 2025.',
    rolePt: 'Produto. 2025.',
    roleZh: '产品。2025。',
    kindEn: 'Spatial data',
    kindPt: 'Dados espaciais',
    kindZh: '空间数据',
    tags: ['PHP', 'MySQL', 'PWA'],
    cats: ['product', 'da'],
    href: 'https://github.com/FabricioNicolasDuarte/formobus',
    shot: '/mockups/formobus.jpg',
    shotAlt: 'FormoBus: mapa y rutas de transporte urbano en escritorio y móvil.',
    shotAltEn: 'FormoBus: urban transit map and routes on desktop and mobile.',
    shotAltPt: 'FormoBus: mapa e rotas de transporte urbano no desktop e no celular.',
    shotAltZh: 'FormoBus：桌面与手机上的城市公交地图与线路。',
  },
  {
    featured: false,
    kind: 'Datos públicos · colaboración',
    title: 'SIREG — consulta pública',
    titleEn: 'SIREG — public lookup',
    titlePt: 'SIREG — consulta pública',
    titleZh: 'SIREG — 公共查询',
    summary:
      'Colaboración en la implementación de consulta ciudadana de registros provinciales (Asuntos Registrales, Chaco).',
    summaryEn:
      'Collaboration on a citizen lookup of provincial registries (Registry Affairs, Chaco).',
    summaryPt:
      'Colaboração na consulta cidadã de registros provinciais (Assuntos Registrais, Chaco).',
    summaryZh:
      '协作实现省级登记公开查询（查科登记事务）。',
    role: 'Colaboración en producto e implementación. 2025–2026.',
    roleEn: 'Product and implementation collaboration. 2025–2026.',
    rolePt: 'Colaboração em produto e implementação. 2025–2026.',
    roleZh: '产品与实现协作。2025–2026。',
    kindEn: 'Public data · collaboration',
    kindPt: 'Dados públicos · colaboração',
    kindZh: '公共数据 · 协作',
    tags: ['SQL', 'Django'],
    cats: ['da'],
  },
  {
    featured: false,
    kind: 'Analytics · visualización',
    title: 'Sistema de Compras — CGP Chaco',
    titleEn: 'Procurement system — CGP Chaco',
    titlePt: 'Sistema de compras — CGP Chaco',
    titleZh: '采购系统 — CGP Chaco',
    summary:
      'Capa de KPIs y visualización analítica sobre el sistema de compras en operación.',
    summaryEn:
      'KPI layer and analytic visualization on the procurement system in production.',
    summaryPt:
      'Camada de KPIs e visualização analítica sobre o sistema de compras em produção.',
    summaryZh:
      '采购系统上的 KPI 层与分析可视化（生产环境）。',
    role: 'Visualización y UX de datos. 2025–2026.',
    roleEn: 'Data visualization and UX. 2025–2026.',
    rolePt: 'Visualização e UX de dados. 2025–2026.',
    roleZh: '数据可视化与 UX。2025–2026。',
    kindEn: 'Analytics · visualization',
    kindPt: 'Analytics · visualização',
    kindZh: '分析 · 可视化',
    tags: ['Chart.js', 'KPIs', 'JavaScript'],
    cats: ['da'],
  },
]

const filtered = computed(() => {
  if (active.value === 'all') return work
  return work.filter(w => w.cats.includes(active.value))
})

const visible = computed(() => {
  const list = filtered.value
  if (active.value !== 'all' || expanded.value) return list
  const pinned = list.filter(w => w.pin)
  const cap = PIN_COUNT.value
  return pinned.length ? pinned.slice(0, cap) : list.slice(0, cap)
})
</script>
