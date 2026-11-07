<template>
  <div
    class="the-frame pointer-events-none fixed inset-0 z-[100] select-none transition-all duration-300"
    :class="[
      frameTheme === 'light' && !isHoldingTableau ? 'is-light text-black' : 'is-dark text-white',
    ]"
  >
    <!-- pointer-events-none on every wrapper: only chrome controls opt back in with pointer-events-auto -->
    <div class="pointer-events-none h-full w-full p-[var(--menu-pad)]">
      <div class="line-outer pointer-events-none relative h-full w-full rounded-[var(--menu-radius)]">
        <!-- Decorative frame border sits BEHIND chrome (not over hamburger / rail) -->
        <div
          class="pointer-events-none absolute inset-0 z-0 rounded-[var(--menu-radius)] border transition-colors duration-300"
          :class="frameTheme === 'light' && !isHoldingTableau ? 'border-black/20' : 'border-white/25'"
          aria-hidden="true"
        />
        <!-- TOP BAR -->
        <header
          class="top pointer-events-none relative z-[5] flex h-[var(--menu-height)] w-full items-center border-b transition-all duration-300"
          :class="[
            frameTheme === 'light' && !isHoldingTableau
              ? 'border-black/15 bg-white text-black'
              : 'border-white/20 bg-black text-white',
            isHoldingTableau ? 'opacity-0' : 'opacity-100',
          ]"
        >
          <!-- Hamburger Button (Top-Left 67px) -->
          <div
            class="hamburger pointer-events-auto relative flex h-full w-[67px] max-md:w-[48px] shrink-0 items-center justify-center border-r transition-colors duration-300"
            :class="frameTheme === 'light' && !isHoldingTableau ? 'border-black/15' : 'border-white/20'"
          >
            <button
              type="button"
              class="btn-burger group relative z-[3] flex h-full w-full flex-col items-center justify-center gap-[4px] bg-transparent cursor-pointer"
              aria-label="Open menu"
              @mouseenter="playHover"
              @click="handleOpenMenu"
            >
              <span
                class="block h-[1.5px] w-[20px] bg-current transition-transform duration-300 group-hover:translate-x-[2px]"
              />
              <span
                class="block h-[1.5px] w-[20px] bg-current transition-transform duration-300 group-hover:-translate-x-[2px]"
              />
              <span
                class="block h-[1.5px] w-[20px] bg-current transition-transform duration-300 group-hover:translate-x-[2px]"
              />
            </button>
          </div>

          <!-- Top Bar Content + Progress Fill -->
          <div class="bar relative flex flex-1 h-full items-center justify-between px-4 md:px-6 overflow-hidden">
            <!-- Scroll Progress Bar Fill -->
            <div
              class="the-frame-progress pointer-events-none absolute inset-y-0 left-0 transition-all duration-150"
              :class="frameTheme === 'light' && !isHoldingTableau ? 'bg-black/[0.06]' : 'bg-white/[0.08]'"
              :style="{ width: `${Math.min(100, Math.max(0, scrollProgress * 100))}%` }"
            />

            <!-- Left Breadcrumb / Status Indicator -->
            <div class="pointer-events-auto relative z-10 hidden lg:flex items-center gap-3 type-caption2">
              <NuxtLink
                :to="localePath('/')"
                data-hacky-host
                class="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity"
              >
                <span class="inline-block h-[5px] w-[5px] bg-[#c0fb50]" />
                <KprHackyText text="FABRICIO.DUARTE // SYS" />
              </NuxtLink>
              <span class="opacity-30">/</span>
              <span class="opacity-60">{{ currentRouteLabel }}</span>
            </div>

            <!-- Center Submenu: desktop/tablet only — móvil usa hamburger (evita overflow) -->
            <nav
              aria-label="Section navigation"
              class="the-frame-submenu-nav pointer-events-auto relative z-10 hidden md:flex items-center gap-4 lg:gap-9 mx-auto min-w-0"
            >
              <button
                v-for="item in subnavItems"
                :key="item.id"
                type="button"
                data-hacky-host
                class="group relative flex items-center gap-2 py-2 type-caption2 cursor-pointer transition-opacity shrink-0"
                :class="activeSubnav === item.id ? 'opacity-100 font-semibold' : 'opacity-65 hover:opacity-100'"
                @click="handleSubnavClick(item)"
              >
                <span
                  class="h-[5px] w-[5px] transition-all duration-200"
                  :class="
                    activeSubnav === item.id
                      ? 'bg-[#c0fb50] scale-110'
                      : 'bg-current opacity-0 group-hover:opacity-100'
                  "
                />
                <span class="lg:hidden"><KprHackyText :text="item.shortLabel || item.label" /></span>
                <span class="hidden lg:inline"><KprHackyText :text="item.label" /></span>
              </button>
            </nav>

            <!-- Right: locales · CTAs unificados (contacto → acceso → agendar) -->
            <div class="pointer-events-auto relative z-10 flex items-center gap-1.5 sm:gap-2 -translate-x-1 sm:-translate-x-2">
              <!-- Compact Locale Selector -->
              <div
                class="hidden sm:flex items-center gap-0.5 border px-1 py-1 rounded-[3px] type-caption2 mr-0.5"
                :class="frameTheme === 'light' && !isHoldingTableau ? 'border-black/15' : 'border-white/20'"
              >
                <button
                  v-for="code in ['es', 'en', 'pt', 'zh']"
                  :key="code"
                  type="button"
                  class="px-1.5 py-0.5 uppercase transition-colors cursor-pointer"
                  :class="
                    locale === code
                      ? 'bg-[#c0fb50] text-black font-bold'
                      : 'opacity-60 hover:opacity-100'
                  "
                  @mouseenter="playHover"
                  @click="changeLocale(code)"
                >
                  {{ code }}
                </button>
              </div>

              <!-- 1. WhatsApp — contacto directo (secondary outline) -->
              <a
                :href="waHref"
                target="_blank"
                rel="noopener noreferrer"
                class="kpr-top-cta kpr-top-cta--ghost inline-flex h-[34px] shrink-0 items-center justify-center gap-1.5 rounded-[3px] border border-[#c0fb50]/70 bg-transparent px-2.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#c0fb50] transition-all hover:bg-[#c0fb50]/12 hover:border-[#c0fb50] active:scale-[0.98]"
                :aria-label="t.nav.whatsappAria"
                :title="t.nav.whatsappAria"
                @mouseenter="playHover"
                @click="playClick"
              >
                <svg class="h-[15px] w-[15px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 20.5 4.6 16A8.5 8.5 0 1 1 8 19.4L3 20.5Z" />
                  <path d="M9.2 9.6c.2-.5.4-.5.7-.5h.6c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.4.5c-.1.1-.1.3 0 .4.5.7 1.1 1.3 1.8 1.8.1.1.3.1.4 0l.5-.4c.2-.1.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.6c0 .3 0 .5-.5.7-.4.2-.9.3-1.4.3-2.4 0-5.1-2.1-6.1-4.5-.3-.7-.4-1.4-.3-2 0-.5.1-1 .4-1.3Z" />
                </svg>
                <span class="hidden md:inline">{{ t.nav.whatsapp }}</span>
              </a>

              <!-- 2. Ingresar — acceso privado (secondary outline) -->
              <NuxtLink
                :to="localePath('/ingresar')"
                class="kpr-top-cta kpr-top-cta--ghost inline-flex h-[34px] shrink-0 items-center justify-center rounded-[3px] border border-[#c0fb50]/70 bg-transparent px-2.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#c0fb50] transition-all hover:bg-[#c0fb50]/12 hover:border-[#c0fb50] active:scale-[0.98]"
                data-hacky-host
                @mouseenter="playHover"
                @click="playClick"
              >
                <KprHackyText :text="t.nav.signIn" />
              </NuxtLink>

              <!-- 3. Agendar — CTA primario (filled) -->
              <NuxtLink
                :to="localePath('/agendar')"
                class="kpr-top-cta kpr-top-cta--solid inline-flex h-[34px] shrink-0 items-center justify-center rounded-[3px] border border-[#c0fb50] bg-[#c0fb50] px-3 font-mono text-[10px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white hover:border-white active:scale-[0.98]"
                data-hacky-host
                @mouseenter="playHover"
                @click="playClick"
              >
                <KprHackyText :text="t.nav.book" />
              </NuxtLink>
            </div>
          </div>
        </header>

        <!-- LEFT VERTICAL RAIL (Desktop 67px width, exact KPR sideNav + 4 stage progress bars) -->
        <aside
          class="left pointer-events-none hidden md:flex flex-col items-center absolute left-0 z-[5] w-[var(--menu-width)] border-r transition-all duration-300"
          style="top: var(--menu-height); height: calc(100% - var(--menu-height));"
          :class="[
            frameTheme === 'light' && !isHoldingTableau
              ? 'border-black/15 bg-white text-black'
              : 'border-white/20 bg-black text-white',
            isHoldingTableau ? 'opacity-0' : 'opacity-100',
          ]"
        >
          <div class="pointer-events-auto flex flex-1 flex-col items-center justify-center gap-5 py-4">
            <!-- Brand mark (Recurso 3) en el rail -->
            <NuxtLink
              :to="localePath('/')"
              class="group flex items-center justify-center p-2 cursor-pointer"
              aria-label="Home"
              @mouseenter="playHover"
              @click="playClick"
            >
              <img
                src="/brand/fabricio-mark.svg"
                alt=""
                width="34"
                height="34"
                class="icon-mark h-[34px] w-[34px] object-contain transition-transform duration-300 group-hover:scale-105"
                draggable="false"
              />
            </NuxtLink>

            <!-- 4 Interactive Vertical Stage Progress Bars (KPR Rail Stages) -->
            <div class="pointer-events-auto flex flex-col items-center gap-2 py-2">
              <button
                v-for="st in railStages"
                :key="st.id"
                type="button"
                class="group flex flex-col items-center gap-1 cursor-pointer"
                :title="`Ir a etapa ${st.label}`"
                @mouseenter="playHover"
                @click="handleStageClick(st)"
              >
                <span class="font-mono text-[8px] font-bold opacity-65 group-hover:opacity-100 group-hover:text-[#c0fb50]">
                  {{ st.label }}
                </span>
                <span class="relative h-7 w-[3px] overflow-hidden rounded-full bg-current/15">
                  <span
                    class="absolute inset-x-0 top-0 bg-[#c0fb50] transition-all duration-150"
                    :style="{ height: `${getStageFill(st)}%` }"
                  />
                </span>
              </button>
            </div>
          </div>

          <!-- Bottom Console & Audio Controls — solid plate so they never look “behind” the frame -->
          <div class="bottom pointer-events-auto relative mt-auto flex w-full flex-col bg-black">
            <button
              type="button"
              class="btn-console group relative z-[3] flex aspect-square w-full items-center justify-center border-t border-white/20 bg-black text-white transition-colors duration-200 cursor-pointer hover:bg-[#c0fb50] hover:text-black"
              aria-label="Open terminal console"
              title="Open Duarte OS Console"
              @mouseenter="playHover"
              @click="handleToggleConsole"
            >
              <svg class="w-[15px]" viewBox="0 0 15 12" fill="none" aria-hidden="true">
                <path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" />
                <line x1="7" y1="10.5" x2="14" y2="10.5" stroke="currentColor" stroke-width="1.5" />
              </svg>
            </button>

            <button
              type="button"
              class="btn-audio group relative z-[3] flex aspect-square w-full items-center justify-center border-t border-white/20 bg-black text-white transition-colors duration-200 cursor-pointer hover:bg-white/10"
              :aria-label="soundEnabled ? 'Mute sound' : 'Enable sound'"
              @mouseenter="playHover"
              @click="toggleSound"
            >
              <div class="bars flex h-[16px] items-end gap-[3px]">
                <span
                  v-for="bar in 5"
                  :key="bar"
                  class="bar w-[2px] rounded-full bg-[#c0fb50] origin-bottom transition-transform duration-300"
                  :class="soundEnabled ? `eq-bar-${bar}` : 'scale-y-[0.2] opacity-40'"
                  :style="{ height: '16px' }"
                />
              </div>
            </button>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount } from 'vue'
