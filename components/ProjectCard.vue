<template>
  <div class="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col h-full">
    <div class="relative h-48 bg-slate-800 overflow-hidden">
        <div class="absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-600 group-hover:scale-105 transition-transform duration-500">
            <span class="text-sm">Captura: {{ image }}</span>
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
    </div>

    <div class="p-6 flex-1 flex flex-col">
      <h3 class="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{{ title }}</h3>
      <p class="text-slate-400 text-sm mb-4 flex-1">{{ description }}</p>
      
      <div class="flex flex-wrap gap-2 mt-auto">
        <span v-for="tag in tags" :key="tag" class="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  tags: Array
})
</script>