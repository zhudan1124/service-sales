/* Copyright (c) 2017. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: jake Created:03/31/2017
 */
const path = require('path')
const dirVars = require('./base/dir_vars.config')
let resolves = {
  extensions: ['.js', '.jsx', '.css', '.scss'],
  alias: {}
}
for (let dep in dirVars.depsDev) {
  let depPath = path.join(dirVars.nodeModulesDir, dirVars.depsDev[dep])
  resolves.alias[dep] = depPath
}
module.exports = resolves
