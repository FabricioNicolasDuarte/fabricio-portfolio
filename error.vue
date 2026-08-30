<template>
  <div>
    <div class="relative min-h-screen font-sans text-ink">
      <a href="#contenido" class="skip-to-content sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-black">{{ t.nav.skip }}</a>
      <DataField />
      <NavBar />
      <main id="contenido" tabindex="-1" class="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-24 sm:px-8">
        <p class="fd-kicker">{{ status }}</p>
        <h1 class="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{{ t.error.title }}</h1>
        <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-400">{{ t.error.body }}</p>
        <NuxtLink :to="localePath('/')" class="fd-btn mt-8 w-fit">{{ t.error.home }}</NuxtLink>
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: { type: Object, default: () => ({}) },
})
const { t, localePath } = useLocale()
const status = computed(() => props.error?.statusCode || 404)
usePageMeta(() => t.value.error.title)
</script>
