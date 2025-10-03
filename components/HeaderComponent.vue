<template>
  <header class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md fixed top-0 w-full z-10">
    <div class="container mx-auto px-4 max-w-6xl flex justify-between items-center p-4">
      <h1 class="text-2xl font-bold dark:text-white">John(Chun-Han) Lee</h1>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-4">
        <ul class="flex space-x-4">
          <li><a href="#about" class="hover:text-blue-500 dark:text-white" @click="handleNavClick">About</a></li>
          <li><a href="#skills" class="hover:text-blue-500 dark:text-white" @click="handleNavClick">Skills</a></li>
          <li><a href="#education" class="hover:text-blue-500 dark:text-white" @click="handleNavClick">Education</a></li>
          <li><a href="#projects" class="hover:text-blue-500 dark:text-white" @click="handleNavClick">Projects</a></li>
          <li><a href="mailto:lee.chunhan8@gmail.com" class="hover:text-blue-500 dark:text-white">Contact</a></li>
          <li>
            <a 
              :href="resumeUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="hover:text-blue-500 dark:text-white flex items-center gap-1"
            >
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </li>
        </ul>
        <DarkModeToggle />
      </nav>
      
      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center space-x-2">
        <DarkModeToggle />
        <button 
          class="text-2xl p-2 dark:text-white" 
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <!-- Hamburger Icon -->
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Navigation -->
    <nav
      v-show="isMenuOpen"
      class="md:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg w-full overflow-hidden transition-all duration-300"
      :class="{ 'max-h-0': !isMenuOpen, 'max-h-[300px]': isMenuOpen }"
    >
      <div class="container mx-auto px-4 max-w-6xl py-4 flex flex-col space-y-4">
        <a href="#about" class="hover:text-blue-500 dark:text-white transition-colors duration-300" @click="handleNavClick">About</a>
        <a href="#skills" class="hover:text-blue-500 dark:text-white transition-colors duration-300" @click="handleNavClick">Skills</a>
        <a href="#education" class="hover:text-blue-500 dark:text-white transition-colors duration-300" @click="handleNavClick">Education</a>
        <a href="#projects" class="hover:text-blue-500 dark:text-white transition-colors duration-300" @click="handleNavClick">Projects</a>
        <a href="mailto:lee.chunhan8@gmail.com" class="hover:text-blue-500 dark:text-white transition-colors duration-300">Contact</a>
        <a 
          :href="resumeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-blue-500 dark:text-white transition-colors duration-300 flex items-center gap-1"
        >
          Resume
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue';
import { joinURL } from 'ufo';
import DarkModeToggle from './DarkModeToggle.vue';

const isMenuOpen = ref(false);
const runtimeConfig = useRuntimeConfig()
const resumeUrl = computed(() => joinURL(runtimeConfig.app.baseURL ?? '/', 'resume.pdf'))


function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function handleNavClick(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').slice(1);
  const element = document.getElementById(targetId);
  
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // 80px header offset
      behavior: 'smooth'
    });
    
    closeMenu();
  }
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<style scoped>
nav {
  transition: all 0.5s ease-in-out;
}

/* Remove v-show transition flicker */
nav[v-show] {
  display: block !important;
}
</style>
