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
import { AGRONYS_SITE, NUTROGAN_APP } from '~/utils/agronys'

const { locale } = useLocale()

const copy = computed(() => {
  const pack = {
    es: {
      kicker: 'Caso AgTech · Agronys (agronys.com)',
      title: 'Tres productos, un establecimiento',
      lead:
        'Agronys (desde 2022, NEA / Paraguay / Uruguay) desarrolla y comercializa software, datos e integración para el establecimiento. Nutrogan, SIGAG y Datagronys no son tres nombres del mismo software: son capas del día de campo, la jornada ganadera y la lectura de campaña.',
      lines: [
        'Nutrogan — registro en el teléfono (pesos, movimientos, agua, lluvia, mapa). App: nutrogan.site. Offline y sync al volver la señal.',
        'SIGAG — jornada ganadera: hacienda, potrero, alimentación y clima; cámara y voz según configuración.',
        'Datagronys — lectura de campaña: planillas ordenadas, evolución, carga, horas de calor y condición cuando hay datos.',
        'Sitio canónico: agronys.com.',
        'Separado de Agronys: en este portfolio hay un lakehouse de laboratorio (/agtech/lakehouse) para mostrar pipelines Airflow + PySpark — no es el producto Datagronys.',
      ],
      note: `Productos en ${AGRONYS_SITE}/productos · Nutrogan app ${NUTROGAN_APP}`,
      shots: [
        {
          src: '/mockups/sigag.jpg',
          label: '01 // SIGAG',
          role: 'PRODUCTO',
          caption: 'Jornada ganadera en el teléfono. Producto operativo del día de trabajo.',
          alt: 'SIGAG — jornada ganadera',
        },
        {
          src: '/mockups/agronys-web.jpg',
          label: '02 // AGRONYS.COM',
          role: 'EMPRESA',
          caption: 'Sitio y cuenta en agronys.com. Marca y portal del emprendimiento.',
          alt: 'Agronys.com — empresa',
        },
        {
          src: '/mockups/agronys-lakehouse.png',
          label: '03 // DATAGRONYS / LAB',
          role: 'NÚMEROS DE CAMPAÑA',
          caption: 'En Agronys: Datagronys lee la campaña. En este sitio, /agtech/lakehouse es solo el lab técnico de Fabricio.',
          alt: 'Números de campaña / lab',
        },
      ],
    },
    en: {
      kicker: 'AgTech case · Agronys (agronys.com)',
      title: 'Three products, one establishment',
      lead:
        'Agronys (since 2022, NEA / Paraguay / Uruguay) develops and sells software, data and integration for the establishment. Nutrogan, SIGAG and Datagronys are not three names for one app — they are field record, livestock day, and campaign reading.',
      lines: [
        'Nutrogan — phone field record (weights, moves, water, rain, map). App: nutrogan.site. Offline, syncs when signal returns.',
        'SIGAG — livestock day: herd, paddock, feed and weather; camera and voice as configured.',
        'Datagronys — campaign reading: spreadsheets ordered, progress, stocking, heat hours and condition when data exist.',
        'Canonical site: agronys.com.',
        'Separate from Agronys: this portfolio keeps a lab lakehouse (/agtech/lakehouse) for Airflow + PySpark demos — not the Datagronys product.',
      ],
      note: `Products at ${AGRONYS_SITE}/productos · Nutrogan app ${NUTROGAN_APP}`,
      shots: [
        {
          src: '/mockups/sigag.jpg',
          label: '01 // SIGAG',
          role: 'PRODUCT',
          caption: 'Livestock day on the phone. Operational product for the workday.',
          alt: 'SIGAG — livestock day',
        },
        {
          src: '/mockups/agronys-web.jpg',
          label: '02 // AGRONYS.COM',
          role: 'COMPANY',
          caption: 'Site and account on agronys.com. Venture brand and portal.',
          alt: 'Agronys.com — company',
        },
        {
          src: '/mockups/agronys-lakehouse.png',
          label: '03 // DATAGRONYS / LAB',
          role: 'CAMPAIGN NUMBERS',
          caption: 'At Agronys: Datagronys reads the campaign. Here, /agtech/lakehouse is only Fabricio’s technical lab.',
          alt: 'Campaign numbers / lab',
        },
      ],
    },
    pt: {
      kicker: 'Caso AgTech · Agronys (agronys.com)',
      title: 'Três produtos, um estabelecimento',
      lead:
        'Agronys (desde 2022, NEA / Paraguai / Uruguai) desenvolve e comercializa software, dados e integração para o estabelecimento. Nutrogan, SIGAG e Datagronys não são três nomes do mesmo app — são registro de campo, jornada pecuária e leitura da campanha.',
      lines: [
        'Nutrogan — registro no telefone (pesos, movimentos, água, chuva, mapa). App: nutrogan.site. Offline e sync quando volta a sinal.',
        'SIGAG — jornada pecuária: rebanho, potreiro, alimentação e clima; câmera e voz conforme configuração.',
        'Datagronys — leitura da campanha: planilhas ordenadas, evolução, carga, horas de calor e condição quando há dados.',
        'Site canônico: agronys.com.',
        'Separado da Agronys: neste portfólio há um lakehouse de laboratório (/agtech/lakehouse) para demos Airflow + PySpark — não é o produto Datagronys.',
      ],
      note: `Produtos em ${AGRONYS_SITE}/productos · App Nutrogan ${NUTROGAN_APP}`,
      shots: [
        {
          src: '/mockups/sigag.jpg',
          label: '01 // SIGAG',
          role: 'PRODUTO',
          caption: 'Jornada pecuária no telefone. Produto operacional do dia de trabalho.',
          alt: 'SIGAG — jornada pecuária',
        },
        {
          src: '/mockups/agronys-web.jpg',
          label: '02 // AGRONYS.COM',
          role: 'EMPRESA',
          caption: 'Site e conta em agronys.com. Marca e portal do empreendimento.',
          alt: 'Agronys.com — empresa',
        },
        {
          src: '/mockups/agronys-lakehouse.png',
          label: '03 // DATAGRONYS / LAB',
          role: 'NÚMEROS DA CAMPANHA',
          caption: 'Na Agronys: Datagronys lê a campanha. Aqui, /agtech/lakehouse é só o lab técnico do Fabricio.',
          alt: 'Números da campanha / lab',
        },
      ],
    },
    zh: {
      kicker: 'AgTech 案例 · Agronys（agronys.com）',
      title: '三个产品，一个牧场',
      lead:
        'Agronys（2022 起，东北阿根廷 / 巴拉圭 / 乌拉圭）为牧场开发并销售软件、数据与集成。Nutrogan、SIGAG、Datagronys 不是同一软件的三个名字——分别是田间记录、畜牧工作日、产季读取。',
      lines: [
        'Nutrogan — 手机田间记录（体重、调动、水、雨、地图）。应用：nutrogan.site。离线，有信号后同步。',
        'SIGAG — 畜牧工作日：牛群、围场、饲喂与天气；可含影像与语音。',
        'Datagronys — 产季读取：整理表格，进展、载畜、高温时数与体况（有数据时）。',
        '正式站点：agronys.com。',
        '与 Agronys 分开：本作品集保留实验室 lakehouse（/agtech/lakehouse）做 Airflow + PySpark 演示——不是 Datagronys 产品。',
      ],
      note: `产品见 ${AGRONYS_SITE}/productos · Nutrogan 应用 ${NUTROGAN_APP}`,
      shots: [
        {
          src: '/mockups/sigag.jpg',
          label: '01 // SIGAG',
          role: '产品',
          caption: '手机上的畜牧工作日。作业产品。',
          alt: 'SIGAG — 畜牧工作日',
        },
        {
          src: '/mockups/agronys-web.jpg',
          label: '02 // AGRONYS.COM',
          role: '公司',
          caption: 'agronys.com 站点与账户。创业品牌与门户。',
          alt: 'Agronys.com — 公司',
        },
        {
          src: '/mockups/agronys-lakehouse.png',
          label: '03 // DATAGRONYS / LAB',
          role: '产季数字',
          caption: 'Agronys 侧：Datagronys 读产季。本站 /agtech/lakehouse 仅是 Fabricio 的技术实验室。',
          alt: '产季数字 / 实验室',
        },
      ],
    },
  }
  return pack[locale.value] || pack.es
})

const shots = computed(() => copy.value.shots)

usePageMeta(() => copy.value.title)
</script>
