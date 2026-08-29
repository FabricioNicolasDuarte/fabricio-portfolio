<template>
  <div class="flex min-h-screen flex-col bg-paper font-sans text-ink">
    <main id="contenido" tabindex="-1" class="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-24 sm:px-8">
      <p class="fd-kicker">{{ status }}</p>
      <h1 class="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{{ t.error.title }}</h1>
      <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-400">{{ t.error.body }}</p>
      <NuxtLink to="/" class="fd-btn mt-8 w-fit">{{ t.error.home }}</NuxtLink>
    </main>
  </div>
</template>

<script setup>
const props = defineProps({
  error: { type: Object, default: () => ({}) },
})
const { t } = useLocale()
const status = computed(() => props.error?.statusCode || 404)
usePageMeta(() => t.value.error.title)
</script>
