<template>
  <span>{{ to }}{{ suffix }}</span>
</template>

<script setup>
defineProps({
  to: { type: Number, required: true },
  duration: { type: Number, default: 1400 },
  suffix: { type: String, default: '' },
})
</script>
