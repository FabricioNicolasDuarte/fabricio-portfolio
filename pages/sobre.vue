<template>
  <main id="contenido" tabindex="-1" data-kpr-theme="dark" class="frame-container-first min-h-screen py-8 md:py-12">
    <section class="grid min-h-[calc(100vh-8rem)] gap-8 lg:grid-cols-12 items-center">
      <div class="lg:col-span-5 relative min-h-[420px] lg:h-[640px] kpr-clip-folder overflow-hidden border border-white/20 bg-black">
        <img
          src="/images/about-poster.jpg"
          alt="Fabricio Duarte"
          class="hero-poster absolute inset-0 h-full w-full object-cover object-center"
          width="1280"
          height="1280"
        />
        <video
          ref="videoEl"
          class="hero-video absolute inset-0 h-full w-full object-cover object-center"
          autoplay
          muted
          loop
          playsinline
          preload="none"
          aria-hidden="true"
          @play="playing = true"
          @pause="playing = false"
        >
          <source src="/images/about.mp4" type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
        <button
          type="button"
          class="absolute bottom-5 left-5 z-10 kpr-clip-btn bg-black/85 border border-white/25 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-[#c0fb50] hover:bg-[#c0fb50] hover:text-black transition-colors cursor-pointer"
          @click="toggleGreeting"
        >
          {{ playing ? t.about.pause : t.about.play }}
        </button>
      </div>

      <div class="lg:col-span-7 flex flex-col justify-center lg:pl-6">
        <PathTrail flush />
        <p class="fd-kicker mt-6">001 // {{ t.place }}</p>
        <h1 class="mt-2 type-h1 text-white">
          {{ t.about.title }}
        </h1>
        <p class="mt-5 type-body2 text-white/90">{{ t.about.lead }}</p>
        <p class="mt-4 type-body1 text-white/75">{{ t.about.body }}</p>
        <p class="mt-4 font-mono text-[11px] uppercase text-[#c0fb50]">// {{ t.about.school }}</p>

        <p class="fd-kicker mt-8">{{ t.about.trustKicker }}</p>
        <ul class="mt-4 grid gap-4 sm:grid-cols-2">
          <li
            v-for="item in t.about.trust"
            :key="item.title"
            class="kpr-clip-card border border-white/15 bg-[#0a0a0a] p-5"
          >
            <p class="type-h3 uppercase text-[#c0fb50]">{{ item.title }}</p>
            <p class="mt-2 type-body1 text-white/75">{{ item.body }}</p>
          </li>
        </ul>

        <div class="mt-8 flex flex-wrap gap-3">
          <KprBtnMain :label="t.nav.path" :to="localePath('/trayectoria')" variant="green" :dot="true" />
          <KprBtnMain :label="t.nav.method" :to="localePath('/metodo')" variant="outline" />
          <KprBtnMain :label="t.nav.book" :to="localePath('/agendar')" variant="outline" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const { t, localePath } = useLocale()
usePageMeta(() => t.value.nav.about)

const videoEl = ref(null)
const playing = ref(true)

function toggleGreeting() {
  const el = videoEl.value
  if (!el) return
  if (el.paused) el.play()
  else el.pause()
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    videoEl.value?.pause()
    playing.value = false
  }
})
</script>
