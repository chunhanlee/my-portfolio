<template>
  <section class="h-screen mx-auto flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
    <div class="container mx-auto px-4 max-w-6xl grid md:grid-cols-12 gap-10 items-center">
      <!-- Left: text -->
      <div class="md:col-span-8 text-center md:text-left">
        <h1 class="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
          Hello, I’m <span class="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
            John (Chun-Han) Lee
          </span>
        </h1>

        <!-- typewriter line -->
        <p class="mt-3 text-lg md:text-xl text-gray-700 dark:text-gray-300 font-mono">
          {{ typed }}
          <span class="ml-1 inline-block align-middle w-0.5 h-6 bg-current animate-pulse"></span>
        </p>

        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl md:leading-relaxed mx-auto md:mx-0">
          I build <b>AI-powered apps</b> and <b>full-stack platforms</b> that turn messy workflows
          into smooth, human-centered experiences.
        </p>

        <div class="mt-7 flex flex-wrap items-center justify-center md:justify-start gap-3">
          <a href="#about" @click="handleNavClick"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            About Me
          </a>
          <a :href="resumeUrl" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-white/10
                    hover:bg-gray-50 dark:hover:bg-white/5 transition">
            Résumé
          </a>
        </div>
      </div>

      <!-- Right: image -->
      <div class="md:col-span-4">
        <div class="flex justify-center md:justify-end">
          <img :src="heroImageUrl" alt="John (Chun-Han) Lee"
            class="w-40 h-40 md:w-60 md:h-60 rounded-full" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { usePublicAsset } from '~/composables/usePublicAsset'

const resumeUrl = usePublicAsset('resume.pdf')
const heroImageUrl = usePublicAsset('images/hero-image.jpg')

const roles = ['Full-Stack Developer', 'AI Builder', 'Problem Solver']
const typed = ref('')
let i = 0, j = 0, deleting = false, timer: any

onMounted(() => {
  timer = setInterval(() => {
    const word = roles[i]
    if (!deleting) {
      // type forward
      typed.value = word.slice(0, j++)
      if (j === word.length + 6) deleting = true // brief pause at full word
    } else {
      // delete backward
      typed.value = word.slice(0, j--)
      if (j === 0) { deleting = false; i = (i + 1) % roles.length }
    }
  }, 80)
})
onBeforeUnmount(() => clearInterval(timer))

declare function closeMenu(): void;

const handleNavClick = (event: PointerEvent): void => {
  event.preventDefault();
  const anchor = event.currentTarget as HTMLAnchorElement | null;
  if (!anchor) return;

  const targetId = anchor.getAttribute('href')!.slice(1);
  const element = document.getElementById(targetId);

  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // 80px header offset
      behavior: 'smooth'
    });
    closeMenu();
  }
}
</script>
