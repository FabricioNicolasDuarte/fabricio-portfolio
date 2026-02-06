<template>
  <section id="stack" class="py-32 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
    
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 pointer-events-none"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center mb-20" v-motion-slide-visible-once-bottom>
        <span class="text-primary-500 font-bold tracking-widest text-sm uppercase mb-2 block">Infraestructura & Herramientas</span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Tech Stack</h2>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg">
          Selección tecnológica estratégica enfocada en escalabilidad, seguridad y experiencia de usuario.
        </p>
        <div class="mt-6 inline-flex items-center px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-sm">
          <span class="w-2 h-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
          Inglés Técnico: Nivel B2 (Certificado)
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div class="group relative bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
          <div class="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          
          <div class="relative w-16 h-16 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-primary-500/20 group-hover:scale-110 transition-all duration-300">
            <svg class="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
          </div>
          
          <h3 class="text-white font-bold text-xl mb-4 relative z-10">Backend & Data</h3>
          
          <div class="flex flex-wrap justify-center gap-2 relative z-10">
            <span class="tech-badge">PHP 8 / Laravel</span>
            <span class="tech-badge">Node.js</span>
            <span class="tech-badge">Python</span>
            <span class="tech-badge">Supabase</span>
            <span class="tech-badge">PostgreSQL</span>
            <span class="tech-badge">MySQL</span>
            <span class="tech-badge">MongoDB</span>
          </div>
        </div>

        <div class="group relative bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
          <div class="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          
          <div class="relative w-16 h-16 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-primary-500/20 group-hover:scale-110 transition-all duration-300">
            <svg class="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          
          <h3 class="text-white font-bold text-xl mb-4 relative z-10">Frontend & Mobile</h3>
          
          <div class="flex flex-wrap justify-center gap-2 relative z-10">
            <span class="tech-badge">Vue.js 3</span>
            <span class="tech-badge">Nuxt 3</span>
            <span class="tech-badge">Quasar (PWA)</span>
            <span class="tech-badge">Flutter (Dart)</span>
            <span class="tech-badge">Tailwind CSS</span>
            <span class="tech-badge">Pinia</span>
          </div>
        </div>

        <div class="group relative bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
          <div class="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          
          <div class="relative w-16 h-16 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-primary-500/20 group-hover:scale-110 transition-all duration-300">
            <svg class="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          </div>
          
          <h3 class="text-white font-bold text-xl mb-4 relative z-10">IA & Data Science</h3>
          
          <div class="flex flex-wrap justify-center gap-2 relative z-10">
            <span class="tech-badge">TensorFlow.js</span>
            <span class="tech-badge">Edge AI</span>
            <span class="tech-badge">Power BI</span>
            <span class="tech-badge">Google Sheets</span>
            <span class="tech-badge">R (Básico)</span>
          </div>
        </div>

        <div class="group relative bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
          <div class="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          
          <div class="relative w-16 h-16 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-primary-500/20 group-hover:scale-110 transition-all duration-300">
            <svg class="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          
          <h3 class="text-white font-bold text-xl mb-4 relative z-10">DevOps & Tools</h3>
          
          <div class="flex flex-wrap justify-center gap-2 relative z-10">
            <span class="tech-badge">Docker</span>
            <span class="tech-badge">GitFlow</span>
            <span class="tech-badge">CI/CD</span>
            <span class="tech-badge">Jira / Scrum</span>
            <span class="tech-badge">Figma</span>
            <span class="tech-badge">Postman</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Clase reutilizable para los badges de tecnología */
.tech-badge {
  @apply px-3 py-1.5 bg-white/5 border border-white/10 text-slate-300 text-xs font-medium rounded-lg hover:bg-white/10 hover:text-white hover:border-primary-500/30 transition-colors cursor-default;
}
</style>