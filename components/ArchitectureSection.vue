<template>
  <section id="architecture" class="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
    <p class="fd-kicker">{{ t.method.kicker }}</p>
    <h1 class="mt-2 max-w-2xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
      {{ t.method.title }}
    </h1>
    <p class="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">{{ t.method.intro }}</p>

    <ol class="mt-10 grid gap-4 sm:grid-cols-2">
      <li v-for="(step, i) in t.method.steps" :key="step.title" class="fd-card flex gap-4 p-6">
        <span
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--fd-signal)] font-display text-sm font-semibold text-black"
          aria-hidden="true"
        >
          {{ i + 1 }}
        </span>
        <div>
          <h2 class="font-display text-xl font-semibold text-white">{{ step.title }}</h2>
          <p class="mt-2 text-[15px] leading-relaxed text-slate-400">{{ step.body }}</p>
        </div>
      </li>
    </ol>

    <p class="mt-8 max-w-2xl text-sm leading-relaxed text-muted">{{ t.method.note }}</p>
    <div class="mt-8 flex flex-wrap gap-3">
      <NuxtLink :to="localePath('/agendar')" class="fd-btn">{{ t.nav.book }}</NuxtLink>
      <NuxtLink :to="localePath('/trabajo')" class="fd-btn-outline">{{ t.nav.work }}</NuxtLink>
    </div>
  </section>
</template>

<script setup>
const { t, localePath } = useLocale()
</script>
