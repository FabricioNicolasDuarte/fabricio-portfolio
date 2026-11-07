<template>
  <section id="skills" data-kpr-section="skills" data-kpr-theme="dark" class="frame-container py-16 md:py-20">
    <p class="fd-kicker">{{ t.skills.kicker }}</p>
    <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{{ t.skills.title }}</h2>
    <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">{{ t.skills.intro }}</p>

    <div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      <article v-for="group in groups" :key="group.title" class="fd-card p-6">
        <p class="fd-kicker">{{ group.kicker }}</p>
        <h3 class="mt-1 font-display text-lg font-semibold text-white">{{ group.title }}</h3>
        <p class="mt-1 text-sm leading-relaxed text-muted">{{ group.blurb }}</p>
        <ul class="mt-6 space-y-4">
          <li v-for="item in group.items" :key="item.name">
            <div class="mb-1.5 flex items-baseline justify-between gap-3">
              <span class="text-sm text-slate-200">{{ item.name }}</span>
              <span class="text-[10px] font-medium tracking-wider text-muted uppercase">{{ item.band }}</span>
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
        L('Vue 3 / Nuxt / TypeScript', 3, 'prod'),
        L('Tailwind / CSS / responsive UI', 3, 'prod'),
        L('Laravel / Livewire / PHP', 3, 'prod'),
        L('REST / APIs', 3, 'prod'),
        L('n8n / webhooks', 3, 'prod'),
        L('Expo / WatermelonDB', 2, 'solid'),
        L('GSAP / motion / micro-interactions', 3, 'prod'),
        L('Three.js / WebGL', 2, 'solid'),
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
    {
      kicker: t.value.skills.g4k,
      title: t.value.skills.g4,
      blurb: t.value.skills.g4b,
      items: [
        L('Figma / UI systems / prototipos', 3, 'prod'),
        L('Adobe Photoshop / Illustrator', 3, 'prod'),
        L('Adobe Premiere / After Effects', 3, 'prod'),
        L('Audition / diseño de audio', 2, 'solid'),
        L('Blender / 3D / GLB', 2, 'solid'),
        L('SketchUp / modelado espacial', 2, 'solid'),
        L('BIM / lectura de planos', 2, 'solid'),
        L('UX / journeys / usabilidad', 3, 'prod'),
        L('Video · FX · branding motion', 3, 'prod'),
      ],
    },
  ]
})
</script>
