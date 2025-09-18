import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Dashboard } from './pages/Dashboard'
import { ThemeToggle } from './components/ThemeToggle'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Dashboard />
    <ThemeToggle />
  </React.StrictMode>
)
