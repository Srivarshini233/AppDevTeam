import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/style.css'
import App from './App'
import { ThemeProvider } from './components/theme-provider'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

      <App />
      <Toaster richColors/>
    </ThemeProvider>
  </React.StrictMode>
)
