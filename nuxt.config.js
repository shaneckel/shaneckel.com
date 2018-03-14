module.exports = {
  head: {
    title: 'Shane Eckel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Creative Developer From Pittsburgh, Pa.' },
      { hid: 'author', name: 'author', content: 'Shane Eckel' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '//cloud.typography.com/6038632/763602/css/fonts.css' }
    ]
  },
  router: {
    middleware: 'navigation'
  },
  css: [
    { src: '~assets/scss/main.scss', lang: 'scss' }
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  plugins: [
    '~/plugins/axios',
    { src: '~plugins/analytics.js', ssr: false }
  ],
  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? 'https://shaneckel.com' : 'http://localhost:3000'
    // baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
  },
  loading: '~/components/Loading.vue',
  build: {
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
