<template>
  <div class="font-sans text-gray-900 dark:text-white">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <EducationSection />
    <ProjectsSection />
    <BackToTop />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import EducationSection from '../components/EducationSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import BackToTop from '../components/BackToTop.vue'
</script>
