'use strict'
var ip = 'http://h.jids.cn/'
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
  },
  devServer: {
    proxy: {
      '/job': {
        target: ip,
        changeOrigin: true,
        pathRewrite: {
          '^/job': '/job'
        }
      },
      '/host': {
        target: ip,
        changeOrigin: true,
        pathRewrite: {
          '^/host': '/host'
        }
      },
      '/task': {
        target: ip,
        changeOrigin: true,
        pathRewrite: {
          '^/task': '/task'
        }
      },
      '/log': {
        target: ip,
        changeOrigin: true,
        pathRewrite: {
          '^/log': '/log'
        }
      },
      '/util': {
        target: ip,
        changeOrigin: true,
        pathRewrite: {
          '^/util': '/util'
        }
      },
      '/article': {
        target: ip,
        changeOrigin: true,
        pathRewrite: {
          '^/article': '/article'
        }
      },
      '/config': {
        target: ip,
        changeOrigin: true,
        pathRewrite: {
          '^/config': '/config'
        }
      }
    }
  }
}
