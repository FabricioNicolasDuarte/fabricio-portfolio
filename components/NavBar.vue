<template>
  <nav class="fixed w-full z-50 top-0 transition-all duration-300" :class="isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0 cursor-pointer" @click="scrollToSection('hero')">
          <span class="text-xl font-bold text-white tracking-tight">
            fabricioduarte<span class="text-primary-400">.tech</span>
          </span>
        </div>
        
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <button v-for="item in navItems" :key="item.name" @click="scrollToSection(item.id)" class="text-slate-300 hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              {{ item.name }}
            </button>
          </div>
        </div>

        <div class="-mr-2 flex md:hidden">
          <button type="button" class="bg-slate-900 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none">
            <MenuIcon class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu as MenuIcon } from 'lucide-vue-next'

const isScrolled = ref(false)
const navItems = [
  { name: 'Inicio', id: 'hero' },
  { name: 'Sobre Mí', id: 'about' },
  { name: 'Proyectos', id: 'projects' },
  { name: 'Stack', id: 'stack' },
  { name: 'Contacto', id: 'footer' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>