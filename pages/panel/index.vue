<template>
  <PortalShell>
    <main id="contenido" tabindex="-1" class="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <p class="fd-kicker">Resumen</p>
      <h1 class="mt-2 font-display text-3xl font-semibold text-white">Tu cartera</h1>
      <p class="mt-2 max-w-2xl text-sm text-slate-400">
        Proyectos, clientes, presupuestos y enlaces para compartir con cada cliente.
        {{ supabaseReady ? 'Conectado a Supabase.' : 'Modo demo local — conectá Supabase cuando quieras persistencia real.' }}
      </p>

      <div class="mt-8 grid gap-4 sm:grid-cols-3">
        <div class="fd-card p-5">
          <p class="text-xs uppercase tracking-wider text-muted">Clientes</p>
          <p class="mt-2 font-display text-3xl text-signal">{{ clients.length }}</p>
        </div>
        <div class="fd-card p-5">
          <p class="text-xs uppercase tracking-wider text-muted">Proyectos</p>
          <p class="mt-2 font-display text-3xl text-white">{{ projects.length }}</p>
        </div>
        <div class="fd-card p-5">
          <p class="text-xs uppercase tracking-wider text-muted">En propuesta</p>
          <p class="mt-2 font-display text-3xl text-white">{{ proposed }}</p>
        </div>
      </div>

      <section class="mt-10">
        <div class="flex items-center justify-between gap-3">
          <h2 class="font-display text-xl font-semibold text-white">Proyectos recientes</h2>
          <NuxtLink :to="localePath('/panel/proyectos')" class="text-sm text-signal hover:underline">Ver todos</NuxtLink>
        </div>
        <ul class="mt-4 space-y-3">
          <li v-for="p in projects" :key="p.id">
            <NuxtLink :to="localePath(`/panel/proyectos/${p.id}`)" class="fd-card block p-5">
              <div class="flex flex-wrap items-center gap-2">
                <span class="rounded-full border border-signal/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-signal">
                  {{ statusLabel[p.status] || p.status }}
                </span>
                <span class="text-xs text-muted">{{ p.phase }}</span>
              </div>
              <p class="mt-2 font-display text-lg font-semibold text-white">{{ p.name }}</p>
              <p class="mt-1 text-sm text-slate-400">{{ clientById(p.clientId)?.name }}</p>
              <p class="mt-3 text-sm text-signal">
                {{ money(p.budgetProposed) }}
                <span class="text-muted"> · ops {{ money(p.opsMonthly) }}/mes</span>
              </p>
            </NuxtLink>
          </li>
        </ul>
      </section>
    </main>
  </PortalShell>
</template>

<script setup>
const { localePath } = useLocale()
const {
  init,
  clients,
  projects,
  clientById,
  money,
  statusLabel,
  supabaseReady,
} = usePortal()

const proposed = computed(() => projects.value.filter((p) => p.status === 'propuesta').length)

usePageMeta(() => 'Panel')
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })

onMounted(() => init())
</script>
