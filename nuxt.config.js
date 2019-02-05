module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mrsite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.node = {
          fs: 'empty',
          tls: 'empty',
          net: 'empty'
        }
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    { src: '~/plugins/fancybox', ssr: false },
    { src: '~/plugins/vue-yandex-maps', ssr: false },
    { src: '~/plugins/swiper', ssr: false },
  ],
  modules: [
    'cookie-universal-nuxt',
  ]
}

