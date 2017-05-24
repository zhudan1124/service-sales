import React from 'react'
import Pager from './pager'
import './index.less'

export default class Pagination extends React.Component {
  constructor(props) {
    super(props)

    let current = props.defaultCurrent;
    if ('current' in props) {
      current = props.current
    }

    let pageSize = props.defaultPageSize
    if ('pageSize' in props) {
      pageSize = props.pageSize
    }

    this.state = {
      current: current,
      _current: current,
      pageSize: pageSize
    };

    [
      '_handleChange',
      '_prev',
      '_next',
      '_jumpPrev',
      '_jumpNext'
    ].forEach((method) => this[method] = this[method].bind(this))
  }
  static propTypes = {
    current: React.PropTypes.number,
    defaultCurrent: React.PropTypes.number,
    total: React.PropTypes.number,
    pageSize: React.PropTypes.number,
    onChange: React.PropTypes.func,
    defaultPageSize: React.PropTypes.number,
    showSizeChanger: React.PropTypes.bool,
    style: React.PropTypes.object
  }

  static defaultProps = {
    defaultCurrent: 1,
    total: 0,
    defaultPageSize: 10,
    className: '',
    onChange: function () {},
    style: {},
    prefixCls: 'dhms-pagination'
  }

  componentWillReceiveProps(nextProps) {
    if ('current' in nextProps) {
      this.setState({
        current: nextProps.current,
        _current: nextProps.current,
      });
    }

    if ('pageSize' in nextProps) {
      const newState = {};
      let current = this.state.current;
      const newCurrent = this._calcPage(nextProps.pageSize);
      current = current > newCurrent ? newCurrent : current;
      if (!('current' in nextProps)) {
        newState.current = current;
        newState._current = current;
      }
      newState.pageSize = nextProps.pageSize;
      this.setState(newState);
    }
  }

  // private methods

  _calcPage(p) {
    let pageSize = p;
    if (typeof pageSize === 'undefined') {
      pageSize = this.state.pageSize;
    }
    return Math.floor((this.props.total - 1) / pageSize) + 1;
  }

  _isValid(page) {
    return typeof page === 'number' && page >= 1 && page !== this.state.current;
  }

  _handleChange(p) {
    let page = p;
    if (this._isValid(page)) {
      if (page > this._calcPage()) {
        page = this._calcPage();
      }

      if (!('current' in this.props)) {
        this.setState({
          current: page,
          _current: page,
        })
      }

      this.props.onChange(page)

      return page
    }

    return this.state.current
  }

  _prev() {
    if (this._hasPrev()) {
      this._handleChange(this.state.current - 1)
    }
  }

  _next() {
    if (this._hasNext()) {
      this._handleChange(this.state.current + 1)
    }
  }

  _jumpPrev() {
    this._handleChange(Math.max(1, this.state.current - 5))
  }

  _jumpNext() {
    this._handleChange(Math.min(this._calcPage(), this.state.current + 5))
  }

  _hasPrev() {
    return this.state.current > 1
  }

  _hasNext() {
    return this.state.current < this._calcPage();
  }

  render() {
    const props = this.props;
    const locale = props.locale;

    const prefixCls = props.prefixCls;
    const allPages = this._calcPage()
    const pagerList = [];
    let jumpPrev = null;
    let jumpNext = null;
    let firstPager = null;
    let lastPager = null;

    if (allPages <= 9) {
      for (let i = 1; i <= allPages; i++) {
        const active = this.state.current === i;
        pagerList.push(<Pager locale={locale} rootPrefixCls={prefixCls} onClick={this._handleChange.bind(this, i)} key={i} page={i} active={active} />)
      }
    } else {
      jumpPrev = (<li title="向前 5 页" key="prev" onClick={this._jumpPrev} className={`dhms ${prefixCls}-jump-prev`}>
        <a href="javascript:void(0);"></a>
      </li>);
      jumpNext = (<li title="向后 5 页" key="next" onClick={this._jumpNext} className={`dhms ${prefixCls}-jump-next`}>
        <a href="javascript:void(0);"></a>
      </li>);
      lastPager = (<Pager
        locale={props.locale}
        last rootPrefixCls={prefixCls} onClick={this._handleChange.bind(this, allPages)} key={allPages} page={allPages} active={false} />);
      firstPager = (<Pager
        locale={props.locale}
        rootPrefixCls={prefixCls} onClick={this._handleChange.bind(this, 1)} key={1} page={1} active={false} />);

      const current = this.state.current;

      let left = Math.max(1, current - 2);
      let right = Math.min(current + 2, allPages);

      if (current - 1 <= 2) {
        right = 1 + 4;
      }

      if (allPages - current <= 2) {
        left = allPages - 4;
      }

      for (let i = left; i <= right; i++) {
        const active = current === i;
        pagerList.push(<Pager
          locale={props.locale}
          rootPrefixCls={prefixCls} onClick={this._handleChange.bind(this, i)} key={i} page={i} active={active} />);
      }

      if (current - 1 >= 4) {
        pagerList.unshift(jumpPrev);
      }
      if (allPages - current >= 4) {
        pagerList.push(jumpNext);
      }

      if (left !== 1) {
        pagerList.unshift(firstPager);
      }
      if (right !== allPages) {
        pagerList.push(lastPager);
      }
    }

    return (
      <ul className={`pagination page ${props.className}`} style={props.style}>
        <li title="上一页" onClick={this._prev} className={`${prefixCls}-prev ` + (this._hasPrev() ? '' : `${prefixCls}-disabled`)}><a href="javascript:void(0);"><i className="icon-angle-left"></i></a></li>
        {pagerList}
        <li title="下一页" onClick={this._next} className={`${prefixCls}-next ` + (this._hasNext() ? '' : `${prefixCls}-disabled`)}><a href="javascript:void(0);"><i className="icon-angle-right"></i></a></li>
      </ul>
    )
  }

}
