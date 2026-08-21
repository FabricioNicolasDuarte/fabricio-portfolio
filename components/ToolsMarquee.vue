<template>
  <div class="relative overflow-hidden border-y border-white/5 py-4">
    <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#030712] to-transparent"></div>
    <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#030712] to-transparent"></div>
    <div class="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
      <span
        v-for="(t, i) in doubled"
        :key="i"
        class="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300"
      >
        {{ t }}
      </span>
    </div>
  </div>
</template>

<script setup>
const tools = [
  'Django', 'SQL', 'PostgreSQL', 'SQL Server', 'Apache Superset', 'Power BI',
  'n8n', 'Laravel', 'Vue', 'Nuxt', 'TypeScript', 'Expo', 'WatermelonDB',
  'Quasar', 'Pinia', 'Flutter', 'MongoDB', 'Celery', 'Python', 'PHP',
]
const doubled = [...tools, ...tools]
</script>
