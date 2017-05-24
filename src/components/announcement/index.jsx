import React from 'react'
import Icon from '../../components/icon'
import Badge from '../../components/badge'
import DropdownMenu from '../../components/dropdown_menu'
import {is} from 'immutable'
import './index.less'

class Announcement extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    return !is(nextProps.list, this.props.list)
  }
  render () {
    let {url, list, total = 0, onClick} = this.props
    return (
      <li className="dropdown dropdown-extended dropdown-notification">
        <Badge url={list.size ? 'javascript:;' : url} count={list.size} icon={<Icon type="message"/>} />
        <DropdownMenu url={url} list={list} count={total} onClick={onClick}/>
      </li>
    )
  }
}
export default Announcement
