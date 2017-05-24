/* Copyright (c) 2017. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: jake Created:03/31/2017
 */
const dirVars = require('../base/dir_vars.config')
module.exports = {
  historyApiFallback: true,
  port: dirVars.portDev,
  hot: true,
  inline: true,
  stats: {
    colors: {
      green: '\u001b[32m'
    }
  }
}
