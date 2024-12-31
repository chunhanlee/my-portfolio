<template>
  <section id="contact" class="py-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm scroll-mt-header">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="max-w-lg mx-auto">
        <h2 class="text-4xl font-bold text-center mb-6">Contact <span class="text-blue-600">Me</span></h2>
        <form 
          name="contact"
          method="POST"
          data-netlify="true"
          class="space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <div class="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              class="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>

          <div class="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              class="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>

          <div class="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              class="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            class="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
  