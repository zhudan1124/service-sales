/* Copyright (c) 2017. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: jake Created:03/30/2017
 */
const precss = require('precss')
const autoprefixer = require('autoprefixer')
module.exports = function () {
  return [precss, autoprefixer({
    browsers: ['last 2 versions'],
  })];
}
