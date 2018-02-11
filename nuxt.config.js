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
  loading: '~/components/Loading.vue',
  build: {
    vendor: [
      'axios'
    ],
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
