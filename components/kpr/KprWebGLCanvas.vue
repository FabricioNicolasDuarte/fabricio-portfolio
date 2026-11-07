<template>
  <!-- Invisible Audio & Scroll Manager (no intrusive Three.js meshes overlaying sections) -->
  <div class="pointer-events-none fixed inset-0 z-0 hidden" aria-hidden="true" />
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const { playCarousel } = useKprAudio()

function clamp01(v) {
  return Math.max(0, Math.min(1, v))
}

function smoothstep(e0, e1, x) {
  const diff = e1 - e0
  if (Math.abs(diff) < 0.0001) return 0
  const t = clamp01((x - e0) / diff)
  return t * t * (3 - 2 * t)
}

let lastPhase = 0
let tickerFn = null

onMounted(() => {
  tickerFn = () => {
    const vh = Math.max(1, window.innerHeight)
    const s2El = document.querySelector('[data-kpr-section="project-intro"]')
    const s3El = document.querySelector('[data-kpr-section="project-story"]')
    const s4El = document.querySelector('[data-kpr-section="collection-intro"]')
    const s5El = document.querySelector('[data-kpr-section="collection-gallery"]')

    const s2Rect = s2El?.getBoundingClientRect()
    const s3Rect = s3El?.getBoundingClientRect()
    const s4Rect = s4El?.getBoundingClientRect()
    const s5Rect = s5El?.getBoundingClientRect()

    const p12 = s2Rect ? smoothstep(vh * 0.9, vh * 0.1, s2Rect.top) : 0
    const p23 = s3Rect ? smoothstep(vh * 0.9, vh * 0.1, s3Rect.top) : 0
    const p34 = s4Rect ? smoothstep(vh * 0.9, vh * 0.1, s4Rect.top) : 0
    const p45 = s5Rect ? smoothstep(vh * 0.9, vh * 0.1, s5Rect.top) : 0

    const curPhase = p45 > 0.5 ? 4 : p34 > 0.5 ? 3 : p23 > 0.5 ? 2 : p12 > 0.5 ? 1 : 0
    if (curPhase !== lastPhase) {
      lastPhase = curPhase
      playCarousel()
    }
  }

  gsap.ticker.add(tickerFn)
})

onBeforeUnmount(() => {
  if (tickerFn) gsap.ticker.remove(tickerFn)
})
</script>
