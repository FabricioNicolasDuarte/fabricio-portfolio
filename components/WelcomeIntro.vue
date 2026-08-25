<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="intro-root fixed inset-0 z-[80] flex flex-col items-center justify-center bg-black px-6"
      role="dialog"
      aria-modal="true"
      :aria-label="t.intro.title"
      @pointerdown.once="playSound('open')"
      @keydown.enter.prevent="enter"
      @keydown.esc.prevent="enter"
    >
      <img
        src="/brand/intro-lockup.png"
        alt="FA portfolio"
        width="520"
        height="120"
        class="intro-lockup h-11 w-auto sm:h-14"
      />
      <p class="intro-name mt-16 font-display text-lg font-medium tracking-[0.18em] text-white sm:text-xl">
        Fabricio Nicolás Duarte
      </p>
      <button
        type="button"
        class="intro-go mt-10 text-lime-400 transition hover:text-lime-200"
        :aria-label="t.intro.go"
        @click="enter"
      >
        <svg viewBox="0 0 24 24" class="h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.25" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  </Teleport>
</template>

<script setup>
const STORAGE = 'fd-intro-v2'
const { t } = useLocale()
const route = useRoute()
const open = ref(false)
const leaving = ref(false)

let audioCtx = null

function tone(ctx, freq, type, start, dur, gain = 0.08) {
  const osc = ctx.createOscillator()
  const g = ctx.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(freq, start)
  g.gain.setValueAtTime(0.0001, start)
  g.gain.exponentialRampToValueAtTime(gain, start + 0.03)
  g.gain.exponentialRampToValueAtTime(0.0001, start + dur)
  osc.connect(g)
  g.connect(ctx.destination)
  osc.start(start)
  osc.stop(start + dur + 0.02)
}

function playSound(kind) {
  try {
    audioCtx = audioCtx || new AudioContext()
    if (audioCtx.state === 'suspended') audioCtx.resume()
    const now = audioCtx.currentTime
    if (kind === 'open') {
      tone(audioCtx, 196, 'sine', now, 0.7, 0.05)
      tone(audioCtx, 293.66, 'sine', now + 0.08, 0.75, 0.06)
      tone(audioCtx, 392, 'triangle', now + 0.16, 0.9, 0.035)
    } else {
      tone(audioCtx, 261.63, 'sine', now, 0.45, 0.06)
      tone(audioCtx, 329.63, 'sine', now + 0.05, 0.5, 0.05)
      tone(audioCtx, 523.25, 'sine', now + 0.1, 0.7, 0.04)
    }
  } catch {
    /* autoplay policies */
  }
}

function close() {
  open.value = false
  document.documentElement.classList.remove('fd-intro')
  document.documentElement.style.overflow = ''
}

function enter() {
  if (leaving.value) return
  leaving.value = true
  playSound('enter')
  try {
    localStorage.setItem(STORAGE, '1')
  } catch {
    /* private mode */
  }
  document.documentElement.classList.add('fd-intro-out')
  window.setTimeout(close, 520)
}

onMounted(() => {
  if (route.path !== '/') return
  let seen = false
  try {
    seen = localStorage.getItem(STORAGE) === '1'
  } catch {
    seen = false
  }
  if (seen) {
    document.documentElement.classList.remove('fd-intro')
    return
  }
  open.value = true
  document.documentElement.classList.add('fd-intro')
  document.documentElement.style.overflow = 'hidden'
  playSound('open')
  window.setTimeout(() => document.querySelector('.intro-go')?.focus(), 2100)
})

onBeforeUnmount(() => {
  document.documentElement.classList.remove('fd-intro', 'fd-intro-out')
  document.documentElement.style.overflow = ''
})
</script>
