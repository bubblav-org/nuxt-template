// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/icon'],
  colorMode: {
    classSuffix: '',
    fallback: 'system',
    storageKey: 'nuxt-color-mode',
  },
  runtimeConfig: {
    public: {
      bubblavWebsiteId: process.env.NUXT_PUBLIC_BUBBLAV_WEBSITE_ID || '',
    },
  },
  app: {
    head: {
      title: 'BubblaV AI Chatbot - Nuxt Starter Template',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'A fast, intelligent AI chatbot for your website. Deploy in 5 minutes with no coding required. Powered by Google Gemini 2.5 Flash.',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
})
