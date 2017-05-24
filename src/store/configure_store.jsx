import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from '../middlewares/promise_middleware'
import user from '../reducers/user'
import device from '../reducers/device'
const reducer = combineReducers({user, device})
const store = applyMiddleware(
  thunk,
  promiseMiddleware({promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR']})
)
export default function configureStore (initState) {
  return createStore(reducer, initState, store)
}
