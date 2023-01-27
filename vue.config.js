'use strict'
const prefixhost = require('./qiniu-upload-prefiex.js');
const prefix = require('./qiniu-upload-prefiex.js');
var productionUrl = prefixhost + prefix //生产地址

var developmentUrl = '/' // 开发地址
const webpack = require('webpack')
module.exports = {
  runtimeCompiler: true,
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? productionUrl : developmentUrl,
  assetsDir: './',
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
