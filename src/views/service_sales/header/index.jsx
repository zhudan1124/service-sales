import React from 'react'
const Header = () => (
  <div className="service-head">
    <i className="anticon-list" />
    <div className="sign-out fr">
      <a><i className="anticon-quit fl" />退出</a>
    </div>
    <div className="user-info fr color-black">
      <img className="fl" src={require('../../../../static/img/user-img.jpg')} />
      dan_zhu
    </div>
  </div>
)
export default Header
