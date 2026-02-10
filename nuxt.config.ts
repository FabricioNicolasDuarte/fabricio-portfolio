// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  //css: ['~/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt'
  ],
  app: {
    head: {
      title: 'Fabricio Duarte | LeadTech Developer',
      meta: [
        { name: 'description', content: 'Portafolio de Fabricio Duarte. Transformando realidad con Tecnología y Datos.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap' }
      ]
    }
  }
})