<template>
  <footer id="contact" class="border-t border-white/10">
    <div class="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
      <div>
        <p class="font-display text-sm font-semibold tracking-wide text-white">Fabricio Nicolás Duarte</p>
        <p class="mt-1 text-sm text-slate-500">Resistencia, Chaco · {{ t.hero.open }}</p>
        <p class="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400">
          <a class="hover:text-white" href="mailto:fabricioduarteoficial@gmail.com">fabricioduarteoficial@gmail.com</a>
          <a class="hover:text-white" href="tel:+543704022201">+54 370 402-2201</a>
          <a class="hover:text-white" href="https://www.linkedin.com/in/fabricionicolasduarte/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a class="hover:text-white" href="https://github.com/FabricioNicolasDuarte" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </div>
      <nav class="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400" :aria-label="t.nav.contact">
        <NuxtLink to="/agendar" class="hover:text-white">{{ t.nav.book }}</NuxtLink>
        <a :href="atsCv.href" :download="atsCv.file" class="hover:text-white">{{ t.footer.ats }}</a>
        <a href="/cv/cv-visual.pdf" download="CV_Fabricio_Duarte_Visual.pdf" class="hover:text-white">{{ t.footer.visual }}</a>
      </nav>
    </div>
    <p class="mx-auto max-w-6xl px-5 pb-8 text-xs text-slate-600 sm:px-8">© {{ year }} Fabricio Nicolás Duarte</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
const { t, atsCv } = useLocale()
</script>
