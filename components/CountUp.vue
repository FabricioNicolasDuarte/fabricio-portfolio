<template>
  <span>{{ shown }}{{ suffix }}</span>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  to: { type: Number, required: true },
  duration: { type: Number, default: 1400 },
  suffix: { type: String, default: '' },
})

const shown = ref(0)

onMounted(() => {
  const start = performance.now()
  const step = (now) => {
    const t = Math.min(1, (now - start) / props.duration)
    const eased = 1 - Math.pow(1 - t, 3)
    shown.value = Math.round(props.to * eased)
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
})
</script>
