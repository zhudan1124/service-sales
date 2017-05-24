import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { getDevicesWithCategory } from '../../actions/device'
import Base from '../../containers/base'
import './index.less'

class Devices extends Base {
  constructor (props) {
    super(props)
  }
  static propTypes = {
    getDevicesWithCategory: PropTypes.func.isRequired
  }
  componentDidMount () {
    this.props.children || this.props.getDevicesWithCategory()
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.children && !nextProps.children) {
      this.props.getDevicesWithCategory()
    }
  }
  render () {
    return (
        <div className="row">
            MY DEVICES
        </div>
    )
  }
}

function mapStateToProps (state) {
  const { device } = state
  return { device_summary: device.has('device_summary') && device.get('device_summary').toArray() || [] }
}

function mapDispatchToProps (dispatch) {
  return {
    getDevicesWithCategory: bindActionCreators(getDevicesWithCategory, dispatch)
  }
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(Devices)
