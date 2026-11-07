<template>
  <section id="caso" data-kpr-section="caso" data-kpr-theme="dark" class="frame-container pb-20">
    <p class="fd-kicker">002 // {{ t.caso.kicker }}</p>
    <h2 class="mt-2 type-h2 text-white">{{ t.caso.title }}</h2>
    <p class="mt-3 max-w-2xl type-body1 text-white/75">{{ t.caso.intro }}</p>

    <div class="mt-8 grid gap-6 md:grid-cols-2">
      <article
        v-for="col in t.caso.cols"
        :key="col.kicker"
        class="kpr-clip-card p-6 border"
        :class="col.accent ? 'border-[#c0fb50]/60 bg-[#0d1208]' : 'border-white/15 bg-[#0a0a0a]'"
      >
        <p class="fd-kicker" :class="col.accent ? 'text-[#c0fb50]' : 'text-white/50'">{{ col.kicker }}</p>
        <h3 class="mt-2 type-h3 uppercase text-white">{{ col.title }}</h3>
        <ul class="mt-4 space-y-3 type-body1 text-white/80">
          <li v-for="line in col.lines" :key="line" class="flex gap-3">
            <span
              class="mt-1.5 h-[5px] w-[5px] shrink-0"
              :class="col.accent ? 'bg-[#c0fb50]' : 'bg-white/35'"
              aria-hidden="true"
            />
            <span>{{ line }}</span>
          </li>
        </ul>
      </article>
    </div>

    <p class="mt-8 max-w-2xl type-body1 text-white/85">
      <span class="fd-kicker mr-3">{{ t.caso.resultKicker }}</span>
      {{ t.caso.result }}
    </p>
  </section>
</template>

<script setup>
const { t } = useLocale()
</script>
