<template>
  <section id="contact" class="py-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm scroll-mt-header">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="max-w-lg mx-auto">
        <h2 class="text-4xl font-bold text-center mb-6">Contact <span class="text-blue-600">Me</span></h2>
        <form 
          name="contact"
          method="POST"
          data-netlify="true"
          @submit.prevent="submitForm"
          class="space-y-4"
        >
          <!-- Required hidden input for Netlify -->
          <input type="hidden" name="form-name" value="contact" />
          
          <input
            v-model="name"
            name="name"
            placeholder="Your Name"
            class="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
          <input
            v-model="email"
            name="email"
            placeholder="Your Email"
            type="email"
            class="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
          <textarea
            v-model="message"
            name="message"
            placeholder="Your Message"
            rows="4"
            class="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          ></textarea>
          <button 
            type="submit" 
            class="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 disabled:bg-blue-300"
            :disabled="loading"
          >
            {{ loading ? 'Sending...' : 'Send' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const loading = ref(false);

function submitForm(e) {
  loading.value = true;
  
  // Get the form data
  const formData = new FormData(e.target);
  
  // Submit to Netlify
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      // Clear form
      name.value = '';
      email.value = '';
      message.value = '';
      alert('Thank you for your message!');
    })
    .catch((error) => {
      alert('Oops! There was a problem submitting your form');
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>
  