import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/homepage/App.jsx'
import './index.css'
import Information from './components/information/Information.jsx'
import Course from './components/courses/Course.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import Combined from './components/combined_homepage/combined.jsx'
import Textbook from './components/textbook/textbook.jsx'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
      <Routes>
        <Route exact path = "/" element = {<Combined />} />
        <Route exact path = "/dashboard" element = {<Dashboard />} />
        <Route exact path = "/textbook" element = {<Textbook />} />
      </Routes>
  </Router>
)
