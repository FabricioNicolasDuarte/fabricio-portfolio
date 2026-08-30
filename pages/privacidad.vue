<template>
  <main id="contenido" tabindex="-1">
    <PathTrail />
    <section class="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <p class="fd-kicker">{{ t.privacy.kicker }}</p>
      <h1 class="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {{ t.privacy.title }}
      </h1>
      <p class="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{{ t.privacy.lead }}</p>
      <p class="mt-2 text-sm text-muted">{{ t.privacy.updated }}</p>

      <div class="mt-10 grid gap-6 max-w-2xl">
        <section>
          <h2 class="font-display text-xl font-semibold text-white">{{ t.privacy.analyticsTitle }}</h2>
          <p class="mt-2 text-[15px] leading-relaxed text-slate-400">{{ t.privacy.analytics }}</p>
        </section>
        <section>
          <h2 class="font-display text-xl font-semibold text-white">{{ t.privacy.bookTitle }}</h2>
          <p class="mt-2 text-[15px] leading-relaxed text-slate-400">{{ t.privacy.book }}</p>
        </section>
        <section>
          <h2 class="font-display text-xl font-semibold text-white">{{ t.privacy.hostTitle }}</h2>
          <p class="mt-2 text-[15px] leading-relaxed text-slate-400">{{ t.privacy.host }}</p>
        </section>
        <section>
          <h2 class="font-display text-xl font-semibold text-white">{{ t.privacy.contactTitle }}</h2>
          <p class="mt-2 text-[15px] leading-relaxed text-slate-400">{{ t.privacy.contact }}</p>
          <p class="mt-3">
            <a class="text-slate-200 underline decoration-white/25 underline-offset-4 hover:text-white" href="mailto:fabricioduarteoficial@gmail.com">fabricioduarteoficial@gmail.com</a>
          </p>
        </section>
      </div>
    </section>
  </main>
</template>

<script setup>
const { t } = useLocale()
usePageMeta(() => t.value.nav.privacy)
</script>