import { whatsappHref } from '~/utils/contact'

const { locale, t, setLocale, localePath, pagePath } = useLocale()
const waHref = computed(() => whatsappHref(locale.value))
const {
  frameTheme,
  scrollProgress,
  activeSubnav,
  isHoldingTableau,
  openMenu,
  toggleConsole,
} = useKprState()
const {
  soundEnabled,
  toggleSound,
  playHover,
  playTextHover,
  playClick,
  playMenuOpen,
  playCarousel,
} = useKprAudio()

const railStages = [
  { id: 'hero', label: '01', start: 0, end: 0.22, anchor: '#sec-hero' },
  { id: 'project', label: '02', start: 0.22, end: 0.45, anchor: '#project' },
  { id: 'portafolio', label: '03', start: 0.45, end: 0.7, anchor: '#portafolio' },
  { id: 'keep', label: '04', start: 0.7, end: 1.0, anchor: '#keep' },
]

function getStageFill(st) {
  const fill = Math.max(
    0,
    Math.min(1, (scrollProgress.value - st.start) / (st.end - st.start))
  )
  return Math.round(fill * 100)
}

async function handleStageClick(st) {
  playClick()
  playCarousel()
  if (pagePath.value === '/') {
    const el = document.querySelector(st.anchor)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      return
    }
  }
  await navigateTo(localePath('/'))
}

