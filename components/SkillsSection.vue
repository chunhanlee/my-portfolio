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
  
  <script setup>
  const skills = [
    { name: 'Python', image: '~/public/images/python.svg' },
    { name: 'Django', image: '~/public/images/django.svg' },
    { name: 'Flask', image: '~/public/images/flask.svg' },
    { name: 'React', image: '~/public/images/react.svg' },
    { name: 'HTML5', image: '~/public/images/html5.svg' },
    { name: 'CSS3', image: '~/public/images/css.svg' },
    { name: 'JavaScript', image: '~/public/images/javascript.svg' },
    { name: 'Vue.js', image: '~/public/images/vuejs.svg' },
    { name: 'Blazor', image: '~/public/images/blazor.svg' },
    { name: 'Bootstrap', image: '~/public/images/bootstrap.svg' },
    { name: 'C#', image: '~/public/images/csharp.svg' },
    { name: 'CSS', image: '~/public/images/css.svg' },
    { name: 'SQL', image: '~/public/images/database.svg' },
    { name: 'Git', image: '~/public/images/git.svg' },
    { name: 'Docker', image: '~/public/images/docker.svg' }

  ];
  </script>
  