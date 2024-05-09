import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './Styles/index.css'
//importing the provider from redux toolkit
import { Provider } from 'react-redux'
//importing our redux theme store from our created file
import { store } from './Redux/store.js'
import { Auth0Provider } from '@auth0/auth0-react'
import { myRouter } from './Components/Routes.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider

      domain={`${import.meta.env.VITE_REACT_APP_AUTHO_DOMAIN}`}
      clientId={`${import.meta.env.VITE_REACT_APP_AUTHO_CLIENT_ID}`}
      authorizationParams={{
        // redirect_uri: window.location.origin
        redirect_uri: window.location.origin + "/createaccount"
      }}
    >
      <Provider store={store}>
        <RouterProvider router={myRouter} />
      </Provider>
    </Auth0Provider>

  </React.StrictMode>,
)
