// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {enabled: true},
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n'
  ],
  css: ['~/assets/css/main.css'],
  pinia: {
    /**
     * Automatically add stores dirs to the auto imports. This is the same as
     * directly adding the dirs to the `imports.dirs` option. If you want to
     * also import nested stores, you can use the glob pattern `./stores/**`
     * (on Nuxt 3) or `app/stores/**` (on Nuxt 4+)
     *
     * @default `['stores']`
     */
    storesDirs: ['app/stores/**']
  },
  eslint: {
    config: {
      stylistic: true
    }
  },
  i18n: {
    locales: [
      {code: 'es', language: 'es-ES'},
      {code: 'pt', language: 'pt-BR'},
      {code: 'en', language: 'en-US'},
    ],
    defaultLocale: 'es',
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000/api'
    }
  }
})