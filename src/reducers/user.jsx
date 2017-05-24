import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_ERROR,
  ANNOUNCEMENT_LIST_SUCCESS,
  ANNOUNCEMENT_LIST_ERROR,
  FAULT_LIST_SUCCESS,
  FAULT_LIST_ERROR,
  DEVICE_REPORT_SUCCESS,
  DEVICE_REPORT_ERROR,
  CUSTOMER_DEVICE_SUCCESS,
  CUSTOMER_DEVICE_ERROR,
  FEEDBACK_LIST_SUCCESS,
  FEEDBACK_LIST_ERROR,
  SMS_SUCCESS,
  SMS_ERROR
} from '../actions/user'
import {Map, fromJS} from 'immutable'

const initialState = Map({})

export default function user (state, action = {}) {
  state = state || initialState
  if (state.get('error_message')) {
    state = state.delete('error_message')
  }
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('user', fromJS(action.payload))
    case CUSTOMER_LIST_SUCCESS:
      return state.set('customer_list', fromJS(action.payload.data))
    case ANNOUNCEMENT_LIST_SUCCESS:
      return state.set('announcement_list', fromJS(action.payload.data))
    case FAULT_LIST_SUCCESS:
      return state.set('fault_list', fromJS(action.payload.data))
    case CUSTOMER_DEVICE_SUCCESS:
      return state.set('customer_device', fromJS(action.payload.data))
    case FEEDBACK_LIST_SUCCESS:
      return state.set('feedback_list', fromJS(action.payload.data))
    case DEVICE_REPORT_SUCCESS:
      return state.set('device_report', fromJS(action.payload.data))
    case SMS_SUCCESS:
      return state.set('sms', fromJS(action.payload))
    case LOGIN_ERROR:
    case CUSTOMER_LIST_ERROR:
    case ANNOUNCEMENT_LIST_ERROR:
    case FAULT_LIST_ERROR:
    case CUSTOMER_DEVICE_ERROR:
    case FEEDBACK_LIST_ERROR:
    case DEVICE_REPORT_ERROR:
    case SMS_ERROR:
      return state.set('error_message', {text: '请求超时，请联系系统管理员。', timestamp: new Date().getMilliseconds()})
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}
