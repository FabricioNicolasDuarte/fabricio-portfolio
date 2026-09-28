<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
      <NuxtLink :to="localePath('/')" class="flex shrink-0 items-center gap-2" :aria-label="t.nav.brand">
        <img src="/brand/mark.png" alt="" class="h-8 w-8" width="32" height="32" />
        <span class="hidden font-display text-sm font-semibold tracking-wide text-signal sm:inline" aria-hidden="true">{{ t.nav.brand }}</span>
      </NuxtLink>
      <nav class="hidden min-w-0 flex-1 items-center justify-center gap-1 text-sm sm:flex md:gap-2" :aria-label="t.nav.menu">
        <NuxtLink
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          class="rounded-full px-3 py-1.5 text-slate-400 transition hover:bg-white/5 hover:text-lime-200"
          active-class="bg-white/10 text-lime-200"
          :aria-current="pagePath === item.path ? 'page' : undefined"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
      <div class="flex items-center gap-1.5">
        <button
          type="button"
          class="hidden min-h-9 items-center gap-2 rounded-full px-2.5 text-xs text-muted sm:inline-flex"
          aria-keyshortcuts="Control+K Meta+K"
          :aria-label="t.nav.search"
          @click="cmdk = true"
        >
          <span>{{ t.nav.search }}</span>
          <kbd class="rounded border border-white/15 px-1.5 py-0.5 font-sans text-[10px] text-slate-400">{{ searchKeys }}</kbd>
        </button>
        <div class="flex items-center rounded-full border border-white/10 p-0.5 text-xs font-semibold" role="group" :aria-label="t.nav.lang">
          <button
            v-for="code in locales"
            :key="code"
            type="button"
            class="min-h-9 min-w-9 rounded-full px-2.5 py-2"
            :class="locale === code ? 'bg-signal text-black' : 'text-muted'"
            :aria-pressed="locale === code"
            :aria-current="locale === code ? 'true' : undefined"
            @click="setLocale(code)"
          >{{ meta[code].label }}</button>
        </div>
        <NuxtLink
          :to="localePath('/ingresar')"
          class="hidden min-h-9 items-center rounded-full border border-signal/40 px-3 text-xs font-semibold uppercase tracking-wide text-signal transition hover:bg-signal hover:text-black sm:inline-flex"
        >
          {{ enterLabel }}
        </NuxtLink>
        <button
          type="button"
          class="min-h-9 px-2 text-sm text-slate-300 sm:hidden"
          :aria-expanded="open"
          aria-controls="nav-mobile"
          @click="open = !open"
        >
          {{ open ? t.nav.close : t.nav.menu }}
        </button>
      </div>
    </div>
    <div v-if="open" id="nav-mobile" class="border-t border-white/10 px-5 py-3 sm:hidden">
      <button
        type="button"
        class="mb-2 block py-2.5 text-sm text-slate-300"
        @click="cmdk = true; open = false"
      >
        {{ t.nav.search }}
      </button>
      <NuxtLink
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        class="block py-2.5 text-sm text-slate-300"
        active-class="text-lime-200"
        :aria-current="pagePath === item.path ? 'page' : undefined"
        @click="open = false"
      >
        {{ item.label }}
      </NuxtLink>
      <NuxtLink
        :to="localePath('/ingresar')"
        class="mt-1 block py-2.5 text-sm font-semibold text-signal"
        @click="open = false"
      >
        {{ enterLabel }}
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { LOCALES, LOCALE_META } from '~/utils/localePath'

const open = ref(false)
const cmdk = useState('fd-cmdk', () => false)
const searchKeys = ref('Ctrl+K')
const { locale, setLocale, localePath, pagePath, t } = useLocale()
const locales = LOCALES
const meta = LOCALE_META

onMounted(() => {
  const mac = /Mac|iPhone|iPad|iPod/.test(navigator.platform) || navigator.userAgent.includes('Mac')
  searchKeys.value = mac ? '⌘K' : 'Ctrl+K'
})

const enterLabel = computed(() => {
  const map = { es: 'Ingresar', en: 'Sign in', pt: 'Entrar', zh: '登录' }
  return map[locale.value] || 'Ingresar'
})

const items = computed(() => [
  { path: '/trabajo', to: localePath('/trabajo'), label: t.value.nav.work },
  { path: '/agronys', to: localePath('/agronys'), label: t.value.nav.agronys },
  { path: '/sobre', to: localePath('/sobre'), label: t.value.nav.about },
  { path: '/agendar', to: localePath('/agendar'), label: t.value.nav.book },
])
</script>
