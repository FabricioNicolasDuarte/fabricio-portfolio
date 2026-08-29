<template>
  <section class="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
    <p class="fd-kicker border-t border-white/10 pt-12">{{ t.home.proofs }}</p>
    <div class="mt-8 grid gap-4 sm:grid-cols-2">
      <template v-for="item in proofs" :key="item.kicker">
        <a
          v-if="item.href"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="fd-card group block overflow-hidden"
        >
          <img :src="item.shot" :alt="item.alt" class="h-44 w-full object-cover object-top" width="1200" height="720" loading="lazy" />
          <div class="p-5">
            <p class="fd-kicker">{{ item.kicker }}</p>
            <h2 class="mt-2 font-display text-xl font-semibold text-white group-hover:text-lime-300">{{ item.title }}</h2>
            <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ item.body }}</p>
            <p class="mt-3 text-sm text-lime-300">{{ item.cta }}</p>
          </div>
        </a>
        <NuxtLink
          v-else
          :to="item.to"
          class="fd-card group block overflow-hidden"
        >
          <img :src="item.shot" :alt="item.alt" class="h-44 w-full object-cover object-top" width="1200" height="720" loading="lazy" />
          <div class="p-5">
            <p class="fd-kicker">{{ item.kicker }}</p>
            <h2 class="mt-2 font-display text-xl font-semibold text-white group-hover:text-lime-300">{{ item.title }}</h2>
            <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ item.body }}</p>
            <p class="mt-3 text-sm text-lime-300">{{ item.cta }}</p>
          </div>
        </NuxtLink>
      </template>
    </div>
  </section>
</template>

<script setup>
const { t, localePath } = useLocale()

const proofs = computed(() => {
  const h = t.value.home
  return [
    {
      kicker: 'ECOM',
      title: h.ecomTitle,
      body: h.ecom,
      to: localePath('/casos/ecom'),
      shot: '/mockups/superset.png',
      alt: h.ecomAlt,
      cta: h.ecomCta,
    },
    {
      kicker: 'Skadia',
      title: h.sigagTitle,
      body: h.skadia,
      to: localePath('/casos/skadia'),
      shot: '/mockups/sigag.jpg',
      alt: h.sigagAlt,
      cta: h.sigagCta,
    },
    {
      kicker: 'Live',
      title: h.cocomaTitle,
      body: h.cocoma,
      href: 'https://cocoma-app.onrender.com',
      shot: '/mockups/cocoma.jpg',
      alt: h.cocomaAlt,
      cta: h.cocomaCta,
    },
    {
      kicker: 'Producto',
      title: h.sigclTitle,
      body: h.sigcl,
      href: 'https://github.com/FabricioNicolasDuarte/SIGCL',
      shot: '/mockups/sigcl.png',
      alt: h.sigclAlt,
      cta: h.sigclCta,
    },
  ]
})
</script>
