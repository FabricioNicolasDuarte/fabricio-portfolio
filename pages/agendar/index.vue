<template>
  <main id="contenido" tabindex="-1">
    <PathTrail />
    <BookSection />
  </main>
</template>

<script setup>
const { t } = useLocale()
usePageMeta(() => t.value.nav.book)
</script>
