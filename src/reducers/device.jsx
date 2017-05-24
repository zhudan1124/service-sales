import {
  DEVICE_LIST_SUCCESS,
  DEVICE_STATUS_SUCCESS,
  CHART_LIST_SUCCESS,
  DATA_GET_SUCCESS,
  CHART_FAULTS_SUCCESS,
  DEVICE_KINDS_DASHBOARD_SUCCESS,
  DEVICE_STATUS_DASHBOARD_SUCCESS,
  DEVICE_SERVICE_DASHBOARD_SUCCESS,
  FAULT_CONTENTS_SUCCESS,
  DEVICE_MAP_DASHBOARD_SUCCESS,
  FAULT_EXPAND_SUCCESS,
  DEVICE_PROFILE_SUCCESS,
  PUSH_NOTICES_FOR_DATAV,
  DEVICE_LIST_ERROR,
  DEVICE_STATUS_ERROR,
  CHART_LIST_ERROR,
  DATA_GET_ERROR,
  CHART_FAULTS_ERROR,
  DEVICE_KINDS_DASHBOARD_ERROR,
  DEVICE_STATUS_DASHBOARD_ERROR,
  DEVICE_SERVICE_DASHBOARD_ERROR,
  DEVICE_MAP_DASHBOARD_ERROR
} from '../actions/device'
import {Map, fromJS} from 'immutable'

const initialState = Map({})

export default function device (state, action = {}) {
  state = state || initialState
  if (state.get('error_message')) {
    state = state.delete('error_message')
  }
  switch (action.type) {
    case DEVICE_LIST_SUCCESS:
      return state.set('device_summary', fromJS(action.payload.data))
    case DEVICE_STATUS_SUCCESS:
      return state.set('device_status', fromJS(action.payload.data))
    case CHART_LIST_SUCCESS:
      return state.set('chart_config', fromJS(action.payload.data))
    case DATA_GET_SUCCESS:
      return state.set('chart_data', fromJS(action.payload.data))
    case CHART_FAULTS_SUCCESS:
      return state.set('chart_faults', fromJS(action.payload.data))
    case DEVICE_KINDS_DASHBOARD_SUCCESS:
      return state.set('device_kinds_dashboard', fromJS(action.payload.data))
    case DEVICE_STATUS_DASHBOARD_SUCCESS:
      return state.set('device_status_dashboard', fromJS(action.payload.data))
    case DEVICE_SERVICE_DASHBOARD_SUCCESS:
      return state.set('device_service_dashboard', fromJS(action.payload.data))
    case DEVICE_MAP_DASHBOARD_SUCCESS:
      return state.set('device_map_dashboard', fromJS(action.payload.data))
    case FAULT_CONTENTS_SUCCESS:
      return state.set('fault_contents', fromJS(action.payload.data))
    case FAULT_EXPAND_SUCCESS:
      return state.set('fault_expand', fromJS(action.payload.data))
    case DEVICE_PROFILE_SUCCESS:
      return state.set('device_profile', fromJS(action.payload.data))
    case PUSH_NOTICES_FOR_DATAV:
      return state.set('notices_for_datav', fromJS(action.payload.data))
    case DEVICE_LIST_ERROR:
    case DEVICE_STATUS_ERROR:
    case CHART_LIST_ERROR:
    case DATA_GET_ERROR:
    case CHART_FAULTS_ERROR:
    case DEVICE_KINDS_DASHBOARD_ERROR:
    case DEVICE_STATUS_DASHBOARD_ERROR:
    case DEVICE_SERVICE_DASHBOARD_ERROR:
    case DEVICE_MAP_DASHBOARD_ERROR:
      return state.set('error_message', {text: '请求超时，请联系系统管理员。', timestamp: new Date().getMilliseconds()})
    default:
      return state
  }
}
