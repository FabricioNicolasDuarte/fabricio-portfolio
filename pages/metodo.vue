<template>
  <main id="contenido" tabindex="-1">
    <PathTrail />
    <ArchitectureSection />
    <CaseStudySection />
  </main>
</template>

<script setup>
const { t } = useLocale()
usePageMeta(() => t.value.nav.method)
</script>
