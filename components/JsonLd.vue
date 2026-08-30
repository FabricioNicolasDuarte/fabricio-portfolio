<script setup>
const props = defineProps({
  data: { type: Object, required: true },
})

useHead(() => ({
  script: [
    {
      key: `ld-${props.data['@type'] || 'node'}`,
      type: 'application/ld+json',
      textContent: JSON.stringify(props.data),
    },
  ],
}))
</script>

<template>
  <span hidden></span>
</template>
