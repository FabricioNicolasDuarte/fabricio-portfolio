<template>
  <section id="skills" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <p class="text-xs font-medium tracking-widest text-lime-400 uppercase">{{ t.skills.kicker }}</p>
    <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{{ t.skills.title }}</h2>
    <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">{{ t.skills.intro }}</p>

    <div class="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <article v-for="group in groups" :key="group.title" class="glass rounded-2xl p-6">
        <p class="text-[11px] font-medium tracking-widest text-lime-300 uppercase">{{ group.kicker }}</p>
        <h3 class="mt-1 font-display text-lg font-semibold text-white">{{ group.title }}</h3>
        <p class="mt-1 text-sm leading-relaxed text-slate-500">{{ group.blurb }}</p>
        <ul class="mt-6 space-y-4">
          <li v-for="item in group.items" :key="item.name">
            <div class="mb-1.5 flex items-baseline justify-between gap-3">
              <span class="text-sm text-slate-200">{{ item.name }}</span>
              <span class="text-[10px] font-medium tracking-wider text-slate-500 uppercase">{{ item.band }}</span>
            </div>
            <div class="flex gap-1" :aria-label="item.band">
              <span
                v-for="n in 3"
                :key="n"
                class="h-1.5 flex-1 rounded-full"
                :class="n <= item.level ? 'bg-lime-400' : 'bg-white/10'"
              />
            </div>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const { t } = useLocale()

const groups = computed(() => {
  const b = t.value.skills.bands
  const L = (name, level, key) => ({ name, level, band: b[key] })
  return [
    {
      kicker: t.value.skills.g1k,
      title: t.value.skills.g1,
      blurb: t.value.skills.g1b,
      items: [
        L('SQL / PostgreSQL / SQL Server', 3, 'prod'),
        L('Django · ETL · Celery / Redis', 3, 'prod'),
        L('Apache Superset', 3, 'prod'),
        L('Power BI / DAX', 2, 'solid'),
        L('Python / pandas / Docker', 3, 'prod'),
        L('PostGIS', 2, 'solid'),
      ],
    },
    {
      kicker: t.value.skills.g2k,
      title: t.value.skills.g2,
      blurb: t.value.skills.g2b,
      items: [
        L('Laravel / Livewire / PHP', 3, 'prod'),
        L('Vue 3 / Nuxt / TypeScript', 3, 'prod'),
        L('n8n / webhooks', 3, 'prod'),
        L('Expo / WatermelonDB', 2, 'solid'),
        L('REST / APIs', 3, 'prod'),
      ],
    },
    {
      kicker: t.value.skills.g3k,
      title: t.value.skills.g3,
      blurb: t.value.skills.g3b,
      items: [
        L('PySpark / Delta Lake', 2, 'solid'),
        L('Apache Airflow', 2, 'solid'),
        L('Databricks', 1, 'applied'),
        L('TensorFlow', 1, 'applied'),
      ],
    },
  ]
})
</script>
