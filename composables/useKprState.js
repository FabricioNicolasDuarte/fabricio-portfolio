import { ref } from 'vue'

const menuOpen = ref(false)
const consoleOpen = ref(false)
const frameTheme = ref('dark') // 'dark' = white text/lines on dark bg; 'light' = black text/lines on light bg
const scrollProgress = ref(0)
const activeSubnav = ref('project')
const preloaderDone = ref(false)
const isHoldingTableau = ref(false)

export const useKprState = () => {
  const openMenu = () => {
    menuOpen.value = true
    consoleOpen.value = false
  }
  const closeMenu = () => {
    menuOpen.value = false
  }
  const toggleMenu = () => {
    if (menuOpen.value) closeMenu()
    else openMenu()
  }

  const openConsole = () => {
    consoleOpen.value = true
    menuOpen.value = false
  }
  const closeConsole = () => {
    consoleOpen.value = false
  }
  const toggleConsole = () => {
    if (consoleOpen.value) closeConsole()
    else openConsole()
  }

  return {
    menuOpen,
    consoleOpen,
    frameTheme,
    scrollProgress,
    activeSubnav,
    preloaderDone,
    isHoldingTableau,
    openMenu,
    closeMenu,
    toggleMenu,
    openConsole,
    closeConsole,
    toggleConsole,
  }
}
