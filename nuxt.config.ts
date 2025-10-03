// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app:{
    baseURL: '/my-portfolio/'
  },
  css:['assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: [],
  nitro: {
    preset: 'github_pages',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/resume'],
    },
  },
})
