export function useUiSound() {
  const enabled = useState('ui-sound', () => false)

  const toggle = () => {
    enabled.value = !enabled.value
    if (import.meta.client) localStorage.setItem('fd-sound', enabled.value ? '1' : '0')
    if (enabled.value) tap()
  }

  const tap = () => {
    if (!import.meta.client || !enabled.value) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const Ctor = window.AudioContext || window.webkitAudioContext
    if (!Ctor) return
    const ctx = new Ctor()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.value = 880
    gain.gain.value = 0.04
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.07)
    osc.stop(ctx.currentTime + 0.08)
    osc.onended = () => ctx.close()
  }

  onMounted(() => {
    enabled.value = localStorage.getItem('fd-sound') === '1'
  })

  return { enabled, toggle, tap }
}
