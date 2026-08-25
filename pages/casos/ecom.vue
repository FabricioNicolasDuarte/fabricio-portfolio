<template>
  <CasePage
    :kicker="copy.kicker"
    :title="copy.title"
    :lead="copy.lead"
    :lines="copy.lines"
    :note="copy.note"
    :shots="shots"
  />
</template>

<script setup>
const { locale } = useLocale()
const copy = computed(() => {
  const pack = {
    es: {
      kicker: 'Caso · ECOM Chaco',
      title: 'Tableros institucionales sobre datos ya unificados',
      lead: 'En ECOM el trabajo no es un Excel suelto: es operación analítica continua. Datasets, métricas y embed (Apache Superset y Power BI) con recorte por organismo.',
      lines: [
        'Capa de consulta sobre legado SQL Server y PostgreSQL, sin reescribir el core.',
        'Tableros con permisos por rol: cada institución ve solo lo suyo.',
        'Jobs repetibles (Celery / Redis) y avisos si un proceso falla.',
        'Esto es trabajo en producción institucional, no un laboratorio.',
      ],
      note: 'Sin cifras internas ni nombres de sistemas no públicos.',
    },
    en: {
      kicker: 'Case · ECOM Chaco',
      title: 'Institutional dashboards on already-unified data',
      lead: 'At ECOM the work is not a stray spreadsheet: it is continuous analytic operations. Datasets, metrics, and embed (Apache Superset and Power BI) scoped by organization.',
      lines: [
        'Query layer over legacy SQL Server and PostgreSQL, without rewriting the core.',
        'Role-based dashboards: each institution sees only its slice.',
        'Repeatable jobs (Celery / Redis) and alerts if a process fails.',
        'Production institutional work, not a lab.',
      ],
      note: 'No internal figures or non-public system names.',
    },
    pt: {
      kicker: 'Caso · ECOM Chaco',
      title: 'Painéis institucionais sobre dados já unificados',
      lead: 'Na ECOM o trabalho não é uma planilha solta: é operação analítica contínua. Datasets, métricas e embed (Apache Superset e Power BI) recortados por órgão.',
      lines: [
        'Camada de consulta sobre legado SQL Server e PostgreSQL, sem reescrever o core.',
        'Painéis com permissão por perfil: cada instituição vê só o que é dela.',
        'Jobs repetíveis (Celery / Redis) e avisos se um processo falha.',
        'Produção institucional, não laboratório.',
      ],
      note: 'Sem números internos nem nomes de sistemas não públicos.',
    },
    zh: {
      kicker: '案例 · ECOM Chaco',
      title: '基于已统一数据的机构看板',
      lead: '在 ECOM，工作不是散落的表格，而是持续的分析运营。数据集、指标与嵌入（Apache Superset、Power BI）按机构划分范围。',
      lines: [
        '在遗留 SQL Server 与 PostgreSQL 上做查询层，不重写核心。',
        '按角色授权的看板：每个机构只看自己的范围。',
        '可重复任务（Celery / Redis），失败会告警。',
        '机构生产环境，不是实验室。',
      ],
      note: '不含内部数字或未公开系统名。',
    },
  }
  return pack[locale.value] || pack.es
})
const shots = [
  { src: '/mockups/superset.png', alt: 'Montaje Apache Superset: filtros y tablero institucional.' },
  { src: '/mockups/servicios-instituciones.png', alt: 'Montaje de establecimientos y KPIs (sin datos operativos).' },
]
useHead({ title: computed(() => `${copy.value.title} — Fabricio Duarte`) })
</script>
