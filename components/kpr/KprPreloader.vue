<template>
  <Transition name="kpr-preloader-fade">
    <div
      v-if="!preloaderDone"
      class="kpr-preloader fixed inset-0 z-[400] select-none overflow-hidden bg-white text-black"
      @click="handleEnableSound"
    >
      <!-- Outer Frame Border matching KPR Preloader -->
      <div class="pointer-events-none absolute inset-[20px] max-md:inset-0 border border-black/10 rounded-[10px] max-md:rounded-none" />

      <!-- PHASE 1: Progress Bar + Cycling File Paths + Sound Ring -->
      <div
        v-show="phase === 'loading'"
        class="relative flex h-full w-full flex-col items-center justify-center px-8"
      >
        <div class="w-full max-w-[920px]">
          <div class="relative h-[2px] w-full bg-[#e1e1e1] overflow-hidden">
            <div
              class="h-full bg-black transition-all duration-75 ease-out"
              :style="{ width: `${progress}%` }"
            />
          </div>
          <div class="mt-3 flex items-center justify-between font-mono text-[10px] tracking-wider uppercase text-black">
            <div class="flex items-center gap-2 font-medium">
              <span>&gt;&gt; LOADING - {{ progress }}%</span>
            </div>
            <div class="truncate max-w-[60%] text-black/45">
              {{ currentAssetUrl }}
            </div>
          </div>
        </div>

        <!-- Bottom Center Sound Toggle Ring (100% KPR replica) -->
        <button
          type="button"
          class="group absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
          @click.stop="handleEnableSound"
        >
          <div class="relative flex h-11 w-11 items-center justify-center">
            <svg class="h-full w-full -rotate-90" viewBox="0 0 44 44" fill="none">
              <circle cx="22" cy="22" r="19" stroke="rgba(0,0,0,0.18)" stroke-width="1" />
              <circle
                cx="22"
                cy="22"
                r="19"
                stroke="#000"
                stroke-width="1.2"
                stroke-dasharray="120"
                :stroke-dashoffset="audioUnlocked ? 0 : 85"
                class="transition-all duration-500 group-hover:stroke-dashoffset-0"
              />
            </svg>
            <span
              class="h-[5px] w-[5px] transition-transform duration-300 group-hover:scale-150"
              :class="audioUnlocked ? 'bg-[#c0fb50] ring-2 ring-black' : 'bg-black'"
            />
          </div>
          <span class="font-mono text-[10px] uppercase tracking-wider text-black/80">
            {{ audioUnlocked ? 'SOUND ENABLED // CLICK TO ENTER' : 'CLICK TO ENABLE SOUND' }}
          </span>
        </button>
      </div>

      <!-- PHASE 2: Monumental Stencil Wordmark Splash (02-after-wait.png replica) -->
      <div
        v-show="phase === 'splash'"
        class="relative flex h-full w-full items-center justify-center bg-white px-6"
      >
        <div class="w-full overflow-hidden text-center">
          <div class="kpr-splash-word font-stencil text-[25vw] leading-[0.82] tracking-[-0.09em] text-black uppercase select-none">
            FND<span class="text-[11vw] align-top tracking-tighter">//SYS</span>
          </div>
          <div class="mt-4 flex items-center justify-between px-4 font-mono text-[10px] uppercase tracking-widest text-black/50">
            <span>// FABRICIO NICOLÁS DUARTE — DATA &amp; ANALYTICS ENGINEERING</span>
            <span>SYS.VER // 2026.04</span>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const { preloaderDone } = useKprState()
const { audioUnlocked, enableAudio, playLogoIntro } = useKprAudio()

const progress = ref(0)
const phase = ref('loading') // 'loading' | 'splash'
let interval = null

const ASSET_URLS = [
  'HTTPS://FABRICIODUARTE.TECH/_NUXT/ABCWHYTEPLUSVARIABLE.703E8FCA.WOFF2',
  'HTTPS://FABRICIODUARTE.TECH/_NUXT/HEXAFRAMECF-BOLD.6373D9C0.OTF',
  'HTTPS://FABRICIODUARTE.TECH/ECOM/SUPERSET_CLUSTER_DATASET.SQL',
  'HTTPS://FABRICIODUARTE.TECH/AGRONYS/SIGAG_WATERMELONDB_SYNC.WASM',
  'HTTPS://FABRICIODUARTE.TECH/LAKEHOUSE/AIRFLOW_PYSPARK_DELTA.PARQUET',
  'HTTPS://FABRICIODUARTE.TECH/AUDIO/INTROX_SONG.MP3',
  'HTTPS://FABRICIODUARTE.TECH/MODELS/TERRAIN_TOPO_LANDING.WEBM',
  'HTTPS://FABRICIODUARTE.TECH/SYSTEM/GOVERNANCE_RLS_POLICY.JSON',
]

const currentAssetUrl = computed(() => {
  const idx = Math.min(
    ASSET_URLS.length - 1,
    Math.floor((progress.value / 100) * ASSET_URLS.length)
  )
  return ASSET_URLS[idx]
})

function handleEnableSound() {
  enableAudio(true)
}

onMounted(() => {
  interval = setInterval(() => {
    const step = progress.value < 60 ? 7 : progress.value < 90 ? 5 : 4
    progress.value = Math.min(100, progress.value + step)
    if (progress.value >= 100) {
      clearInterval(interval)
      interval = null
      setTimeout(() => {
        phase.value = 'splash'
        playLogoIntro()
        setTimeout(() => {
          preloaderDone.value = true
        }, 750)
      }, 220)
    }
  }, 45)
})

onBeforeUnmount(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
.kpr-preloader-fade-leave-active {
  transition: transform 0.75s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.6s ease;
}
.kpr-preloader-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.kpr-splash-word {
  animation: kprSplashIn 0.65s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

@keyframes kprSplashIn {
  0% {
    transform: translateY(35%) scale(0.96);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}
</style>

