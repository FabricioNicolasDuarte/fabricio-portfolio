<template>
  <section id="architecture" data-kpr-section="architecture" data-kpr-theme="dark" class="frame-container py-12 md:py-16">
    <p class="fd-kicker">001 // {{ t.method.kicker }}</p>
    <h1 class="mt-2 max-w-3xl type-h1 text-white">
      {{ t.method.title }}
    </h1>
    <p class="mt-4 max-w-2xl type-body2 text-white/80">{{ t.method.intro }}</p>

    <ol class="mt-10 grid gap-6 sm:grid-cols-2">
      <li
        v-for="(step, i) in t.method.steps"
        :key="step.title"
        class="kpr-clip-card border border-white/15 bg-[#0a0a0a] p-6"
      >
        <p class="fd-kicker">{{ String(i + 1).padStart(2, '0') }}</p>
        <h2 class="mt-2 type-h3 uppercase text-white">{{ step.title }}</h2>
        <p class="mt-2 type-body1 text-white/80">{{ step.body }}</p>
        <p v-if="step.detail" class="mt-3 font-mono text-[11px] leading-relaxed text-white/50">{{ step.detail }}</p>
      </li>
    </ol>

    <p class="mt-8 max-w-2xl font-mono text-[11px] uppercase leading-relaxed text-[#c0fb50]">
      // {{ t.method.note }}
    </p>
    <div class="mt-8 flex flex-wrap gap-3">
      <KprBtnMain :label="t.nav.book" :to="localePath('/agendar')" variant="green" :dot="true" />
      <KprBtnMain :label="t.nav.work" :to="localePath('/trabajo')" variant="outline" />
    </div>
  </section>
</template>

<script setup>
const { t, localePath } = useLocale()
</script>
