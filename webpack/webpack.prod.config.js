/* Copyright (c) 2017. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: jake Created:03/31/2017
 */
const StringReplacePlugin = require('string-replace-webpack-plugin')
const dirVars = require('./base/dir_vars.config')

//MODULE
let modules = require('./loaders.prod.config')
modules.rules.push({
  enforce: 'pre',
  test: /src\/commons\/index.jsx$/,
  loader: StringReplacePlugin.replace({
    replacements: [
      {
        pattern: /__SITE_URL__/ig,
        replacement: function (match, offset, string) {
          return dirVars.apiProd
        }
      }, {
        pattern: /__WS_URL__/ig,
        replacement: function (match, offset, string) {
          return dirVars.wsProd
        }
      }
    ]})
})

module.exports = {
  devtool: '#cheap-module-source-map',
  entry: require('./entry.config'),
  output: require('./common/output.config'),
  module: modules,
  resolve: require('./resolve.config'),
  plugins: require('./plugins.prod.config'),
  externals: require('./externals.config')
}
