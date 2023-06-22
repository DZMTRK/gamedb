import React from 'react'

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'

import App from './components/app'
import reducer from './reducer'

import './components/localization/i18n'


const root = ReactDOM.createRoot(document.getElementById('root'))

const store = createStore(reducer)

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
