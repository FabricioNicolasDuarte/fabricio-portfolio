<template>
  <footer id="contact" class="border-t border-white/10">
    <div class="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3">
      <div>
        <p class="font-display text-sm font-semibold tracking-wide text-white">Fabricio Nicolás Duarte</p>
        <p class="mt-3 text-sm leading-relaxed text-muted">Resistencia, Chaco</p>
        <p class="mt-1 text-sm text-muted">{{ t.hero.open }}</p>
      </div>
      <div>
        <p class="fd-kicker">{{ t.nav.contact }}</p>
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
        <p class="fd-kicker">{{ t.footer.files }}</p>
        <ul class="mt-3 space-y-2 text-sm text-slate-400">
          <li>
            <NuxtLink :to="localePath('/agendar')" class="hover:text-white">{{ t.nav.book }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/trayectoria')" class="hover:text-white">{{ t.nav.path }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/metodo')" class="hover:text-white">{{ t.nav.method }}</NuxtLink>
          </li>
          <li>
            <a :href="atsCv.href" :download="atsCv.file" class="hover:text-white">{{ t.footer.ats }}</a>
          </li>
          <li>
            <a href="/cv/cv-visual.pdf" download="CV_Fabricio_Duarte_Visual.pdf" class="hover:text-white">{{ t.footer.visual }}</a>
          </li>
        </ul>
      </div>
    </div>
    <p class="mx-auto max-w-6xl border-t border-white/10 px-5 py-6 text-xs text-muted sm:px-8">© {{ year }} Fabricio Nicolás Duarte</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
const { t, atsCv, localePath } = useLocale()
</script>
