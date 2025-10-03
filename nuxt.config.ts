// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'
const isProd = process.env.NODE_ENV === 'production'
export default defineNuxtConfig({
  ssr: true,
  app:{
    baseURL: isProd ? '/my-portfolio/' : '/',
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
    routeRules: {
      '/resume': { redirect: '/resume.pdf' },
    },
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
})
