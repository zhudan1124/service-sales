import React from 'react'
import { getUserInfo, getName } from '../../utils'

class Base extends React.Component {
  constructor (props) {
    super(props)
    const user = getUserInfo()
    this.kind = user && user.info && user.info.customer && user.info.customer.kind
    this.name = getName()
    let m = document.getElementById('modal-window')
    if (!m) {
      m = document.createElement('div')
      m.id = 'modal-window'
      document.body.appendChild(m)
    }
  }
  render () {
    return null
  }
}
module.exports = Base
