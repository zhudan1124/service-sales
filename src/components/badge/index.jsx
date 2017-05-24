import React from 'react'
import './index.less'

export default class Badge extends React.Component {
  render () {
    const {url, count, icon, badgeClass='badge-default'} = this.props
    const sup = count ? <sup className={`badge ${badgeClass}`}>{count >= 99 ? '99+' : count}</sup> : ''
    if (url) {
      return (
        <a href={url} className="dhms-badge dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
          {icon}{sup}
        </a>
      )
    }
    return (
      <span className="dhms-badge dropdown-toggle">
        {icon}{sup}
      </span>
    )
  }
}
