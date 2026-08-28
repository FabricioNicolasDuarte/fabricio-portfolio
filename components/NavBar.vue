<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
      <NuxtLink to="/" class="flex shrink-0 items-center gap-2">
        <img src="/brand/mark.png" alt="FA" class="h-8 w-8" width="32" height="32" />
        <span class="hidden font-display text-sm font-semibold lowercase tracking-wide text-lime-400 sm:inline">portfolio</span>
      </NuxtLink>
      <nav class="hidden min-w-0 flex-1 items-center justify-center gap-1 text-sm sm:flex md:gap-2" :aria-label="t.nav.work">
        <NuxtLink
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          class="rounded-full px-3 py-1.5 text-slate-400 transition hover:bg-white/5 hover:text-lime-200"
          active-class="bg-white/10 text-lime-200"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
      <div class="flex items-center gap-1.5">
        <div class="flex items-center rounded-full border border-white/10 p-0.5 text-[10px] font-semibold" role="group" :aria-label="t.nav.lang">
          <button
            v-for="code in locales"
            :key="code"
            type="button"
            class="rounded-full px-1.5 py-1"
            :class="locale === code ? 'bg-lime-400 text-black' : 'text-slate-400'"
            :aria-pressed="locale === code"
            @click="setLocale(code)"
          >{{ meta[code].label }}</button>
        </div>
        <button
          type="button"
          class="text-sm text-slate-300 sm:hidden"
          :aria-expanded="open"
          aria-controls="nav-mobile"
          @click="open = !open"
        >
          {{ open ? t.nav.close : t.nav.menu }}
        </button>
      </div>
    </div>
    <div v-if="open" id="nav-mobile" class="border-t border-white/10 px-5 py-3 sm:hidden">
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
  { to: '/sobre', label: t.value.nav.about },
  { to: '/trabajo', label: t.value.nav.work },
  { to: '/trayectoria', label: t.value.nav.path },
  { to: '/skadia', label: t.value.nav.skadia },
  { to: '/metodo', label: t.value.nav.method },
  { to: '/agendar', label: t.value.nav.book },
])
</script>
