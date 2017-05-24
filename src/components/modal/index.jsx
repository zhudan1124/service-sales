import React, { PropTypes } from 'react'
import classnames from 'classnames'
import {is} from 'immutable'
import './index.less'

export default class Modal extends React.Component {
  constructor (props) {
    super(props)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.suffix = Date.now()
  }
  static propTypes = {
    style: PropTypes.object,
    headerClass: PropTypes.string,
    bodyClass: PropTypes.string,
    title: PropTypes.string,
    okText: PropTypes.string,
    cancelText: PropTypes.string,
    footer: PropTypes.array,
    closable: PropTypes.bool,
    visible: PropTypes.bool,
    okEnable: PropTypes.bool,
    cancelEnable: PropTypes.bool
  }
  static defaultProps = {
    headerClass: '',
    bodyClass: '',
    okText: '确定',
    cancelText: '取消',
    closable: true,
    visible: true,
    okDisable: false,
    cancelDisable: false
  }
  shouldComponentUpdate(nextProps) {
    return !is(nextProps, this.props)
  }
  componentDidMount () {
    this.handleToggle()
  }
  componentDidUpdate () {
    this.handleToggle()
  }
  handleCancel = (e) => {
    if (('onCancel' in this.props && this.props.onCancel(e)) || !('onCancel' in this.props)) {
      this.handleToggle('none')
    }
  }
  handleOk = () => {
    if (('onOK' in this.props && this.props.onOK()) || !('onOK' in this.props)) {
      this.handleToggle('none')
    }
  }
  handleToggle (toggle = '') {
    this.refs[`modal${this.suffix}`].style.display = toggle ? toggle : this.props.visible ? 'block' : 'none'
  }
  render() {
    let { style, title, okText, okDisable, cancelText, cancelDisable, footer, closable = true, headerClass, bodyClass, children } = this.props
    const defaultFooter = [
      <button key="cancel" type="button" disabled={cancelDisable} className="btn btn-outline-blue gray" onClick={this.handleCancel}>{cancelText}</button>,
      <button key="confirm" type="button" disabled={okDisable} className="btn blue" onClick={this.handleOk}>{okText}</button>
    ]
    const header = title ? <div key="dhms-modal-header" className={`modal-header ${headerClass}`}>
      {closable ? <button type="button" className="close modal-close" onClick={this.handleCancel} style={{position: 'relative', zIndex:10001, fontWeight: 100, right: '-5px', top: '-10px'}}>×</button> : null}
      {title}
    </div> : null
    return (
      <div ref={`modal${this.suffix}`} key={`modal${this.suffix}`} style={{display: 'none'}} className="form-horizontal">
        <div className="modal fade in" tabIndex="-1">
          <div className="modal-dialog" style={style}>
            <div className="modal-content">
              {header}
              <div className={`modal-body ${bodyClass}`}>
                {children}
              </div>
              <div className={classnames('modal-footer', {'no-top': !title})}>
                {footer || defaultFooter}
              </div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade in"></div></div>
    )
  }
}
