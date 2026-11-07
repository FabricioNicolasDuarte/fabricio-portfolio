<template>
  <Transition name="fade">
    <div
      v-if="consoleOpen"
      class="the-console fixed inset-0 z-[600] select-none font-mono uppercase text-white"
    >
      <!-- Dark Underlay -->
      <div
        class="underlay absolute inset-0 bg-black/75 backdrop-blur-[2px] cursor-pointer"
        @click="handleClose"
      />

      <!-- Chamfered Terminal Panel (bottom-left positioned just like KPR .panel) -->
      <div
        class="panel absolute bottom-[var(--menu-pad)] left-[var(--menu-pad)] max-md:inset-4 max-md:w-auto max-md:h-[460px] flex h-[480px] w-[520px] flex-col overflow-hidden"
      >
        <!-- Exact KPR Chamfered SVG Background -->
        <svg
          class="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 520 480"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M477.78 479H9C4.58172 479 1 475.418 1 471V293.025C1 290.156 2.53641 287.507 5.02655 286.084L17.9735 278.686C20.4636 277.263 22 274.614 22 271.745V9C22 4.58172 25.5817 1 30 1H511C515.418 1 519 4.58172 519 9V439.969C519 442.14 518.118 444.218 516.554 445.727L483.334 477.758C481.842 479.196 479.852 479 477.78 479Z"
            fill="#000000"
            stroke="#4f4f4f"
            stroke-width="1.5"
          />
        </svg>

        <!-- Terminal Inner Layout -->
        <div class="terminal relative z-10 flex h-full w-full flex-col pl-[22px] max-md:pl-0">
          <!-- Top Bar -->
          <div class="bar flex h-[51px] shrink-0 items-center justify-between border-b border-white/15 pl-4">
            <div class="flex items-center gap-3">
              <div class="flex h-[24px] items-center gap-2 border border-white px-2.5 text-[10px]">
                <svg class="h-[9px]" viewBox="0 0 11 9" fill="none">
                  <path d="M1 1L4.5 4.5L1 8" stroke="currentColor" stroke-width="1.4" />
                  <line x1="5.5" y1="7.5" x2="10" y2="7.5" stroke="currentColor" stroke-width="1.4" />
                </svg>
                <span>CONSOLE</span>
              </div>
              <span class="text-[9px] text-white/60">VER 26.4</span>
              <span class="text-[9px] text-[#c0fb50]">DUARTE_OS // ONLINE</span>
            </div>

            <div class="flex items-center h-full">
              <!-- KPR Barcode SVG -->
              <svg class="h-[19px] w-[54px] text-white/70 hidden sm:block" viewBox="0 0 54 19" fill="none">
                <rect x="0" y="0" width="2" height="19" fill="currentColor" />
                <rect x="4" y="0" width="1" height="19" fill="currentColor" />
                <rect x="7" y="0" width="3" height="19" fill="currentColor" />
                <rect x="12" y="0" width="1" height="19" fill="currentColor" />
                <rect x="15" y="0" width="2" height="19" fill="currentColor" />
                <rect x="20" y="0" width="4" height="19" fill="currentColor" />
                <rect x="26" y="0" width="1" height="19" fill="currentColor" />
                <rect x="29" y="0" width="2" height="19" fill="currentColor" />
                <rect x="33" y="0" width="1" height="19" fill="currentColor" />
                <rect x="37" y="0" width="3" height="19" fill="currentColor" />
                <rect x="42" y="0" width="2" height="19" fill="currentColor" />
                <rect x="46" y="0" width="1" height="19" fill="currentColor" />
                <rect x="50" y="0" width="3" height="19" fill="currentColor" />
              </svg>
              <button
                type="button"
                class="ml-3 flex h-full w-[51px] items-center justify-center border-l border-white/15 hover:bg-[#c0fb50] hover:text-black transition-colors cursor-pointer"
                aria-label="Close console"
                @mouseenter="playHover"
                @click="handleClose"
              >
                <svg class="w-[14px] h-[14px]" viewBox="0 0 22 22" fill="none">
                  <line x1="2" y1="2" x2="20" y2="20" stroke="currentColor" stroke-width="1.8" />
                  <line x1="2" y1="20" x2="20" y2="2" stroke="currentColor" stroke-width="1.8" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Center Scrollable Command List & Output -->
          <div class="center flex flex-1 flex-col justify-between overflow-y-auto p-5 space-y-4">
            <div class="space-y-2 text-[11px] leading-relaxed">
              <p class="text-[#8ca6ff]">
                // INITIALIZING FABRICIO.DUARTE DATABASE...
              </p>
              <p class="text-white/75">
                SELECT OR TYPE A COMMAND BELOW TO INSPECT PRODUCTION SYSTEMS, STACK, OR SCHEDULE A SESSION:
              </p>
              <div v-if="lastOutput" class="mt-3 rounded border border-[#c0fb50]/40 bg-[#c0fb50]/10 p-3 text-[11px] text-[#c0fb50]">
                {{ lastOutput }}
              </div>
            </div>

            <!-- Interactive Command List -->
            <div class="command-list border border-white/15 divide-y divide-white/15">
              <button
                v-for="cmd in commands"
                :key="cmd.cmd"
                type="button"
                class="command-item group flex h-[42px] w-full items-center justify-between px-4 text-left hover:bg-[#c0fb50] hover:text-black transition-colors cursor-pointer"
                @mouseenter="playHover"
                @click="executeCommand(cmd.cmd)"
              >
                <div class="flex items-center gap-3">
                  <span class="text-[12px] font-semibold">/ {{ cmd.cmd }}</span>
                  <span class="text-[9px] opacity-60 group-hover:opacity-90">{{ cmd.desc }}</span>
                </div>
                <span class="text-[10px] opacity-60 group-hover:opacity-100">EXEC ↵</span>
              </button>
            </div>
          </div>

          <!-- Bottom Input Bar -->
          <form
            class="command flex h-[51px] shrink-0 items-center justify-between border-t border-white/15 px-4"
            @submit.prevent="submitTyped"
          >
            <div class="flex flex-1 items-center gap-2">
              <span class="text-[#c0fb50] font-bold">&gt;_</span>
              <input
                v-model="typed"
                type="text"
                placeholder="TYPE A COMMAND (WORK, DATA, AGTECH, CV, BOOK)..."
                class="w-full bg-transparent text-[11px] text-white placeholder-white/40 outline-none uppercase"
              />
            </div>
            <button
              type="submit"
              class="bg-white px-2.5 py-1 text-[9px] font-bold text-black hover:bg-[#c0fb50] transition-colors cursor-pointer"
            >
              ENTER
            </button>
          </form>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'

