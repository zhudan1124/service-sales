import React from 'react'
import Nar from '../../views/service_sales/nar'
import Header from '../../views/service_sales/header'
import Order from '../../views/service_sales/order'
import Index from '../../views/service_sales/index'
import List from '../../views/service_sales/list'

import '../../../static/css/common.scss'
import '../../../static/fonts_style.css'
import './v2.scss'

const App = () => {
  return (
    <div className="service-sales clearfix">
      <div className="service-main">
        <Header />
        <Order />
        <Index />
        <List />
      </div>
      <Nar />
    </div>
  )
}

export default App
