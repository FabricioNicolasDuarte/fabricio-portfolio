<template>
  <section id="work" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <div class="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="fd-kicker">{{ t.work.kicker }}</p>
        <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{{ t.work.title }}</h2>
        <p class="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-400">{{ t.work.intro }}</p>
      </div>
      <div v-if="!compact" class="flex flex-wrap gap-2">
        <button
          v-for="f in filters"
          :key="f.id"
          type="button"
          class="rounded-full border px-3 py-1.5 text-xs font-medium transition"
          :class="active === f.id
            ? 'border-lime-400 bg-lime-400 text-black'
            : 'border-white/10 text-slate-400 hover:border-lime-400/40 hover:text-lime-200'"
          :aria-pressed="active === f.id"
          @click="active = f.id"
        >
          {{ f.label }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4" :class="compact ? '' : 'md:grid-cols-2'">
      <article
        v-for="item in visible"
        :key="item.title"
        class="group fd-card relative overflow-hidden p-6 sm:p-7"
        :class="item.featured && !compact ? 'md:col-span-2' : ''"
      >
        <p class="fd-kicker mb-2">{{ tx(item, 'kind') }}</p>
        <h3 class="font-display text-2xl font-semibold tracking-tight text-white">{{ tx(item, 'title') }}</h3>
        <img
          v-if="item.shot"
          :src="item.shot"
          :alt="tx(item, 'shotAlt') || tx(item, 'title')"
          class="mt-4 w-full rounded-xl border border-white/10 object-cover object-top"
          loading="lazy"
          width="1200"
          height="720"
          :class="compact || item.featured ? 'max-h-[420px]' : 'max-h-[240px]'"
        />
        <p class="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-400">{{ tx(item, 'summary') }}</p>
        <p class="mt-3 text-sm text-muted"><span class="text-muted">{{ t.work.role }}</span>{{ tx(item, 'role') }}</p>
        <ul class="mt-4 flex flex-wrap gap-2">
          <li v-for="tag in (tx(item, 'tags') || item.tags)" :key="tag" class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300">
            {{ tag }}
          </li>
        </ul>
        <div v-if="item.href || item.hrefRepo" class="mt-4 flex flex-wrap gap-4">
          <a
            v-if="item.href"
            :href="item.external === false ? localePath(item.href) : item.href"
            :target="item.external === false ? undefined : '_blank'"
            :rel="item.external === false ? undefined : 'noopener noreferrer'"
            class="inline-flex items-center gap-1 text-sm text-lime-300 transition hover:text-lime-200"
          >
            {{ tx(item, 'cta') || t.work.repo }}
          </a>
          <a
            v-if="item.hrefRepo"
            :href="item.hrefRepo"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 text-sm text-slate-400 transition hover:text-lime-200"
          >
            {{ t.work.repo }}
          </a>
        </div>
      </article>
    </div>
    <div class="mt-8 flex justify-center" v-if="compact">
      <NuxtLink :to="localePath('/trabajo')" class="fd-btn-outline text-sm">
        {{ t.work.more }}
      </NuxtLink>
    </div>
    <div class="mt-8 flex justify-center" v-else-if="active === 'all' && work.length > PIN_COUNT">
      <button
        type="button"
        class="fd-btn-outline text-sm"
        @click="expanded = !expanded"
      >
        {{ expanded ? t.work.less : t.work.more }}
      </button>
    </div>
    <div v-if="!compact" class="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
      <p class="max-w-md text-[15px] leading-relaxed text-slate-400">{{ t.home.metodo }}</p>
      <NuxtLink :to="localePath('/agendar')" class="fd-btn">{{ t.hero.book }}</NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { work } from '~/content/work'

defineProps({ compact: Boolean })
const { t, tx, localePath } = useLocale()
const active = ref('all')
const expanded = ref(false)
const PIN_COUNT = computed(() => 4)
const filters = computed(() => t.value.work.filters)

const filtered = computed(() => {
  if (active.value === 'all') return work
  return work.filter(w => w.cats.includes(active.value))
})

const visible = computed(() => {
  const list = filtered.value
  if (active.value !== 'all' || expanded.value) return list
  const pinned = list.filter(w => w.pin)
  const cap = PIN_COUNT.value
  return pinned.length ? pinned.slice(0, cap) : list.slice(0, cap)
})
</script>
