<template>
  <div class="min-h-screen">
    <header class="sticky top-0 z-40 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <NuxtLink :to="localePath('/panel')" class="flex items-center gap-2">
          <img src="/brand/mark.png" alt="" class="h-8 w-8" width="32" height="32" />
          <span class="font-display text-sm font-semibold text-signal">Panel</span>
        </NuxtLink>
        <nav class="hidden items-center gap-1 text-sm sm:flex">
          <NuxtLink
            v-for="item in nav"
            :key="item.to"
            :to="item.to"
            class="rounded-full px-3 py-1.5 text-slate-400 hover:bg-white/5 hover:text-lime-200"
            active-class="bg-white/10 text-lime-200"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
        <div class="flex items-center gap-2">
          <span class="hidden text-xs text-muted md:inline">{{ session?.name }}</span>
          <button type="button" class="fd-btn-outline !px-3 !py-1.5 text-xs" @click="onLogout">Salir</button>
        </div>
      </div>
      <div class="flex gap-1 overflow-x-auto border-t border-white/5 px-5 py-2 sm:hidden">
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="shrink-0 rounded-full px-3 py-1 text-xs text-slate-400"
          active-class="bg-white/10 text-lime-200"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </header>
    <slot />
  </div>
</template>

<script setup>
const { localePath } = useLocale()
const { session, logout, init, isAuthed } = usePortal()

const nav = computed(() => [
  { to: localePath('/panel'), label: 'Resumen' },
  { to: localePath('/panel/proyectos'), label: 'Proyectos' },
  { to: localePath('/panel/clientes'), label: 'Clientes' },
  { to: localePath('/panel/documentos'), label: 'Documentos' },
])

onMounted(async () => {
  await init()
  if (!isAuthed.value) await navigateTo(localePath('/ingresar'))
})

async function onLogout() {
  await logout()
  await navigateTo(localePath('/ingresar'))
}
</script>
