import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {BrowserRouter} from 'react-router-dom'
import Scrolling from './Scrolling.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-rqb2213648ih8wcq.us.auth0.com"
    clientId="LcmK8mPYZ3aQRrKvjb5RJgr9qnVGYIUn"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <Scrolling/>
      <App />
    </BrowserRouter>
  </Auth0Provider>
)
