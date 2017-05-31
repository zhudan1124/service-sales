/* Copyright (c) 2017. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: jake Created:03/31/2017
 */
const dirVars = require('../base/dir_vars.config')
let indexPath = dirVars.distDir
if (process.env.npm_lifecycle_event === 'prod') {
  indexPath = dirVars.buildDir
}
module.exports = {
  path: indexPath,
  filename: '[name].[chunkhash:8].js',
  chunkFilename: '[name].[chunkhash:8].chunk.js',
  publicPath: `${dirVars.apiProd}/`
}
