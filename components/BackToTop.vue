<template>
    <div
      class="fixed cursor-pointer rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-opacity duration-500 opacity-0 flex items-center justify-center"
      :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }"
      :style="{ bottom, right, width: '60px', height: '60px', transition: `opacity 0.5s ease-in-out` }"
      @click="scrollToTop"
    >
    <ChevronUpIcon class="w-6 h-6" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, watch } from 'vue';
  import { ChevronUpIcon } from '@heroicons/vue/24/solid';
  
  // Reactive state for visibility
  const isVisible = ref(false);
  const fadeProgress = ref(0);
  const bottom = ref('50px');
  const right = ref('50px');
  
  // Destructure props from defineProps
  const { visibleOffset } = defineProps({
    visibleOffset: {
      type: Number,
      default: 300, // Show the button when scrolled this far
    },
  });

  // Adjust position dynamically based on screen size
  const adjustPosition = () => {
    if (window.innerWidth <= 768) {
      bottom.value = '20px';
      right.value = '10px'; // Move closer to the center for smaller screens
    } else {
      bottom.value = '50px';
      right.value = '50px';
    }
  };
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > visibleOffset) {
      fadeProgress.value = Math.min((scrollPosition - visibleOffset) / 100, 1); // Gradual fade-in
      isVisible.value = true;
    } else {
      fadeProgress.value = 0;
      isVisible.value = false;
    }
  };

  watch(fadeProgress, (newValue) => {
    document.querySelector('[v-show]')?.style.setProperty('opacity', newValue);
  });
  
  // Register and cleanup event listeners
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', adjustPosition);
    adjustPosition(); // Set initial position
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', adjustPosition);
  });
  </script>

  <style scoped>
  .opacity-0 {
    pointer-events: none; /* Prevent interaction when invisible */
  }
  .opacity-100 {
    pointer-events: auto; /* Enable interaction when visible */
  }
  </style>
