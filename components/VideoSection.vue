<template>
  <section id="demos" class="py-32 bg-black relative overflow-hidden">
    
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-black to-black opacity-80 pointer-events-none"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center mb-12" v-motion-slide-visible-once-bottom>
        
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
          </span>
          <span class="text-green-500 font-bold text-xs uppercase tracking-widest">Producción Académica Destacada</span>
        </div>

        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Nutrogan
        </h2>
        
        <p class="text-slate-400 text-lg max-w-xl mx-auto font-light">
          Proyecto Final de Carrera, aprobada con la máxima calificación. Una inmersión técnica y visual en el desarrollo de software crítico para el sector agropecuario.
        </p>
      </div>

      <div 
        class="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-red-900/10 border border-slate-800 bg-slate-900 aspect-video group ring-1 ring-white/10"
        v-motion-slide-visible-once-bottom
        :delay="200"
      >
        <video 
          controls 
          class="w-full h-full object-cover"
          poster="/images/nutrogan-poster.jpg"
        >
          <source src="/images/nutrogan-demo.mp4" type="video/mp4">
          Tu navegador no soporta video.
        </video>
      </div>

      <div 
        class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto"
        v-motion-slide-visible-once-bottom
        :delay="300"
      >
        <div class="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors group">
          <UserIcon class="w-6 h-6 text-slate-400 mb-2 group-hover:text-white transition-colors" />
          <span class="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Rol</span>
          <span class="text-white font-semibold">Tech Lead</span>
        </div>

        <div class="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors group">
          <CodeIcon class="w-6 h-6 text-slate-400 mb-2 group-hover:text-green-400 transition-colors" />
          <span class="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Stack</span>
          <span class="text-white font-semibold text-sm">Quasar + TensorFlow + Supabase</span>
        </div>

        <div class="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors group">
          <CameraIcon class="w-6 h-6 text-slate-400 mb-2 group-hover:text-green-400 transition-colors" />
          <span class="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Producción</span>
          <span class="text-white font-semibold">Drone & Edición</span>
        </div>

        <div class="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors group">
          <GlobeIcon class="w-6 h-6 text-slate-400 mb-2 group-hover:text-emerald-400 transition-colors" />
          <span class="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Idioma</span>
          <span class="text-white font-semibold">Inglés Técnico B2</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { User as UserIcon, Code as CodeIcon, Camera as CameraIcon, Globe as GlobeIcon } from 'lucide-vue-next'
</script>