import React from 'react'
import Base from '../../containers/base'
import './index.less'

class NoMatch extends Base {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <h1 className="no-match">功能尚未开放,请联系管理员。</h1>
    )
  }
}
module.exports = NoMatch
