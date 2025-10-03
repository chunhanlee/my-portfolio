<template>
  <section id="about" class="py-20 bg-white/60 dark:bg-gray-900/80 backdrop-blur-sm scroll-mt-header">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="relative rounded-3xl p-[1px] bg-gradient-to-r from-blue-600/30 via-sky-500/20 to-indigo-500/30">
        <div class="rounded-3xl bg-white dark:bg-gray-900 p-8 md:p-12 text-center">
          <h2 class="text-4xl font-bold">About <span class="text-blue-600">Me</span></h2>

          <p class="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            I’m <b>John (Chun-Han) Lee</b>, a Full-Stack Developer blending real-world business experience with deep technical chops.
            From programming in Taiwan to real estate and renovation management, I’ve learned to deliver under pressure and
            communicate with clarity. I now build <b>AI-powered apps, full-stack platforms, and mobile solutions</b> that are
            practical and human-centered—always aiming to <b>bridge people and possibility</b>.
          </p>

          <!-- mini stats -->
          <div class="mt-8 grid grid-cols-3 gap-4 text-sm">
            <div class="rounded-xl bg-gray-50 dark:bg-white/5 p-4">
              <div class="font-semibold">AI + Full-Stack</div>
              <div class="text-gray-500 dark:text-gray-400">FastAPI · Next.js</div>
            </div>
            <div class="rounded-xl bg-gray-50 dark:bg-white/5 p-4">
              <div class="font-semibold">Data</div>
              <div class="text-gray-500 dark:text-gray-400">Postgres · Supabase</div>
            </div>
            <div class="rounded-xl bg-gray-50 dark:bg-white/5 p-4">
              <div class="font-semibold">Mobile</div>
              <div class="text-gray-500 dark:text-gray-400">Flutter</div>
            </div>
          </div>

          <div class="mt-8">
            <a :href="resumeUrl" target="_blank" rel="noopener"
               class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
              View Résumé
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { joinURL } from 'ufo'

const runtimeConfig = useRuntimeConfig()
const resumeUrl = computed(() => joinURL(runtimeConfig.app.baseURL ?? '/', 'resume.pdf'))
</script>
