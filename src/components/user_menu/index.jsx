import React from 'react'
import classnames from 'classnames'
import Modal from '../../components/modal'
import { getUserName, checkPassword } from '../../utils'
import { changePassword } from '../../actions/user'

export default class UserMenu extends React.Component {
  constructor (props) {
    super(props)
    this.handleChangePwd = this.handleChangePwd.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.state = {
      visible: false,
      oldPwdTip: '',
      newPwdTip: '',
      newPwdConfirmTip: ''
    }
  }
  handleChangePwd () {
    this.setState({visible: true})
  }
  handleCancel () {
    this.setState({visible: false})
  }
  handleCheck (e) {
    this.validatePassword(e.target.value, e.target.id)
  }
  validatePassword (password, type) {
    let {newPwdTip, newPwdConfirmTip} = this.state
    if (!checkPassword(password)) {
      switch (type) {
        case 'newpass':
          this.setState({
            'newPwdTip': '新密码必须是字母/数字/字符。'
          })
          break
        case 'newpassconfirm':
          this.setState({
            'newPwdConfirmTip': '确认新密码必须是字母/数字/字符。'
          })
          break
      }
      return false
    } else {
      switch (type) {
        case 'newpass':
          if (newPwdTip) {
            this.setState({
              'newPwdTip': ''
            })
          }
          break
        case 'newpassconfirm':
          if (newPwdConfirmTip) {
            this.setState({
              'newPwdConfirmTip': ''
            })
          }
          break
      }
      return true
    }
  }
  handleOk () {
    let oldPwd = this.refs.oldpass.value, newPwd = this.refs.newpass.value, newPwdConfirm = this.refs.newpassconfirm.value
    if ((!oldPwd || !newPwd || !newPwdConfirm) || (newPwd.length < 6 || newPwdConfirm.length < 6)
      || (newPwd !== newPwdConfirm) || (oldPwd === newPwd && newPwd === newPwdConfirm)) {
      this.setState({
        'oldPwdTip': oldPwd ? '' : '请输入当前密码',
        'newPwdTip': newPwd ? !checkPassword(newPwd) ? '新密码必须是字母/数字/字符。' : newPwd.length < 6 ? '新密码长度至少6位' : oldPwd === newPwd && newPwd === newPwdConfirm ? '当前密码与新密码不能相同' : '' : '请输入新密码',
        'newPwdConfirmTip': newPwdConfirm ? !checkPassword(newPwdConfirm) ? '确认新密码必须是字母/数字/字符。' : newPwdConfirm.length < 6 ? '确认新密码长度至少6位' : newPwd !== newPwdConfirm ? '确认新密码长度与新密码长度不一致' : '' : '请输入确认新密码'
      })
      return
    }
    let promise = changePassword(getUserName(), this.refs.oldpass.value, this.refs.newpass.value, this.refs.newpassconfirm.value)
    promise.then((r)=>{
      if (r.code === 400) {
        this.setState({
          'oldPwdTip': r.data === 'oldpass' ? r.message : '',
          'newPwdTip': r.data === 'newpass' ? r.message : '',
          'newPwdConfirmTip': r.data === 'newpassconfirm' ? r.message : ''
        })
        this.refs[r.data].focus()
      } else {
        this.setState({visible: false})
      }
    })
  }
  render () {
    const {avatar, name} = this.props
    const {oldPwdTip, newPwdTip, newPwdConfirmTip} = this.state
    return (
      <li className="dropdown dropdown-user">
        <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
          <img alt="" className="img-circle" src={avatar}/>
          <span className="username username-hide-on-mobile"> {name} </span>
          <i className="icon-angle-down"></i>
        </a>
        <ul className="dropdown-menu dropdown-menu-default">
          <li>
            <a href="javascript:;" onClick={this.handleChangePwd}><i className="icon-password" style={{marginLeft: '10px'}}></i>修改密码</a>
          </li>
          <li className="divider"></li>
          <li>
            <a href="/login"><i className="icon-exit" style={{marginLeft: '10px'}}></i>退&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出</a>
          </li>
        </ul>
        <Modal title="修改密码" visible={this.state.visible} onCancel={this.handleCancel} onOk={this.handleOk}>
          <div className={classnames('form-group', {'has-error': oldPwdTip})}>
            <label htmlFor="oldpass" className="col-sm-4 col-md-4 control-label">当前密码</label>
            <div className="col-sm-8 col-md-8">
              <input type="password" ref="oldpass" className="form-control input-inline input-medium" id="oldpass" placeholder="当前密码" /><span className="help-block">{oldPwdTip}</span>
            </div>
          </div>
          <div className={classnames('form-group', {'has-error': newPwdTip})}>
            <label htmlFor="newpass" className="col-sm-4 col-md-4 control-label">新密码</label>
            <div className="col-sm-8 col-md-8">
              <input type="password" ref="newpass" className="form-control input-inline input-medium" id="newpass" placeholder="新密码" onKeyUp={this.handleCheck}/><span className="help-inline">至少6位</span><span className="help-block">{newPwdTip}</span>
            </div>
          </div>
          <div className={classnames('form-group', {'has-error': newPwdConfirmTip})}>
            <label htmlFor="newpassconfirm" className="col-sm-4 col-md-4 control-label">确认新密码</label>
            <div className="col-sm-8 col-md-8">
              <input type="password" ref="newpassconfirm" className="form-control input-inline input-medium" id="newpassconfirm" placeholder="确认新密码" onKeyUp={this.handleCheck}/><span className="help-block">{newPwdConfirmTip}</span>
            </div>
          </div>
        </Modal>
      </li>
    )
  }
}
