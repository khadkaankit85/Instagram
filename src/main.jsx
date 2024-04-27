import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/index.css'
//importing the provider from redux toolkit
import { Provider } from 'react-redux'
//importing our redux theme store from our created file
import { store } from './Redux/store.js'
import { Auth0Provider } from '@auth0/auth0-react'


//let's create routes here I guess

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={`${import.meta.env.AUTHO_DOMAIN}`}
      clientId={`${import.meta.env.AUTHO_CLIENT_ID}`}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>

  </React.StrictMode>,
)
