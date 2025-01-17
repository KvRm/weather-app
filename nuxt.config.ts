import { createResolver } from 'nuxt/kit'

const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      owApiSecret: '',
    },
  },
  imports: {
    dirs: [
      './api/**/**',
      './services/**/**',
      './composables/**/**',
      './constants/**/**',
      './utils/**/**',
    ],
  },
  modules: ['@unocss/nuxt', '@vueuse/nuxt'],
  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/vars.css',
    '~/styles/global.css',
  ],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    publicAssets: [
      {
        dir: resolve('./public/fonts'),
        maxAge: 24 * 60 * 60 * 365,
        baseURL: '/fonts',
      },
    ],
  },
  vite: {
    build: {
      target: 'esnext',
    },
  },
  devServer: {
    port: 1111,
  },
})
