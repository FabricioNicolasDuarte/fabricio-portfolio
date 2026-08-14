<template>
  <section id="skills" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <p class="text-xs font-medium tracking-widest text-cyan-400 uppercase">Herramientas</p>
    <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Stack</h2>
    <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">
      Prioridad: datos, producto y automatización. Cloud y diseño según el CV: uso general, no especialización.
    </p>

    <div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
      <div
        v-for="col in columns"
        :key="col.title"
        class="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
      >
        <h3 class="font-display text-lg font-semibold text-cyan-200">{{ col.title }}</h3>
        <p class="mt-2 text-sm text-slate-400">{{ col.blurb }}</p>
        <ul class="mt-4 flex flex-wrap gap-2">
          <li
            v-for="item in col.items"
            :key="item"
            class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-200 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-100"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const columns = [
  {
    title: 'Lenguajes y datos',
    blurb: 'Ingesta, modelado y serving.',
    items: [
      'PHP 8', 'JavaScript', 'Python', 'R', 'C', 'Dart', 'SQL',
      'PostgreSQL', 'MySQL / MariaDB', 'SQL Server', 'MongoDB', 'Supabase', 'SQLite',
      'pandas', 'dbt', 'Celery', 'Docker',
    ],
  },
  {
    title: 'Frameworks, IA y automatización',
    blurb: 'Producto, modelos y orquestación.',
    items: [
      'Laravel', 'Vue / Pinia', 'Quasar', 'Node.js', 'Expo', 'Flutter',
      'TensorFlow', 'PyTorch', 'n8n', 'Make', 'Power Automate',
      'Apps Script', 'REST', 'Sanctum',
    ],
  },
  {
    title: 'Analytics, cloud y gestión',
    blurb: 'De la métrica al tablero y al equipo.',
    items: [
      'Apache Superset', 'Power BI', 'Google Colab', 'Google Sheets',
      'AWS', 'Google Cloud', 'Azure', 'CI/CD', 'Git', 'Jira', 'Trello', 'Notion',
    ],
  },
  {
    title: 'Diseño y multimedia',
    blurb: 'Contenido, tableros y documentación.',
    items: [
      'Figma', 'Adobe XD', 'Photoshop', 'Illustrator',
      'After Effects', 'Premiere', 'Audition', 'AutoCAD', 'SketchUp',
    ],
  },
]
</script>
