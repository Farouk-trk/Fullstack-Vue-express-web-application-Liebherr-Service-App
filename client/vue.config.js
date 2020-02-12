const path = require('path')
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  outputDir: path.resolve(__dirname, '../public'),
  devServer: {
    // Paths
    proxy: {
      '/users': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
