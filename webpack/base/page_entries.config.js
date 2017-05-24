/* Copyright (c) 2017. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: jake Created:03/30/2017
 */
const glob = require('glob')
const dirVars = require('./dir_vars.config')
const options = {
  cwd: dirVars.entryDir,
  sync: true
}
const globInstance = new glob.Glob('*.js', options)
module.exports = globInstance.found
