import { ref } from 'vue'

const soundEnabled = ref(true)
const audioUnlocked = ref(false)
/** Home bed = former Agronys/TBL2; Agronys page bed = former home/INTRO. */
const currentAmbientKey = ref('tbl2')

let ambientAudio = null
let windAudio = null
let textLoopAudio = null
let holdAudio = null
const sfxCache = new Map()
let preloaded = false

const TRACKS = {
  intro: '/kpr/audio/INTROx_AFTER_loop.mp3',
  introFull: '/kpr/audio/INTROx_song.mp3',
  tbl1: '/kpr/audio/TBL1_AFTER_loop.mp3',
  tbl2: '/kpr/audio/TBL2_AFTER_loop.mp3',
  tbl3: '/kpr/audio/TBL3_AFTER_loop.mp3',
  wind: '/kpr/audio/FX_Wind.mp3',
}

const SFX = {
  introAnim: '/kpr/audio/FX_ALT_intro_animation.mp3',
  logoIntro: '/kpr/audio/FX_logo_intro_animation.mp3',
  rollover: '/kpr/audio/UI_menu_rollover.mp3',
  textRollover: '/kpr/audio/UI_menu_text_rollover.mp3',
  press: '/kpr/audio/FX_press_sheen.mp3',
  menuOpen: '/kpr/audio/UI_menu_OPEN.mp3',
  menuClose: '/kpr/audio/UI_menu_CLOSE.mp3',
  textLoop: '/kpr/audio/FX_text_animation_loop.mp3',
  carousel1: '/kpr/audio/FX_character_carousel_1.mp3',
  carousel2: '/kpr/audio/FX_character_carousel_2.mp3',
  carousel3: '/kpr/audio/FX_character_carousel_3.mp3',
  tblTransition: '/kpr/audio/FX_TBL_Transition.mp3',
  holdIn1: '/kpr/audio/FX_flow_transition_IN_1_thekeep.mp3',
  holdIn2: '/kpr/audio/FX_flow_transition_IN_2_thefactions.mp3',
  holdIn3: '/kpr/audio/FX_flow_transition_IN_3_theworld.mp3',
  holdRelease: '/kpr/audio/FX_flow_transition_RELEASE.mp3',
}

const SECTION_AMBIENT = {
  hero: 'tbl2',
  'project-intro': 'tbl2',
  'project-story': 'tbl2',
  'collection-intro': 'tbl2',
  'collection-gallery': 'tbl2',
  keep: 'tbl1',
  factions: 'intro',
  universe: 'tbl3',
  launch: 'tbl3',
  work: 'tbl2',
  caso: 'tbl1',
  agronys: 'intro',
  architecture: 'tbl2',
  path: 'tbl3',
  skills: 'tbl2',
  book: 'tbl2',
  nutrogan: 'intro',
  contenido: 'tbl2',
  dark: 'tbl2',
}

/** Route → ambient when a page has no dominant section yet. */
const ROUTE_AMBIENT = {
  '/': 'tbl2',
  '/agronys': 'intro',
  '/casos/agronys': 'intro',
  '/casos/ecom': 'tbl1',
  '/agtech/lakehouse': 'intro',
}

let carouselIdx = 0
let lastHoverAt = 0
let lastTextHoverAt = 0
let lastClickAt = 0
let lastFilterAt = 0
let lastSectionAt = 0
let lastSectionId = ''

function getSfx(url, volume = 0.45) {
  if (!import.meta.client) return null
  let pool = sfxCache.get(url)
  if (!pool) {
    pool = []
    sfxCache.set(url, pool)
  }
  let audio = pool.find((a) => a.paused || a.ended)
  if (!audio) {
    audio = new Audio(url)
    audio.preload = 'auto'
    pool.push(audio)
  }
  audio.volume = volume
  audio.currentTime = 0
  return audio
}

function safePlay(audio) {
  if (!audio || !soundEnabled.value || !audioUnlocked.value) return
  const p = audio.play()
  if (p && typeof p.catch === 'function') {
    p.catch(() => {})
  }
}

function preloadAll() {
  if (!import.meta.client || preloaded) return
  preloaded = true
  Object.values(SFX).forEach((url) => {
    getSfx(url, 0.01)
  })
  Object.values(TRACKS).forEach((url) => {
    const a = new Audio(url)
    a.preload = 'auto'
  })
}

