<template>
  <main id="contenido" tabindex="-1">
    <PathTrail />
    <section class="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div class="fd-card max-w-xl p-8 sm:p-10">
        <p class="fd-kicker">{{ t.book.kicker }}</p>
        <h1 class="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{{ t.book.sentTitle }}</h1>
        <p class="mt-3 text-[15px] leading-relaxed text-slate-400">{{ t.book.sentBody }}</p>
        <p class="mt-4 text-sm text-muted">fabricioduarteoficial@gmail.com</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink :to="localePath('/')" class="fd-btn">{{ t.book.sentHome }}</NuxtLink>
          <NuxtLink :to="localePath('/trabajo')" class="fd-btn-outline">{{ t.nav.work }}</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const { t, localePath } = useLocale()
usePageMeta(() => t.value.book.sentTitle)
useHead({
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>
