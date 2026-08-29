import { PATH_LOCALES, PRERENDER_ROUTES, withLocalePrefix } from './utils/localePath.js'

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  hooks: {
    'pages:extend'(pages) {
      const seen = new Set(pages.map((page) => page.path))
      for (const page of [...pages]) {
        for (const lang of PATH_LOCALES) {
          const path = withLocalePrefix(page.path, lang)
          if (seen.has(path)) continue
          seen.add(path)
          pages.push({
            path,
            file: page.file,
            name: page.name ? `${lang}___${page.name}` : undefined,
            meta: page.meta,
          })
        }
      }
    },
  },
  devServer: {
    port: 3055,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: PRERENDER_ROUTES,
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
            "try{var p=location.pathname.replace(/\\/$/,'')||'/';var home=p==='/'||p==='/en'||p==='/pt'||p==='/zh';if(home&&!localStorage.getItem('fd-intro-v2'))document.documentElement.classList.add('fd-intro')}catch(e){}",
          tagPriority: 'critical',
        },
        {
          src: 'https://cloud.umami.is/script.js',
          defer: true,
          'data-website-id': '2bdfc5a5-4112-4159-a0ba-a4d6a5afc902',
          'data-domains': 'fabricioduarte.tech',
        },
      ],
    },
  },
})
