// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    
    './assets/styles/stmicons.css',
    
  ],
  app: {
    head: {
      script: [
        { src: 'https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js' }
      ]
    }
  }
})
