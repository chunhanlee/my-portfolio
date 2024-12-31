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
const projects = [
  {
    title: 'My Portfolio Website',
    description: 'Using Nuxt to create a static portfolio website',
    image: '/images/portfolio.jpg',
    githubUrl: '#'
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: '/images/nait.jpg',
    githubUrl: '#'
  }
];
</script> 