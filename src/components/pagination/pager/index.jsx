import React from 'react'

export default class Pager extends React.Component {
  static propTypes = {
    page: React.PropTypes.number,
    active: React.PropTypes.bool,
    last: React.PropTypes.bool,
    locale: React.PropTypes.object
  }
  render() {
    const props = this.props
    const prefixCls = `${props.rootPrefixCls}-item`
    let cls = `${prefixCls}-${props.page}`

    if (props.active) {
      cls = `${prefixCls}-active`
    }

    return (
      <li title={props.page} onClick={props.onClick}>
        <a href="javascript:void(0);" className={cls}>{props.page}</a>
      </li>
    )
  }
}
