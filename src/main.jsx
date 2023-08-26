import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/homepage/App.jsx'
import './index.css'
import Information from './components/information/Information.jsx'
import Course from './components/courses/Course.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Course />
    <Information />
    <Dashboard />
  </React.StrictMode>,
)
