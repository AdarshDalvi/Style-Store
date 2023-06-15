import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {BrowserRouter} from 'react-router-dom'
import Scrolling from './Scrolling.jsx'
import {Provider} from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Scrolling/>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
