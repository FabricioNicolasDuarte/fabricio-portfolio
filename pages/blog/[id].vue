<template>
  <div class="min-h-screen bg-slate-950 pb-32">
    
    <div v-if="article" class="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      <div class="absolute inset-0">
        <img :src="article.image" class="w-full h-full object-cover opacity-50" :alt="article.title">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-black/40"></div>
      </div>

      <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10 mt-10">
        <span class="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
          {{ article.category }}
        </span>

        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 max-w-5xl drop-shadow-2xl">
          {{ article.title }}
        </h1>

        <div class="flex items-center gap-6 text-slate-200 text-sm font-medium bg-slate-950/60 px-6 py-3 rounded-full backdrop-blur-md border border-white/10">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full border border-white/30 overflow-hidden">
               <img src="/images/profile.jpg" class="w-full h-full object-cover">
            </div>
            <span>Fabricio Duarte</span>
          </div>
          <span class="w-1 h-1 rounded-full bg-white/50"></span>
          <span>{{ article.date }}</span>
        </div>
      </div>
    </div>

    <div v-if="article" class="relative z-20 px-4 sm:px-6 lg:px-8 -mt-20">
      <div class="max-w-3xl mx-auto">
        
        <div class="mb-6">
          <NuxtLink to="/#blog" class="inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm font-bold group bg-slate-900/80 px-4 py-2 rounded-full backdrop-blur border border-white/10">
            <svg class="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver
          </NuxtLink>
        </div>

        <div class="bg-slate-950/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl ring-1 ring-white/5">
          
          <div class="prose prose-lg prose-invert max-w-none article-content">
            <div v-html="article.content"></div>
          </div>

          <div class="mt-16 pt-10 border-t border-white/10">
            <div class="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 rounded-xl p-6 border border-white/5">
              <div>
                <h3 class="text-lg font-bold text-white mb-1">¿Te interesa este tema?</h3>
                <p class="text-slate-400 text-sm">Contáctame para implementaciones similares.</p>
              </div>
              <a href="mailto:fabricioduarteoficial@gmail.com" class="px-6 py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-colors shadow-lg">
                Hablemos
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const articleId = route.params.id

// DATA DE ARTÍCULOS
const articles = [
  {
    id: 'ia-ganaderia',
    title: 'IA en el Campo: El caso Nutrogan',
    category: 'Inteligencia Artificial',
    date: 'Febrero 2026',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    content: `
      <p class="lead">La ganadería de precisión enfrenta un obstáculo gigante en Latinoamérica: la conectividad. De nada sirve tener algoritmos complejos en la nube si no hay señal en el corral. Con <strong>Nutrogan</strong>, decidimos abordar este problema con un enfoque "Offline-First".</p>
      
      <h2>El Desafío Técnico</h2>
      <p>Necesitábamos estimar la condición corporal de vacas Brangus mediante fotos tomadas con un celular estándar, sin enviar datos a internet. Esto implicaba correr modelos de Deep Learning directamente en el dispositivo móvil.</p>

      <h2>La Solución: TensorFlow Lite + Flutter</h2>
      <p>Utilizamos <strong>Flutter</strong> para el desarrollo de la app por su capacidad de compilar a código nativo de alto rendimiento. Para la IA, entrenamos un modelo de red neuronal convolucional (CNN) en Python usando TensorFlow, y luego lo cuantizamos (optimizamos) para convertirlo a <strong>TensorFlow Lite</strong>.</p>
      
      <h3>Resultados Clave</h3>
      <ul>
        <li>Inferencia en menos de <strong>200ms</strong> en dispositivos gama media.</li>
        <li>Cálculo automático de raciones de alimento basado en la lectura.</li>
        <li>Sincronización diferida con MongoDB al recuperar señal 4G/WiFi.</li>
      </ul>
    `
  },
  {
    id: 'govtech-burocracia',
    title: 'De la Burocracia al Click',
    category: 'Gestión Pública',
    date: 'Enero 2026',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    content: `
       <p class="lead">Durante mis años como asesor en el sector público, vi cómo expedientes de vital importancia dormían en escritorios por procesos manuales ineficientes. La tecnología no es un lujo, es una herramienta de transparencia.</p>

      <h2>El Proyecto Docu-Flow</h2>
      <p>Creamos una plataforma integral para la digitalización de expedientes con un objetivo claro: transparencia y trazabilidad. Si un trámite se detiene, el sistema debe decirnos dónde y por qué.</p>

      <h2>Stack Tecnológico Robusto</h2>
      <p>Para el estado, la estabilidad es ley. Elegimos:</p>
      <ul>
        <li><strong>Laravel (PHP):</strong> Seguridad robusta y manejo de roles (Spatie).</li>
        <li><strong>Vue.js:</strong> Interfaces reactivas rápidas para los administrativos.</li>
        <li><strong>MySQL:</strong> Integridad de datos transaccionales garantizada.</li>
      </ul>
    `
  },
  {
    id: 'arquitectura-vue',
    title: 'Arquitectura Limpia con Vue 3',
    category: 'Desarrollo',
    date: 'Diciembre 2025',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop',
    content: `
      <p class="lead">En el mundo del desarrollo web, la velocidad lo es todo. Velocidad de carga para el usuario y velocidad de desarrollo para el programador.</p>

      <h2>SEO y Performance</h2>
      <p>A diferencia de una SPA tradicional, Nuxt ofrece <strong>Server Side Rendering (SSR)</strong>. Esto es crucial para webs institucionales que necesitan ser indexadas por Google.</p>

      <h2>La ventaja de Tailwind</h2>
      <p>Combinado con el sistema de componentes de Vue, logramos un código modular y mantenible, reduciendo el tiempo de desarrollo en un 40% comparado con CSS tradicional.</p>
    `
  }
]

const article = articles.find(a => a.id === articleId)
</script>

<style scoped>
/* FUERZA BRUTA DE CSS PARA GARANTIZAR LEGIBILIDAD */
/* Esto sobreescribe cualquier configuración por defecto de Tailwind */

:deep(.article-content) {
  color: #cbd5e1; /* Texto Base: Slate-300 (Gris claro) */
  font-size: 1.125rem; /* lg */
  line-height: 1.8;
}

:deep(.article-content p) {
  margin-bottom: 1.5em;
}

:deep(.article-content p.lead) {
  font-size: 1.35rem;
  color: #ffffff; /* Blanco puro */
  font-weight: 500;
  border-left: 4px solid #3b82f6; /* Borde azul */
  padding-left: 1.5rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

:deep(.article-content h2) {
  color: #ffffff !important; /* Blanco puro */
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1rem;
}

:deep(.article-content h3) {
  color: #e2e8f0 !important; /* Slate-200 */
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

:deep(.article-content strong) {
  color: #ffffff; /* Blanco */
  font-weight: 700;
}

:deep(.article-content ul) {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
  color: #cbd5e1;
}

:deep(.article-content li) {
  margin-bottom: 0.5rem;
}

:deep(.article-content li::marker) {
  color: #3b82f6; /* Bullet azul */
}
</style>