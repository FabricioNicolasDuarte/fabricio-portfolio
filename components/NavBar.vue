<template>
  <header class="sticky top-0 z-50">
    <div class="mx-auto max-w-6xl px-5 pt-4 sm:px-8">
      <div class="glass flex h-14 items-center justify-between gap-2 rounded-full px-3 sm:px-6">
        <a href="#top" class="shrink-0 font-display text-sm font-semibold tracking-tight text-white" @click.prevent="go('top')">
          FD<span class="text-cyan-400">.</span>
        </a>
        <nav class="hidden items-center gap-3 text-sm text-slate-400 lg:flex xl:gap-5">
          <button
            v-for="item in items"
            :key="item.id"
            class="transition hover:text-cyan-300"
            @click="go(item.id)"
          >
            {{ item.label }}
          </button>
        </nav>
        <div class="flex min-w-0 items-center gap-1.5 sm:gap-2">
          <div class="flex max-w-[46vw] items-center overflow-x-auto rounded-full border border-white/10 p-0.5 text-[10px] font-semibold sm:max-w-none sm:text-[11px]">
            <button
              v-for="code in locales"
              :key="code"
              type="button"
              class="shrink-0 rounded-full px-1.5 py-1 sm:px-2"
              :class="locale === code ? 'bg-cyan-400 text-slate-950' : 'text-slate-400'"
              @click="setLocale(code)"
            >{{ meta[code].label }}</button>
          </div>
          <a href="/cv/cv-visual.pdf" download="CV_Fabricio_Duarte_Visual.pdf" class="hidden rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950 sm:inline-block">
            CV
          </a>
          <a
            :href="locale === 'es' ? '/cv/cv-ats.pdf' : '/cv/cv-ats-en.pdf'"
            :download="locale === 'es' ? 'CV_Fabricio_Duarte_ATS.pdf' : 'CV_Fabricio_Duarte_ATS_EN.pdf'"
            class="hidden rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400/40 md:inline-block"
          >
            ATS
          </a>
          <button type="button" class="text-sm text-slate-300 lg:hidden" :aria-expanded="open" @click="open = !open">
            {{ open ? t.nav.close : t.nav.menu }}
          </button>
        </div>
      </div>
      <div v-if="open" class="glass mt-2 space-y-1 rounded-2xl px-5 py-3 lg:hidden">
        <button v-for="item in items" :key="item.id" class="block w-full py-2 text-left text-sm text-slate-300" @click="go(item.id)">
          {{ item.label }}
        </button>
      </div>
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
  { id: 'architecture', label: t.value.nav.method },
  { id: 'caso', label: t.value.nav.case },
  { id: 'skadia', label: t.value.nav.skadia },
  { id: 'work', label: t.value.nav.work },
  { id: 'path', label: t.value.nav.path },
  { id: 'skills', label: t.value.nav.stack },
  { id: 'contact', label: t.value.nav.contact },
])

const go = (id) => {
  open.value = false
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
