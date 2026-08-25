<template>
  <footer id="contact" class="border-t border-white/10">
    <div class="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-4">
      <div>
        <p class="font-display text-sm font-semibold tracking-wide text-white">Fabricio Nicolás Duarte</p>
        <p class="mt-3 text-sm leading-relaxed text-slate-500">Resistencia, Chaco</p>
        <p class="mt-1 text-sm text-slate-500">{{ t.hero.open }}</p>
      </div>
      <div>
        <p class="text-[11px] tracking-[0.18em] text-slate-600 uppercase">{{ t.nav.contact }}</p>
        <ul class="mt-3 space-y-2 text-sm text-slate-400">
          <li>
            <a class="hover:text-white" href="mailto:fabricioduarteoficial@gmail.com">fabricioduarteoficial@gmail.com</a>
          </li>
          <li>
            <a class="hover:text-white" href="tel:+543704022201">+54 370 402-2201</a>
          </li>
          <li>
            <a class="hover:text-white" href="https://www.linkedin.com/in/fabricionicolasduarte/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a class="hover:text-white" href="https://github.com/FabricioNicolasDuarte" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
      </div>
      <div>
        <p class="text-[11px] tracking-[0.18em] text-slate-600 uppercase">{{ t.footer.files }}</p>
        <ul class="mt-3 space-y-2 text-sm text-slate-400">
          <li>
            <NuxtLink to="/agendar" class="hover:text-white">{{ t.nav.book }}</NuxtLink>
          </li>
          <li>
            <a :href="atsCv.href" :download="atsCv.file" class="hover:text-white">{{ t.footer.ats }}</a>
          </li>
          <li>
            <a href="/cv/cv-visual.pdf" download="CV_Fabricio_Duarte_Visual.pdf" class="hover:text-white">{{ t.footer.visual }}</a>
          </li>
        </ul>
      </div>
      <div>
        <p class="text-[11px] tracking-[0.18em] text-slate-600 uppercase">{{ t.footer.time }}</p>
        <p class="mt-3 font-mono text-lg tabular-nums tracking-wide text-white">
          <time :datetime="iso">{{ clock || '—' }}</time>
        </p>
        <p class="mt-1 text-sm text-slate-500">{{ t.footer.city }}</p>
      </div>
    </div>
    <p class="mx-auto max-w-6xl border-t border-white/10 px-5 py-6 text-xs text-slate-600 sm:px-8">© {{ year }} Fabricio Nicolás Duarte</p>
  </footer>
</template>

<script setup>
const ZONE = 'America/Argentina/Buenos_Aires'
const year = new Date().getFullYear()
const { t, atsCv } = useLocale()
const clock = ref('')
const iso = ref('')

let timer

function tick() {
  const now = new Date()
  iso.value = now.toISOString()
  clock.value = new Intl.DateTimeFormat('es-AR', {
    timeZone: ZONE,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(now)
}

onMounted(() => {
  tick()
  timer = window.setInterval(tick, 1000)
})

onBeforeUnmount(() => {
  if (timer) window.clearInterval(timer)
})
</script>
