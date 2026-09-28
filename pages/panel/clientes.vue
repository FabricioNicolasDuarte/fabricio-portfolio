<template>
  <PortalShell>
    <main id="contenido" tabindex="-1" class="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <p class="fd-kicker">Clientes</p>
      <h1 class="mt-2 font-display text-3xl font-semibold text-white">Cartera de clientes</h1>
      <ul class="mt-8 grid gap-4 sm:grid-cols-2">
        <li v-for="c in clients" :key="c.id" class="fd-card p-5">
          <div class="flex items-center gap-2">
            <span class="rounded-full border border-white/15 px-2 py-0.5 text-[10px] uppercase text-muted">
              {{ c.status }}
            </span>
            <span class="text-xs text-muted">{{ c.country }}</span>
          </div>
          <h2 class="mt-3 font-display text-xl font-semibold text-white">{{ c.name }}</h2>
          <p class="mt-1 text-sm text-slate-400">{{ c.contact }} · {{ c.email }}</p>
          <p class="mt-3 text-sm text-muted">{{ c.notes }}</p>
          <p class="mt-4 text-xs text-signal">
            {{ projects.filter((p) => p.clientId === c.id).length }} proyecto(s)
          </p>
        </li>
      </ul>
    </main>
  </PortalShell>
</template>

<script setup>
const { init, clients, projects } = usePortal()
usePageMeta(() => 'Clientes')
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
onMounted(() => init())
</script>
