import React from 'react'
import Header from '../../views/layout/header'
import Nar from '../../views/layout/nar'
import Show from '../../views/layout/show'
import Container from '../../views/layout/container'
import Grid from '../../views/layout/grid'
import DhmsTitle from '../../views/layout/title'
import Table from '../../views/layout/table'
import Btn from '../../views/layout/btn'
import Text from '../../views/layout/text'
import Font from '../../views/layout/font'
import Form from '../../views/layout/form'
import Other from '../../views/layout/other'
import '../../../static/css/common.scss'
import './index.scss'

const App = () => {
  return (
    <div className="clearfix">
      <Header />
      <div className="blank40" />
      <div className="dhms-container">
        <div className="content">
          <div className="inner">
            <Show />
            <Container />
            <Grid />
            <DhmsTitle />
            <Table />
            <Btn />
            <Text />
            <Font />
            <Form />
            <Other />
          </div>
        </div>
        <Nar />
      </div>
    </div>
  )
}

export default App
