<template>
  <main id="contenido" tabindex="-1">
    <CasePage
      :kicker="copy.kicker"
      :title="copy.title"
      :lead="copy.lead"
      :lines="copy.lines"
      :note="copy.note"
      :shots="shots"
    />
  </main>
</template>

<script setup>
const { locale } = useLocale()
const copy = computed(() => {
  const pack = {
    es: {
      kicker: 'Caso · Skadia',
      title: 'Del potrero al número que se puede repetir',
      lead: 'SIGAG captura en campo sin señal. El lakehouse de demostración toma pesadas, clima y sanidad y calcula ganancia diaria, carga, horas de calor y BCS.',
      lines: [
        'App offline-first (Expo, WatermelonDB) con visión y sincronización al volver la red.',
        'Pipeline Airflow + PySpark sobre un dataset de demostración (2.000 animales, 90 días).',
        'ADG 0,58 kg/día y BCS bajo 23,69 % en ese corte — cifras de demo, no de un establecimiento real.',
        'Sitio de marca: fabricionicolasduarte.github.io/skadia-webgl/',
      ],
      note: 'Los KPIs son del dataset de demostración publicado en este sitio.',
      shotLanding: 'Landing Skadia agtech.',
      shotSigag: 'SIGAG: centro de mando, GIS y asistente.',
      shotLake: 'Lakehouse: ADG, carga, ITH y BCS (demo).',
    },
    en: {
      kicker: 'Case · Skadia',
      title: 'From the paddock to a number you can reuse',
      lead: 'SIGAG captures in the field without signal. The demo lakehouse takes weighings, weather, and health and computes daily gain, stocking, heat hours, and BCS.',
      lines: [
        'Offline-first app (Expo, WatermelonDB) with vision and sync when the network returns.',
        'Airflow + PySpark pipeline on a demonstration dataset (2,000 animals, 90 days).',
        'ADG 0.58 kg/day and low BCS 23.69% in that cut — demo figures, not a live ranch.',
        'Brand site: fabricionicolasduarte.github.io/skadia-webgl/',
      ],
      note: 'KPIs come from the demonstration dataset published on this site.',
      shotLanding: 'Skadia agtech landing.',
      shotSigag: 'SIGAG: command center, GIS, and assistant.',
      shotLake: 'Lakehouse: ADG, stocking, THI, and BCS (demo).',
    },
    pt: {
      kicker: 'Caso · Skadia',
      title: 'Do piquete ao número que se pode repetir',
      lead: 'O SIGAG captura no campo sem sinal. O lakehouse de demonstração lê pesagens, clima e sanidade e calcula ganho diário, lotação, horas de calor e BCS.',
      lines: [
        'App offline-first (Expo, WatermelonDB) com visão e sync quando a rede volta.',
        'Pipeline Airflow + PySpark em dataset de demonstração (2.000 animais, 90 dias).',
        'GMD 0,58 kg/dia e ECC (BCS) baixo 23,69% nesse recorte — números de demo, não de um estabelecimento real.',
        'Site da marca: fabricionicolasduarte.github.io/skadia-webgl/',
      ],
      note: 'Os KPIs vêm do dataset de demonstração publicado neste site.',
      shotLanding: 'Landing Skadia agtech.',
      shotSigag: 'SIGAG: centro de comando, GIS e assistente.',
      shotLake: 'Lakehouse: GMD, lotação, ITH e BCS (demo).',
    },
    zh: {
      kicker: '案例 · Skadia',
      title: '从牧场到可复用的数字',
      lead: 'SIGAG 在无信号田间采集。演示 lakehouse 读取称重、天气与卫生，计算日增重、载畜、热应激小时和体况。',
      lines: [
        '离线优先应用（Expo、WatermelonDB），有视觉识别，网络恢复后同步。',
        'Airflow + PySpark 流水线，演示数据（2,000 头，90 天）。',
        '该切片 ADG 0.58 kg/天、低体况 23.69% — 演示数字，不是真实牧场。',
        '品牌站点：fabricionicolasduarte.github.io/skadia-webgl/',
      ],
      note: 'KPI 来自本站发布的演示数据集。',
      shotLanding: 'Skadia agtech 落地页。',
      shotSigag: 'SIGAG：指挥中心、GIS 与助手。',
      shotLake: 'Lakehouse：日增重、载畜、ITH 与 BCS（演示）。',
    },
  }
  return pack[locale.value] || pack.es
})
const shots = computed(() => [
  { src: '/mockups/skadia-web.jpg', alt: copy.value.shotLanding },
  { src: '/mockups/sigag.jpg', alt: copy.value.shotSigag },
  { src: '/mockups/skadia-lakehouse.png', alt: copy.value.shotLake },
])
usePageMeta(() => copy.value.title)
</script>
