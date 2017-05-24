import React from 'react'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount () {
  }
  render() {
    return (
      <div className="header font16 ">
        <div className="header-user">
          <div className="header-show">
            <img src={require('../../../static/img/user-img.jpeg')} />
            <span className="icon-chevron-down"></span>
          </div>
          <ul className="header-hide txt-center font14">
            <li><a>修改密码</a></li>
            <li><a>退出登录</a></li>
          </ul>
        </div>
        <p className="txt-center logo-blue"><img src={require('../../../static/img/logo-blue.png')}/></p>
      </div>
    )
  }
}
