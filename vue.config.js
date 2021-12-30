'use strict'
const webpack = require('webpack')
module.exports = {
  publicPath: '',
  productionSourceMap: false,
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  }
}