export const useKprAudio = () => {
  const startAmbient = (key = currentAmbientKey.value) => {
    if (!import.meta.client) return
    currentAmbientKey.value = key
    if (!soundEnabled.value || !audioUnlocked.value) return

    const src = TRACKS[key] || TRACKS.intro
    if (!ambientAudio) {
      ambientAudio = new Audio(src)
      ambientAudio.loop = true
      ambientAudio.volume = 0.26
    } else if (!ambientAudio.src.includes(src.replace(/^\//, ''))) {
      ambientAudio.src = src
      ambientAudio.loop = true
      ambientAudio.volume = 0.26
    }
    safePlay(ambientAudio)

    if (!windAudio) {
      windAudio = new Audio(TRACKS.wind)
      windAudio.loop = true
      windAudio.volume = 0.1
    }
    safePlay(windAudio)
  }

  const stopAmbient = () => {
    if (ambientAudio) ambientAudio.pause()
    if (windAudio) windAudio.pause()
  }

  const enableAudio = (withIntroSfx = false) => {
    if (!import.meta.client) return
    soundEnabled.value = true
    audioUnlocked.value = true
    preloadAll()
    if (withIntroSfx) {
      safePlay(getSfx(SFX.introAnim, 0.48))
    }
    startAmbient(currentAmbientKey.value)
  }

  const toggleSound = () => {
    if (!import.meta.client) return
    soundEnabled.value = !soundEnabled.value
    if (soundEnabled.value) {
      audioUnlocked.value = true
      preloadAll()
      safePlay(getSfx(SFX.press, 0.4))
      startAmbient(currentAmbientKey.value)
    } else {
      stopAmbient()
      if (textLoopAudio) textLoopAudio.pause()
      if (holdAudio) holdAudio.pause()
    }
  }

  const playHover = () => {
    if (!soundEnabled.value || !audioUnlocked.value) return
    const now = performance.now()
    if (now - lastHoverAt < 40) return
    lastHoverAt = now
    safePlay(getSfx(SFX.rollover, 0.3))
  }

  const playTextHover = () => {
    if (!soundEnabled.value || !audioUnlocked.value) return
    const now = performance.now()
    if (now - lastTextHoverAt < 55) return
    lastTextHoverAt = now
    safePlay(getSfx(SFX.textRollover, 0.34))
  }

  const playClick = () => {
    if (!soundEnabled.value || !audioUnlocked.value) return
    const now = performance.now()
    if (now - lastClickAt < 55) return
    lastClickAt = now
    safePlay(getSfx(SFX.press, 0.42))
  }

  const playMenuOpen = () => {
    if (!soundEnabled.value || !audioUnlocked.value) return
    safePlay(getSfx(SFX.menuOpen, 0.52))
  }

  const playMenuClose = () => {
    if (!soundEnabled.value || !audioUnlocked.value) return
    safePlay(getSfx(SFX.menuClose, 0.52))
  }

  const playLogoIntro = () => {
    if (!soundEnabled.value || !audioUnlocked.value) return
    safePlay(getSfx(SFX.logoIntro, 0.55))
  }

  const playCarousel = () => {
    if (!soundEnabled.value || !audioUnlocked.value) return
    const keys = [SFX.carousel1, SFX.carousel2, SFX.carousel3]
    const url = keys[carouselIdx % keys.length]
    carouselIdx++
    safePlay(getSfx(url, 0.55))
  }

  const playFilter = () => {
    if (!soundEnabled.value || !audioUnlocked.value) return
    const now = performance.now()
    if (now - lastFilterAt < 90) return
    lastFilterAt = now
    safePlay(getSfx(SFX.carousel2, 0.45))
    safePlay(getSfx(SFX.press, 0.28))
  }

  const playTextDecode = (durationMs = 280) => {
    if (!import.meta.client || !soundEnabled.value || !audioUnlocked.value) return
    if (!textLoopAudio) {
      textLoopAudio = new Audio(SFX.textLoop)
      textLoopAudio.volume = 0.2
    }
    textLoopAudio.currentTime = 0
    safePlay(textLoopAudio)
    setTimeout(() => {
      if (textLoopAudio) textLoopAudio.pause()
    }, durationMs)
  }

  const playTableauTransition = (idx = 1) => {
    if (!soundEnabled.value || !audioUnlocked.value) return
    safePlay(getSfx(SFX.tblTransition, 0.48))
    const key = idx === 1 ? 'tbl1' : idx === 2 ? 'tbl2' : 'tbl3'
    startAmbient(key)
  }

  const playHoldStart = (idx = 1) => {
    if (!import.meta.client || !soundEnabled.value || !audioUnlocked.value) return
    const url = idx === 1 ? SFX.holdIn1 : idx === 2 ? SFX.holdIn2 : SFX.holdIn3
    if (holdAudio) holdAudio.pause()
    holdAudio = getSfx(url, 0.58)
    safePlay(holdAudio)
  }

  const playHoldRelease = () => {
    if (!import.meta.client || !soundEnabled.value || !audioUnlocked.value) return
    if (holdAudio) {
      holdAudio.pause()
      holdAudio.currentTime = 0
    }
    safePlay(getSfx(SFX.holdRelease, 0.55))
  }

  /** Section enter: tick + optional ambient shift (scroll-driven). */
  const playSectionEnter = (sectionId) => {
    if (!soundEnabled.value || !audioUnlocked.value) return
    const id = String(sectionId || '')
    if (!id || id === lastSectionId) return
    const now = performance.now()
    if (now - lastSectionAt < 380) return
    lastSectionAt = now
    lastSectionId = id

    playCarousel()

    const ambient = SECTION_AMBIENT[id]
    if (ambient && ambient !== currentAmbientKey.value) {
      safePlay(getSfx(SFX.tblTransition, 0.32))
      startAmbient(ambient)
    }
  }

  const resetSectionAudio = () => {
    lastSectionId = ''
    lastSectionAt = 0
  }

  const applyRouteAmbient = (path) => {
    if (!import.meta.client) return
    const clean = String(path || '').replace(/^\/(en|pt|zh)(?=\/|$)/, '') || '/'
    const key = ROUTE_AMBIENT[clean]
    if (!key) return
    if (key !== currentAmbientKey.value) {
      startAmbient(key)
    } else {
      currentAmbientKey.value = key
    }
  }

  return {
    soundEnabled,
    audioUnlocked,
    currentAmbientKey,
    enableAudio,
    toggleSound,
    startAmbient,
    stopAmbient,
    applyRouteAmbient,
    preloadAll,
    playHover,
    playTextHover,
    playClick,
    playFilter,
    playMenuOpen,
    playMenuClose,
    playLogoIntro,
    playCarousel,
    playTextDecode,
    playTableauTransition,
    playHoldStart,
    playHoldRelease,
    playSectionEnter,
    resetSectionAudio,
  }
}
