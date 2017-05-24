/* Copyright (c) 2017. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: jake Created:03/30/2017
 */
const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dirVars = require('./base/dir_vars.config')

// Write version to version file for docker using
fs.writeFile(path.join(dirVars.rootDir, 'version'), dirVars.version.split('.').pop())

let plugins = require('./common/plugins.config')
plugins.push(new HtmlWebpackPlugin({
  version: dirVars.version,
  template: 'templates/index.tpl.html',
  favicon: 'static/img/favicon.ico',
  inject: 'body',
  filename: 'index.html',
  chunks: ['manifest', 'common', 'index']
}))
plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
}))
// plugins.push(new webpack.optimize.MinChunkSizePlugin({
//   minChunkSize: 51200
// }))
plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  },
  sourceMap: false,
  except: ['$super', '$', 'exports', 'require']
}))
plugins.push(new webpack.LoaderOptionsPlugin({
  minimize: true,
  options: {
    postcss: require('./vendor/postcss.config')
  }
}))
let cwpProd = dirVars.cwpProd
for (let dep in dirVars.depsProd) {
  cwpProd.push({from: path.join(dirVars.nodeModulesDir, dirVars.depsProd[dep]), to: path.join(dirVars.distDir, './static/js')})
}
plugins.push(new CopyWebpackPlugin(cwpProd))

module.exports = plugins
