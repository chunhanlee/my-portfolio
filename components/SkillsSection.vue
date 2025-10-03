<template>
    <section id="skills" class="py-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm scroll-mt-header">
      <div class="container mx-auto px-4 max-w-6xl">
        <h2 class="text-4xl font-bold text-center mb-6 dark:text-white">Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="skill in skills" :key="skill.name" class="text-center">
            <img :src="skill.image" :alt="skill.name" class="w-16 h-16 object-contain mx-auto mb-2" />
            <p class="text-gray-700 dark:text-gray-300">{{ skill.name }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
import { usePublicAsset } from '~/composables/usePublicAsset'

const publicAsset = (file: string) => usePublicAsset(`images/${file}`)

const skills = [
  { name: 'Python', image: publicAsset('python.svg') },
  { name: 'Django', image: publicAsset('django.svg') },
  { name: 'Flask', image: publicAsset('flask.svg') },
  { name: 'React', image: publicAsset('react.svg') },
  { name: 'HTML5', image: publicAsset('html5.svg') },
  { name: 'CSS3', image: publicAsset('css.svg') },
  { name: 'JavaScript', image: publicAsset('javascript.svg') },
  { name: 'Vue.js', image: publicAsset('vuejs.svg') },
  { name: 'Blazor', image: publicAsset('blazor.svg') },
  { name: 'Bootstrap', image: publicAsset('bootstrap.svg') },
  { name: 'C#', image: publicAsset('csharp.svg') },
  { name: 'CSS', image: publicAsset('css.svg') },
  { name: 'SQL', image: publicAsset('database.svg') },
  { name: 'Git', image: publicAsset('git.svg') },
  { name: 'Docker', image: publicAsset('docker.svg') }
]
</script>

  