const FileSaver = require('file-saver')

Date.prototype.format = function(fmt) {
  let o = {
    "Y+" : this.getFullYear(),
    "M+" : this.getMonth() + 1,
    "d+" : this.getDate(),
    "h+" : this.getHours() % 12 == 0 ? 12 : this.getHours() % 12,
    "H+" : this.getHours(),
    "m+" : this.getMinutes(),
    "s+" : this.getSeconds(),
    "q+" : Math.floor((this.getMonth() + 3) / 3),
    "S" : this.getMilliseconds()
  }
  let week = {
    "0" : "星期日",
    "1" : "星期一",
    "2" : "星期二",
    "3" : "星期三",
    "4" : "星期四",
    "5" : "星期五",
    "6" : "星期六"
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
      .substr(4 - RegExp.$1.length))
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f"
        : "/u5468")
        : "")
      + week[this.getDay() + ""])
  }
  for ( let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
        : (("00" + o[k]).substr(("" + o[k]).length)))
    }
  }
  return fmt
}

export function isPromise (value) {
  if (value !== null && typeof value === 'object') {
    return value.promise && typeof value.promise.then === 'function'
  }
}

export function checkLogin (day=7) {
  let time = getTime()
  return time === -1 ? true : time === -99 ? false : time + day * 24 * 3600 >  new Date().getTime() / 1000
}

export function setToken (token) {
  setUserInfo('user_token', token)
}

export function getToken () {
  return getCookie('Refresh-Token')
}

export function setTime (time) {
  setUserInfo('login_time', time)
}

export function getTime () {
  let info = getUserInfo()
  return info['login_time'] || -99
}

export function doLogout () {
  window.localStorage.clear()
}

export function getMenus () {
  return []
}

export function getName () {
    return 'danzhu'
}

export function getUID () {
  let info = getUserInfo()
  return info.info.uid || ''
}

export function getUserName () {
  let info = getUserInfo()
  return info.info.phone || ''
}

export function setNoticeForLogin (message, type='') {
  let msg = message
  if (type !== '') {
    msg = JSON.stringify({message: message, type: type})
  }
  window.localStorage.setItem('dhms_login_page_message', msg)
}

export function getNoticeForLogin () {
  let msg = window.localStorage.getItem('dhms_login_page_message')
  setNoticeForLogin('')
  return msg ? JSON.parse(msg) : ''
}

export function setUserInfo (key, value) {
  let info = getUserInfo()
  info[key] = value
  window.localStorage.setItem('dhms_login_user_info', JSON.stringify(info))
}

export function setBreadcrumb(breadcrumb) {
  let b = []
  for (let i in breadcrumb) {
    b.push(breadcrumb[i].toJS())
  }
  window.localStorage.setItem('dhms_breadcrumb', JSON.stringify(b))
}

export function getBreadcrumb() {
  let breadcrumb = window.localStorage.getItem('dhms_breadcrumb')
  return breadcrumb ? JSON.parse(breadcrumb) : []
}

export function getUserInfo () {
  let info = window.localStorage.getItem('dhms_login_user_info')
  return info ? JSON.parse(info) : {}
}

export function formatDate(timestamp, format='yyyy-MM-dd') {
  if (!timestamp)
    return ''
  let date = new Date(timestamp * 1000)
  return date.format(format)
}

export function getDateHMS(timestamp) {
  let date = formatDate(timestamp, 'yyyy-MM-dd HH:mm:ss')
  return date.split(' ').pop()
}

export function formatTime(seconds, fixed = 2, split = false) {
  if (!seconds)
    return ''
  let denominator = 1
  let unit = '秒'
  if (seconds > 3600 * 24 * 30 * 12) {
    denominator = 3600 * 24 * 30 * 12
    unit = '年'
  }else if (seconds > 3600 * 24 * 30) {
    denominator = 3600 * 24 * 30
    unit = '月'
  }else if (seconds > 3600 * 24) {
    denominator = 3600 * 24
    unit = '天'
  }else if (seconds >= 3600) {
    denominator = 3600
    unit = '小时'
  } else if (seconds >= 60) {
    denominator = 60
    unit = '分'
  } else {
    denominator = 1
    unit = '秒'
  }
  seconds = new Number(seconds / denominator).toFixed(fixed)
  return split ? [seconds, unit] : `${seconds} ${unit}`
}

export function buildUrlParam(param={}) {
  let url = []
  for (let p in param) {
    url.push(encodeURIComponent(p) + "=" + encodeURIComponent(param[p]))
  }
  return url.join('&')
}

