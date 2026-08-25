<template>
  <section id="architecture" class="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <p class="text-xs font-medium tracking-widest text-lime-400 uppercase">{{ t.method.kicker }}</p>
    <h2 class="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
      {{ t.method.title }}
    </h2>
    <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">{{ t.method.intro }}</p>

    <div class="mt-10 grid grid-cols-1 gap-3 md:grid-cols-5">
      <article v-for="(step, i) in t.method.steps" :key="step.title" class="glass relative rounded-2xl p-5">
        <p class="font-mono text-[10px] tracking-widest text-lime-400/80">0{{ i + 1 }}</p>
        <h3 class="mt-2 font-display text-base font-semibold text-white">{{ step.title }}</h3>
        <p class="mt-2 text-[13px] leading-relaxed text-slate-400">{{ step.body }}</p>
        <ul class="mt-3 flex flex-wrap gap-1.5">
          <li v-for="tag in step.tags" :key="tag" class="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-300">
            {{ tag }}
          </li>
        </ul>
        <span v-if="i < t.method.steps.length - 1" class="pointer-events-none absolute -right-2 top-1/2 hidden -translate-y-1/2 text-lime-400/50 md:block" aria-hidden="true">→</span>
      </article>
    </div>

    <p class="mt-6 text-sm text-slate-500">{{ t.method.note }}</p>
    <p class="mt-3 text-sm">
      <a href="/agtech/lakehouse/" class="text-lime-300 hover:text-lime-200">{{ t.method.lab }}</a>
    </p>
  </section>
</template>

<script setup>
const { t } = useLocale()
</script>
