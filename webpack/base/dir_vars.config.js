/* Copyright (c) 2017. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: jake Created:03/30/2017
 */
const path = require('path')
const date = new Date()
let varsExports = {}
const pad = function (num, n = 2) {
  let len = num.toString().length
  while(len < n) {
    num = '0' + num
    len++
  }
  return num
}
varsExports.pad = pad
varsExports.rootDir = path.resolve(__dirname, '../../')
varsExports.nodeModulesDir = path.join(varsExports.rootDir, './node_modules')
varsExports.version = `${date.getFullYear()}.${pad(date.getMonth() + 1)}${pad(date.getDate())}.${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`
varsExports.srcDir = path.join(varsExports.rootDir, './src')
varsExports.staticDir = path.join(varsExports.rootDir, './static')
varsExports.distDir = path.join(varsExports.rootDir, './dist')
varsExports.entryDir = path.join(varsExports.srcDir, './entries')
varsExports.portDev = 8080
varsExports.hostDev = 'http://v2.dhms.cloud'
varsExports.apiHostDev = 'dev.dhms.cloud'
varsExports.apiHostProd = 'www.dhms.cloud'
varsExports.apiDev = ``
varsExports.wsDev = `wss://${varsExports.apiHostDev}`
varsExports.apiProd = `https://${varsExports.apiHostProd}`
varsExports.wsProd = `wss://${varsExports.apiHostProd}`

const cwp = []
varsExports.cwpDev = [].concat(cwp)
varsExports.cwpProd = [].concat(cwp)

varsExports.depsDev = {}
varsExports.depsProd = {}

module.exports = varsExports
