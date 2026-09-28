<template>
  <PortalShell>
    <main id="contenido" tabindex="-1" class="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <template v-if="project">
        <NuxtLink :to="localePath('/panel/proyectos')" class="text-sm text-signal hover:underline">← Proyectos</NuxtLink>
        <div class="mt-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <span class="rounded-full border border-signal/30 px-2 py-0.5 text-[10px] uppercase text-signal">
                {{ statusLabel[project.status] || project.status }}
              </span>
              <span class="text-xs text-muted">{{ project.phase }}</span>
            </div>
            <h1 class="mt-2 font-display text-3xl font-semibold text-white">{{ project.name }}</h1>
            <p class="mt-1 text-sm text-slate-400">{{ client?.name }} · {{ client?.contact }}</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <button type="button" class="fd-btn-outline text-xs" @click="copyShare">
              {{ copied ? 'Copiado' : 'Copiar enlace cliente' }}
            </button>
            <a v-if="shareHref" :href="shareHref" target="_blank" rel="noopener" class="fd-btn text-xs">Abrir vista cliente</a>
          </div>
        </div>

        <p class="mt-6 max-w-3xl text-sm leading-relaxed text-slate-300">{{ project.summary }}</p>

        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div class="fd-card p-4">
            <p class="text-[10px] uppercase tracking-wider text-muted">Presupuesto ref.</p>
            <p class="mt-1 font-display text-xl text-white">{{ money(project.budgetRef) }}</p>
          </div>
          <div class="fd-card p-4">
            <p class="text-[10px] uppercase tracking-wider text-muted">Propuesto</p>
            <p class="mt-1 font-display text-xl text-signal">{{ money(project.budgetProposed) }}</p>
          </div>
          <div class="fd-card p-4">
            <p class="text-[10px] uppercase tracking-wider text-muted">Ops / mes</p>
            <p class="mt-1 font-display text-xl text-white">{{ money(project.opsMonthly) }}</p>
          </div>
          <div class="fd-card p-4">
            <p class="text-[10px] uppercase tracking-wider text-muted">Pasarela</p>
            <p class="mt-1 text-sm text-white">{{ project.paymentGateway || '—' }}</p>
          </div>
        </div>

        <section class="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 class="font-display text-lg font-semibold text-white">Estado</h2>
            <div class="mt-3 flex flex-wrap gap-2">
              <button
                v-for="s in statuses"
                :key="s"
                type="button"
                class="rounded-full border px-3 py-1.5 text-xs"
                :class="project.status === s ? 'border-signal bg-signal/10 text-signal' : 'border-white/15 text-muted hover:border-white/30'"
                @click="updateProjectStatus(project.id, s)"
              >
                {{ statusLabel[s] }}
              </button>
            </div>
            <label class="mt-4 block text-xs uppercase tracking-wider text-muted">Fase</label>
            <input
              v-model="phaseDraft"
              type="text"
              class="mt-1.5 w-full rounded-xl border border-white/15 bg-black px-3 py-2 text-sm text-white outline-none focus:border-signal"
              @change="updateProjectStatus(project.id, project.status, phaseDraft)"
            />
          </div>
          <div>
            <h2 class="font-display text-lg font-semibold text-white">Repositorio y demo</h2>
            <ul class="mt-3 space-y-2 text-sm">
              <li>
                <span class="text-muted">Repo · </span>
                <a v-if="project.repoUrl" :href="project.repoUrl" class="text-signal hover:underline" target="_blank" rel="noopener">{{ project.repoUrl }}</a>
                <span v-else class="text-slate-500">sin URL</span>
              </li>
              <li>
                <span class="text-muted">Demo · </span>
                <a v-if="project.demoUrl" :href="project.demoUrl" class="text-signal hover:underline" target="_blank" rel="noopener">{{ project.demoUrl }}</a>
                <span v-else class="text-slate-500">pendiente</span>
              </li>
              <li>
                <span class="text-muted">Enlace cliente · </span>
                <code class="text-xs text-lime-200">{{ sharePath }}</code>
              </li>
            </ul>
          </div>
        </section>

        <section class="mt-10">
          <h2 class="font-display text-lg font-semibold text-white">Hitos</h2>
          <ul class="mt-3 space-y-2">
            <li
              v-for="m in milestones"
              :key="m.id"
              class="flex items-center justify-between gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm"
            >
              <span class="text-slate-300">{{ m.label }}</span>
              <span class="text-xs uppercase text-muted">{{ statusLabel[m.status] || m.status }}</span>
            </li>
          </ul>
        </section>

        <section class="mt-10">
          <h2 class="font-display text-lg font-semibold text-white">Documentos y presupuestos</h2>
          <ul class="mt-3 space-y-2">
            <li
              v-for="d in docs"
              :key="d.id"
              class="fd-card flex flex-wrap items-center justify-between gap-3 p-4"
            >
              <div>
                <p class="text-sm font-medium text-white">{{ d.title }}</p>
                <p class="text-xs text-muted">{{ d.kind }}{{ d.visibleToClient ? ' · visible al cliente' : '' }}</p>
              </div>
              <NuxtLink
                v-if="d.href"
                :to="localePath(d.href)"
                class="fd-btn-outline text-xs"
              >
                Abrir
              </NuxtLink>
              <span v-else class="text-xs text-slate-500">{{ d.note || 'Sin archivo' }}</span>
            </li>
          </ul>
        </section>
      </template>
      <p v-else class="text-slate-400">Proyecto no encontrado.</p>
    </main>
  </PortalShell>
</template>

<script setup>
const route = useRoute()
const { localePath } = useLocale()
const {
  init,
  projectById,
  clientById,
  docsForProject,
  milestonesForProject,
  updateProjectStatus,
  money,
  statusLabel,
} = usePortal()

const statuses = ['propuesta', 'activo', 'pausado', 'entregado']
const copied = ref(false)
const phaseDraft = ref('')

const project = computed(() => projectById(String(route.params.id)))
const client = computed(() => (project.value ? clientById(project.value.clientId) : null))
const docs = computed(() => (project.value ? docsForProject(project.value.id) : []))
const milestones = computed(() => (project.value ? milestonesForProject(project.value.id) : []))

const sharePath = computed(() => (project.value ? `/c/${project.value.shareToken}` : ''))
const shareHref = computed(() => {
  if (!import.meta.client || !project.value) return ''
  return `${window.location.origin}${localePath(sharePath.value)}`
})

watch(
  project,
  (p) => {
    phaseDraft.value = p?.phase || ''
  },
  { immediate: true },
)

usePageMeta(() => project.value?.name || 'Proyecto')
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })

onMounted(() => init())

async function copyShare() {
  if (!shareHref.value) return
  try {
    await navigator.clipboard.writeText(shareHref.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    /* ignore */
  }
}
</script>
