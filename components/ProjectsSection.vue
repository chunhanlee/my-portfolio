<template>
  <section id="projects" class="py-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm scroll-mt-header">
    <div class="container mx-auto px-4 max-w-6xl">
      <h2 class="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.title"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePublicAsset } from '~/composables/usePublicAsset'

const projects = [
  {
    title: 'My Portfolio Website',
    description: 'Using Nuxt to create a static portfolio website \n Stack used: Nuxt, TailwindCSS, Hosted on GitHub Pages',
    image: usePublicAsset('images/portfolio.jpg'),
    githubUrl: 'https://github.com/chunhanlee/my-portfolio'
  },
  {
    title: 'Personal Food Website',
    description: 'A personal project translating a book 中國傳統飲食宜忌全書 into a website. Currently in version 1.0. \nStack used: Python, SQLite, Flask, Hosted on Vercel',
    image: usePublicAsset('images/personal_food_website.png'),
    githubUrl: 'https://local-food-website-4cs34879w-chun-hans-projects.vercel.app/'
  }
];
</script> 