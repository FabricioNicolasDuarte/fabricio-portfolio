<template>
  <main id="contenido" tabindex="-1" class="mx-auto max-w-3xl px-5 py-12 sm:px-8">
    <div class="flex items-center gap-3">
      <img src="/brand/mark.png" alt="" class="h-10 w-10" width="40" height="40" />
      <div>
        <p class="text-xs uppercase tracking-wider text-muted">Vista cliente</p>
        <p class="font-display text-sm font-semibold text-signal">Fabricio Duarte</p>
      </div>
    </div>

    <div v-if="loading" class="mt-16 text-center text-sm text-muted">Cargando…</div>

    <template v-else-if="project">
      <p class="fd-kicker mt-10">Proyecto</p>
      <h1 class="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">{{ project.name }}</h1>
      <p class="mt-2 text-sm text-slate-400">{{ client?.name }}</p>
      <p class="mt-4 text-sm leading-relaxed text-slate-300">{{ project.summary }}</p>

      <div class="mt-8 grid gap-3 sm:grid-cols-3">
        <div class="fd-card p-4">
          <p class="text-[10px] uppercase tracking-wider text-muted">Estado</p>
          <p class="mt-1 text-sm text-white">{{ statusLabel[project.status] || project.status }}</p>
        </div>
        <div class="fd-card p-4">
          <p class="text-[10px] uppercase tracking-wider text-muted">Fase</p>
          <p class="mt-1 text-sm text-white">{{ project.phase }}</p>
        </div>
        <div class="fd-card p-4">
          <p class="text-[10px] uppercase tracking-wider text-muted">Inversión propuesta</p>
          <p class="mt-1 font-display text-lg text-signal">{{ money(project.budgetProposed) }}</p>
        </div>
      </div>

      <section v-if="docs.length" class="mt-10">
        <h2 class="font-display text-lg font-semibold text-white">Documentos</h2>
        <ul class="mt-4 space-y-2">
          <li v-for="d in docs" :key="d.id" class="fd-card flex items-center justify-between gap-3 p-4">
            <div>
              <p class="text-sm text-white">{{ d.title }}</p>
              <p class="text-xs text-muted">{{ d.kind }}</p>
            </div>
            <NuxtLink v-if="d.href" :to="localePath(d.href)" class="fd-btn text-xs">
              {{ d.downloadable ? 'Ver y descargar' : 'Ver' }}
            </NuxtLink>
            <span v-else class="text-xs text-slate-500">{{ d.note || 'Pronto' }}</span>
          </li>
        </ul>
      </section>

      <section v-if="project.demoUrl || project.repoUrl" class="mt-10">
        <h2 class="font-display text-lg font-semibold text-white">Accesos</h2>
        <ul class="mt-3 space-y-2 text-sm">
          <li v-if="project.demoUrl">
            <a :href="project.demoUrl" class="text-signal hover:underline" target="_blank" rel="noopener">Demo / previsualización</a>
          </li>
          <li v-if="project.repoUrl">
            <a :href="project.repoUrl" class="text-signal hover:underline" target="_blank" rel="noopener">Repositorio</a>
          </li>
        </ul>
      </section>

      <section class="mt-10">
        <h2 class="font-display text-lg font-semibold text-white">Hitos</h2>
        <ul class="mt-3 space-y-2">
          <li
            v-for="m in milestones"
            :key="m.id"
            class="flex justify-between gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300"
          >
            <span>{{ m.label }}</span>
            <span class="text-xs uppercase text-muted">{{ statusLabel[m.status] || m.status }}</span>
          </li>
        </ul>
      </section>

      <p class="mt-12 text-center text-xs text-muted">
        Consultas:
        <a href="mailto:fabricioduarteoficial@gmail.com" class="text-signal hover:underline">fabricioduarteoficial@gmail.com</a>
        ·
        <a :href="wa" class="text-signal hover:underline" target="_blank" rel="noopener">WhatsApp</a>
      </p>
    </template>

    <div v-else class="mt-16 text-center">
      <h1 class="font-display text-2xl text-white">Enlace no encontrado</h1>
      <p class="mt-2 text-sm text-slate-400">Pedile al equipo un enlace actualizado.</p>
    </div>
  </main>
</template>

<script setup>
const route = useRoute()
const { localePath } = useLocale()
const {
  init,
  loadShare,
  projectByToken,
  clientById,
  docsForProject,
  milestonesForProject,
  money,
  statusLabel,
} = usePortal()

const token = computed(() => String(route.params.token || ''))
const project = computed(() => projectByToken(token.value))
const client = computed(() => (project.value ? clientById(project.value.clientId) : null))
const docs = computed(() =>
  project.value
    ? docsForProject(project.value.id).filter((d) => d.visibleToClient)
    : [],
)
const milestones = computed(() => (project.value ? milestonesForProject(project.value.id) : []))
const wa = 'https://wa.me/543704022201'
const loading = ref(true)

usePageMeta(() => project.value?.name || 'Proyecto')
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })

onMounted(async () => {
  await init()
  try {
    await loadShare(token.value)
  } catch {
    /* sin RPC o token inválido */
  } finally {
    loading.value = false
  }
})
</script>
