<!-- looking to create a project cards to display in a section -->
<template>
  <div class="project-card bg-white dark:bg-gray-800" v-if="project">
    <img :src="project.image" :alt="project.title" class="project-image">
    <div class="project-content">
      <h3 class="project-title text-gray-900 dark:text-white">{{ project.title }}</h3>
      <p class="project-description text-gray-600 dark:text-gray-300">{{ project.description }}</p>
      <a :href="project.githubUrl" target="_blank" class="learn-more-btn">
        Learn More
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true,
      default: () => ({
        title: '',
        description: '',
        image: '',
        githubUrl: ''
      })
    }
  }
}
</script>

<style scoped>
.project-card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.project-description {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.learn-more-btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.learn-more-btn:hover {
  background-color: #1d4ed8;
}
</style>