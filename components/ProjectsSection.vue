<template>
  <section id="work" data-kpr-section="work" data-kpr-theme="dark" class="frame-container py-12 md:py-16">
    <!-- Top Header & Category Filters -->
    <div class="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between border-b border-white/15 pb-8">
      <div>
        <p class="fd-kicker">{{ t.work.kicker }}</p>
        <h1 class="mt-2 type-h1 text-white">{{ t.work.title }}</h1>
        <p class="mt-3 max-w-xl type-body1 text-white/75">{{ t.work.intro }}</p>
      </div>
      <div v-if="!compact" class="flex flex-wrap gap-1.5" role="group" :aria-label="t.work.kicker">
        <button
          v-for="f in filters"
          :key="f.id"
          type="button"
          class="px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition cursor-pointer"
          :class="
            active === f.id
              ? 'bg-[#c0fb50] text-black font-bold'
              : 'border border-white/20 text-white/70 hover:border-[#c0fb50] hover:text-[#c0fb50]'
          "
          :aria-pressed="active === f.id"
          data-sfx="filter"
          @mouseenter="playHover"
          @click="onFilter(f.id)"
        >
          {{ f.label }}
        </button>
      </div>
    </div>

    <!-- KPR Chamfered Grid -->
    <div class="grid grid-cols-1 gap-6" :class="compact ? '' : 'md:grid-cols-2'">
      <article
        v-for="(item, idx) in visible"
        :key="item.title"
        class="group relative kpr-clip-card border border-white/15 bg-[#0a0a0a] p-6 transition hover:border-[#c0fb50]/60 sm:p-8"
        :class="isLead(item) && !compact ? 'md:col-span-2' : ''"
      >
        <div class="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-[10px]">
          <span class="text-[#c0fb50] flex items-center gap-2">
            <span class="inline-block h-[5px] w-[5px] bg-[#c0fb50]" />
            <span>0{{ idx + 1 }} // {{ tx(item, 'kind') }}</span>
          </span>
          <span class="text-white/50">{{ t.work.role }}{{ tx(item, 'role') }}</span>
        </div>

        <h2 class="type-h2 text-white group-hover:text-[#c0fb50] transition-colors">
          {{ tx(item, 'title') }}
        </h2>

        <img
          v-if="item.shot"
          :src="item.shot"
          :alt="tx(item, 'shotAlt') || tx(item, 'title')"
          class="mt-5 w-full border border-white/15 object-cover object-top"
          loading="lazy"
          width="1200"
          height="720"
          :class="compact || isLead(item) ? 'max-h-[420px]' : 'max-h-[250px]'"
        />

        <p class="mt-4 max-w-3xl type-body1 text-white/80">{{ tx(item, 'summary') }}</p>

        <div class="mt-4 flex flex-wrap gap-1.5">
          <span
            v-for="tag in (tx(item, 'tags') || item.tags || []).slice(0, 5)"
            :key="tag"
            class="fd-chip"
          >
            {{ tag }}
          </span>
        </div>

        <div v-if="item.href || item.hrefRepo" class="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-5 font-mono text-[11px] uppercase">
          <a
            v-if="item.href"
            :href="item.external === false ? localePath(item.href) : item.href"
            :target="item.external === false ? undefined : '_blank'"
            :rel="item.external === false ? undefined : 'noopener noreferrer'"
            class="inline-flex items-center gap-1.5 font-bold text-[#c0fb50] hover:underline"
          >
            {{ tx(item, 'cta') || t.work.repo }}
          </a>
          <a
            v-if="item.hrefRepo"
            :href="item.hrefRepo"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-white/60 hover:text-white"
          >
            {{ t.work.repo }}
          </a>
        </div>
      </article>
    </div>

    <div v-if="compact" class="mt-8 flex justify-center">
      <KprBtnMain :label="t.work.more" :to="localePath('/trabajo')" variant="outline" />
    </div>
    <div v-else-if="active === 'all' && work.length > PIN_COUNT" class="mt-8 flex justify-center">
      <KprBtnMain
        :label="expanded ? t.work.less : t.work.more"
        variant="outline"
        @click="playClick(); expanded = !expanded"
      />
    </div>

    <div
      v-if="!compact"
      class="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center"
    >
      <p class="max-w-md type-body1 text-white/75">{{ t.home.metodo }}</p>
      <KprBtnMain :label="t.hero.book" :to="localePath('/agendar')" variant="green" :dot="true" />
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { work } from '~/content/work'

defineProps({ compact: Boolean })
const { t, tx, localePath } = useLocale()
const { playHover, playFilter, playClick } = useKprAudio()
const active = ref('all')
const expanded = ref(false)
const PIN_COUNT = computed(() => 6)
const filters = computed(() => t.value.work.filters)

function onFilter(id) {
  playFilter()
  active.value = id
}

function isLead(item) {
  return item.href === '/casos/ecom' || (item.featured && item.cats?.includes('ecom'))
}

function pinRank(item) {
  if (item.href === '/casos/ecom') return 0
  if (item.cats?.includes('ecom')) return 1
  if (item.featured) return 2
  return 3
}

const filtered = computed(() => {
  if (active.value === 'all') return work
  return work.filter((w) => w.cats.includes(active.value))
})

const visible = computed(() => {
  const list = filtered.value
  if (active.value !== 'all' || expanded.value) {
    return [...list].sort((a, b) => pinRank(a) - pinRank(b))
  }
  const pinned = list.filter((w) => w.pin).sort((a, b) => pinRank(a) - pinRank(b))
  const cap = PIN_COUNT.value
  return pinned.length ? pinned.slice(0, cap) : list.slice(0, cap)
})
</script>
