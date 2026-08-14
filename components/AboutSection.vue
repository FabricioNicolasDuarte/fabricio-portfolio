<template>
  <section id="about" class="py-32 bg-slate-950 relative overflow-hidden">
    
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div class="lg:col-span-7 pt-8" v-motion-slide-visible-once-left>
          
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></span>
            Perfil Profesional
          </div>

          <h2 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Datos, IA y <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-cyan-400 to-emerald-400">
              Automatización
            </span>
          </h2>
          
          <p class="text-slate-400 text-lg mb-10 leading-relaxed max-w-2xl font-light">
            Soy <strong class="text-slate-200">Fabricio Duarte</strong>. No construyo pantallas que muestran números:
            diseño sistemas que <em>deciden</em>. Combino ciencia de datos, modelos de IA y automatización
            de procesos con ingeniería full stack — en el agro (Skadia), en plataformas de producción
            y en el Estado.
          </p>

          <div class="w-full">
            <div class="flex flex-wrap gap-x-6 gap-y-2 border-b border-slate-800 mb-8">
              <button 
                @click="activeTab = 'datos'"
                class="pb-4 text-sm font-bold uppercase tracking-wide transition-all duration-300 border-b-2 flex items-center gap-2"
                :class="activeTab === 'datos' ? 'border-primary-500 text-primary-400' : 'border-transparent text-slate-500 hover:text-slate-300'"
              >
                <BrainIcon class="w-4 h-4" />
                Datos &amp; IA
              </button>

              <button 
                @click="activeTab = 'skadia'"
                class="pb-4 text-sm font-bold uppercase tracking-wide transition-all duration-300 border-b-2 flex items-center gap-2"
                :class="activeTab === 'skadia' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-500 hover:text-slate-300'"
              >
                <LeafIcon class="w-4 h-4" />
                AgroTech
              </button>
              
              <button 
                @click="activeTab = 'govtech'"
                class="pb-4 text-sm font-bold uppercase tracking-wide transition-all duration-300 border-b-2 flex items-center gap-2"
                :class="activeTab === 'govtech' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-slate-500 hover:text-slate-300'"
              >
                <BuildingIcon class="w-4 h-4" />
                Plataforma &amp; Estado
              </button>
            </div>

            <div class="min-h-[240px] relative">

              <div v-if="activeTab === 'datos'" v-motion-fade class="space-y-6">
                <div class="p-6 rounded-2xl bg-gradient-to-br from-sky-950/40 to-slate-900/50 border border-primary-500/20 backdrop-blur-sm">
                  <h3 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <span class="text-primary-400">◆</span> Del dato crudo a la acción
                  </h3>
                  <p class="text-slate-300 text-sm leading-relaxed mb-4">
                    Mi trabajo cruza tres capas: capturar (campo, padrones, transacciones),
                    modelar (umbrales, visión, LLMs) y ejecutar (alertas, OT, reportes, webhooks).
                  </p>
                  <ul class="space-y-3">
                    <li class="flex items-start gap-3 text-sm text-slate-400">
                      <CheckCircleIcon class="w-5 h-5 text-primary-500 shrink-0" />
                      <span><strong class="text-slate-200">IA aplicada:</strong> visión (condición corporal), orquestador de voz con Gemini, Next Best Action en campo.</span>
                    </li>
                    <li class="flex items-start gap-3 text-sm text-slate-400">
                      <CheckCircleIcon class="w-5 h-5 text-primary-500 shrink-0" />
                      <span><strong class="text-slate-200">Ciencia de datos &amp; BI:</strong> motores de GMD/ITH/carga, Apache Superset, Power BI, RLS y KPIs operativos.</span>
                    </li>
                    <li class="flex items-start gap-3 text-sm text-slate-400">
                      <CheckCircleIcon class="w-5 h-5 text-primary-500 shrink-0" />
                      <span><strong class="text-slate-200">Automatización:</strong> sync offline, colas, conciliación, ETL, reportes PDF/Excel y auditoría de cambios.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div v-if="activeTab === 'skadia'" v-motion-fade class="space-y-6">
                <div class="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-slate-900/50 border border-emerald-500/20 backdrop-blur-sm">
                  <h3 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <span class="text-emerald-400">◆</span> Co-Founder @ Skadia
                  </h3>
                  <p class="text-slate-300 text-sm leading-relaxed mb-4">
                    Productos Deep Tech para el agro. El TFI Nutrogan (UTN 2025) evolucionó a
                    <strong>SIGAG Mobile</strong>: decisiones de campo que funcionan sin red.
                  </p>
                  <ul class="space-y-3">
                    <li class="flex items-start gap-3 text-sm text-slate-400">
                      <CheckCircleIcon class="w-5 h-5 text-emerald-500 shrink-0" />
                      <span><strong class="text-slate-200">Offline-first + IA:</strong> WatermelonDB, voz, visión y umbrales productivos (GMD, ITH, SENASA).</span>
                    </li>
                    <li class="flex items-start gap-3 text-sm text-slate-400">
                      <CheckCircleIcon class="w-5 h-5 text-emerald-500 shrink-0" />
                      <span><strong class="text-slate-200">Clima y nutrición:</strong> meteorología operativa, raciones y “qué hacer ahora” en el potrero.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div v-if="activeTab === 'govtech'" v-motion-fade class="space-y-6">
                <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/30 to-slate-900/50 border border-indigo-500/20 backdrop-blur-sm">
                  <h3 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <span class="text-indigo-400">◆</span> Plataformas de datos y Estado
                  </h3>
                  <p class="text-slate-300 text-sm leading-relaxed mb-4">
                    Más de 8 años en modernización pública, y trabajo de plataforma:
                    BI embebido, identidad federada, padrones y automatización de cobros.
                    También intervengo en sistemas que no construí: los hago usables y medibles.
                  </p>
                  <ul class="space-y-3">
                    <li class="flex items-start gap-3 text-sm text-slate-400">
                      <CheckCircleIcon class="w-5 h-5 text-indigo-500 shrink-0" />
                      <span><strong class="text-slate-200">Inteligencia institucional:</strong> tableros Superset/Power BI, GIS de conectividad, consulta de registros.</span>
                    </li>
                    <li class="flex items-start gap-3 text-sm text-slate-400">
                      <CheckCircleIcon class="w-5 h-5 text-indigo-500 shrink-0" />
                      <span><strong class="text-slate-200">Intervenciones:</strong> fork y operación de Apache Superset; reingeniería visual de Compras (Chaco); SIREG.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="lg:col-span-5 relative h-full flex items-center justify-center" v-motion-slide-visible-once-right>
          
          <div class="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-slate-700 bg-slate-900">
             
             <div class="absolute -inset-1 bg-gradient-to-tr from-primary-500 to-emerald-500 opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-500"></div>

             <video 
               ref="profileVideo"
               class="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-105"
               loop
               muted
               playsinline
               preload="auto"
               poster="/images/profile.jpg"
               @mouseenter="playVideo"
               @mouseleave="pauseVideo"
             >
                <source src="/images/profile-video.mp4" type="video/mp4">
             </video>
             
             <div class="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none">
                <div class="border-l-4 border-primary-500 pl-4">
                  <h3 class="text-2xl font-bold text-white">Fabricio Duarte</h3>
                  <p class="text-slate-300 text-sm mt-1">Datos · IA · Automatización</p>
                </div>
             </div>

             <div class="absolute top-4 right-4 z-20 bg-black/30 backdrop-blur-md rounded-full p-2 group-hover:opacity-0 transition-opacity">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
             </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import {
  Leaf as LeafIcon,
  Building2 as BuildingIcon,
  CheckCircle as CheckCircleIcon,
  Brain as BrainIcon
} from 'lucide-vue-next'

const activeTab = ref('datos')
const profileVideo = ref(null)

const playVideo = () => {
  if (profileVideo.value) {
    profileVideo.value.play().catch(() => {})
  }
}

const pauseVideo = () => {
  if (profileVideo.value) {
    profileVideo.value.pause()
  }
}
</script>
