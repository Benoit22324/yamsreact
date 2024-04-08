import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import DiceContextProvider from './utils/DiceContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DiceContextProvider>
      <Router>
        <App />
      </Router>
    </DiceContextProvider>
  </React.StrictMode>,
)
