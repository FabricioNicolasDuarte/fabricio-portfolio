export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  devServer: {
    port: 3055,
  },
  runtimeConfig: {
    public: {
      bookUrl: process.env.NUXT_PUBLIC_BOOK_URL || '',
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/agtech/lakehouse', '/casos/ecom', '/casos/skadia', '/metodo', '/trabajo', '/skadia', '/trayectoria', '/agendar'],
    },
  },
  app: {
    head: {
      title: 'Fabricio Duarte — Ciencia de datos, analítica y automatización',
      htmlAttrs: { lang: 'es' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Data engineering, analytics, BI and automation. Resistencia, Chaco, Argentina. Django, SQL, Superset, Power BI, n8n.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap',
        },
      ],
    },
  },
})
