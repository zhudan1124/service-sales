import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { login, sendSmsCode, checkCode, resetPassword } from '../../actions/user'
import { setTime, setUserInfo, doLogout, getNoticeForLogin, checkPassword, checkPhoneNumbuer } from '../../utils'
import './index.less'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handle2Login = this.handle2Login.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.handleCodeInput = this.handleCodeInput.bind(this)
    this.handleSms = this.handleSms.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleStep = this.handleStep.bind(this)
    this.handle2Password = this.handle2Password.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.state = {
      btnProps: {
        disabled: 'disabled'
      },
      codeProps: {
        'data-send': 0
      },
      codeTips: '获取验证码',
      login: {
        type: 'danger',
        display: false,
        text: ''
      },
      forgot: {
        type: 'danger',
        display: false,
        text: ''
      },
      change: {
        type: 'danger',
        display: false,
        text: ''
      },
      step: 'login'
    }
  }
  static propTypes = {
    login: PropTypes.func.isRequired,
    sendSmsCode: PropTypes.func.isRequired
  }
  static contextTypes = {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }
  componentDidMount () {
    let msg = getNoticeForLogin()
    if (msg) {
      let {login} = this.state
      login.display = true
      login.type = msg.type
      login.text = msg.message
      this.setState({login: login})
    }
    doLogout()
    this.refs.username.focus()
  }
  componentWillReceiveProps (nextProps) {
    const {user, sms, error_message} = nextProps
    if (error_message) {
      let {step} = this.state
      step = this.state[step]
      step.type = 'danger'
      step.display = true
      step.text = error_message.text
    } else {
      if (user) {
        switch (user.get('code')) {
          case 200:
            setUserInfo('info', user.get('data'))
            if (ReactDOM.findDOMNode(this.refs.remember).checked) {
              setTime(user.getIn(['data','logtime']))
            } else {
              setTime(-1)
            }
            let menus = user.getIn(['data','menus'])
            this.context.router.replace(menus.size > 0 ? menus.get(0).get('path') : '/no_match')
            break
          case 400:
            this.checkLoginInfo(user.get('message'))
            break
        }
      } else if (sms) {
        let {forgot} = this.state
        forgot.display = true
        forgot.text = sms.get('message')
        switch (sms.get('code')) {
          case 200:
            forgot.type = 'info'
            break
          case 400:
          default:
            forgot.type = 'danger'
            break
        }
        this.setState({forgot: forgot})
      }
    }
  }
  componentWillUnmount () {
    this.hasUnmounted = true
  }
  checkLoginInfo (message='') {
    const username = this.refs.username.value
    const password = this.refs.password.value
    if (checkPhoneNumbuer(username) && password && !message) {
      return true
    }
    let {login} = this.state
    login.type = 'danger'
    login.display = true
    login.text = message
    if (!username && !password) {
      login.text = '请输入手机号码和登录密码。'
    } else if (!checkPhoneNumbuer(username)) {
      login.text = '请输入手机号码。'
    } else if (!password) {
      login.text = '请输入登录密码。'
    }
    this.setState({login: login})
    return false
  }
  handleClose (type) {
    let info = this.state[type]
    info.display = !info.display
    this.setState({type: info})
  }
  handle2Password (e) {
    if (e.which === 13) {
      let password = this.refs.password
      if (password.value) {
        this.handleLogin()
      } else {
        this.refs.password.focus()
      }
    }
  }
  handle2Login (e) {
    if (e.which === 13) {
      this.handleLogin()
    }
  }
  handleLogin () {
    if (this.checkLoginInfo()) {
      this.props.login(this.refs.username.value, this.refs.password.value)
    }
  }
  handleStep (step) {
    this.setState({step: step})
  }
  handleNext () {
    let phone = this.refs.phone.value
    let code = this.refs.authcode.value
    let {forgot, step} = this.state
    if (!checkPhoneNumbuer(phone)) {
      forgot.display = true
      forgot.text = '请输入手机号码。'
    } else if(!code) {
      forgot.display = true
      forgot.text = '请输入验证码。'
    } else {
      let promise = checkCode(phone, code)
      promise.then((r)=>{
        if (r.code === 200) {
          step = 'change'
        } else {
          forgot.display = true
          forgot.text = r.message
        }
        this.setState({step: step})
      })
    }
    this.setState({forgot: forgot})
  }
  handleDone () {
    let newPassword = this.refs.newPassword.value
    let passwordAgain = this.refs.passwordAgain.value
    let {login, change, step} = this.state
    if (!this.validatePassword(newPassword) || !this.validatePassword(passwordAgain)) {
    } else if (newPassword.length < 6) {
      change.display = true
      change.text = '新密码长度至少6位'
      this.setState({change: change})
    } else if (newPassword !== passwordAgain) {
      change.display = true
      if (passwordAgain === '') {
        change.text = '请输入确认新密码'
      } else {
        change.text = '新密码与确认新密码不一致'
      }
      this.refs.passwordAgain.focus()
      this.setState({change: change})
    } else {
      let promise = resetPassword(this.refs.phone.value, newPassword, passwordAgain)
      promise.then((r)=>{
        if (r.code === 200) {
          login.type = 'info'
          login.display = true
          login.text = r.message
          step = 'login'
        } else {
          change.display = true
          change.text = r.message
        }
        this.setState({change: change, login: login, step: step})
      })
    }
  }
  handleCheck (e) {
    this.validatePassword(e.target.value)
  }
  validatePassword (password) {
    let {change} = this.state
    if (!checkPassword(password)) {
      change.display = true
      change.text = '新密码必须是字母/数字/字符。'
      this.setState({change: change})
      return false
    } else if (change.display) {
      change.display = false
      change.text = ''
      this.setState({change: change})
    }
    return true
  }
  countDown (timing) {
    let tips = `${timing}秒`
    let {codeProps} = this.state
    if (timing) {
      window.setTimeout(()=>{if (!this.hasUnmounted) this.countDown(timing)}, 1000)
    } else {
      codeProps['data-send'] = 0
      tips = '获取验证码'
    }
    this.setState({codeProps: codeProps, codeTips: tips})
    timing--
  }
  handleSms () {
    let timing = 60
    let phone = this.refs.phone.value
    let authCode = this.refs.authcode
    let {forgot, codeProps} = this.state
    if (!checkPhoneNumbuer(phone)) {
      forgot.display = true
      forgot.text = '请输入手机号码。'
    }else if (phone && !codeProps['data-send']) {
      forgot.display = false
      authCode.value = ''
      codeProps['data-send'] = 1
      this.props.sendSmsCode(phone)
      this.countDown(timing)
    }
    this.setState({forgot: forgot, codeProps})
  }
  handleCodeInput () {
    let {btnProps} = this.state
    if (checkPhoneNumbuer(this.refs.phone.value) && this.refs.authcode.value.length > 0) {
      btnProps.disabled = ''
    } else {
      btnProps.disabled = 'disabled'
    }
    this.setState({btnProps: btnProps})
  }
  render () {
    const {step, login, forgot, change, btnProps, codeProps, codeTips} = this.state
    return (
      <div className="user-login">
        <div className="row bs-reset">
          <div className="col-md-6 bs-reset">
            <div className="login-bg">
              <img className="login-logo" src={require('../../../static/img/logo.png')} /> </div>
          </div>
          <div className="col-md-6 login-container bs-reset">
            <div className="login-content">
              <h1>设备健康管理平台</h1>
              <h4><span>感知</span><span className="padding">互联</span><span className="padding">价值管理</span></h4>
              <p style={{textIndent: '2em'}}>利用智能传感器、物联网、云计算、大数据等技术，构建设备全运行周期数据管理，为用户提供设备远程运行状态监测、故障预警、远程维护、质量诊断、预测性维修、售后服务管理以及客户管理等在线服务。</p>
              <div className={classnames('login-form', {'display-hide': step !== 'login'})}>
                <div className="row">
                  <div className="col-xs-6">
                    <input className="form-control form-control-solid placeholder-no-fix" type="text" autoComplete="off" placeholder="手机号码" maxLength="11" ref="username" name="username" onKeyPress={this.handle2Password}/> </div>
                  <div className="col-xs-6">
                    <input className="form-control form-control-solid placeholder-no-fix" type="password" autoComplete="off" placeholder="登录密码" ref="password" name="password" onKeyPress={this.handle2Login}/> </div>
                </div>
                <div className={classnames('alert', `alert-${login.type}`, {'display-hide': !login.display})}>
                  <button className="close" style={{position: 'relative', zIndex:10001, fontWeight: 100, right: '-5px', top: '-10px'}} onClick={() => this.handleClose('login')}>×</button>
                  <span>{login.text}</span>
                </div>
                <div className="row">
                  <div className="col-xs-6">
                    <div className="rem-login">
                      <label>
                        <input type="checkbox" ref="remember" className="rem-checkbox" defaultChecked />一周内免登
                      </label>
                    </div>
                  </div>
                  <div className="col-xs-6 text-right">
                    <div className="forgot-password">
                      <a href="javascript:;" className="forget-password" onClick={() => this.handleStep('forgot')}>忘记密码?</a>
                    </div>
                    <button id="login-btn" className="btn blue" type="button" onClick={this.handleLogin}>点击登录</button>
                  </div>
                </div>
              </div>
              <div className={classnames({'display-hide': step !== 'forgot'})}>
                <h3 className="font-green">取回密码</h3>
                <p>请输入您的手机号码来获取验证码</p>
                <div className="form-group">
                  <input ref="phone" className="form-control placeholder-no-fix" type="text" autoComplete="off" maxLength="11" placeholder="手机号码" name="phone" onKeyUp={this.handleCodeInput} />
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" ref="authcode" className="form-control" name="authcode" placeholder="验证码" onKeyUp={this.handleCodeInput}></input>
                    <div className="input-group-addon verification-code" onClick={this.handleSms}>
                      <span ref="code" {...codeProps}>{codeTips}</span>
                    </div></div>
                </div>
                <div className={classnames('alert', `alert-${forgot.type}`, {'display-hide': !forgot.display})}>
                  <button className="close" style={{position: 'relative', zIndex:10001, fontWeight: 100, right: '-5px', top: '-10px'}} onClick={() => this.handleClose('forgot')}>×</button>
                  <span>{forgot.text}</span>
                </div>
                <div className="form-actions">
                  <button type="button" className="btn grey btn-default" onClick={() => this.handleStep('login')}>返回登录</button>
                  <button ref="btnNext" type="button" id="next-btn" className="btn blue btn-success pull-right" {...btnProps} onClick={this.handleNext}>下一步</button>
                </div>
              </div>
              <div className={classnames({'display-hide': step !== 'change'})}>
                <div className="form-group">
                    <input className="form-control form-control-solid placeholder-no-fix" type="password" autoComplete="off" placeholder="新密码" ref="newPassword" name="newPassword" onKeyUp={this.handleCheck}/> </div>
                <div className="form-group">
                    <input className="form-control form-control-solid placeholder-no-fix" type="password" autoComplete="off" placeholder="重复密码" ref="passwordAgain" name="passwordAgain" onKeyUp={this.handleCheck}/> </div>
                <div className={classnames('alert', `alert-${change.type}`, {'display-hide': !change.display})}>
                  <button className="close" style={{position: 'relative', zIndex:10001, fontWeight: 100, right: '-5px', top: '-10px'}} onClick={() => this.handleClose('change')}>×</button>
                  <span>{change.text}</span>
                </div>
                <div className="form-actions">
                  <button id="login-btn" className="btn blue btn-block" type="button" onClick={this.handleDone}>确认修改</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const {user} = state
  return {user: user.has('user') && user.get('user') || null, sms: user.has('sms') && user.get('sms'), error_message: user.get('error_message') || ''}
}

function mapDispatchToProps (dispatch) {
  return {
    login: bindActionCreators(login, dispatch),
    sendSmsCode: bindActionCreators(sendSmsCode, dispatch),
  }
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(Login)
