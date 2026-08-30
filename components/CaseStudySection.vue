<template>
  <section id="caso" class="relative mx-auto max-w-6xl px-5 pb-20 sm:px-8">
    <p class="fd-kicker">{{ t.caso.kicker }}</p>
    <h2 class="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{{ t.caso.title }}</h2>
    <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">{{ t.caso.intro }}</p>

    <div class="mt-8 grid gap-4 md:grid-cols-2">
      <article
        v-for="col in t.caso.cols"
        :key="col.kicker"
        class="fd-card p-6"
        :class="col.accent ? 'border-[color-mix(in_srgb,var(--fd-signal)_35%,transparent)] bg-[color-mix(in_srgb,var(--fd-signal)_4%,transparent)]' : 'opacity-90'"
      >
        <p class="fd-kicker" :class="col.accent ? 'text-signal' : ''">{{ col.kicker }}</p>
        <h3 class="mt-2 font-display text-lg font-semibold text-white">{{ col.title }}</h3>
        <ul class="mt-4 space-y-3 text-[15px] leading-relaxed text-slate-400">
          <li v-for="line in col.lines" :key="line" class="flex gap-3">
            <span
              class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
              :class="col.accent ? 'bg-[var(--fd-signal)]' : 'bg-white/35'"
              aria-hidden="true"
            />
            <span>{{ line }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup>
const { t } = useLocale()
</script>
