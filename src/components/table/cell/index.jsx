import React, { PropTypes } from 'react'
import {is} from 'immutable'
import './index.less'

export default class TableCell extends React.Component {
  static propTypes = {
    record: PropTypes.object,
    prefixCls: PropTypes.string,
    index: PropTypes.number,
    indent: PropTypes.number,
    indentSize: PropTypes.number,
    column: PropTypes.object,
    expandIcon: PropTypes.node
  }
  shouldComponentUpdate(nextProps) {
    return !is(nextProps, this.props)
  }
  isInvalidRenderCellText(text) {
    return text && !React.isValidElement(text) &&
      Object.prototype.toString.call(text) === '[object Object]'
  }
  render() {
    const { record, indentSize, prefixCls, indent,
      index, expandIcon, column } = this.props
    const { dataIndex, render, tooltip = true, className = '' } = column

    let text = record.get(dataIndex)
    let tdProps
    let colSpan
    let rowSpan

    if (render) {
      text = render(text, record, index);
      if (this.isInvalidRenderCellText(text)) {
        tdProps = text.props || {}
        rowSpan = tdProps.rowSpan
        colSpan = tdProps.colSpan
        text = text.children
      }
    }

    // Fix https://github.com/ant-design/ant-design/issues/1202
    if (this.isInvalidRenderCellText(text)) {
      text = null
    }

    const indentText = expandIcon ? (
      <span
        style={{ paddingLeft: `${indentSize * indent}px` }}
        className={`${prefixCls}-indent indent-level-${indent}`}
      />
    ) : null

    if (rowSpan === 0 || colSpan === 0) {
      return null
    }
    return (
      <td
        title={tooltip ? text: ''}
        colSpan={colSpan}
        rowSpan={rowSpan}
        className={className}
      >
        {indentText}
        {expandIcon}
        {text}
      </td>
    )
  }
}
