// Hooks
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { BrowserRouter } from "react-router-dom"

// Store
import { store, persistor } from "@store"

// Components
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>

    <PersistGate loading={null} persistor={persistor}>
      
      <BrowserRouter>

        <React.StrictMode>
          <App />
        </React.StrictMode>
      
      </BrowserRouter>

    </PersistGate>

  </Provider>
)
