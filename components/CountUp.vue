<template>
  <span>{{ to }}{{ suffix }}</span>
</template>

<script setup>
defineProps({
  to: { type: Number, required: true },
  suffix: { type: String, default: '' },
})
</script>
