/* Copyright (c) 2017. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: jake Created:04/01/2017
 */
const path = require('path')
const dirVars = require('./base/dir_vars.config')
let loaders = require('./common/loaders.config')

for (let dep in dirVars.depsDev) {
  loaders.noParse.push(path.join(dirVars.nodeModulesDir, dirVars.depsDev[dep]))
}

module.exports = loaders
