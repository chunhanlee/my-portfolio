<template>
  <section class="h-screen mx-auto flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
    <div class="flex flex-col md:flex-row items-center justify-center gap-12 px-4">
      <div class="text-center space-y-6">
        <h2 class="text-4xl md:text-6xl font-bold">
          Hello, I'm <span class="text-blue-600">John(Chun-Han) Lee</span>
        </h2>
        <p class="text-gray-600 text-lg">A Passionate Software Developer</p>
        <div class="space-x-4">
          <a href="#about" class="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700"
            @click="handleNavClick">About Me</a>
          <a href="#contact"
            class="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-600 hover:text-white"
            @click="handleNavClick">
            Contact
          </a>
        </div>
      </div>
      <div>
        <img src="/images/hero-image.jpg" alt="Hero Image"
          class="w-40 h-40 md:w-60 md:h-60 rounded-full shadow-lg object-cover" />
      </div>
    </div>
  </section>
</template>

<script setup>
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
</script>
