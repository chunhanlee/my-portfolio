<template>
  <div>
    <HeaderComponent />
    <BackgroundPattern />
    <main>
      <NuxtPage />
    </main>
    <SocialLinks />
    <Footer />
  </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import BackgroundPattern from './components/BackgroundPattern.vue'
import SocialLinks from './components/SocialLinks.vue'
import Footer from './components/Footer.vue'
</script>
