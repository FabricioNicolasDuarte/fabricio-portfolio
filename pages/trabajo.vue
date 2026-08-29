<template>
  <main id="contenido" tabindex="-1">
    <PathTrail />
    <ProjectsSection />
  </main>
</template>

<script setup>
const { t } = useLocale()
usePageMeta(() => t.value.nav.work)
</script>
