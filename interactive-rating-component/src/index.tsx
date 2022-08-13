import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FormStateContextProvider } from './contexts/FormStateContext'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <FormStateContextProvider>
      <App />
    </FormStateContextProvider>
  </React.StrictMode>
)
