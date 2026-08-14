<template>
  <section id="blog" class="py-32 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
    
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center mb-20" v-motion-slide-visible-once-bottom>
        <span class="text-primary-500 font-bold tracking-widest text-sm uppercase mb-2 block">Blog & Recursos</span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Notas de trabajo</h2>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg">
          IA de campo, BI institucional y automatización: lo que queda cuando el demo termina.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <article 
          v-for="(post, index) in posts" 
          :key="post.slug" 
          class="group flex flex-col h-full bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden hover:border-primary-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-900/10 hover:-translate-y-2"
          v-motion-slide-visible-once-bottom
          :delay="index * 150"
        >
          <div class="h-56 overflow-hidden relative">
            <img 
              :src="post.image" 
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
              :alt="post.title" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-slate-950/80 backdrop-blur border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider" :class="post.color">
                {{ post.category }}
              </span>
            </div>
          </div>
          
          <div class="p-8 flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors leading-snug">
              {{ post.title }}
            </h3>
            
            <p class="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
              {{ post.excerpt }}
            </p>
            
            <div class="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
              <NuxtLink :to="'/blog/' + post.slug" class="inline-flex items-center text-sm font-bold text-white group-hover:text-primary-400 transition-colors">
                Leer artículo
                <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </NuxtLink>
              <span class="text-xs text-slate-600 font-medium">Lectura de 5 min</span>
            </div>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>

<script setup>
const posts = [
  {
    slug: 'ia-ganaderia', 
    title: 'IA que escribe en el dominio, no en el chat',
    category: 'Inteligencia Artificial',
    color: 'text-primary-400',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    excerpt: 'De Nutrogan (visión offline) a SIGAG: voz, Gemini y Next Best Action. Si la IA no crea una OT o un pesaje, no sirve en el potrero.'
  },
  {
    slug: 'govtech-burocracia',
    title: 'El tablero no es el producto: la decisión sí',
    category: 'Datos & Estado',
    color: 'text-indigo-400',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Superset, Power BI y GIS institucional. Cómo intervengo en motores de BI y sistemas del Estado para que el dato llegue a quien gobierna.'
  },
  {
    slug: 'arquitectura-vue',
    title: 'Automatizar el aburrido: sync, colas y ETL',
    category: 'Automatización',
    color: 'text-emerald-400',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop',
    excerpt: 'Offline-first, webhooks, Celery y reportes. La automatización seria es la que no se ve: conciliar, sincronizar y auditar sin que nadie pulse F5.'
  }
]
</script>
