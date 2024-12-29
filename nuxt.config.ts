// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, './'),
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
  plugins: []
})
