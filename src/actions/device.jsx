import {BSON, ObjectID} from 'bson'
let bson = new BSON()
import jFetch from '../commons'
export const DEVICE_LIST_SUCCESS = 'DEVICE_LIST_SUCCESS'
export const DEVICE_LIST_ERROR = 'DEVICE_LIST_ERROR'
export const DEVICE_STATUS_SUCCESS = 'DEVICE_STATUS_SUCCESS'
export const DEVICE_STATUS_ERROR = 'DEVICE_STATUS_ERROR'
export const CHART_LIST_SUCCESS = 'CHART_LIST_SUCCESS'
export const CHART_LIST_ERROR = 'CHART_LIST_ERROR'
export const DATA_GET_SUCCESS = 'DATA_GET_SUCCESS'
export const DATA_GET_ERROR = 'DATA_GET_ERROR'
export const CHART_FAULTS_SUCCESS = 'CHART_FAULTS_SUCCESS'
export const CHART_FAULTS_ERROR = 'CHART_FAULTS_ERROR'
export const DEVICE_KINDS_DASHBOARD_SUCCESS = 'DEVICE_KINDS_DASHBOARD_SUCCESS'
export const DEVICE_KINDS_DASHBOARD_ERROR = 'DEVICE_KINDS_DASHBOARD_ERROR'
export const DEVICE_STATUS_DASHBOARD_SUCCESS = 'DEVICE_STATUS_DASHBOARD_SUCCESS'
export const DEVICE_STATUS_DASHBOARD_ERROR = 'DEVICE_STATUS_DASHBOARD_ERROR'
export const DEVICE_SERVICE_DASHBOARD_SUCCESS = 'DEVICE_SERVICE_DASHBOARD_SUCCESS'
export const FAULT_CONTENTS_SUCCESS = 'FAULT_CONTENTS_SUCCESS'
export const DEVICE_SERVICE_DASHBOARD_ERROR = 'DEVICE_SERVICE_DASHBOARD_ERROR'
export const DEVICE_MAP_DASHBOARD_SUCCESS = 'DEVICE_MAP_DASHBOARD_SUCCESS'
export const DEVICE_MAP_DASHBOARD_ERROR = 'DEVICE_MAP_DASHBOARD_ERROR'
export const PUSH_NOTICES_FOR_DATAV = 'PUSH_NOTICES_FOR_DATAV'
export const FAULT_EXPAND_SUCCESS = 'FAULT_EXPAND_SUCCESS'
export const DEVICE_PROFILE_SUCCESS = 'DEVICE_PROFILE_SUCCESS'

export function getDevicesWithCategory () {
  return {
    type: 'DEVICE_LIST',
    payload: {
      promise: jFetch.get('device/list')
    }
  }
}

export function getDeviceStatus(param) {
  return {
    type: 'DEVICE_STATUS',
    payload: {
      promise: jFetch.get(`device/status?${param}`)
    }
  }
}

export function getChartList(param) {
  return jFetch.get(`chart/list?${param}`)
}

export function getChartData(param) {
  return {
    type: 'DATA_GET',
    payload: {
      promise: jFetch.get(`data/getweb?${param}`)
    }
  }
}

export function getChartFaults(param) {
  return {
    type: 'CHART_FAULTS',
    payload: {
      promise: jFetch.get(`devicefault/listweb?${param}`)
    }
  }
}

export function getDeviceKindsForDashboard() {
  return {
    type: 'DEVICE_KINDS_DASHBOARD',
    payload: {
      promise: jFetch.get('dashboard/cate')
    }
  }
}

export function getDeviceStatusForDashboard() {
  return {
    type: 'DEVICE_STATUS_DASHBOARD',
    payload: {
      promise: jFetch.get('dashboard/status')
    }
  }
}

export function getDeviceServiceForDashboard() {
  return {
    type: 'DEVICE_SERVICE_DASHBOARD',
    payload: {
      promise: jFetch.get('dashboard/service')
    }
  }
}

export function getDeviceMapForDashboard() {
  return {
    type: 'DEVICE_MAP_DASHBOARD',
    payload: {
      promise: jFetch.get('dashboard/map')
    }
  }
}

export function pushNoticesForDataV (data) {
  return {
    type: PUSH_NOTICES_FOR_DATAV,
    payload: {
      data: data
    }
  }
}

export function getFaultContents() {
  return {
    type: 'FAULT_CONTENTS',
    payload: {
      promise: jFetch.get('fault/select')
    }
  }
}

export function getFaultExpand(param) {
  return {
    type: 'FAULT_EXPAND',
    payload: {
      promise: jFetch.get(`devicefault/expand?${param}`)
    }
  }
}

export function getDeviceProfile(param) {
  return {
    type: 'DEVICE_PROFILE',
    payload: {
      promise: jFetch.get(`device/profile?${param}`)
    }
  }
}

export function getDeviceDetail(param) {
  return jFetch.get(`data/getdetail?${param}`)
}

export function getDeviceParameters(param) {
  return jFetch.get(`device/param?${param}`)
}

export function exportParametersData(param) {
  return jFetch.get(`data/export?${param}`)
}

export function exportDeviceReport(param) {
  return jFetch.get(`report/export?${param}`)
}

export function confirmDeviceReport(id) {
  return jFetch.post('report/confirm', {
    data: bson.serialize({
      reportid: ObjectID(id)
    }, false, true, false)
  })
}

export function saveDeviceInfo(data) {
  return jFetch.post('device/profile', {
    data: bson.serialize(data, false, true, false)
  })
}
