import { onMounted, onBeforeUnmount, watch } from 'vue'

/**
 * Scroll-driven section SFX + ambient beds.
 * Observes [data-kpr-section], section[data-kpr-theme], section[id].
 */
export function useKprSectionAudio(enabledRef) {
  const route = useRoute()
  const { playSectionEnter, audioUnlocked, resetSectionAudio, applyRouteAmbient } = useKprAudio()
  let observer = null
  let visible = new Map()
  let rescanTimer = null

  const pickDominant = () => {
    if (!audioUnlocked.value) return
    let bestId = null
    let bestScore = -1
    const mid = window.innerHeight * 0.42
    visible.forEach((rect, id) => {
      if (!rect) return
      const overlap = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
      if (overlap <= 0) return
      const centerDist = Math.abs((rect.top + rect.bottom) / 2 - mid)
      const score = overlap - centerDist * 0.35
      if (score > bestScore) {
        bestScore = score
        bestId = id
      }
    })
    if (bestId) playSectionEnter(bestId)
  }

  const unbind = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
    visible.clear()
  }

  const bind = () => {
    if (!import.meta.client) return
    if (enabledRef && enabledRef.value === false) return
    unbind()
    resetSectionAudio()

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target
          const id =
            el.getAttribute('data-kpr-section') ||
            el.id ||
            el.getAttribute('data-kpr-theme') ||
            ''
          if (!id) return
          if (entry.isIntersecting) {
            visible.set(id, entry.boundingClientRect)
          } else {
            visible.delete(id)
          }
        })
        pickDominant()
      },
      { threshold: [0.12, 0.3, 0.5], rootMargin: '-8% 0px -18% 0px' }
    )

    document
      .querySelectorAll('[data-kpr-section], section[data-kpr-theme], main > section[id], #work, #path, #book, #skills, #agronys, #caso')
      .forEach((el) => observer.observe(el))
  }

  onMounted(() => {
    bind()
    rescanTimer = window.setTimeout(bind, 500)
  })

  onBeforeUnmount(() => {
    if (rescanTimer) window.clearTimeout(rescanTimer)
    unbind()
  })

  if (enabledRef) {
    watch(enabledRef, () => {
      bind()
    })
  }

  watch(
    () => route.fullPath,
    (path) => {
      if (!import.meta.client) return
      applyRouteAmbient(path)
      window.setTimeout(bind, 120)
    },
  )

  watch(audioUnlocked, (on) => {
    if (!import.meta.client) return
    if (on) {
      applyRouteAmbient(route.fullPath)
      bind()
      pickDominant()
    }
  })
}
