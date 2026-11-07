<template>
  <footer
    ref="footerRef"
    data-kpr-theme="dark"
    class="the-footer relative z-[90] w-full overflow-hidden bg-black text-white uppercase select-none"
  >
    <div class="inner frame-container pt-24 md:pt-28">
      <!-- TOP 4-COLUMN GRID (Exact replica of KPR scroll-24.png) -->
      <section class="section top relative z-10 bg-black grid grid-cols-1 md:grid-cols-4 border-b border-[#333] border-t border-white/15 pb-2">
        <!-- Column 1: Console / Database Preview -->
        <div
          class="item misc flex flex-col justify-between p-6 md:p-8 md:h-[310px] border-b md:border-b-0 md:border-r border-white/20 cursor-pointer group"
          @mouseenter="playHover"
          @click="handleOpenConsole"
        >
          <div class="console-preview font-mono text-[11px] leading-[1.35] text-white/55 group-hover:text-white/85 transition-colors">
            <div>// INITIALIZING</div>
            <div>NEW FILES IN DATABASE</div>
            <div class="mt-3 pl-5 text-white/75">
              <div>ECOM_SUPERSET_RLS.SQL</div>
              <div>SIGAG_FIELD_SYNC_201.WAV</div>
            </div>
            <div class="mt-3 text-[#c0fb50]">ACTIVATE CONSOLE FOR ACCESS...</div>
          </div>

          <div class="mt-6 flex items-center gap-2 font-mono text-[10px] text-white/50 group-hover:text-[#c0fb50]">
            <span class="inline-block h-[5px] w-[5px] bg-[#c0fb50]" />
            <span>&gt;_ OPEN TERMINAL CONSOLE</span>
          </div>
        </div>

        <!-- Column 2: Internal Navigation -->
        <div class="item flex flex-col justify-between p-6 md:p-8 md:h-[310px] border-b md:border-b-0 md:border-r border-white/20">
          <div class="foot flex flex-col items-start gap-1.5 font-mono text-[13px] tracking-[-0.03em]">
            <NuxtLink
              v-for="(item, idx) in footerNav"
              :key="item.to"
              :to="localePath(item.to)"
              data-hacky-host
              class="px-1.5 py-0.5 transition-colors"
              :class="
                idx === 0
                  ? 'bg-white text-black font-semibold hover:bg-[#c0fb50]'
                  : 'text-white hover:bg-[#c0fb50] hover:text-black'
              "
              @click="playClick"
            >
              <KprHackyText :text="item.label" />
            </NuxtLink>
          </div>

          <div class="mt-6 font-mono text-[10px] text-white/40">
            SYS // ARGENTINA · REMOTO
          </div>
        </div>

        <!-- Column 3: Social / External Links -->
        <div class="item flex flex-col justify-between p-6 md:p-8 md:h-[310px] border-b md:border-b-0 md:border-r border-white/20">
          <div class="foot flex flex-col items-start gap-1.5 font-mono text-[13px] tracking-[-0.03em]">
            <a
              href="https://www.linkedin.com/in/fabricio-nicolas-duarte/"
              target="_blank"
              rel="noopener noreferrer"
              data-hacky-host
              class="hover:text-[#c0fb50] transition-colors flex items-center gap-1.5"
            >
              <KprHackyText text="LINKEDIN" />
              <span class="text-[10px] opacity-60">↗</span>
            </a>
            <a
              href="https://github.com/FabricioNicolasDuarte"
              target="_blank"
              rel="noopener noreferrer"
              data-hacky-host
              class="hover:text-[#c0fb50] transition-colors flex items-center gap-1.5"
            >
              <KprHackyText text="GITHUB" />
              <span class="text-[10px] opacity-60">↗</span>
            </a>
            <a
              href="https://agronys.com"
              target="_blank"
              rel="noopener noreferrer"
              data-hacky-host
              class="hover:text-[#c0fb50] transition-colors flex items-center gap-1.5"
            >
              <KprHackyText text="AGRONYS.COM" />
              <span class="text-[10px] opacity-60">↗</span>
            </a>
            <NuxtLink
              :to="localePath('/agtech/lakehouse')"
              data-hacky-host
              class="hover:text-[#c0fb50] transition-colors flex items-center gap-1.5"
            >
              <KprHackyText text="LAB LAKEHOUSE" />
            </NuxtLink>
          </div>

          <div class="mt-6 font-mono text-[10px] text-white/40">
            UTN GPA 9.40 // UGR DATA SCIENCE
          </div>
        </div>

        <!-- Column 4: Contact & Chamfered Download CV Button -->
        <div class="item press flex flex-col justify-between p-6 md:p-8 md:h-[310px]">
          <div class="foot flex flex-col items-start">
            <div class="desc font-mono text-[12px] text-white/50">
              {{ locale === 'en' ? 'CONTACT DIRECTLY AT' : locale === 'pt' ? 'CONTATO DIRETO EM' : locale === 'zh' ? '直接联系邮箱' : 'CONTACTO DIRECTO EN' }}
            </div>
            <a
              href="mailto:fabricioduarteoficial@gmail.com"
              data-hacky-host
              class="email mt-1 font-mono text-[13px] text-white hover:text-[#c0fb50] transition-colors break-all"
            >
              <KprHackyText text="FABRICIODUARTEOFICIAL@GMAIL.COM" />
            </a>

            <!-- Exact KPR Chamfered SVG Download Button (viewBox 0 0 218 48) -->
            <a
              :href="atsCv.href"
              :download="atsCv.file"
              data-hacky-host
              class="btn-presskit group relative mt-5 flex h-[48px] w-[218px] items-center justify-center cursor-pointer"
              @click="playClick"
            >
              <svg
                class="absolute inset-0 h-full w-full"
                viewBox="0 0 218 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="stroke-white group-hover:fill-[#c0fb50] group-hover:stroke-[#c0fb50] transition-colors duration-200"
                  d="M0.5 6C0.5 2.96243 2.96243 0.5 6 0.5H212C215.038 0.5 217.5 2.96243 217.5 6V34.1604C217.5 35.6502 216.895 37.0764 215.822 38.1095L207.177 46.4309C206.153 47.4163 204.788 47.9668 203.368 47.9668H6C2.96243 47.9668 0.5 45.5044 0.5 42.4668V6Z"
                />
              </svg>
              <div class="relative z-10 flex items-center gap-2.5 font-mono text-[10px] text-white group-hover:text-black transition-colors">
                <svg class="w-[10px] h-[11px]" viewBox="0 0 10 11" fill="none">
                  <path d="M5 0V8.5M5 8.5L1.5 5M5 8.5L8.5 5M0.5 10.5H9.5" stroke="currentColor" stroke-width="1.2" />
                </svg>
                <KprHackyText :text="`DOWNLOAD ${t.footer.ats} (PDF)`" />
              </div>
            </a>
          </div>

          <div class="mt-6 flex items-center gap-4 font-mono text-[10px] text-white/50">
            <a
              href="/cv/cv-visual.pdf"
              download="CV_Fabricio_Duarte_Visual.pdf"
              class="hover:text-[#c0fb50] underline underline-offset-4"
            >
              + {{ t.footer.visual }}
            </a>
          </div>
        </div>
      </section>

      <!-- FND watermark — full letters readable; no mid-glyph crop -->
      <section class="section fnd relative z-0 isolate mt-2 border-t border-white/10 bg-black pt-6 pb-2">
        <div
          ref="watermarkOuterRef"
          class="fnd-clip pointer-events-none relative mx-auto flex items-end justify-center overflow-hidden px-2"
          style="height: clamp(6.5rem, 18vw, 12rem); min-height: 6.5rem;"
          aria-hidden="true"
        >
          <div
            ref="watermarkInnerRef"
            class="font-stencil text-white/90 leading-none tracking-[-0.08em] text-center select-none whitespace-nowrap"
            style="font-size: clamp(4.25rem, 14vw, 9.5rem); padding-bottom: 0.06em;"
            aria-label="FND"
          >
            FND
          </div>
        </div>

        <div class="relative z-20 bg-black px-1 pt-3 pb-2 flex flex-wrap items-center justify-between gap-y-2 font-mono text-[10px] tracking-widest text-white/55">
          <span>// FABRICIO NICOLÁS DUARTE — DATA ENGINEERING · ANALYTICS · PRODUCT</span>
          <span>DATA ENGINEERING // AGTECH // UTN 9.40</span>
        </div>
      </section>

      <!-- BOTTOM LEGAL & CREDITS BAR -->
      <section class="section bottom relative z-10 bg-black flex flex-col sm:flex-row h-auto sm:h-[64px] items-center justify-between border-t border-white/15 py-4 sm:py-0 font-mono text-[10px] text-white/55">
        <div class="hidden sm:block">
          FABRICIODUARTE.TECH
        </div>
        <div class="center flex items-center gap-6 md:gap-10">
          <NuxtLink :to="localePath('/privacidad')" class="hover:text-white transition-colors">
            {{ t.footer.privacy }}
          </NuxtLink>
          <NuxtLink :to="localePath('/metodo')" class="hover:text-white transition-colors">
            {{ t.nav.method }}
          </NuxtLink>
          <a
            :href="waHref"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-[#c0fb50] transition-colors"
            :aria-label="t.nav.whatsappAria"
          >
            {{ t.nav.whatsapp }}
          </a>
          <NuxtLink :to="localePath('/agendar')" class="hover:text-[#c0fb50] transition-colors">
            {{ t.nav.book }} 25 MIN
          </NuxtLink>
        </div>
        <div class="mt-2 sm:mt-0">
          © 2026 FABRICIO DUARTE
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { whatsappHref } from '~/utils/contact'

const { locale, t, localePath, atsCv } = useLocale()
const { openConsole } = useKprState()
const { playHover, playTextHover, playClick } = useKprAudio()
const waHref = computed(() => whatsappHref(locale.value))

const footerRef = ref(null)
const watermarkOuterRef = ref(null)
const watermarkInnerRef = ref(null)
let footerCtx = null

const footerNav = computed(() => {
  const n = t.value.nav
  const agtech = String(n.agronys || 'AGTECH').toUpperCase()
  const dataCase = String(n.caseEcom || 'INSTITUTIONAL CASE').toUpperCase()
  const l = locale.value
  if (l === 'en') {
    return [
      { to: '/', label: 'STORY // HOME' },
      { to: '/trabajo', label: 'WORK (25+)' },
      { to: '/metodo', label: 'METHOD' },
      { to: '/casos/ecom', label: dataCase },
      { to: '/agronys', label: agtech },
      { to: '/trayectoria', label: 'EXPERIENCE ↗' },
    ]
  }
  if (l === 'pt') {
    return [
      { to: '/', label: 'HISTÓRIA // INÍCIO' },
      { to: '/trabajo', label: 'TRABALHO (25+)' },
      { to: '/metodo', label: 'MÉTODO' },
      { to: '/casos/ecom', label: dataCase },
      { to: '/agronys', label: agtech },
      { to: '/trayectoria', label: 'TRAJETÓRIA ↗' },
    ]
  }
  if (l === 'zh') {
    return [
      { to: '/', label: '首页 // 总览' },
      { to: '/trabajo', label: '精选作品 (25+)' },
      { to: '/metodo', label: '数据方法' },
      { to: '/casos/ecom', label: dataCase },
      { to: '/agronys', label: agtech },
      { to: '/trayectoria', label: '工作经历 ↗' },
    ]
  }
  return [
    { to: '/', label: 'HISTORIA // INICIO' },
    { to: '/trabajo', label: 'TRABAJO (25+)' },
    { to: '/metodo', label: 'MÉTODO' },
    { to: '/casos/ecom', label: dataCase },
    { to: '/agronys', label: agtech },
    { to: '/trayectoria', label: 'TRAYECTORIA ↗' },
  ]
})

function handleOpenConsole() {
  playClick()
  openConsole()
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  const footer = footerRef.value
  const outer = watermarkOuterRef.value
  const inner = watermarkInnerRef.value
  if (!footer || !outer || !inner) return

  // Soft rise inside the clipped band only (never scrub — that left mid-clip blobs on short pages)
  footerCtx = gsap.context(() => {
    gsap.set(inner, { y: '18%', opacity: 0.4 })

    const play = () => {
      gsap.to(inner, { y: '0%', opacity: 1, duration: 0.85, ease: 'power2.out', overwrite: true })
    }

    ScrollTrigger.create({
      trigger: footer,
      start: 'top 90%',
      once: true,
      onEnter: play,
      invalidateOnRefresh: true,
    })

    // Short pages / already visible → settle immediately in final state
    requestAnimationFrame(() => {
      const rect = footer.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.92) play()
    })
  }, footer)
})

onBeforeUnmount(() => {
  if (footerCtx) footerCtx.revert()
})
</script>
