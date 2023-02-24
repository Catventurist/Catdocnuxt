export default defineNuxtConfig({
  telemetry: false,
  extends: '@nuxt-themes/docus',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
