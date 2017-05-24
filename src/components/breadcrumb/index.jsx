import React, { PropTypes } from 'react'
import RCLink from '../../components/link'
import {doVisitTrace, getVisitTraces, getStoredVisitTraces} from '../../utils'
import './index.less'

class Breadcrumb extends React.Component {
  constructor (props) {
    super(props)
  }
  static propTypes = {
    pathname: PropTypes.string.isRequired,
    defaultMenu: PropTypes.object
  }
  componentWillReceiveProps (nextProps) {
    let likeTraces = getStoredVisitTraces(nextProps.pathname)
    if (Object.prototype.toString.call(likeTraces) === '[object Array]') {
      doVisitTrace(likeTraces)
    } else {
      doVisitTrace(nextProps.pathname, likeTraces)
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.pathname !== this.props.pathname
  }
  componentWillMount () {
    const {defaultMenu} = this.props
    if (defaultMenu) {
      doVisitTrace(defaultMenu.path, defaultMenu.text)
    }
  }
  render () {
    const menus = getVisitTraces()
    const menuLength = menus.length
    const bread = menus.map((menu, i) => {
      return (
        <li key={`breadcrumb-${i}`}>
          {i === menuLength - 1 ? <span>{menu.text}</span> : <RCLink to={menu.path}>{menu.text}</RCLink>}
        </li>
      )
    })
    return (
      <div className="page-bar">
        <ul className="page-breadcrumb">
          <li>
            <RCLink to="/">首页</RCLink>
          </li>
          {bread}
        </ul>
      </div>
    )
  }
}
export default Breadcrumb
