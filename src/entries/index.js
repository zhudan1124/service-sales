import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import configureStore from '../store/configure_store'

const history = useRouterHistory(createHistory)({ basename: '' })
const store = configureStore()

import App from '../containers/app'

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/">
        <IndexRedirect to="mydevice" />
        <Route path="login" />
        <Route component={App}>
          <Route path="mydevice" getComponent={(nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../views/devices'))
            }, 'devices')
          }} />
          <Route path="*" getComponent={(nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../views/no_match'))
            }, 'no-match')
          }} />
        </Route>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root'))
