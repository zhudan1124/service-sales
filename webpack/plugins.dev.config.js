/* Copyright (c) 2017. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: jake Created:03/30/2017
 */
const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dirVars = require('./base/dir_vars.config')

let plugins = require('./common/plugins.config')

plugins.push(new HtmlWebpackPlugin({
    version: dirVars.version,
    template: 'templates/index.tpl.local.html',
    favicon: 'static/img/favicon.ico',
    inject: 'body',
    filename: 'index.html',
    chunks: ['manifest', 'common', 'index']
  }))

plugins.push(new HtmlWebpackPlugin({
  version: dirVars.version,
  template: 'templates/v2.tpl.local.html',
  favicon: 'static/img/favicon.ico',
  inject: 'body',
  filename: 'v2.html',
  chunks: ['manifest', 'common', 'v2']
}))

let cwpDev = dirVars.cwpDev
for (let dep in dirVars.depsDev) {
  cwpDev.push({from: path.join(dirVars.nodeModulesDir, dirVars.depsDev[dep]), to: path.join(dirVars.distDir, './static/js')})
}
plugins.push(new CopyWebpackPlugin(cwpDev))

module.exports = plugins
