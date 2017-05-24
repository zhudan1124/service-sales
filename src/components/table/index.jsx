import React, { PropTypes } from 'react'
import {is} from 'immutable'
import TableHeader from './header'
import TableRow from './row'
import Pagination from '../pagination'
import './index.less'

export default class Table extends React.Component {
  constructor (props) {
    super(props)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.getMaxCurrent = this.getMaxCurrent.bind(this)
    const pagination = props.pagination || {}
    this.state = {
      pagination: this.hasPagination() ?
        Object.assign({}, {onChange: function () {}}, pagination, {
          current: pagination.defaultCurrent || pagination.current || 1,
          pageSize: pagination.defaultPageSize || pagination.pageSize || 10,
        }) : {},
      selectedRowKeys: (props.rowSelection || {}).selectedRowKeys || []
    }
  }
  static propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    onRowClick: PropTypes.func,
    onRowDoubleClick: PropTypes.func,
    prefixCls: PropTypes.string,
    bodyStyle: PropTypes.object,
    rowSelection: PropTypes.object,
    style: PropTypes.object,
    childrenColumnName: PropTypes.string,
    indentSize: PropTypes.number,
    expandIconColumnIndex: PropTypes.number,
    showHeader: PropTypes.bool,
    rowRef: PropTypes.func,
    title: PropTypes.func,
    footer: PropTypes.func,
    emptyText: PropTypes.func,
    onChange: PropTypes.func,
    mode: PropTypes.string,
    float: PropTypes.string
  }

  static defaultProps = {
    data: [],
    columns: [],
    rowKey: 'key',
    onRowClick() {},
    onRowDoubleClick() {},
    prefixCls: 'dhms-table',
    bodyStyle: {},
    rowSelection: null,
    style: {},
    childrenColumnName: 'children',
    indentSize: 15,
    expandIconColumnIndex: 0,
    showHeader: true,
    rowRef: () => null,
    emptyText: () => 'No Data',
    onChange: function () {},
    mode: 'responsive',
    float: 'right'
  }
  shouldComponentUpdate(nextProps, nextState) {
    this.setState({selectedRowKeys: (nextProps.rowSelection || {}).selectedRowKeys || []})
    return !is(nextProps, this.props) || !is(nextState.selectedRowKeys, this.state.selectedRowKeys)
  }
  componentWillReceiveProps(nextProps) {
    if (('pagination' in nextProps) && nextProps.pagination !== false) {
      this.setState(previousState => {
        const newPagination = Object.assign({}, previousState.pagination, nextProps.pagination);
        newPagination.current = newPagination.current || 1;
        return { pagination: newPagination };
      });
    }
  }
  getHeader(columns) {
    let cp = this
    const { data, showHeader, prefixCls, rowSelection } = cp.props
    let {selectedRowKeys} = cp.state
    if (rowSelection) {
      const selectionColumn = {key: 'selection-column', tooltip: false, className: `${prefixCls}-selection-column`, render: (_, record, index) =>{
        return <input type="checkbox" checked={selectedRowKeys.indexOf(index) !== -1} className={`${prefixCls}-selection-column`} onChange={(e)=>{
          if (e.target.checked) {
            selectedRowKeys.push(index)
          } else {
            selectedRowKeys.splice(selectedRowKeys.indexOf(index), 1)
          }
          cp.setState({selectedRowKeys: selectedRowKeys})
          cp.forceUpdate()
          rowSelection.onSelect && rowSelection.onSelect(record, e.target.checked, data.filter((item, i) => selectedRowKeys.indexOf(i) !== -1))
          rowSelection.onChange && rowSelection.onChange(selectedRowKeys, data.filter((item, i) => selectedRowKeys.indexOf(i) !== -1))
        }}/>
      }, title: (<input type="checkbox" checked={selectedRowKeys.length && selectedRowKeys.length === data.length} className={`${prefixCls}-selection-column`} onChange={(e)=>{
        let changeRows = data.filter((item, i) => selectedRowKeys.indexOf(i) === -1).map((item, i) => item)
        if (e.target.checked) {
          selectedRowKeys = data.map((item, i) => i)
        } else {
          selectedRowKeys = []
        }
        cp.setState({selectedRowKeys: selectedRowKeys})
        rowSelection.onSelectAll && rowSelection.onSelectAll(e.target.checked, data, changeRows)
        rowSelection.onChange && rowSelection.onChange(selectedRowKeys, data.filter((item, i) => selectedRowKeys.indexOf(i) !== -1))
      }}/>)}
      if (columns[0] && columns[0].key === 'selection-column') {
        columns[0] = selectionColumn
      } else {
        columns.unshift(selectionColumn)
      }
    }
    let rows = this.getHeaderRows(columns)
    return showHeader ? (
      <TableHeader
        prefixCls={prefixCls}
        rows={rows}
      />
    ) : null;
  }
  getHeaderRows(columns, currentRow = 0, rows) {
    rows = rows || [];
    rows[currentRow] = rows[currentRow] || [];

    columns.forEach((column, index) => {
      if (column.rowSpan && rows.length < column.rowSpan) {
        while (rows.length < column.rowSpan) {
          rows.push([]);
        }
      }
      const cell = {
        key: column.key,
        className: column.className || '',
        children: column.title || ''
      };
      if (column.children) {
        this.getHeaderRows(column.children, currentRow + 1, rows);
      }
      if ('colSpan' in column) {
        cell.colSpan = column.colSpan;
      }
      if ('rowSpan' in column) {
        cell.rowSpan = column.rowSpan;
      }
      if (cell.colSpan !== 0) {
        rows[currentRow].push(cell);
      }
    });
    return rows.filter(row => row.length > 0);
  }
  getRowsByData(data) {
    const props = this.props
    const onRowClick = props.onRowClick;
    const onRowDoubleClick = props.onRowDoubleClick
    let rst = []
    for (let i = 0; i < data.length; i++) {
      const record = data[i]
      rst.push(
        <TableRow
          columns={props.columns}
          visible={true}
          indentSize={props.indentSize}
          record={record}
          index={i}
          prefixCls={`${props.prefixCls}-row`}
          onRowClick={onRowClick}
          onRowDoubleClick={onRowDoubleClick}
          key={i}
        />
      )
    }
    return rst
  }
  hasPagination() {
    return this.props.pagination !== false
  }
  handlePageChange (current) {
    const props = this.props;
    let pagination = Object.assign({}, this.state.pagination);
    if (current) {
      pagination.current = current;
    } else {
      pagination.current = pagination.current || 1;
    }
    pagination.onChange(pagination.current);

    const newState = {
      pagination,
      selectedRowKeys: []
    }
    // Controlled current prop will not respond user interaction
    if (props.pagination && 'current' in props.pagination) {
      newState.pagination = Object.assign({}, pagination, {
        current: this.state.pagination.current
      })
    }
    this.setState(newState)

    this.props.onChange.apply(null, [pagination])
  }
  getMaxCurrent(total) {
    const { current, pageSize } = this.state.pagination
    if ((current - 1) * pageSize >= total) {
      return current - 1
    }
    return current
  }
  renderPagination() {
    if (!this.hasPagination()) {
      return null;
    }
    const { pagination } = this.state
    const props = this.props
    let total = pagination.total || props.data.length
    return (total > 0) ?
      <Pagination
        {...pagination}
        style={{float: props.float}}
        className={`${props.prefixCls}-pagination`}
        onChange={this.handlePageChange}
        total={total}
        current={this.getMaxCurrent(total)}
      /> : null;
  }
  render() {
    const { className, tableStyle, columns, data, mode } = this.props;
    return (
      <div className={`table-${mode}`}>
        <table className={`table ${className}`} style={tableStyle}>
          {this.getHeader(columns)}
          <tbody>
          {this.getRowsByData(data)}
          </tbody>
        </table>
        {this.props.children}
        {this.renderPagination()}
      </div>
    )
  }
}
