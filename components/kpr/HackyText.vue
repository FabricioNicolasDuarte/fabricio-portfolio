<template>
  <component
    :is="tag"
    ref="rootRef"
    class="hacky-text inline-block"
    data-hacky-text
    data-sfx-bound="1"
    :aria-label="text"
  >
    {{ displayText }}
  </component>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  tag: { type: String, default: 'span' },
  hover: { type: Boolean, default: true },
  autoplay: { type: Boolean, default: false },
  delay: { type: Number, default: 0 },
  /** Play decode bed on autoplay / first paint */
  playSfx: { type: Boolean, default: false },
  /** Scramble duration in seconds */
  duration: { type: Number, default: 0.28 },
})

const { playTextHover, playTextDecode } = useKprAudio()
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const displayText = ref(props.text)
const rootRef = ref(null)

let raf = 0
let delayTimer = null
let scrambling = false
let lastRunAt = 0
let hostEl = null

function preserveChar(ch) {
  return ' \n\t/·—–-_&#:()[].,'.includes(ch)
}

function run(withSfx = true) {
  const target = props.text || ''
  if (!target) return

  const now = performance.now()
  if (scrambling || now - lastRunAt < 420) return
  lastRunAt = now
  scrambling = true

  if (withSfx) {
    playTextHover()
    playTextDecode(Math.min(420, Math.round(props.duration * 1000) + 80))
  }

  if (raf) cancelAnimationFrame(raf)
  if (delayTimer) {
    clearTimeout(delayTimer)
    delayTimer = null
  }

  const totalFrames = Math.max(8, Math.min(20, Math.round(props.duration * 55)))
  let frame = 0

  const tick = () => {
    frame += 1
    const progress = frame / totalFrames

    if (frame >= totalFrames) {
      displayText.value = target
      scrambling = false
      raf = 0
      return
    }

    let out = ''
    for (let i = 0; i < target.length; i++) {
      const ch = target[i]
      if (preserveChar(ch)) out += ch
      else if (i / target.length <= progress) out += ch
      else out += GLYPHS[(i + frame * 3) % GLYPHS.length]
    }
    displayText.value = out
    raf = requestAnimationFrame(tick)
  }

  const start = () => {
    raf = requestAnimationFrame(tick)
  }

  if (props.delay > 0 && withSfx === false) {
    delayTimer = window.setTimeout(start, props.delay)
  } else {
    start()
  }
}

function onHostEnter() {
  if (!props.hover) return
  run(true)
}

function resolveHost() {
  const el = rootRef.value?.$el || rootRef.value
  if (!el || typeof el.closest !== 'function') return null
  return el.closest('[data-hacky-host], a, button, [role="button"], .kpr-btn-main')
}

onMounted(() => {
  hostEl = resolveHost()
  // Prefer host hover so padding / full hit-area triggers scramble + SFX
  if (hostEl && hostEl !== (rootRef.value?.$el || rootRef.value)) {
    hostEl.addEventListener('mouseenter', onHostEnter)
    hostEl.setAttribute('data-sfx-bound', '1')
  } else {
    const el = rootRef.value?.$el || rootRef.value
    el?.addEventListener?.('mouseenter', onHostEnter)
  }

  if (props.autoplay) {
    delayTimer = window.setTimeout(() => {
      run(!!props.playSfx)
    }, props.delay)
  }
})

onBeforeUnmount(() => {
  if (hostEl) hostEl.removeEventListener('mouseenter', onHostEnter)
  const el = rootRef.value?.$el || rootRef.value
  el?.removeEventListener?.('mouseenter', onHostEnter)
  if (raf) cancelAnimationFrame(raf)
  if (delayTimer) clearTimeout(delayTimer)
})

watch(
  () => props.text,
  (val) => {
    if (raf) cancelAnimationFrame(raf)
    scrambling = false
    lastRunAt = 0
    displayText.value = val || ''
    // Re-scramble whenever the label changes (locale switch, dynamic titles)
    if (val) run(!!props.playSfx || props.autoplay)
  },
)

defineExpose({ scramble: () => run(true) })
</script>
