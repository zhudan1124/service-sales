/* Copyright (c) 2017. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: jake Created:03/31/2017
 */
const path = require('path')
const dirVars = require('../base/dir_vars.config')
module.exports = {
  path: dirVars.distDir,
  filename: '[name].[chunkhash:8].js',
  chunkFilename: '[name].[chunkhash:8].chunk.js',
  publicPath: `${dirVars.apiProd}/`
}
