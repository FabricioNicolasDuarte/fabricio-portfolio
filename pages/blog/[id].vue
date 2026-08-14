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
    title: 'IA que escribe en el dominio, no en el chat',
    category: 'Inteligencia Artificial',
    date: 'Agosto 2026',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    content: `
      <p class="lead">En el potrero no hay WiFi y no hay tiempo para un chatbot educado. La IA sirve si <strong>registra un pesaje, aísla un animal o arma una orden de trabajo</strong>. Esa es la línea que va de Nutrogan a SIGAG.</p>
      
      <h2>Nutrogan: visión sin nube</h2>
      <p>El TFI (UTN 2025) nació como PWA offline-first en <strong>Quasar + Supabase</strong>. La condición corporal se estima en el dispositivo con <strong>TensorFlow.js</strong>: una foto, una inferencia, una ración. Si no hay señal, el dato espera en el teléfono.</p>

      <h2>SIGAG: de mirar a decidir</h2>
      <p>El producto de campo da el siguiente paso. Un orquestador de voz combina parser offline y <strong>Gemini</strong> (vía Edge, no keys en el cliente). Cada intención tiene riesgo: consultar es barato; dar de baja un animal exige confirmación. El resultado no es un párrafo: es una fila en WatermelonDB.</p>
      
      <h3>Lo que mido</h3>
      <ul>
        <li><strong>Next Best Action</strong> en el dashboard: qué hacer ahora, no un ranking de KPIs.</li>
        <li>Motores de umbral: GMD, ITH, carga animal, criterios SENASA.</li>
        <li>Salud de sync visible: si la cola de IA o el pull fallan, el capataz lo ve.</li>
      </ul>
    `
  },
  {
    id: 'govtech-burocracia',
    title: 'El tablero no es el producto: la decisión sí',
    category: 'Datos & Estado',
    date: 'Agosto 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    content: `
      <p class="lead">Un dashboard sin dueño es un screensaver caro. En el Estado y en plataformas institucionales el trabajo de datos es <strong>quién ve qué, con qué retraso y para qué acción</strong>.</p>

      <h2>Construir el portal, intervenir el motor</h2>
      <p>En el portal de tableros embebí <strong>Apache Superset y Power BI</strong> con control de acceso y RLS. En paralelo intervine el propio Superset: embed seguro, mapas, CSP, operación en cluster. No reescribí el motor de BI. Lo hice usable en producción.</p>

      <h2>El mismo criterio fuera del escritorio</h2>
      <p>GIS de establecimientos y conectividad, consulta pública de registros (SIREG, Chaco) y reingeniería visual de Compras (Contaduría General) son la misma tesis: el sistema ya existía; el dato no llegaba a la persona correcta.</p>
      <ul>
        <li>Identidad federada (quién entra) + RLS (qué ve).</li>
        <li>KPIs y mapas, no planillas sueltas.</li>
        <li>Intervenciones de producto sobre software que no nació conmigo.</li>
      </ul>
    `
  },
  {
    id: 'arquitectura-vue',
    title: 'Automatizar el aburrido: sync, colas y ETL',
    category: 'Automatización',
    date: 'Agosto 2026',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop',
    content: `
      <p class="lead">La automatización que importa no es un zapier de marketing. Es el job que concilia a las 3 a.m., el sync que no borra el potrero y el reporte que sale sin que nadie exporte a Excel a mano.</p>

      <h2>Campo: sync que no miente</h2>
      <p>En SIGAG el dispositivo es la fuente de verdad hasta que hay red. Cola, backoff, timeout duro, tombstones y un chip de salud. Si lo local y la nube no cierran, el sistema <strong>para y pregunta</strong>: no hace wipe silencioso.</p>

      <h2>Plataforma: colas y legados</h2>
      <p>En producción institucional la automatización es otra: workers, notificaciones asíncronas, procesamiento por lotes, API sobre un padrón que no se puede migrar de un día para el otro. El patrón es el mismo que en el agro: <strong>capturar, validar, ejecutar, auditar</strong>.</p>
      <ul>
        <li>Celery / Redis para lo que no puede vivir en el request HTTP.</li>
        <li>ETL y reportes PDF/Excel como interfaz de datos, no como afterthought.</li>
        <li>Auditoría de cambios: si algo se automatizó, tiene que poder explicarse.</li>
      </ul>
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