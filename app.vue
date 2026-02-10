<template>
  <div class="bg-slate-950 min-h-screen font-sans selection:bg-primary-500 selection:text-white">
    <NavBar />
    
    <NuxtPage />
    
    <AppFooter />
  </div>
</template>

<script setup>
// Configuración Global de SEO y Meta Tags
useHead({
  // Título que aparece en la pestaña del navegador
  title: 'Fabricio Duarte | GovTech & AgroTech Engineer',
  
  meta: [
    { name: 'description', content: 'Ingeniería de Software & Estrategia Digital Escalable. Especialista en soluciones Offline-First para el Agro y Modernización del Estado.' },
    
    // --- Open Graph (Para tarjetas de WhatsApp, LinkedIn, Facebook) ---
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://fabricioduarte.tech' },
    { property: 'og:title', content: 'Fabricio Duarte | Ingeniería de Software & Estrategia' },
    { property: 'og:description', content: 'Transformando el sector público y privado con tecnología escalable. Mira mi portafolio profesional.' },
    
    // IMPORTANTE: La imagen debe tener URL completa (https://...) para que WhatsApp la detecte
    // Asegúrate de que 'profile.jpg' esté en tu carpeta /public/images/
    { property: 'og:image', content: 'https://fabricioduarte.tech/images/profile.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },

    // --- Twitter Card ---
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Fabricio Duarte | Tech Portfolio' },
    { name: 'twitter:description', content: 'Ingeniería de Software & Estrategia Digital Escalable.' },
    { name: 'twitter:image', content: 'https://fabricioduarte.tech/images/profile.jpg' }
  ],
  
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  
  htmlAttrs: {
    lang: 'es' // Define el idioma para Google
  }
})
</script>