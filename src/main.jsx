import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { FakeStoreApp } from './FakeStoreApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FakeStoreApp />
    </BrowserRouter>
  </React.StrictMode>
)
