import React, { PropTypes } from 'react'
import classnames from 'classnames'
import Icon from '../../components/icon'
import './index.less'

export default class Panel extends React.Component {
  constructor (props) {
    super(props)
    this.handleFullScreen = this.handleFullScreen.bind(this)
    this.handleExpand = this.handleExpand.bind(this)
    const {collapse, fullscreen} = this.props
    this.state = {
      collapse: collapse,
      fullscreen: fullscreen
    }
  }
  static propTypes = {
    collapse: PropTypes.bool,
    fullscreen: PropTypes.bool,
    title: PropTypes.string,
    style: PropTypes.object,
    options: PropTypes.object
  }
  static defaultProps = {
    style: {},
    options: {
      open: false,
      collapse: true,
      fullscreen: true
    },
    collapse: false,
    fullscreen: false
  }
  handleFullScreen (e) {
    let {handleFullScreen, options} = this.props
    if (!options.open) {
      this.setState({collapse: false, fullscreen: !this.state.fullscreen})
    } else {
      this.setState({collapse: false})
    }
    let event = document.createEvent('HTMLEvents')
    event.initEvent('resize', true, false)
    setTimeout(function () {
      window.dispatchEvent(event)
    }, 20)
    handleFullScreen && handleFullScreen()
  }
  handleExpand (e) {
    this.setState({collapse: !this.state.collapse})
  }
  render () {
    const {title, children, style, options} = this.props
    const {collapse, fullscreen} = this.state
    const actions = []
    if (!('collapse' in options) || options.collapse) {
      actions.push(<a key="panel-collapse" className="btn btn-icon-only btn-default" href="javascript:;" onClick={this.handleExpand}>
        <Icon type={classnames({'angle-down': !collapse, 'angle-up': collapse})} />
      </a>)
    }
    if (!('fullscreen' in options) || options.fullscreen) {
      actions.push(
        <a key="panel-fullscreen" className="btn btn-icon-only btn-default" href="javascript:;" onClick={this.handleFullScreen}>
          <Icon type={classnames({'arrows-alt': !fullscreen, 'shrink': fullscreen})}/>
        </a>)
    }
    return (
      <div className={classnames('portlet', 'light', 'portlet-fit', 'bordered', {'dhsm-collapse': collapse}, {'fullscreen': fullscreen})} style={style}>
        <div className="portlet-title">
          <div className="caption">
            <span className="caption-subject font-green bold">{title}</span>
          </div>
          <div className="actions">
            {actions}
          </div>
        </div>
        <div className="portlet-body">
          {children}
        </div>
      </div>
    )
  }
}
