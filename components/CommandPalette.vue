<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-[70] flex items-start justify-center bg-black/70 px-4 pt-[12vh]"
      @click.self="close"
    >
      <div
        ref="root"
        class="fd-card w-full max-w-lg overflow-hidden"
        role="dialog"
        aria-modal="true"
        :aria-label="t.search.title"
        @keydown="onKey"
      >
        <input
          ref="inputEl"
          v-model="q"
          type="search"
          class="w-full border-b border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none"
          :placeholder="t.search.placeholder"
          autocomplete="off"
          @keydown.down.prevent="move(1)"
          @keydown.up.prevent="move(-1)"
          @keydown.enter.prevent="go(active)"
        />
        <p v-if="!results.length" class="px-4 py-6 text-sm text-muted">{{ t.search.empty }}</p>
        <ul v-else class="max-h-[50vh] overflow-y-auto py-2" role="listbox">
          <li v-for="(item, i) in results" :key="item.to || item.href">
            <button
              type="button"
              class="flex w-full items-baseline justify-between gap-3 px-4 py-2 text-left text-sm"
              :class="i === active ? 'bg-white/10 text-white' : 'text-slate-300'"
              role="option"
              :aria-selected="i === active"
              @click="go(i)"
              @mouseenter="active = i"
            >
              <span>{{ label(item) }}</span>
              <span class="fd-kicker shrink-0">{{ item.kind === 'page' ? t.search.pages : t.search.work }}</span>
            </button>
          </li>
        </ul>
        <p class="border-t border-white/10 px-4 py-2 text-[11px] text-muted">{{ t.search.hint }}</p>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { searchPages, searchWork } from '~/content/search'

const { t, tx, localePath } = useLocale()
const router = useRouter()
const open = useState('fd-cmdk', () => false)
const q = ref('')
const active = ref(0)
const root = ref(null)
const inputEl = ref(null)

const catalog = computed(() => [...searchPages, ...searchWork])

const results = computed(() => {
  const needle = q.value.trim().toLowerCase()
  const list = catalog.value
  if (!needle) return list.slice(0, 10)
  return list.filter((item) => {
    const blob = [tx(item, 'title'), item.tags, item.to, item.href].filter(Boolean).join(' ').toLowerCase()
    return blob.includes(needle)
  }).slice(0, 12)
})

watch(results, () => {
  active.value = 0
})

function label(item) {
  return tx(item, 'title')
}

function close() {
  open.value = false
  q.value = ''
}

function move(delta) {
  const max = results.value.length
  if (!max) return
  active.value = (active.value + delta + max) % max
}

function go(index) {
  const item = results.value[index]
  if (!item) return
  close()
  if (item.href) {
    window.open(item.href, '_blank', 'noopener,noreferrer')
    return
  }
  router.push(localePath(item.to))
}

function onKey(e) {
  if (e.key === 'Escape') {
    e.preventDefault()
    close()
    return
  }
  if (e.key !== 'Tab' || !root.value) return
  const nodes = [...root.value.querySelectorAll('input, button')]
  if (!nodes.length) return
  const first = nodes[0]
  const last = nodes[nodes.length - 1]
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

function onWindowKey(e) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    open.value = !open.value
  }
}

watch(open, async (isOpen) => {
  if (!isOpen) return
  await nextTick()
  inputEl.value?.focus()
})

onMounted(() => window.addEventListener('keydown', onWindowKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onWindowKey))
</script>
