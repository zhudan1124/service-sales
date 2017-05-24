/* Copyright (c) 2017. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: jake Created:03/30/2017
 */
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let plugins = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jsPdf: 'jspdf',
    html2canvas: 'html2canvas',
    echarts: 'echarts'
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    minChunks: function (module) {
      // this assumes your vendor imports exist in the node_modules directory
      return module.context && module.context.indexOf('node_modules') !== -1
    }
  }),
  //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
  }),
  new ExtractTextPlugin('static/css/[name].[hash:8].min.css'),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: require('../vendor/postcss.config')
    }
  })
]

module.exports = plugins
