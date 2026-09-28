<template>
  <PortalShell>
    <main id="contenido" tabindex="-1" class="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <p class="fd-kicker">Documentos</p>
      <h1 class="mt-2 font-display text-3xl font-semibold text-white">Documentos y presupuestos</h1>
      <p class="mt-2 max-w-2xl text-sm text-slate-400">
        Materiales por proyecto. Los marcados como visibles aparecen en el enlace del cliente.
      </p>
      <ul class="mt-8 space-y-3">
        <li v-for="row in rows" :key="row.doc.id" class="fd-card flex flex-wrap items-center justify-between gap-3 p-5">
          <div>
            <p class="font-medium text-white">{{ row.doc.title }}</p>
            <p class="mt-1 text-sm text-slate-400">
              {{ row.project?.name }} · {{ row.doc.kind }}
              <span v-if="row.doc.visibleToClient" class="text-signal"> · cliente</span>
            </p>
          </div>
          <NuxtLink
            v-if="row.doc.href"
            :to="localePath(row.doc.href)"
            class="fd-btn-outline text-xs"
          >
            Abrir
          </NuxtLink>
          <span v-else class="text-xs text-slate-500">{{ row.doc.note || 'Sin archivo' }}</span>
        </li>
      </ul>
    </main>
  </PortalShell>
</template>

<script setup>
const { localePath } = useLocale()
const { init, documents, projectById } = usePortal()

const rows = computed(() =>
  documents.value.map((doc) => ({
    doc,
    project: projectById(doc.projectId),
  })),
)

usePageMeta(() => 'Documentos')
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
onMounted(() => init())
</script>
