<template>
  <main id="contenido" tabindex="-1" class="mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-16">
    <PathTrail flush />
    <p class="fd-kicker mt-8">{{ copy.kicker }}</p>
    <h1 class="mt-2 font-display text-4xl font-semibold text-white">{{ copy.title }}</h1>
    <p class="mt-4 text-[17px] leading-relaxed text-slate-200">{{ copy.lead }}</p>
    <p class="mt-3 text-sm text-muted">
      <a class="underline decoration-white/20 underline-offset-4 hover:text-white" href="https://www.ecom.com.ar/" target="_blank" rel="noopener noreferrer">ecom.com.ar</a>
    </p>

    <div class="mt-8 grid gap-4">
      <figure v-for="shot in shots" :key="shot.src">
        <img
          :src="shot.src"
          :alt="shot.alt"
          class="w-full rounded-2xl border border-white/10 object-cover object-top"
          loading="lazy"
          width="1200"
          height="720"
        />
      </figure>
    </div>

    <section v-for="block in copy.blocks" :key="block.heading" class="mt-10">
      <h2 class="font-display text-xl font-semibold text-white">{{ block.heading }}</h2>
      <p v-for="p in block.paras" :key="p" class="mt-3 text-[15px] leading-relaxed text-slate-400">{{ p }}</p>
    </section>

    <section class="mt-10">
      <h2 class="font-display text-xl font-semibold text-white">{{ copy.faqTitle }}</h2>
      <dl class="mt-4 space-y-4">
        <div v-for="item in copy.faq" :key="item.q" class="fd-card p-4">
          <dt class="font-medium text-white">{{ item.q }}</dt>
          <dd class="mt-2 text-[15px] leading-relaxed text-slate-400">{{ item.a }}</dd>
        </div>
      </dl>
    </section>

    <p class="mt-8 text-sm text-muted">{{ copy.note }}</p>
    <div class="mt-8 flex flex-wrap gap-3">
      <NuxtLink :to="localePath('/agendar')" class="fd-btn">{{ t.nav.book }}</NuxtLink>
      <NuxtLink :to="localePath('/trabajo')" class="fd-btn-outline">{{ t.nav.work }}</NuxtLink>
    </div>
  </main>
</template>

<script setup>
const { locale, t, localePath } = useLocale()
const origin = 'https://fabricioduarte.tech'

