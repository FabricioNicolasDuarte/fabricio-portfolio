<template>
  <header class="sticky top-0 z-50">
    <div class="mx-auto max-w-6xl px-5 pt-4 sm:px-8">
      <div class="glass flex h-14 items-center justify-between rounded-full px-4 sm:px-6">
        <a href="#top" class="font-display text-sm font-semibold tracking-tight text-white" @click.prevent="go('top')">
          FD<span class="text-cyan-400">.</span>
        </a>
        <nav class="hidden items-center gap-4 text-sm text-slate-400 lg:flex">
          <button
            v-for="item in items"
            :key="item.id"
            class="transition hover:text-cyan-300"
            @click="go(item.id)"
          >
            {{ item.label }}
          </button>
        </nav>
        <div class="flex items-center gap-2 sm:gap-3">
          <div class="flex items-center rounded-full border border-white/10 p-0.5 text-[11px] font-semibold">
            <button
              type="button"
              class="rounded-full px-2 py-1"
              :class="locale === 'es' ? 'bg-cyan-400 text-slate-950' : 'text-slate-400'"
              @click="setLocale('es')"
            >ES</button>
            <button
              type="button"
              class="rounded-full px-2 py-1"
              :class="locale === 'en' ? 'bg-cyan-400 text-slate-950' : 'text-slate-400'"
              @click="setLocale('en')"
            >EN</button>
          </div>
          <a href="/cv/cv-visual.pdf" download="CV_Fabricio_Duarte_Visual.pdf" class="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950">
            CV
          </a>
          <a
            :href="isEn ? '/cv/cv-ats-en.pdf' : '/cv/cv-ats.pdf'"
            :download="isEn ? 'CV_Fabricio_Duarte_ATS_EN.pdf' : 'CV_Fabricio_Duarte_ATS.pdf'"
            class="hidden rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400/40 sm:inline-block"
          >
            ATS
          </a>
          <button type="button" class="text-sm text-slate-300 lg:hidden" :aria-expanded="open" @click="open = !open">
            {{ open ? (isEn ? 'Close' : 'Cerrar') : (isEn ? 'Menu' : 'Menú') }}
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

const open = ref(false)
const { locale, isEn, setLocale } = useLocale()

const items = computed(() => isEn.value
  ? [
      { id: 'architecture', label: 'Method' },
      { id: 'caso', label: 'Case' },
      { id: 'work', label: 'Work' },
      { id: 'path', label: 'Path' },
      { id: 'skills', label: 'Stack' },
      { id: 'contact', label: 'Contact' },
    ]
  : [
      { id: 'architecture', label: 'Método' },
      { id: 'caso', label: 'Caso' },
      { id: 'work', label: 'Trabajo' },
      { id: 'path', label: 'Trayectoria' },
      { id: 'skills', label: 'Stack' },
      { id: 'contact', label: 'Contacto' },
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
