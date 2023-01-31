import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userSlice from './features/user'
import App from './App'
import './index.css'
import './stylesheets/landingpage.css'
import './stylesheets/header.css'
import './stylesheets/mainpage.css'
import './stylesheets/meritpage.css'

const store = configureStore({
  reducer: {
    user: userSlice,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>,
)