const { localePath, atsCv } = useLocale()
const { consoleOpen, closeConsole } = useKprState()
const { playHover, playClick, playMenuClose } = useKprAudio()

const typed = ref('')
const lastOutput = ref('')

const commands = [
  { cmd: 'WORK', desc: 'OPEN 25+ PRODUCTION SYSTEMS & PORTFOLIO' },
  { cmd: 'DATA', desc: 'DATA ENGINEERING — INSTITUTIONAL ANALYTICS CASE' },
  { cmd: 'AGTECH', desc: 'OFFLINE-FIRST FIELD SYSTEMS & LAKEHOUSE' },
  { cmd: 'STACK', desc: 'VIEW EXPERIENCE, UTN 9.40 & TECH MATRIX' },
  { cmd: 'CV', desc: 'DOWNLOAD FABRICIO DUARTE ATS RESUME (PDF)' },
  { cmd: 'BOOK', desc: 'SCHEDULE 25-MIN EXPLORATORY INTERVIEW' },
]

function handleClose() {
  playMenuClose()
  closeConsole()
}

async function executeCommand(raw) {
  playClick()
  const c = raw.trim().toUpperCase().replace(/^\//, '')
  if (c === 'WORK' || c === 'TRABAJO') {
    lastOutput.value = '>> ROUTING TO /TRABAJO [25+ PRODUCTION SYSTEMS]...'
    closeConsole()
    await navigateTo(localePath('/trabajo'))
  } else if (c === 'DATA' || c === 'DATAENG' || c === 'ECOM') {
    lastOutput.value = '>> LOADING DATA ENGINEERING / INSTITUTIONAL CASE...'
    closeConsole()
    await navigateTo(localePath('/casos/ecom'))
  } else if (c === 'AGTECH' || c === 'AGRONYS' || c === 'LAKEHOUSE') {
    lastOutput.value = '>> LOADING AGTECH — FIELD SYSTEMS & LAKEHOUSE...'
    closeConsole()
    await navigateTo(localePath(c === 'LAKEHOUSE' ? '/agtech/lakehouse' : '/agronys'))
  } else if (c === 'STACK' || c === 'PATH' || c === 'TRAYECTORIA') {
    lastOutput.value = '>> LOADING CAREER TRAJECTORY & PRODUCTION STACK...'
    closeConsole()
    await navigateTo(localePath('/trayectoria'))
  } else if (c === 'CV' || c === 'RESUME') {
    lastOutput.value = `>> DOWNLOADING ${atsCv.value.file}...`
    if (import.meta.client) {
      window.open(atsCv.value.href, '_blank')
    }
  } else if (c === 'BOOK' || c === 'AGENDAR' || c === 'CONTACT') {
    lastOutput.value = '>> OPENING 25-MINUTE BOOKING TERMINAL...'
    closeConsole()
    await navigateTo(localePath('/agendar'))
  } else {
    lastOutput.value = `>> SYS_INFO: [UTN GPA 9.40 | DATA ENGINEER (ECOM CHACO) | 25+ SYSTEMS IN PROD]. TRY: WORK, DATA, AGTECH, STACK, CV, BOOK.`
  }
  typed.value = ''
}

function submitTyped() {
  if (!typed.value.trim()) return
  executeCommand(typed.value)
}
</script>

