import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import { doVisitTrace } from '../../utils'

class RCLink extends React.Component {
  constructor (props) {
    super(props)
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }
  shouldComponentUpdate(nextProps) {
    return !!nextProps.selected && nextProps.selected !== this.props.selected || nextProps.to !== this.props.to
  }
  realPath (path, basePath='') {
    return path.slice(0, 1) !== '/' ? `${basePath || window.document.location.pathname}/${path}` : path
  }
  componentDidMount () {
    const {selected, children, forBreadcrumb} = this.props
    if (selected) {
      doVisitTrace(window.document.location.pathname, forBreadcrumb || children)
    }
  }
  handleLinkClick () {
    const {to, children, forBreadcrumb} = this.props
    doVisitTrace(to.slice(0, 1) !== '/' ? `${window.document.location.pathname}/${to}` : to, forBreadcrumb || children)
  }
  render () {
    const {children, forBreadcrumb, to, basePath='', ...otherProps} = this.props
    return (
      <Link to={this.realPath(to, basePath)} {...otherProps} onClick={this.handleLinkClick}>{children}</Link>
    )
  }
}
export default RCLink
