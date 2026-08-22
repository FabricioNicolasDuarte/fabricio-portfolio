<template>
  <section id="caso" class="relative mx-auto max-w-6xl px-5 pb-8 sm:px-8">
    <p class="text-xs font-medium tracking-widest text-cyan-400 uppercase">Caso</p>
    <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
      De operación fragmentada a decisión gobernada
    </h2>
    <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">
      Caso sintético, sin datos ni esquemas internos. Resume el patrón que aplico
      cuando el dato existe en producción pero no es usable para decidir.
    </p>

    <div class="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <article class="glass rounded-2xl p-6">
        <p class="text-[11px] font-medium tracking-wider text-slate-500 uppercase">Antes</p>
        <h3 class="mt-2 font-display text-lg font-semibold text-white">Indicadores en silos</h3>
        <ul class="mt-3 space-y-2 text-[14px] leading-relaxed text-slate-400">
          <li>— Reportes armados a mano desde varias bases y planillas.</li>
          <li>— Criterios de métrica distintos según área o entidad.</li>
          <li>— Acceso amplio a exportaciones, sin traza de quién consulta qué.</li>
        </ul>
      </article>
      <article class="glass rounded-2xl border-cyan-400/25 p-6">
        <p class="text-[11px] font-medium tracking-wider text-cyan-400 uppercase">Pipeline</p>
        <h3 class="mt-2 font-display text-lg font-semibold text-white">Contrato + modelo + BI</h3>
        <ul class="mt-3 space-y-2 text-[14px] leading-relaxed text-slate-400">
          <li>— Ingesta desde legado (SQL Server / PostgreSQL) y APIs, sin migrar el core.</li>
          <li>— Transformación idempotente y jobs asíncronos (Celery / Redis).</li>
          <li>— Datasets y tableros Apache Superset / Power BI con RLS e identidad federada.</li>
          <li>— Alertas n8n sobre fallos de lote y desvíos operativos.</li>
        </ul>
      </article>
      <article class="glass rounded-2xl p-6">
        <p class="text-[11px] font-medium tracking-wider text-slate-500 uppercase">Después</p>
        <h3 class="mt-2 font-display text-lg font-semibold text-white">Una capa de decisión</h3>
        <ul class="mt-3 space-y-2 text-[14px] leading-relaxed text-slate-400">
          <li>— Métrica única por entidad, reutilizable en tablero y export.</li>
          <li>— Consumo institucional continuo (embed), no copias locales.</li>
          <li>— Auditoría de consulta y exportación; fallos visibles, no silenciosos.</li>
        </ul>
      </article>
    </div>

    <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div v-for="m in metrics" :key="m.label" class="glass rounded-2xl px-5 py-4">
        <p class="text-[11px] uppercase tracking-wider text-slate-500">{{ m.label }}</p>
        <p class="mt-1 font-display text-xl font-semibold text-white">{{ m.value }}</p>
        <p class="mt-1 text-[13px] text-slate-400">{{ m.note }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const metrics = [
  {
    label: 'Gobernanza',
    value: 'RLS + federación',
    note: 'El recorte de dato sigue a la identidad, no a un filtro de UI.',
  },
  {
    label: 'Operación',
    value: 'Jobs + alertas',
    note: 'Conciliación y refresco no dependen de un operador en planilla.',
  },
  {
    label: 'Adopción',
    value: 'BI embebido',
    note: 'El tablero vive donde se trabaja; no es un archivo que viaja por mail.',
  },
]
</script>
