<template>
  <section id="projects" class="py-32 bg-slate-950 relative overflow-hidden">
    
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center mb-20" v-motion-slide-visible-once-bottom>
        <span class="text-primary-500 font-bold tracking-widest text-sm uppercase mb-2 block">Portafolio</span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Proyectos Destacados</h2>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg">
          Soluciones tecnológicas de alto impacto aplicadas a problemas reales de infraestructura, administración y gestión de datos.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        
        <article 
          v-for="(project, index) in projects" 
          :key="index"
          class="group relative w-full max-w-md bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col"
          v-motion-slide-visible-once-bottom
          :delay="index * 150"
        >
          <div class="relative h-56 overflow-hidden">
            <div class="absolute inset-0 bg-slate-800 animate-pulse" v-if="!imageLoaded"></div> 
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              @load="imageLoaded = true"
              onerror="this.src='https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
            
            <div class="absolute top-4 right-4 bg-slate-950/80 backdrop-blur border border-white/10 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          </div>

          <div class="p-8 flex flex-col items-center text-center flex-grow">
            <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
              {{ project.title }}
            </h3>
            
            <p class="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap justify-center gap-2 mt-auto">
              <span 
                v-for="tag in project.tags" 
                :key="tag" 
                class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-300 hover:bg-primary-500/10 hover:text-primary-400 hover:border-primary-500/30 transition-colors cursor-default"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const imageLoaded = ref(false)

const projects = [
  {
    title: 'Energy-Core',
    description: 'Sistema de telemetría IoT para la visualización en tiempo real y simulación de redes eléctricas. Optimiza la detección de fallas mediante WebSockets.',
    tags: ['Python', 'IoT', 'Arduino', 'C++'],
    image: '/images/project-energy.jpg'
  },
  {
    title: 'Docu-Flow',
    description: 'Plataforma integral para la digitalización de expedientes y automatización de workflows administrativos estatales (BPMN).',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'GovTech'],
    image: '/images/project-docu.jpg'
  },
  {
    title: 'Nutrogan',
    description: 'Aplicación móvil potenciada con IA (Visión Artificial) para el cálculo de raciones y salud animal en zonas sin conectividad.',
    tags: ['Flutter', 'TensorFlow', 'Offline-First', 'AgroTech'],
    image: '/images/project-nutro.jpg'
  },
  {
    title: 'Tax-Intelligence',
    description: 'Sistema de automatización Data Science para el procesamiento masivo de datos tributarios y detección de anomalías.',
    tags: ['Data Science', 'Python', 'Supabase', 'ETL'],
    image: '/images/project-tax.jpg'
  }
]
</script>