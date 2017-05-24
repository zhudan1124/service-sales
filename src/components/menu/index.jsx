import React from 'react'
import './index.less'

export default class Menu extends React.Component {
  render () {
    return (
      <ul className="menu font16">
        <li className="active">
          <a className="color-white"><span><i></i></span>我的设备</a>
        </li>
        <li>
          <a className="color-white"><span><i></i></span>我的设备</a>
        </li>
        <li>
          <a className="color-white"><span><i></i></span>我的设备</a>
        </li>
        <li>
          <a className="color-white"><span><i></i></span>我的设备</a>
        </li>
        <li>
          <a className="color-white"><span><i></i></span>我的设备</a>
        </li>
      </ul>
    )
    // const {className='page-sidebar-menu page-header-fixed', style, c hildren} = this.props

    // return (
    //   <ul className={className} style={style}>
    //     {children}
    //   </ul>
    // )
  }
}
