<template>
  <main id="contenido" tabindex="-1">
    <section class="relative mx-auto grid min-h-[calc(100vh-3.5rem)] max-w-6xl lg:grid-cols-2">
      <div class="relative min-h-[38vh] lg:min-h-full">
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
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/40" />
        <button
          type="button"
          class="hero-pause absolute bottom-3 left-3 z-10 rounded-full border border-white/20 bg-black/75 px-3 py-1.5 text-[11px] tracking-wide text-white lg:bottom-auto lg:left-auto lg:right-3 lg:top-[calc(100dvh-5.5rem)]"
          @click="toggleGreeting"
        >
          {{ playing ? t.about.pause : t.about.play }}
        </button>
      </div>
      <div class="flex flex-col justify-center px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <PathTrail flush />
        <p class="fd-kicker mt-6">{{ t.place }}</p>
        <h1 class="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {{ t.about.title }}
        </h1>
        <p class="mt-5 text-lg leading-relaxed text-slate-200">{{ t.about.lead }}</p>
        <p class="mt-4 text-[15px] leading-relaxed text-slate-400">{{ t.about.body }}</p>

        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink :to="localePath('/trayectoria')" class="fd-btn">{{ t.nav.path }}</NuxtLink>
          <NuxtLink :to="localePath('/metodo')" class="fd-btn-outline">{{ t.nav.method }}</NuxtLink>
          <NuxtLink :to="localePath('/agendar')" class="fd-btn-outline">{{ t.nav.book }}</NuxtLink>
        </div>

        <p class="fd-kicker mt-10">{{ t.about.trustKicker }}</p>
        <ul class="mt-3 grid gap-3 sm:grid-cols-2">
          <li v-for="item in t.about.trust" :key="item.title" class="fd-card p-4">
            <p class="font-display text-base font-semibold text-white">{{ item.title }}</p>
            <p class="mt-1 text-sm leading-relaxed text-slate-400">{{ item.body }}</p>
          </li>
        </ul>

        <ul class="mt-8 grid gap-3">
          <li v-for="item in t.about.points" :key="item.title" class="fd-card p-4">
            <p class="font-display text-base font-semibold text-white">{{ item.title }}</p>
            <p class="mt-1 text-sm leading-relaxed text-slate-400">{{ item.body }}</p>
          </li>
        </ul>

        <p class="mt-6 text-sm leading-relaxed text-muted">{{ t.about.school }}</p>

        <div class="mt-8 grid gap-3 sm:grid-cols-2">
          <NuxtLink :to="localePath('/trayectoria')" class="fd-card block p-4">
            <p class="fd-kicker">{{ t.nav.path }}</p>
            <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ t.about.hubPath }}</p>
          </NuxtLink>
          <NuxtLink :to="localePath('/metodo')" class="fd-card block p-4">
            <p class="fd-kicker">{{ t.nav.method }}</p>
            <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ t.about.hubMethod }}</p>
          </NuxtLink>
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
