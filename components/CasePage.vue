<template>
  <section data-kpr-theme="dark" class="frame-container-first py-12 md:py-16">
    <div class="max-w-4xl">
      <PathTrail flush />
      <p class="fd-kicker mt-8">{{ kicker }}</p>
      <h1 class="mt-2 type-h1 text-white">{{ title }}</h1>
      <p class="mt-4 type-body2 text-white/80">{{ lead }}</p>

      <div v-if="shots.length" class="mt-8 grid gap-6">
        <figure
          v-for="shot in shots"
          :key="shot.src"
          class="kpr-clip-folder overflow-hidden border border-white/15 bg-black"
        >
          <div
            v-if="shot.label || shot.role"
            class="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider"
          >
            <span class="text-[#c0fb50] font-bold">{{ shot.label || shot.role }}</span>
            <span v-if="shot.role && shot.label" class="text-white/45">{{ shot.role }}</span>
          </div>
          <img
            :src="shot.src"
            :alt="shot.alt || shot.caption || shot.label"
            class="w-full object-cover object-top"
            loading="lazy"
            width="1200"
            height="720"
          />
          <figcaption
            v-if="shot.caption || shot.alt"
            class="px-4 py-2.5 font-mono text-[10px] uppercase leading-relaxed text-white/65 border-t border-white/10"
          >
            {{ shot.caption || `// ${shot.alt}` }}
          </figcaption>
        </figure>
      </div>

      <ul class="mt-8 space-y-3 type-body1 text-white/85">
        <li
          v-for="line in lines"
          :key="line"
          class="kpr-clip-card border border-white/15 bg-[#0a0a0a] px-5 py-4 flex items-start gap-3"
        >
          <span class="mt-1.5 h-[5px] w-[5px] shrink-0 bg-[#c0fb50]" />
          <span>{{ line }}</span>
        </li>
      </ul>

      <p v-if="note" class="mt-6 font-mono text-[11px] uppercase text-white/50">// {{ note }}</p>

      <div class="mt-8 flex flex-wrap gap-3">
        <KprBtnMain :label="t.nav.book" :to="localePath('/agendar')" variant="green" :dot="true" />
        <KprBtnMain :label="t.nav.work" :to="localePath('/trabajo')" variant="outline" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  kicker: { type: String, default: '' },
  title: { type: String, default: '' },
  lead: { type: String, default: '' },
  lines: { type: Array, default: () => [] },
  note: { type: String, default: '' },
  shots: { type: Array, default: () => [] },
})
const { t, localePath } = useLocale()
</script>
