<template>
  <span ref="elRef" class="tabular-nums font-semibold">{{ formattedValue }}{{ suffix }}</span>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  to: { type: [Number, String], required: true },
  suffix: { type: String, default: '' },
  duration: { type: Number, default: 1600 },
})

const elRef = ref(null)
const currentValue = ref(0)
const hasAnimated = ref(false)

const targetNumber = computed(() => {
  const parsed = parseFloat(String(props.to).replace(',', '.'))
  return isNaN(parsed) ? 0 : parsed
})

const isDecimal = computed(() => {
  return String(props.to).includes('.') || String(props.to).includes(',')
})

const formattedValue = computed(() => {
  if (!hasAnimated.value && targetNumber.value > 0) return '0'
  if (isDecimal.value) {
    return currentValue.value.toFixed(2)
  }
  return Math.round(currentValue.value).toString()
})

let observer = null

function animateValue() {
  if (hasAnimated.value) return
  hasAnimated.value = true
  const start = 0
  const end = targetNumber.value
  const startTime = performance.now()

  function step(now) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    // Ease Out Expo
    const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
    currentValue.value = start + (end - start) * ease

    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      currentValue.value = end
    }
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  if (!import.meta.client) {
    currentValue.value = targetNumber.value
    hasAnimated.value = true
    return
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    currentValue.value = targetNumber.value
    hasAnimated.value = true
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        animateValue()
        observer?.disconnect()
      }
    },
    { threshold: 0.2 }
  )

  if (elRef.value) {
    observer.observe(elRef.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
