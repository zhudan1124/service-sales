/* Copyright (c) 2017. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: jake Created:03/31/2017
 */
const path = require('path')
const dirVars = require('./base/dir_vars.config')
const pageEntries = require('./base/page_entries.config')
let entries = {
  common: ['react', 'react-dom', 'react-router', 'redux', 'react-redux', 'immutable', 'file-saver']
}
pageEntries.forEach((page) => {
  entries[page.replace(/\.\w+$/,'')] = path.join(dirVars.entryDir, page)
})

module.exports = entries
