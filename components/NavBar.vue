<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
      <NuxtLink to="/" class="shrink-0 font-display text-sm font-semibold tracking-tight text-white">
        FD<span class="text-cyan-400">.</span>
      </NuxtLink>
      <nav class="hidden min-w-0 flex-1 items-center justify-center gap-1 text-sm sm:flex md:gap-2">
        <NuxtLink
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          class="rounded-full px-3 py-1.5 text-slate-400 transition hover:bg-white/5 hover:text-cyan-200"
          active-class="bg-white/10 text-cyan-200"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
      <div class="flex items-center gap-1.5">
        <div class="flex items-center rounded-full border border-white/10 p-0.5 text-[10px] font-semibold">
          <button
            v-for="code in locales"
            :key="code"
            type="button"
            class="rounded-full px-1.5 py-1"
            :class="locale === code ? 'bg-cyan-400 text-slate-950' : 'text-slate-400'"
            @click="setLocale(code)"
          >{{ meta[code].label }}</button>
        </div>
        <button type="button" class="text-sm text-slate-300 sm:hidden" @click="open = !open">
          {{ open ? t.nav.close : t.nav.menu }}
        </button>
      </div>
    </div>
    <div v-if="open" class="border-t border-white/10 px-5 py-3 sm:hidden">
      <NuxtLink
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        class="block py-2 text-sm text-slate-300"
        @click="open = false"
      >
        {{ item.label }}
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue'
import { LOCALES, LOCALE_META } from '~/composables/useLocale'

const open = ref(false)
const { locale, setLocale, t } = useLocale()
const locales = LOCALES
const meta = LOCALE_META

const items = computed(() => [
  { to: '/metodo', label: t.value.nav.method },
  { to: '/trabajo', label: t.value.nav.work },
  { to: '/skadia', label: t.value.nav.skadia },
  { to: '/trayectoria', label: t.value.nav.path },
  { to: '/agendar', label: t.value.nav.book },
])
</script>
