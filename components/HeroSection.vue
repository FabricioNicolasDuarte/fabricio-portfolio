<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
    
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary-500/10 blur-[120px]"></div>
      <div class="absolute bottom-[0%] right-[0%] w-[50%] h-[50%] rounded-full bg-emerald-500/10 blur-[100px]"></div>
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      <div 
        class="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-slate-300 text-sm font-medium mb-8 shadow-lg hover:border-primary-500/30 transition-colors cursor-default"
        v-motion-fade-visible-once
      >
        <span class="relative flex h-2 w-2 mr-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Disponible para Proyectos Innovadores
      </div>

      <h1 
        class="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight"
        v-motion-slide-visible-once-bottom
      >
        Transformando Ideas en <br class="hidden md:block" />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-400 to-emerald-400">
          Software de Impacto
        </span>
      </h1>

      <p 
        class="mt-6 max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed font-light"
        v-motion-slide-visible-once-bottom
        :delay="200"
      >
        Ingeniería de Software y Data Science aplicados al mundo real. <br class="hidden sm:block"/> 
        Desde la modernización estatal (GovTech) hasta el futuro del agro con <strong>Skadia</strong>.
      </p>

      <div 
        class="flex flex-col sm:flex-row justify-center gap-5"
        v-motion-slide-visible-once-bottom
        :delay="300"
      >
        <button 
          @click="scrollToProjects" 
          class="group relative px-8 py-4 bg-white text-slate-950 font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden"
        >
          <span class="relative z-10">Ver Proyectos</span>
          <ArrowRightIcon class="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          
          <div class="absolute inset-0 bg-gradient-to-r from-primary-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        
        <a 
          href="/cv-fabricio.pdf" 
          download="CV_Fabricio_Duarte.pdf"
          class="px-8 py-4 bg-slate-800/50 backdrop-blur-md text-white font-semibold rounded-full border border-white/10 hover:bg-slate-800 hover:border-white/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <DownloadIcon class="w-5 h-5" />
          Descargar CV
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ArrowRight as ArrowRightIcon, Download as DownloadIcon } from 'lucide-vue-next'

const scrollToProjects = () => {
  const element = document.getElementById('projects')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>