export function setValue(key, value) {
  window.localStorage.setItem(key, value)
}

export function getValue(key) {
  return window.localStorage.getItem(key)
}

export function setCookie(name, value, expiredays = 1) {
  let expireDate = new Date()
  expireDate.setDate(expireDate.getDate() + expiredays)
  document.cookie = `${name}=${escape(value)}` + ((expiredays == null) ? '' : `;expires=${expireDate.toGMTString()}`)
}

export function getCookie(name)
{
  let c_start = -1
  let c_end = -1
  if (document.cookie.length>0)
  {
    c_start = document.cookie.indexOf(`${name}=`)
    if (c_start != -1)
    {
      c_start = c_start + name.length + 1
      c_end = document.cookie.indexOf(';', c_start)
      if (c_end == -1) c_end = document.cookie.length
      return unescape(document.cookie.substring(c_start, c_end))
    }
  }
  return ''
}

export function checkPhoneNumbuer (phone) {
  return /^1[3|4|5|7|8][0-9]{9}$/.test(phone)
}

export function checkPassword (password) {
  return /^[\u0020-\u007F]+$/.test(password)
}

function browser () {
  return {
    versions:function(){
      let u = navigator.userAgent
      return {
        ie: u.indexOf('MSIE') > -1, //IE
        edge: u.indexOf('Edge') > -1, //IE edge
        presto: u.indexOf('Presto') > -1, //opera
        webKit: u.indexOf('AppleWebKit') > -1, //apple,google
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//firefox
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //is devices
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
        android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android
        iPhone: u.indexOf('iPhone') > -1 , //iPhone,QQHD
        iPad: u.indexOf('iPad') > -1, //iPad
        webApp: u.indexOf('Safari') == -1, //web application
        weixin: u.indexOf('MicroMessenger') > -1, //wechat
        qq: u.match(/\sQQ/i) == " qq" //QQ
      };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
  }
}

export function isPC () {
  return !browser().mobile
}

function storeVisitTrace (path, text) {
  let traces = getStoredVisitTraces()
  let has = false
  for (let i in traces) {
    if (traces[i].path === path) {
      has = true
      break
    }
  }
  if (!has) {
    traces.push({path, text})
  }
  window.localStorage.setItem('dhms_stored_visit_traces', JSON.stringify(traces))
}

function saveVisitTrace(path, text, filter = true) {
  if (path === '/') {
    return
  }
  let traces = getVisitTraces()
  let traceLen = traces.length
  let someLike = false
  let has = false
  for (let i = 0; i < traceLen; i++) {
    let t = traces[i]
    if (has) {
      traces.splice(i, traceLen - i)
      break
    }
    if (path.indexOf(t.path) === -1) {
      if (!someLike) {
        traces = []
        break
      } else {
        has = true
        continue
      }
    } else {
      someLike = true
    }
    if (t.path === path) {
      has = true
    }
  }
  if (!has) {
    traces.push({path, text})
  }
  storeVisitTrace(path, text)
  window.localStorage.setItem('dhms_visit_traces', JSON.stringify(traces))
}

export function doVisitTrace (path, text = '') {
  if (Object.prototype.toString.call(path) === '[object Array]') {
    for (let i in path) {
      let trace = path[i]
      saveVisitTrace(trace.path, trace.text, false)
    }
  } else {
    saveVisitTrace(path, text)
  }
}

export function getVisitTraces () {
  let traces = window.localStorage.getItem('dhms_visit_traces')
  return traces ? JSON.parse(traces) : []
}

export function getStoredVisitTraces (path = '') {
  let likeTraces = []
  let traces = window.localStorage.getItem('dhms_stored_visit_traces')
  traces = traces ? JSON.parse(traces) : []
  if (path) {
    for (let i in traces) {
      let trace = traces[i]
      if (path.indexOf(trace.path) !== -1) {
        likeTraces.push(trace)
      }
    }
    return likeTraces
  }
  return traces
}

export function downloadFile (fileName, content) {

  const b = browser()
  const win = window
  const doc = win.document
  if (b.versions.ie || b.versions.edge) {
    if (!win.XMLHttpRequest || !doc.querySelector || !doc.addEventListener || !win.atob) {
      let oWin = window.top.open('about:blank', '_blank')
      oWin.document.write(`sep=,\r\n${content}`)
      oWin.document.close()
      oWin.document.execCommand('SaveAs', true, fileName)
      oWin.close()
    }
  }

  // const blob = new Blob([`\uFEFF${content}`], {type: 'text/plain;charset=utf-8'})
  // FileSaver.saveAs(blob, fileName, true)
}
