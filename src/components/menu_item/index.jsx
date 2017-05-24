import React from 'react'
import RCLink from '../../components/link'
import classnames from 'classnames'
import './index.less'

export default class Menu_item extends React.Component {
  render () {
    let {title, href, icon, selected, onClick} = this.props
    selected = selected || window.document.location.pathname.indexOf(href) !== -1
    return (
      <li className={classnames({'active': selected})} onClick={onClick}>
        <RCLink to={href} selected={selected} forBreadcrumb={title}>
          {icon}
          <span key={title} className="title">{title}</span>
          {selected ? <span key={`${title}-selected`} className="selected"></span> : ''}
        </RCLink>
      </li>
    )
  }
}
