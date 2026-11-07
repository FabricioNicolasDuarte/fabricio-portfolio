<template>
  <section id="agronys" data-kpr-section="agronys" data-kpr-theme="dark" class="frame-container py-12 md:py-16">
    <div class="kpr-clip-folder border border-white/15 bg-[#0a0a0a] p-6 sm:p-10">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p class="fd-kicker">003 // {{ t.agronys.kicker }}</p>
          <h1 class="mt-2 type-h1 text-white">{{ t.agronys.title }}</h1>
          <p class="mt-3 max-w-2xl type-body1 text-white/80">{{ t.agronys.body }}</p>
        </div>
        <img src="/agronys/logo-texto-blanco.svg" alt="Agronys" class="h-9 w-auto max-w-[11rem] shrink-0 sm:h-11 sm:max-w-[14rem]" width="280" height="45" />
      </div>

      <a
        :href="AGRONYS_SITE"
        target="_blank"
        rel="noopener noreferrer"
        class="group mt-8 block kpr-clip-card overflow-hidden border border-white/15"
      >
        <img
          src="/mockups/agronys-web.jpg"
          :alt="t.agronys.shotAlt"
          class="w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
        />
      </a>

      <ul class="mt-8 grid grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
        <li
          v-for="line in t.agronys.lines"
          :key="line.name"
          class="kpr-clip-card border border-white/10 bg-black p-5"
        >
          <img :src="line.icon" :alt="line.name" class="h-5 w-auto max-w-[9.5rem] object-contain object-left sm:h-6 sm:max-w-[11rem]" width="180" height="24" />
          <p class="mt-3 type-h3 uppercase text-[#c0fb50]">{{ line.name }}</p>
          <p class="mt-2 type-body1 text-white/75">{{ line.blurb }}</p>
        </li>
      </ul>

      <div class="mt-8 flex flex-wrap gap-4">
        <KprBtnMain :label="t.agronys.cta" :href="AGRONYS_SITE" :external="true" variant="green" :dot="true" />
        <KprBtnMain :label="t.caso.moreAgronys" :to="localePath('/casos/agronys')" variant="outline" />
        <KprBtnMain :label="t.agronys.labCta" :to="localePath('/agtech/lakehouse')" variant="outline" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { AGRONYS_SITE } from '~/utils/agronys'

const { t, localePath } = useLocale()
</script>
