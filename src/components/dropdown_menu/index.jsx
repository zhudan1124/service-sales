import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {List, is} from 'immutable'
import classnames from 'classnames'
import RCLink from '../../components/link'
import Modal from '../../components/modal'
import { readMsg } from '../../actions/user'
import { formatDate } from '../../utils'
import './index.less'

class DropdownMenu extends React.Component {
  constructor (props) {
    super(props)
    this.handleDirect = this.handleDirect.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleOk = this.handleOk.bind(this)
  }
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  componentDidMount () {
    let m = document.getElementById('modal-window')
    if (!m) {
      m = document.createElement('div')
      m.id = 'modal-window'
      document.body.appendChild(m)
    }
    this.modal = m
  }
  shouldComponentUpdate (nextProps, nextState) {
    return !is(nextProps.list, this.props.list)
  }
  handleDirect (type, mid, msrcid, title, content) {
    let { onClick } = this.props
    readMsg(mid, msrcid)
    ReactDOM.render(<Modal title={title} visible={true} onCancel={this.handleCancel} onOk={this.handleOk}>
      {content}
    </Modal>, this.modal)
    onClick && onClick()
  }
  handleCancel () {
    return true
  }
  handleOk () {
    return true
  }
  render () {
    let { onClick, list = List(), count = 0 } = this.props
    let height = 275
    let l
    let badge = list.size
    if (badge > 0) {
      height = badge > 5 ? height : badge * 55
      l = list.toArray().map((menu, i) => {
        let mid = menu.get('mid')
        let msrcid = menu.get('msrcid')
        let title = menu.get('title')
        let content = menu.get('content')
        let type = menu.get('type')
        return (
          <li key={`dropdown-menu-${i}`} id={`dpm-${mid}`} title={menu.get('title')} onClick={() => this.handleDirect(type, mid, msrcid, title, content)}>
            <a href="javascript:;">
              <p className="info">
                <span className="time">{formatDate(menu.get('time'), 'MM月dd日')}</span>
                <span className={classnames('label', 'label-sm', 'label-icon', {'label-danger': type==='1', 'label-warning': type==='3', 'label-info': type==='0'})}>
                  <i className={classnames({'icon-alarm': type==='1', 'icon-message-notification': type==='3', 'icon-notification': type==='0'})}></i>
                </span>
                <span>{menu.get('title')}</span>
              </p>
            </a>
          </li>
        )
      })
    } else {
      return <span></span>
    }
    return (
      <ul className="dropdown-menu">
        <li className="external">
          <h3>您有<span className="bold">{count || badge}</span>条未读信息</h3>
          <RCLink to='/devicefault' onClick={onClick} style={{right: '50px'}}>故障信息</RCLink>
          <RCLink to='/announcement' onClick={onClick}>公告</RCLink>
        </li>
        <li>
          <ul className="dropdown-menu-list" style={{height: `${height}px`, overflow: 'auto', width: 'auto'}} data-handle-color="#637283">
            {l}
          </ul>
        </li>
      </ul>
    )
  }
}
export default DropdownMenu