const subnavItems = computed(() => {
  const n = t.value.nav
  return [
    { id: 'project', label: String(n.work || 'TRABAJO').toUpperCase(), shortLabel: 'TRABAJO', anchor: '#portafolio', route: '/trabajo' },
    { id: 'factions', label: String(n.agronys || 'AGTECH').toUpperCase(), shortLabel: 'AGTECH', anchor: '#factions', route: '/agronys' },
    { id: 'world', label: String(n.about || 'SOBRE').toUpperCase(), shortLabel: 'SOBRE', anchor: '#universe', route: '/sobre' },
    { id: 'keep', label: String(n.dataEng || 'DATA ENGINEERING').toUpperCase(), shortLabel: 'DATA', anchor: '#keep', route: '/casos/ecom' },
  ]
})

const currentRouteLabel = computed(() => {
  const p = pagePath.value
  if (p === '/') return '001 // HOME'
  return p.replace(/^\//, '').toUpperCase()
})

function handleOpenMenu() {
  playMenuOpen()
  openMenu()
}

function handleToggleConsole() {
  playClick()
  toggleConsole()
}

async function changeLocale(code) {
  playClick()
  try {
    await setLocale(code)
  } catch (err) {
    console.warn('[locale]', err)
  }
}

async function handleSubnavClick(item) {
  playClick()
  playCarousel()
  activeSubnav.value = item.id
  if (pagePath.value === '/') {
    const el = document.querySelector(item.anchor)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      return
    }
  }
  await navigateTo(localePath(item.route))
}

