import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import './index.css'
import App from './App.jsx'

import userReducer from './reducers/userReducer.js'
import documentReducer from './reducers/userReducer.js'

const store = configureStore({
  reducer: {
    user: userReducer,
    document: documentReducer,
  }
})

store.subscribe(() => {
  console.log(store.getState())
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
