import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
//import Comp1 from './components/Comp1.jsx'
// import Comp2 from './components/Comp2.jsx'
// import Comp4 from './components/Comp4.jsx'
import Comp3 from './components/Comp3.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comp3 />
  </StrictMode>,
)

