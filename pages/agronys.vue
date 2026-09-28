<template>
  <main id="contenido" tabindex="-1">
    <PathTrail />
    <AgronysSection />
    <VideoSection />
  </main>
</template>

<script setup>
const { t } = useLocale()
usePageMeta(() => t.value.nav.agronys)
</script>
