import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Header from './components/Header.jsx'
import './index.css'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Header />
   
    <Footer />
  </StrictMode>,
)
