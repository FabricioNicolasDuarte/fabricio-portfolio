import { PATH_LOCALES, PRERENDER_ROUTES, withLocalePrefix } from './utils/localePath.js'

const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'X-DNS-Prefetch-Control': 'off',
  'Content-Security-Policy': [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
    "object-src 'none'",
    "img-src 'self' data: blob:",
    "media-src 'self'",
    "font-src 'self'",
    "style-src 'self' 'unsafe-inline'",
    "script-src 'self' 'unsafe-inline' https://cloud.umami.is",
    "connect-src 'self' https://cloud.umami.is https://api-gateway.umami.dev",
    "frame-src 'self'",
  ].join('; '),
}

if (process.env.NODE_ENV === 'production') {
  securityHeaders['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains'
}

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
    host: 'localhost',
    port: 3055,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: PRERENDER_ROUTES,
    },
    routeRules: {
      '/**': { headers: securityHeaders },
    },
  },
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY || '',
    resendFrom: process.env.RESEND_FROM || '',
  },
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#080808' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/brand/mark.png' },
        { rel: 'apple-touch-icon', href: '/brand/mark.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preload', href: '/brand/mark.png', as: 'image' },
        { rel: 'preload', href: '/images/og-banner.jpg', as: 'image' },
      ],
      script: [
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
