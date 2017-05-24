import React from 'react'
import Menu from '../../components/menu'
import Menu_item from '../../components/menu_item'
import { getMenus } from '../../utils'
import './index.less'

export default class Sidebar extends React.Component {
  render () {
      const items = getMenus().map(function (m, i) {
        return <Menu_item key={`sidebar-menu-${i}`} title={m.title} href={m.path} icon={<Icon key={m.icon} type={m.icon} />}/>
      })
    return (
      <div className="sidebar">
            <span className="list-btn display-way">
              <i></i>
              <i className="two"></i>
              <i className="three"></i>
            </span>
        <p className="logo txt-center"><img src={require('../../../static/img/logo.png')}/></p>
        <p className="user-info clearfix color-white font16">
          <img className="fl" src={require('../../../static/img/user-img.jpeg')}/>
          <span>Welcome<br/><span className="color-blue">Dan.Z</span></span>
        </p>
        <Menu>
          {items}
        </Menu>


      </div>
    )
  }
}



// import React, { PropTypes } from 'react'
// import Icon from '../icon'
// import Menu from '../menu'
// import MenuItem from '../menu_item'
// import { getMenus } from '../../utils'
// import './index.less'


// export default class Sidebar extends React.Component {
//   render () {
//     const items = getMenus().map(function (m, i) {
//       return <MenuItem key={`sidebar-menu-${i}`} title={m.title} href={m.path} icon={<Icon key={m.icon} type={m.icon} />}/>
//     })
//     return (
//       <div className="page-sidebar-wrapper">
//         <div className="page-sidebar navbar-collapse collapse">
//           <Menu>
//             {items}
//           </Menu>
//         </div>
//       </div>
//     )
//   }
// }
