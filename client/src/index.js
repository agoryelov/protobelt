import React from 'react'
import { render } from 'react-dom'
import Protobelt from './app/Protobelt'
import './index.css'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './state/ducks'

import socket from './state/socket'

let store = createStore(reducers, undefined, applyMiddleware(thunkMiddleware))
socket.createEvents(store.dispatch)

render(
  <Provider store={store}>
    <Protobelt />
  </Provider>,
  document.getElementById('root')
)