const pack = {
  es: {
    kicker: 'Caso · ECOM Chaco',
    title: 'Tableros institucionales sobre datos ya unificados',
    lead: 'En ECOM el trabajo no es un Excel suelto: es operación analítica continua. Datasets, métricas y publicación en Apache Superset y Power BI, con recorte por organismo. Los tableros alimentan instituciones distintas al equipo que los construye.',
    blocks: [
      {
        heading: 'El problema que hay que resolver',
        paras: [
          'Los datos institucionales suelen estar en sistemas heterogéneos: SQL Server de años, PostgreSQL más reciente, padrones, operación territorial. Quien decide no entra al core. Consulta un recorte: un tablero, un embed, un export con permisos. Si ese recorte está mal definido, el trámite y la operación se ven. Un indicador no es un adorno de visualización; es un insumo de decisión.',
          'El trabajo, entonces, no empieza por el gráfico. Empieza por el contrato del dato: qué campo, qué tipo, qué frecuencia, quién puede verlo. Encima de eso se publica. Abajo, el legado sigue. No se reescribe el sistema de origen para poder mostrar un KPI.',
        ],
      },
      {
        heading: 'Capa de consulta, no un laboratorio',
        paras: [
          'La capa de consulta se apoya en SQL Server y PostgreSQL ya en producción. Expone lo necesario para analítica y para embed, con reglas repetibles. Apache Superset concentra datasets, métricas y filtros. Power BI cubre tableros que el organismo ya opera en ese stack. El recorte por institución se resuelve con permisos de fila y de rol: cada organismo ve solo lo suyo.',
          'Donde hay capa territorial entra Mapbox. El motor de tableros corre en cluster, con refresco automático, no en una notebook. Eso es uso interno institucional, no una demo de curso.',
        ],
      },
      {
        heading: 'Operación: si falla, avisa',
        paras: [
          'Los jobs se orquestan con colas (Celery / Redis). Si un proceso de carga o de refresco falla, el sistema avisa. No se pierde en silencio. Queda registro de quién consulta o exporta. La gobernanza no es un párrafo de política: es el recorte que el usuario ve cuando abre el tablero.',
          'Este caso no lista nombres de sistemas no públicos ni cifras internas. El punto para un recruiter es el tipo de problema (dato institucional ya unificado, muchos organismos, legado vivo) y el tipo de solución (contrato, modelo, publicación, alerta).',
        ],
      },
      {
        heading: 'Qué no es este trabajo',
        paras: [
          'No es un Excel departamental. No es un rediseño del core transaccional. No es un producto comercial de ECOM expuesto en esta página. ECOM es el contexto laboral; el sitio documenta el tipo de analítica en producción, con el enlace público de la organización.',
          'Skadia, SIGAG y el lakehouse de demostración son otro contexto: campo, offline, ganadería. El método se parece (unificar, modelar, publicar, avisar si falla). El entorno no: acá el usuario es un organismo; allá, quien está en el potrero sin señal.',
        ],
      },
    ],
    faqTitle: 'Preguntas de un recruiter',
    faq: [
      { q: '¿Superset o Power BI?', a: 'Los dos, según el organismo y el stack que ya opera. El trabajo es el dataset, la métrica y el recorte; la herramienta de visualización es el canal de publicación.' },
      { q: '¿Se reescribe el sistema de origen?', a: 'No. Se expone una capa de consulta sobre SQL Server y PostgreSQL. El core transaccional sigue.' },
      { q: '¿Hay números de gestión en esta página?', a: 'No. Sin cifras internas ni nombres de sistemas no públicos. El caso se describe por el problema y por el diseño, no por un tablero confidencial.' },
    ],
    note: 'Uso interno institucional. Sin pantallas de operación cotidiana de terceros.',
  },
  en: {
    kicker: 'Case · ECOM Chaco',
    title: 'Institutional dashboards on already-unified data',
    lead: 'At ECOM the work is not a stray spreadsheet: it is continuous analytic operations. Datasets, metrics, and publication in Apache Superset and Power BI, scoped by organization. Dashboards feed institutions other than the team that builds them.',
    blocks: [
      {
        heading: 'The problem to solve',
        paras: [
          'Institutional data usually lives in heterogeneous systems: years-old SQL Server, newer PostgreSQL, registries, territorial operations. Decision-makers do not enter the core. They query a slice: a dashboard, an embed, an export with permissions. If that slice is poorly defined, the procedure and the operation suffer. An indicator is not a visualization flourish; it is an input to a decision.',
          'The work therefore does not start with the chart. It starts with the data contract: which field, which type, which frequency, who may see it. Publication sits on top of that. Below, the legacy remains. The source system is not rewritten so a KPI can be shown.',
        ],
      },
      {
        heading: 'A query layer, not a lab',
        paras: [
          'The query layer sits on production SQL Server and PostgreSQL. It exposes what analytics and embed need, with repeatable rules. Apache Superset holds datasets, metrics, and filters. Power BI covers dashboards an agency already runs on that stack. Scoping by institution is row- and role-level: each organization sees only its slice.',
          'Where there is a territorial layer, Mapbox is used. The dashboard engine runs on a cluster, with automatic refresh, not on a laptop. That is institutional internal use, not a course demo.',
        ],
      },
      {
        heading: 'Operations: if it fails, it alerts',
        paras: [
          'Jobs are orchestrated with queues (Celery / Redis). If a load or refresh process fails, the system alerts. It does not fail silently. There is a record of who queries or exports. Governance is not a policy paragraph: it is the slice the user sees when they open the dashboard.',
          'This case does not list non-public system names or internal figures. For a recruiter the point is the class of problem (already-unified institutional data, many agencies, living legacy) and the class of solution (contract, model, publish, alert).',
        ],
      },
      {
        heading: 'What this work is not',
        paras: [
          'It is not a departmental spreadsheet. It is not a rewrite of the transactional core. It is not a commercial ECOM product exposed on this page. ECOM is the employment context; the site documents the kind of production analytics, with the organization’s public URL.',
          'Skadia, SIGAG, and the demonstration lakehouse are another context: field, offline, livestock. The method is similar (unify, model, publish, alert on failure). The environment is not: here the user is an agency; there, someone in a paddock without signal.',
        ],
      },
    ],
    faqTitle: 'Recruiter questions',
    faq: [
      { q: 'Superset or Power BI?', a: 'Both, depending on the agency and the stack it already runs. The work is the dataset, the metric, and the slice; the visualization tool is the publication channel.' },
      { q: 'Is the source system rewritten?', a: 'No. A query layer is exposed over SQL Server and PostgreSQL. The transactional core stays.' },
      { q: 'Are management figures on this page?', a: 'No. No internal numbers or non-public system names. The case is described by the problem and the design, not by a confidential dashboard.' },
    ],
    note: 'Institutional internal use. No day-to-day screens of third parties.',
  },
  pt: {
    kicker: 'Caso · ECOM Chaco',
    title: 'Painéis institucionais sobre dados já unificados',
    lead: 'Na ECOM o trabalho não é uma planilha solta: é operação analítica contínua. Datasets, métricas e publicação no Apache Superset e no Power BI, recortados por órgão. Os painéis alimentam instituições distintas da equipe que os constrói.',
    blocks: [
      {
        heading: 'O problema a resolver',
        paras: [
          'Dados institucionais costumam estar em sistemas heterogêneos: SQL Server antigo, PostgreSQL mais novo, cadastros, operação territorial. Quem decide não entra no core. Consulta um recorte: um painel, um embed, um export com permissão. Se esse recorte está mal definido, o trâmite e a operação sofrem. Um indicador não é enfeite de visualização; é insumo de decisão.',
          'O trabalho, então, não começa no gráfico. Começa no contrato do dado: qual campo, qual tipo, qual frequência, quem pode ver. A publicação fica acima disso. Abaixo, o legado segue. O sistema de origem não se reescreve para mostrar um KPI.',
        ],
      },
      {
        heading: 'Camada de consulta, não laboratório',
        paras: [
          'A camada de consulta apoia-se em SQL Server e PostgreSQL já em produção. Expõe o necessário para analytics e embed, com regras repetíveis. O Apache Superset concentra datasets, métricas e filtros. O Power BI cobre painéis que o órgão já opera nesse stack. O recorte por instituição resolve-se com permissão de linha e de perfil: cada órgão vê só o que é dele.',
          'Onde há camada territorial entra Mapbox. O motor de painéis corre em cluster, com atualização automática, não num notebook. Uso interno institucional, não demo de curso.',
        ],
      },
      {
        heading: 'Operação: se falha, avisa',
        paras: [
          'Os jobs orquestram-se com filas (Celery / Redis). Se um processo de carga ou de refresh falha, o sistema avisa. Não se perde em silêncio. Fica registro de quem consulta ou exporta. Governança não é um parágrafo de política: é o recorte que o usuário vê ao abrir o painel.',
          'Este caso não lista nomes de sistemas não públicos nem números internos. Para um recruiter o ponto é a classe do problema (dado institucional já unificado, muitos órgãos, legado vivo) e a classe da solução (contrato, modelo, publicação, alerta).',
        ],
      },
      {
        heading: 'O que este trabalho não é',
        paras: [
          'Não é uma planilha departamental. Não é reescrita do core transacional. Não é um produto comercial da ECOM exposto nesta página. ECOM é o contexto laboral; o site documenta o tipo de analytics em produção, com a URL pública da organização.',
          'Skadia, SIGAG e o lakehouse de demonstração são outro contexto: campo, offline, pecuária. O método se parece. O ambiente não: aqui o usuário é um órgão; lá, quem está no piquete sem sinal.',
        ],
      },
    ],
    faqTitle: 'Perguntas de um recruiter',
    faq: [
      { q: 'Superset ou Power BI?', a: 'Os dois, conforme o órgão e o stack que já opera. O trabalho é o dataset, a métrica e o recorte; a ferramenta de visualização é o canal de publicação.' },
      { q: 'Reescreve-se o sistema de origem?', a: 'Não. Expõe-se uma camada de consulta sobre SQL Server e PostgreSQL. O core transacional segue.' },
      { q: 'Há números de gestão nesta página?', a: 'Não. Sem cifras internas nem nomes de sistemas não públicos. O caso descreve-se pelo problema e pelo desenho, não por um painel confidencial.' },
    ],
    note: 'Uso interno institucional. Sem telas do dia a dia de terceiros.',
  },
  zh: {
    kicker: '案例 · ECOM Chaco',
    title: '基于已统一数据的机构看板',
    lead: '在 ECOM，工作不是散落的表格，而是持续的分析运营。数据集、指标以及 Apache Superset 与 Power BI 发布，按机构划分范围。看板服务的机构，与建设团队不是同一拨人。',
    blocks: [
      {
        heading: '要解决的问题',
        paras: [
          '机构数据通常在异构系统里：多年的 SQL Server、较新的 PostgreSQL、名册、属地运营。决策者不进核心系统，只看切片：看板、嵌入、带权限的导出。切片定义错了，办事与运营都会受影响。指标不是可视化装饰，而是决策输入。',
          '因此工作不是从图表开始，而是从数据契约开始：哪些字段、什么类型、什么频率、谁能看。发布叠在上面。下面遗留系统继续跑。不会为了显示一个 KPI 而重写源系统。',
        ],
      },
      {
        heading: '查询层，不是实验室',
        paras: [
          '查询层建立在已上线的 SQL Server 与 PostgreSQL 上，按可重复规则暴露分析与嵌入所需内容。Apache Superset 集中数据集、指标和筛选。Power BI 覆盖机构已在该技术栈上运行的看板。按机构切分用行级与角色权限：每个机构只看自己的范围。',
          '有属地层时用 Mapbox。看板引擎在集群上运行并自动刷新，不是笔记本演示。这是机构内部使用，不是课程作业。',
        ],
      },
      {
        heading: '运维：失败会告警',
        paras: [
          '任务用队列编排（Celery / Redis）。加载或刷新失败时系统会告警，不会静默丢失。查询与导出会留痕。治理不是一段政策文字，而是用户打开看板时看到的切片。',
          '本页不列出未公开系统名或内部数字。对招聘方而言，重点是问题类型（已统一的机构数据、多个机构、仍在运行的遗留系统）与解法类型（契约、模型、发布、告警）。',
        ],
      },
      {
        heading: '这不是什么',
        paras: [
          '不是部门 Excel。不是重写事务核心。不是本页展示的 ECOM 商业产品。ECOM 是工作场景；本站说明生产级分析的类型，并给出机构的公开网址。',
          'Skadia、SIGAG 与演示 lakehouse 是另一场景：田间、离线、畜牧。方法相近，环境不同：这里用户是机构，那里是没有信号的围场。',
        ],
      },
    ],
    faqTitle: '招聘方常问',
    faq: [
      { q: 'Superset 还是 Power BI？', a: '两者都有，取决于机构及其已有技术栈。工作是数据集、指标与切片；可视化工具是发布渠道。' },
      { q: '会重写源系统吗？', a: '不会。在 SQL Server 与 PostgreSQL 上暴露查询层。事务核心继续运行。' },
      { q: '本页有内部管理数字吗？', a: '没有。不含内部数字或未公开系统名。案例用问题与设计来写，不用机密看板。' },
    ],
    note: '机构内部使用。不含第三方日常操作屏幕。',
  },
}

const copy = computed(() => pack[locale.value] || pack.es)
const shots = [
  { src: '/mockups/superset.png', alt: 'Apache Superset: filtros y tablero institucional.' },
  { src: '/mockups/servicios-instituciones.png', alt: 'Plataforma de establecimientos y KPIs.' },
]
usePageMeta(() => copy.value.title)
useHead(() => ({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: copy.value.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: copy.value.title,
        about: 'ECOM Chaco',
        author: { '@type': 'Person', name: 'Fabricio Nicolás Duarte', url: origin },
      }),
    },
  ],
}))
</script>
