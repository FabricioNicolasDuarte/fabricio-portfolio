export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  devServer: {
    port: 3055,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/agtech/lakehouse', '/casos/ecom', '/casos/skadia', '/metodo', '/trabajo', '/skadia', '/trayectoria', '/agendar', '/agendar/enviado', '/sobre'],
    },
  },
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY || '',
  },
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/brand/mark.png' },
        { rel: 'apple-touch-icon', href: '/brand/mark.png' },
        { rel: 'preload', href: '/brand/mark.png', as: 'image' },
        { rel: 'preload', href: '/images/og-banner.jpg', as: 'image' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap',
        },
      ],
      script: [
        {
          innerHTML:
            "try{var p=location.pathname;if((p==='/'||p==='')&&!localStorage.getItem('fd-intro-v2'))document.documentElement.classList.add('fd-intro')}catch(e){}",
          tagPriority: 'critical',
        },
      ],
    },
  },
})
