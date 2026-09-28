<template>
  <PortalShell>
    <main id="contenido" tabindex="-1" class="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <p class="fd-kicker">Proyectos</p>
      <h1 class="mt-2 font-display text-3xl font-semibold text-white">Proyectos</h1>
      <ul class="mt-8 space-y-3">
        <li v-for="p in projects" :key="p.id">
          <NuxtLink :to="localePath(`/panel/proyectos/${p.id}`)" class="fd-card flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p class="font-display text-lg font-semibold text-white">{{ p.name }}</p>
              <p class="text-sm text-slate-400">{{ clientById(p.clientId)?.name }} · {{ p.phase }}</p>
            </div>
            <div class="text-left sm:text-right">
              <span class="rounded-full border border-signal/30 px-2 py-0.5 text-[10px] uppercase text-signal">
                {{ statusLabel[p.status] || p.status }}
              </span>
              <p class="mt-2 text-sm text-signal">{{ money(p.budgetProposed) }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </main>
  </PortalShell>
</template>

<script setup>
const { localePath } = useLocale()
const { init, projects, clientById, money, statusLabel } = usePortal()
usePageMeta(() => 'Proyectos')
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
onMounted(() => init())
</script>
