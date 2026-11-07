<template>
  <component
    :is="to ? NuxtLink : href ? 'a' : 'button'"
    ref="btnRef"
    :to="to || undefined"
    :href="!to && href ? href : undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="kpr-btn-main group relative inline-flex h-[40px] min-w-[138px] items-center justify-center px-6 select-none cursor-pointer transition-transform active:scale-[0.98]"
    :class="[
      variant === 'green'
        ? 'is-green'
        : variant === 'outline'
          ? 'is-outline'
          : variant === 'dark'
            ? 'is-dark'
            : 'is-white',
    ]"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    @click="onClick"
  >
    <svg
      class="svg-back pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      aria-hidden="true"
    >
      <path
        ref="pathRef"
        class="btn-shape transition-colors duration-200"
        vector-effect="non-scaling-stroke"
      />
    </svg>
    <span class="relative z-10 flex items-center gap-2 type-btn tracking-wider transition-colors duration-200">
      <span v-if="dot" class="inline-block h-[5px] w-[5px] bg-current" />
      <KprHackyText :text="label" />
      <slot />
    </span>
  </component>
</template>

<script setup>
import { ref, resolveComponent, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const NuxtLink = resolveComponent('NuxtLink')

const props = defineProps({
  label: { type: String, required: true },
  to: { type: String, default: '' },
  href: { type: String, default: '' },
  external: { type: Boolean, default: false },
  variant: { type: String, default: 'white' }, // 'white' | 'dark' | 'green' | 'outline'
  dot: { type: Boolean, default: false },
  cutSize: { type: Number, default: 11 },
  corners: { type: Array, default: () => ['br'] },
})

const emit = defineEmits(['click'])
const { playClick } = useKprAudio()

const btnRef = ref(null)
const pathRef = ref(null)
const dims = { w: 148, h: 40 }
const morphState = { cut: props.cutSize }
let ro = null

function buildCornerCutPath(width, height, cut, corners) {
  const w = Math.max(20, width)
  const h = Math.max(16, height)
  const c = Math.max(0, Math.min(cut, Math.min(w, h) * 0.45))

  const pts = []

  if (corners.includes('tl') && c > 0.2) {
    pts.push([0, c], [c, 0])
  } else {
    pts.push([0, 0])
  }

  if (corners.includes('tr') && c > 0.2) {
    pts.push([w - c, 0], [w, c])
  } else {
    pts.push([w, 0])
  }

  if (corners.includes('br') && c > 0.2) {
    pts.push([w, h - c], [w - c, h])
  } else {
    pts.push([w, h])
  }

  if (corners.includes('bl') && c > 0.2) {
    pts.push([c, h], [0, h - c])
  } else {
    pts.push([0, h])
  }

  return (
    pts
      .map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`)
      .join(' ') + ' Z'
  )
}

function getDomEl() {
  const raw = btnRef.value
  if (!raw) return null
  return raw.$el || raw
}

function updatePath() {
  if (!pathRef.value) return
  pathRef.value.setAttribute(
    'd',
    buildCornerCutPath(dims.w, dims.h, morphState.cut, props.corners)
  )
}

function measure() {
  const el = getDomEl()
  if (!el || typeof el.getBoundingClientRect !== 'function') return
  const r = el.getBoundingClientRect()
  if (r.width > 0 && r.height > 0) {
    dims.w = r.width
    dims.h = r.height
    updatePath()
  }
}

onMounted(() => {
  measure()
  const el = getDomEl()
  if (el && typeof ResizeObserver !== 'undefined') {
    ro = new ResizeObserver(measure)
    ro.observe(el)
  }
})

onBeforeUnmount(() => {
  if (ro) ro.disconnect()
  gsap.killTweensOf(morphState)
})

function onEnter() {
  // Letter scramble + text SFX come from KprHackyText (host-bound)
  gsap.killTweensOf(morphState)
  gsap.to(morphState, {
    cut: 0,
    duration: 0.4,
    ease: 'quint.out',
    onUpdate: updatePath,
  })
}

function onLeave() {
  gsap.killTweensOf(morphState)
  gsap.to(morphState, {
    cut: props.cutSize,
    duration: 0.4,
    ease: 'quint.out',
    onUpdate: updatePath,
  })
}

function onClick(e) {
  playClick()
  emit('click', e)
}
</script>

<style scoped>
.kpr-btn-main.is-white {
  color: #000000;
}
.kpr-btn-main.is-white .btn-shape {
  fill: #ffffff;
  stroke: #ffffff;
}
.kpr-btn-main.is-white:hover .btn-shape {
  fill: var(--cl-green);
  stroke: var(--cl-green);
}

.kpr-btn-main.is-dark {
  color: #ffffff;
}
.kpr-btn-main.is-dark .btn-shape {
  fill: #000000;
  stroke: #000000;
}
.kpr-btn-main.is-dark:hover {
  color: #000000;
}
.kpr-btn-main.is-dark:hover .btn-shape {
  fill: var(--cl-green);
  stroke: var(--cl-green);
}

.kpr-btn-main.is-green {
  color: #000000;
}
.kpr-btn-main.is-green .btn-shape {
  fill: var(--cl-green);
  stroke: var(--cl-green);
}
.kpr-btn-main.is-green:hover .btn-shape {
  fill: #ffffff;
  stroke: #ffffff;
}

.kpr-btn-main.is-outline {
  color: currentColor;
}
.kpr-btn-main.is-outline .btn-shape {
  fill: transparent;
  stroke: currentColor;
  stroke-width: 1px;
}
.kpr-btn-main.is-outline:hover {
  color: #000000;
}
.kpr-btn-main.is-outline:hover .btn-shape {
  fill: var(--cl-green);
  stroke: var(--cl-green);
}
</style>
