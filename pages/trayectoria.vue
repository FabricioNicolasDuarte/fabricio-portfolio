<template>
  <main id="contenido" tabindex="-1">
    <PathTrail />
    <ExperienceSection />
    <SkillsSection />
  </main>
</template>

<script setup>
const { t } = useLocale()
usePageMeta(() => t.value.nav.path)
</script>
