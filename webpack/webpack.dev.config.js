/* Copyright (c) 2017. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: jake Created:03/31/2017
 */
const StringReplacePlugin = require('string-replace-webpack-plugin')
const dirVars = require('./base/dir_vars.config')

process.traceDeprecation = true

//MODULE
let modules = require('./loaders.dev.config')
modules.rules.push({
  enforce: 'pre',
  test: /src\/commons\/index.jsx$/,
  loader: StringReplacePlugin.replace({
    replacements: [
      {
        pattern: /__SITE_URL__/ig,
        replacement: function (match, offset, string) {
          return dirVars.apiDev
        }
      }, {
        pattern: /__WS_URL__/ig,
        replacement: function (match, offset, string) {
          return dirVars.wsDev
        }
      }
    ]})
})

module.exports = {
  devtool: 'eval',
  entry: require('./entry.config'),
  output: require('./output.dev.config'),
  module: modules,
  resolve: require('./resolve.config'),
  plugins: require('./plugins.dev.config'),
  externals: require('./externals.config'),
  devServer: require('./vendor/devserver.config')
}
