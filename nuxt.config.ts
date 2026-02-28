// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      projectName: ''
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png'}
      ]
    }
  },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
  ],
  css: [
    '~/assets/css/main.css'
  ],
  icon: {
    serverBundle: 'local',
    aliases: {
      'fas': 'fa-solid',
      'far': 'fa-regular',
      'fab': 'fa-brands'
    }
  },
  future: {
    compatibilityVersion: 4
  },
})