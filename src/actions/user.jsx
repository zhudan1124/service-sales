import {BSON, ObjectID} from 'bson'
let bson = new BSON()
import jFetch from '../commons'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_ERROR = 'LOGOUT_ERROR'
export const CUSTOMER_LIST_SUCCESS = 'CUSTOMER_LIST_SUCCESS'
export const CUSTOMER_LIST_ERROR = 'CUSTOMER_LIST_ERROR'
export const ANNOUNCEMENT_LIST_SUCCESS = 'ANNOUNCEMENT_LIST_SUCCESS'
export const ANNOUNCEMENT_LIST_ERROR = 'ANNOUNCEMENT_LIST_ERROR'
export const FAULT_LIST_SUCCESS = 'FAULT_LIST_SUCCESS'
export const FAULT_LIST_ERROR = 'FAULT_LIST_ERROR'
export const DEVICE_REPORT_SUCCESS = 'DEVICE_REPORT_SUCCESS'
export const DEVICE_REPORT_ERROR = 'DEVICE_REPORT_ERROR'
export const CUSTOMER_DEVICE_SUCCESS = 'CUSTOMER_DEVICE_SUCCESS'
export const CUSTOMER_DEVICE_ERROR = 'CUSTOMER_DEVICE_ERROR'
export const FEEDBACK_LIST_SUCCESS = 'FEEDBACK_LIST_SUCCESS'
export const FEEDBACK_LIST_ERROR = 'FEEDBACK_LIST_ERROR'
export const SMS_SUCCESS = 'SMS_SUCCESS'
export const SMS_ERROR = 'SMS_ERROR'


export function login (username, password) {
  return {
    type: 'LOGIN',
    payload: {
      promise: jFetch.post('login', {
        data: bson.serialize({
          username: username,
          password: password
        }, false, true, false)
      })
    }
  }
}

export function sendSmsCode(phone) {
  return {
    type: 'SMS',
    payload: {
      promise: jFetch.post('sms/send', {
        data: bson.serialize({
          phone: phone
        }, false, true, false)
      })
    }
  }
}

export function checkCode(phone, code) {
  return jFetch.post('sms/verifycode', {
    data: bson.serialize({
      phone: phone,
      vcode: code
    }, false, true, false)
  })
}

export function resetPassword(phone, password, confirm) {
  return jFetch.post('user/resetpassword', {
    data: bson.serialize({
      phone: phone,
      pass: password,
      passconfirm: confirm
    }, false, true, false)
  })
}

export function getCustomerList(param) {
  return {
    type: 'CUSTOMER_LIST',
    payload: {
      promise: jFetch.get(`customer/listweb?${param}`)
    }
  }
}

export function getAnnouncementList(param) {
  return {
    type: 'ANNOUNCEMENT_LIST',
    payload: {
      promise: jFetch.get(`bulletin/listweb?${param}`)
    }
  }
}

export function getFaultList(param) {
  return {
    type: 'FAULT_LIST',
    payload: {
      promise: jFetch.get(`devicefault/listweb?${param}`)
    }
  }
}

export function getDeviceReport(param) {
  return {
    type: 'DEVICE_REPORT',
    payload: {
      promise: jFetch.get(`report/page?${param}`)
    }
  }
}

export function getDeviceList(param) {
  return {
    type: 'CUSTOMER_DEVICE',
    payload: {
      promise: jFetch.get(`customer/device?${param}`)
    }
  }
}

export function readMsg(mid, msrcid) {
  return jFetch.post('message/read', {
    data: bson.serialize({
      mid: ObjectID(mid),
      msrcid: ObjectID(msrcid)
    }, false, true, false)
  })
}

export function changePassword(username, oldpass, newpass, newpassconfirm) {
  return jFetch.post('user/changepassword', {
    data: bson.serialize({
      username: username,
      oldpass: oldpass,
      newpass: newpass,
      newpassconfirm: newpassconfirm
    }, false, true, false)
  })
}

export function getFeedbackList(param) {
  return {
    type: 'FEEDBACK_LIST',
    payload: {
      promise: jFetch.get(`feedback/list?${param}`)
    }
  }
}

export function feedback(id, feedback) {
  return jFetch.post('feedback/add', {
    data: bson.serialize({
      cby: ObjectID(id),
      cont: feedback
    }, false, true, false)
  })
}

export function acceptFault(id, type = 'accept') {
  return jFetch.post(`devicefault/${type}`, {
    data: bson.serialize({
      faultid: ObjectID(id)
    }, false, true, false)
  })
}

export function batchDo(type, ids) {
  let method = ''
  switch (type) {
    case 1:
      type = 'BATCH_ACCEPT'
      method = 'batchaccept'
      break
    case 2:
      type = 'BATCH_HANDLE'
      method = 'batchhandle'
      break
  }
  return jFetch.post(`devicefault/${method}`, {
    data: bson.serialize({
      faultids: ids.join(',')
    }, false, true, false)
  })
}
