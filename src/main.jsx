import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {BrowserRouter} from 'react-router-dom'
import Scrolling from './Scrolling.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Scrolling/>
    <App />
  </BrowserRouter>
)
