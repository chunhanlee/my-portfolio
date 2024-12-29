<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComponent />
    <main class="flex-grow">
      <slot />
    </main>
    <SocialLinks />
    <Footer />
  </div>
</template>
