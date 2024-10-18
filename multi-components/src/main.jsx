import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import Comp1 from './component/Comp1.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comp1 />
  </StrictMode>,
)
