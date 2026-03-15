// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBase: process.env.BACKEND_URL,
    },
  },
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        semi: false,
        indent: 2,
      },
    },
  },
  i18n: {
    detectBrowserLanguage: false,
    strategy: 'prefix_except_default',
    defaultLocale: 'es',
    locales: [
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Español',
        file: 'es.json',
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
      },
    ],
  },
  pinia: {
    /**
     * Automatically add stores dirs to the auto imports. This is the same as
     * directly adding the dirs to the `imports.dirs` option. If you want to
     * also import nested stores, you can use the glob pattern `./stores/**`
     * (on Nuxt 3) or `app/stores/**` (on Nuxt 4+)
     *
     * @default `['stores']`
     */
    storesDirs: ['app/stores/**'],
  },
})
