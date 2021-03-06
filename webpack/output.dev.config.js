/* Copyright (c) 2017. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: jake Created:03/31/2017
 */
const dirVars = require('./base/dir_vars.config')
module.exports = Object.assign(require('./common/output.config'), {
  filename: '[name].[hash:8].js',
  chunkFilename: '[name].[hash:8].chunk.js',
  publicPath: `${dirVars.hostDev}:${dirVars.portDev}/`
})
