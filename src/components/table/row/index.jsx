import React, { PropTypes } from 'react'
import {is} from 'immutable'
import TableCell from '../cell'
import './index.less'

export default class TableRow extends React.Component {
  constructor (props) {
    super(props)
    this.onRowClick = this.onRowClick.bind(this)
    this.onRowDoubleClick = this.onRowDoubleClick.bind(this)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }
  static propTypes = {
    onDestroy: PropTypes.func,
    onRowClick: PropTypes.func,
    onRowDoubleClick: PropTypes.func,
    record: PropTypes.object,
    prefixCls: PropTypes.string,
    expandIconColumnIndex: PropTypes.number,
    onHover: PropTypes.func,
    columns: PropTypes.array,
    style: PropTypes.object,
    visible: PropTypes.bool,
    index: PropTypes.number,
    hoverKey: PropTypes.any,
    expanded: PropTypes.bool,
    expandable: PropTypes.any,
    onExpand: PropTypes.func,
    needIndentSpaced: PropTypes.bool,
    className: PropTypes.string,
    indent: PropTypes.number,
    indentSize: PropTypes.number,
    expandIconAsCell: PropTypes.bool,
    expandRowByClick: PropTypes.bool
  }

  static defaultProps = {
    onRowClick() {
    },
    onRowDoubleClick() {
    },
    onDestroy() {
    },
    expandIconColumnIndex: 0,
    expandRowByClick: false,
    onHover() {
    }
  }

  shouldComponentUpdate(nextProps) {
    return !is(nextProps, this.props);
  }

  componentWillUnmount() {
    this.props.onDestroy(this.props.record);
  }

  onRowClick(event) {
    const {
      record,
      index,
      onRowClick,
      expandable,
      expandRowByClick,
      expanded,
      onExpand,
    } = this.props
    if (expandable && expandRowByClick) {
      onExpand(!expanded, record)
    }
    onRowClick(record, index, event)
  }

  onRowDoubleClick(event) {
    const {record, index, onRowDoubleClick} = this.props
    onRowDoubleClick(record, index, event)
  }

  onMouseEnter() {
    const {onHover, hoverKey} = this.props
    onHover(true, hoverKey)
  }

  onMouseLeave() {
    const {onHover, hoverKey} = this.props
    onHover(false, hoverKey)
  }

  render() {
    const {prefixCls, columns, record, style, visible, index, className='', indent=0, indentSize} = this.props

    const cells = []

    for (let i = 0; i < columns.length; i++) {
      cells.push(
        <TableCell
          prefixCls={prefixCls}
          record={record}
          indentSize={indentSize}
          indent={indent}
          index={index}
          column={columns[i]}
          key={columns[i].key}
        />
      )
    }

    return (
      <tr
        onClick={this.onRowClick}
        onDoubleClick={this.onRowDoubleClick}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className={`${prefixCls} ${className} ${prefixCls}-level-${indent}`}
        style={visible ? style : { ...style, display: 'none' }}
      >
        {cells}
      </tr>
    )
  }
}
