<template>
  <Transition name="kpr-menu-slide">
    <div
      v-if="menuOpen"
      class="the-menu fixed inset-0 z-[500] select-none overflow-hidden"
    >
      <!-- Translucent White Underlay (exact KPR .underlay .graphic) -->
      <div
        class="underlay absolute inset-0 cursor-pointer"
        style="background: linear-gradient(90deg, #fff 27.97%, hsla(0, 0%, 100%, 0.72)); opacity: 0.86; backdrop-filter: blur(4px);"
        @click="handleClose"
      />

      <!-- Main Menu Card + Attached Bar -->
      <div
        class="menu-container relative top-[var(--menu-pad)] left-[var(--menu-pad)] flex h-[calc(100%-var(--menu-pad)*2)] max-md:top-0 max-md:left-0 max-md:h-full max-md:w-full w-fit text-white uppercase"
      >
        <!-- Left Content Column (600px on desktop) -->
        <div
          class="content relative flex h-full w-[580px] max-md:w-[calc(100vw-54px)] flex-col justify-between overflow-y-auto bg-black rounded-l-[var(--menu-radius)] max-md:rounded-none border border-white/15 border-r-0"
        >
          <!-- Section 1: DISCOVER / NAVIGATION -->
          <div class="section nav flex flex-1 items-start border-b border-white/20 p-6 md:p-8 md:pt-10">
            <div class="left w-[110px] md:w-[135px] shrink-0 type-caption2 text-white/60 pt-2">
              {{ locale === 'en' ? 'DISCOVER' : locale === 'pt' ? 'DESCOBRIR' : locale === 'zh' ? '导航目录' : 'DESCUBRIR' }}
            </div>
            <div class="right flex flex-1 flex-col items-start gap-1">
              <NuxtLink
                v-for="(item, idx) in navItems"
                :key="item.to"
                :to="localePath(item.to)"
                data-hacky-host
                class="menu-nav-item group relative flex items-center px-3 py-1.5 transition-all duration-150"
                :class="isActive(item.to) ? 'is-active text-black' : 'text-white hover:text-black'"
                @click="handleNavClick"
              >
                <!-- Pill Background with KPR Corner-Cut Right Edge -->
                <div
                  class="pill-bg pointer-events-none absolute inset-0 flex transition-opacity duration-150"
                  :class="
                    isActive(item.to)
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                  "
                >
                  <div
                    class="flex-1 h-full rounded-l-[4px]"
                    :class="isActive(item.to) ? 'bg-[#c0fb50]' : 'bg-white'"
                  />
                  <svg
                    class="h-full w-[22px] shrink-0"
                    viewBox="0 0 40 100"
                    preserveAspectRatio="none"
                  >
                    <polygon
                      points="0,0 40,0 40,68 12,100 0,100"
                      :fill="isActive(item.to) ? '#c0fb50' : '#ffffff'"
                    />
                  </svg>
                </div>

                <!-- Nav Item Title -->
                <span class="relative z-10 font-display text-[26px] md:text-[36px] font-bold leading-[0.92] tracking-[-0.06em]">
                  <KprHackyText :text="item.label" />
                </span>

                <!-- PAGE 00X Super Label -->
                <span
                  class="relative z-10 ml-3 self-start font-mono text-[9px] font-semibold tracking-wider transition-opacity duration-150"
                  :class="
                    isActive(item.to)
                      ? 'opacity-100 text-black'
                      : 'opacity-0 group-hover:opacity-100 text-black/70'
                  "
                >
                  PAGE 00{{ idx + 1 }}
                </span>
              </NuxtLink>
            </div>
          </div>

          <!-- Section 2: MORE (casos / método / trayectoria) -->
          <div class="section social flex items-start border-b border-white/20 p-6 md:px-8 md:py-5">
            <div class="left w-[110px] md:w-[135px] shrink-0 type-caption2 text-white/60">
              {{ locale === 'en' ? 'MORE' : locale === 'pt' ? 'MAIS' : locale === 'zh' ? '更多' : 'MÁS' }}
            </div>
            <div class="right grid grid-cols-2 gap-x-8 gap-y-2.5 flex-1 font-mono text-[12px]">
              <NuxtLink
                v-for="item in secondaryItems"
                :key="item.to"
                :to="localePath(item.to)"
                data-hacky-host
                class="flex items-center gap-1.5 hover:text-[#c0fb50] transition-colors w-fit"
                @click="handleNavClick"
              >
                <KprHackyText :text="item.label" />
              </NuxtLink>
            </div>
          </div>

          <!-- Section 3: CONNECT -->
          <div class="section social flex items-start border-b border-white/20 p-6 md:px-8 md:py-6">
            <div class="left w-[110px] md:w-[135px] shrink-0 type-caption2 text-white/60">
              {{ locale === 'en' ? 'CONNECT' : locale === 'pt' ? 'CONECTAR' : locale === 'zh' ? '外部链接' : 'CONECTAR' }}
            </div>
            <div class="right grid grid-cols-2 gap-x-8 gap-y-2.5 flex-1 font-mono text-[12px]">
              <a
                :href="waHref"
                target="_blank"
                rel="noopener noreferrer"
                data-hacky-host
                class="flex items-center gap-1.5 hover:text-[#c0fb50] transition-colors w-fit"
                :aria-label="t.nav.whatsappAria"
              >
                <KprHackyText :text="t.nav.whatsapp.toUpperCase()" />
                <span class="text-[10px] opacity-60">↗</span>
              </a>
              <NuxtLink
                :to="localePath('/ingresar')"
                data-hacky-host
                class="flex items-center gap-1.5 hover:text-[#c0fb50] transition-colors w-fit"
                @click="handleNavClick"
              >
                <KprHackyText :text="t.nav.signIn.toUpperCase()" />
              </NuxtLink>
              <a
                href="https://www.linkedin.com/in/fabricio-nicolas-duarte/"
                target="_blank"
                rel="noopener noreferrer"
                data-hacky-host
                class="flex items-center gap-1.5 hover:text-[#c0fb50] transition-colors w-fit"
              >
                <KprHackyText text="LINKEDIN" />
                <span class="text-[10px] opacity-60">↗</span>
              </a>
              <a
                href="https://github.com/FabricioNicolasDuarte"
                target="_blank"
                rel="noopener noreferrer"
                data-hacky-host
                class="flex items-center gap-1.5 hover:text-[#c0fb50] transition-colors w-fit"
              >
                <KprHackyText text="GITHUB" />
                <span class="text-[10px] opacity-60">↗</span>
              </a>
              <a
                href="https://agronys.com"
                target="_blank"
                rel="noopener noreferrer"
                data-hacky-host
                class="flex items-center gap-1.5 hover:text-[#c0fb50] transition-colors w-fit"
              >
                <KprHackyText text="AGRONYS.COM" />
                <span class="text-[10px] opacity-60">↗</span>
              </a>
              <a
                href="mailto:fabricioduarteoficial@gmail.com"
                data-hacky-host
                class="flex items-center gap-1.5 hover:text-[#c0fb50] transition-colors w-fit"
              >
                <KprHackyText text="EMAIL" />
                <span class="text-[10px] opacity-60">↗</span>
              </a>
            </div>
          </div>

          <!-- Section 4: CURRICULUM & CONSOLE -->
          <div class="section buy flex items-center border-b border-white/20 p-6 md:px-8 md:py-5">
            <div class="left w-[110px] md:w-[135px] shrink-0 type-caption2 text-white/60">
              {{ t.footer.files }}
            </div>
            <div class="right flex flex-wrap items-center gap-6 font-mono text-[12px]">
              <a
                :href="atsCv.href"
                :download="atsCv.file"
                data-hacky-host
                class="flex items-center gap-1.5 hover:text-[#c0fb50] transition-colors"
                @click="playClick"
              >
                <span class="inline-block h-[5px] w-[5px] bg-[#c0fb50]" />
                <KprHackyText :text="t.footer.ats" />
                <span class="text-[10px] opacity-60">↓</span>
              </a>
              <div class="h-6 w-[1px] bg-white/20" />
              <a
                href="/cv/cv-visual.pdf"
                download="CV_Fabricio_Duarte_Visual.pdf"
                data-hacky-host
                class="flex items-center gap-1.5 hover:text-[#c0fb50] transition-colors"
                @click="playClick"
              >
                <KprHackyText :text="t.footer.visual" />
                <span class="text-[10px] opacity-60">↓</span>
              </a>
              <div class="h-6 w-[1px] bg-white/20 hidden sm:block" />
              <button
                type="button"
                class="hidden sm:flex items-center gap-1.5 text-[#c0fb50] hover:underline cursor-pointer"
                @mouseenter="playTextHover"
                @click="openConsoleFromMenu"
              >
                <span>&gt;_ CONSOLE</span>
              </button>
            </div>
          </div>

          <!-- Section 5: MISC / LOCALE & COPYRIGHT -->
          <div class="section misc flex h-[56px] items-center justify-between pl-6 md:pl-8">
            <div class="flex items-center gap-2 font-mono text-[11px]">
              <span class="text-white/40 mr-1">LOCALE:</span>
              <button
                v-for="code in ['es', 'en', 'pt', 'zh']"
                :key="code"
                type="button"
                class="px-2 py-1 uppercase transition-colors cursor-pointer"
                :class="
                  locale === code
                    ? 'bg-[#c0fb50] text-black font-bold'
                    : 'text-white/60 hover:text-white'
                "
                @mouseenter="playHover"
                @click="changeLocale(code)"
              >
                {{ code }}
              </button>
            </div>

            <div class="flex items-center h-full">
              <span class="font-mono text-[10px] text-white/40 pr-5 hidden sm:inline">
                © 2026 F.DUARTE
              </span>
              <NuxtLink
                :to="localePath('/privacidad')"
                class="flex h-full items-center justify-center border-l border-white/20 px-4 font-mono text-[10px] text-white/60 hover:text-[#c0fb50]"
                @click="handleNavClick"
              >
                {{ t.footer.privacy }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Attached Right Vertical Bar (67px wide, exact KPR .bar) -->
        <div
          class="bar relative flex h-full w-[67px] max-md:w-[54px] flex-col items-center justify-center bg-black rounded-r-[var(--menu-radius)] max-md:rounded-none border border-white/20"
        >
          <!-- Top Close Button -->
          <div class="close absolute top-0 left-0 flex h-[var(--menu-height)] w-full items-center justify-center border-b border-white/20">
            <button
              type="button"
              class="btn-close group flex h-full w-full items-center justify-center hover:bg-[#c0fb50] hover:text-black transition-colors cursor-pointer"
              aria-label="Close menu"
              @mouseenter="playHover"
              @click="handleClose"
            >
              <svg class="w-[16px] h-[16px]" viewBox="0 0 22 22" fill="none">
                <line x1="2" y1="2" x2="20" y2="20" stroke="currentColor" stroke-width="1.8" />
                <line x1="2" y1="20" x2="20" y2="2" stroke="currentColor" stroke-width="1.8" />
              </svg>
            </button>
          </div>

          <!-- Fabricio lockup (Recurso 1) sideways at -90deg on the menu bar -->
          <div class="relative flex h-[11.5rem] w-full items-center justify-center overflow-visible">
            <img
              :src="lockupSrc"
              alt=""
              width="184"
              height="39"
              class="icon-mark absolute h-[39px] w-[184px] max-w-none origin-center -rotate-90 object-contain"
              draggable="false"
            />
          </div>

          <!-- Bottom Audio Button -->
          <div class="bottom absolute bottom-0 left-0 w-full border-t border-white/20">
            <button
              type="button"
              class="flex aspect-square w-full items-center justify-center hover:bg-white/10 cursor-pointer"
              @mouseenter="playHover"
              @click="toggleSound"
            >
              <div class="bars flex h-[14px] items-end gap-[2.5px]">
                <span
                  v-for="bar in 5"
                  :key="bar"
                  class="w-[1.5px] bg-white origin-bottom transition-transform duration-300"
                  :class="soundEnabled ? 'scale-y-90' : 'scale-y-[0.2]'"
                  :style="{ height: '14px' }"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue'
import { whatsappHref } from '~/utils/contact'

const { locale, t, setLocale, localePath, pagePath, atsCv } = useLocale()
const { menuOpen, closeMenu, openConsole } = useKprState()
const lockupSrc = '/brand/fabricio-lockup.svg'
const waHref = computed(() => whatsappHref(locale.value))
const {
  soundEnabled,
  toggleSound,
  playHover,
  playTextHover,
  playClick,
  playMenuClose,
} = useKprAudio()

const navItems = computed(() => {
  const n = t.value.nav
  const l = locale.value
  const agtech = String(n.agronys || 'AGTECH').toUpperCase()
  if (l === 'en') {
    return [
      { to: '/trabajo', label: 'WORK' },
      { to: '/agronys', label: agtech },
      { to: '/sobre', label: 'ABOUT' },
      { to: '/agendar', label: 'BOOK 25 MIN' },
    ]
  }
  if (l === 'pt') {
    return [
      { to: '/trabajo', label: 'TRABALHO' },
      { to: '/agronys', label: agtech },
      { to: '/sobre', label: 'SOBRE' },
      { to: '/agendar', label: 'AGENDAR 25 MIN' },
    ]
  }
  if (l === 'zh') {
    return [
      { to: '/trabajo', label: '作品' },
      { to: '/agronys', label: agtech },
      { to: '/sobre', label: '简介' },
      { to: '/agendar', label: '预约 25 分钟' },
    ]
  }
  return [
    { to: '/trabajo', label: 'TRABAJO' },
    { to: '/agronys', label: agtech },
    { to: '/sobre', label: 'SOBRE' },
    { to: '/agendar', label: 'AGENDAR 25 MIN' },
  ]
})

const secondaryItems = computed(() => {
  const n = t.value.nav
  const caseLabel = String(n.caseEcom || 'CASO INSTITUCIONAL').toUpperCase()
  const l = locale.value
  if (l === 'en') {
    return [
      { to: '/metodo', label: 'METHOD' },
      { to: '/casos/ecom', label: caseLabel },
      { to: '/trayectoria', label: 'PATH' },
      { to: '/', label: 'HOME' },
    ]
  }
  if (l === 'pt') {
    return [
      { to: '/metodo', label: 'MÉTODO' },
      { to: '/casos/ecom', label: caseLabel },
      { to: '/trayectoria', label: 'TRAJETÓRIA' },
      { to: '/', label: 'INÍCIO' },
    ]
  }
  if (l === 'zh') {
    return [
      { to: '/metodo', label: '方法' },
      { to: '/casos/ecom', label: caseLabel },
      { to: '/trayectoria', label: '经历' },
      { to: '/', label: '首页' },
    ]
  }
  return [
    { to: '/metodo', label: 'MÉTODO' },
    { to: '/casos/ecom', label: caseLabel },
    { to: '/trayectoria', label: 'TRAYECTORIA' },
    { to: '/', label: 'INICIO' },
  ]
})

function isActive(target) {
  if (target === '/') return pagePath.value === '/'
  return pagePath.value.startsWith(target)
}

function handleClose() {
  playMenuClose()
  closeMenu()
}

function handleNavClick() {
  playClick()
  closeMenu()
}

function openConsoleFromMenu() {
  playClick()
  openConsole()
}

function changeLocale(code) {
  playClick()
  setLocale(code)
}
</script>

<style scoped>
.kpr-menu-slide-enter-active,
.kpr-menu-slide-leave-active {
  transition: opacity 0.35s cubic-bezier(0.19, 1, 0.22, 1);
}
.kpr-menu-slide-enter-active .menu-container,
.kpr-menu-slide-leave-active .menu-container {
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.kpr-menu-slide-enter-from,
.kpr-menu-slide-leave-to {
  opacity: 0;
}
.kpr-menu-slide-enter-from .menu-container,
.kpr-menu-slide-leave-to .menu-container {
  transform: translateX(-40px);
}
</style>

