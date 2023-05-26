import { rootReducer } from './reducers'
import { applyMiddleware, createStore } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

const environment = process.env.NODE_ENV
const middleware =
  environment === 'development'
    ? composeWithDevTools(applyMiddleware(promise, thunk, logger))
    : applyMiddleware(promise, thunk)

const store = () => {
  return createStore(rootReducer, middleware)
}

export default store
