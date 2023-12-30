import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "./context/theme";
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
   <ThemeProvider >
    <App />
  </ThemeProvider>
  
)