function onWindowScroll() {
  const doc = document.documentElement
  const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight)
  scrollProgress.value = Math.min(1, Math.max(0, window.scrollY / maxScroll))

  // Detect themed sections under the top bar (y = 70px)
  const themedEls = document.querySelectorAll('[data-kpr-theme]')
  let detectedTheme = 'dark'
  const probeY = 70
  for (const el of themedEls) {
    const rect = el.getBoundingClientRect()
    if (rect.top <= probeY && rect.bottom >= probeY) {
      detectedTheme = el.getAttribute('data-kpr-theme') || 'dark'
      break
    }
  }
  frameTheme.value = detectedTheme

  // Detect active subnav section on home page (bottom → top priority)
  const secAnchors = [
    { id: 'world', sel: '#universe' },
    { id: 'factions', sel: '#factions' },
    { id: 'keep', sel: '#keep' },
    { id: 'project', sel: '#portafolio' },
  ]
  for (const s of secAnchors) {
    const el = document.querySelector(s.sel)
    if (el) {
      const r = el.getBoundingClientRect()
      if (r.top <= window.innerHeight * 0.45) {
        activeSubnav.value = s.id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', onWindowScroll, { passive: true })
  onWindowScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onWindowScroll)
})
</script>

<style scoped>
.eq-bar-1 {
  animation: kpr-equalizer-1 0.85s ease-in-out infinite;
}
.eq-bar-2 {
  animation: kpr-equalizer-2 0.7s ease-in-out infinite 0.15s;
}
.eq-bar-3 {
  animation: kpr-equalizer-3 0.95s ease-in-out infinite 0.05s;
}
.eq-bar-4 {
  animation: kpr-equalizer-2 0.8s ease-in-out infinite 0.25s;
}
.eq-bar-5 {
  animation: kpr-equalizer-1 0.9s ease-in-out infinite 0.1s;
}
</style>
