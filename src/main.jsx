import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContenedorPadre from './ContenedorPadre'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContenedorPadre/>
  </StrictMode>,
)
