<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
      <NuxtLink :to="localePath('/')" class="flex shrink-0 items-center gap-2">
        <img src="/brand/mark.png" alt="FA" class="h-8 w-8" width="32" height="32" />
        <span class="hidden font-display text-sm font-semibold lowercase tracking-wide text-signal sm:inline">portfolio</span>
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
          class="hidden min-h-9 rounded-full px-2.5 text-xs text-muted sm:inline"
          aria-keyshortcuts="Control+K Meta+K"
          @click="cmdk = true"
        >
          {{ t.nav.search }}
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
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue'
import { LOCALES, LOCALE_META } from '~/utils/localePath'

const open = ref(false)
const cmdk = useState('fd-cmdk', () => false)
const { locale, setLocale, localePath, pagePath, t } = useLocale()
const locales = LOCALES
const meta = LOCALE_META

const items = computed(() => [
  { path: '/trabajo', to: localePath('/trabajo'), label: t.value.nav.work },
  { path: '/skadia', to: localePath('/skadia'), label: t.value.nav.skadia },
  { path: '/sobre', to: localePath('/sobre'), label: t.value.nav.about },
  { path: '/agendar', to: localePath('/agendar'), label: t.value.nav.book },
])
</script>
