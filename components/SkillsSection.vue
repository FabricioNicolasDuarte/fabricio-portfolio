<template>
  <section id="skills" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <p class="text-xs font-medium tracking-widest text-cyan-400 uppercase">{{ t.skills.kicker }}</p>
    <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Stack</h2>
    <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">{{ t.skills.intro }}</p>

    <div class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
      <div v-for="group in groups" :key="group.title" class="glass rounded-2xl p-6">
        <h3 class="font-display text-lg font-semibold text-cyan-200">{{ group.title }}</h3>
        <p class="mt-1 text-sm text-slate-500">{{ group.blurb }}</p>
        <ul class="mt-4 space-y-3">
          <li v-for="item in group.items" :key="item.name">
            <div class="mb-1 flex items-baseline justify-between gap-3">
              <span class="text-sm text-slate-200">{{ item.name }}</span>
              <span class="text-[11px] tracking-wide text-slate-500">{{ item.band }}</span>
            </div>
            <div class="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div class="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" :style="{ width: item.pct + '%' }"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const { t } = useLocale()

const groups = computed(() => {
  const b = t.value.skills.bands
  const L = (name, pct, key) => ({ name, pct, band: b[key] })
  return [
    {
      title: t.value.skills.g1,
      blurb: t.value.skills.g1b,
      items: [
        L('SQL / PostgreSQL / SQL Server', 94, 'prod'),
        L('Django · ETL · Celery / Redis', 92, 'prod'),
        L('Apache Superset', 90, 'prod'),
        L('Power BI / DAX', 78, 'solid'),
        L('Python / pandas / Docker', 88, 'prod'),
        L('PySpark / Delta Lake', 70, 'solid'),
        L('Apache Airflow', 68, 'solid'),
        L('Databricks', 64, 'applied'),
        L('PostGIS / MongoDB', 72, 'solid'),
      ],
    },
    {
      title: t.value.skills.g2,
      blurb: t.value.skills.g2b,
      items: [
        L('Vue 3 / Nuxt / TypeScript', 86, 'prod'),
        L('n8n / webhooks', 82, 'solid'),
        L('Expo / WatermelonDB', 80, 'solid'),
        L('Laravel / PHP', 74, 'solid'),
        L('TensorFlow', 62, 'applied'),
        L('Flutter', 58, 'applied'),
      ],
    },
  ]
})
</script>
