import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import UseEffectExample from './components/UseEffectExample.tsx'
// import SwiggyApiApp from './components/SwiggyApiApp.tsx'
// import './index.css'
// import { appRouter } from './App.tsx'
// import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// createRoot(document.getElementById('root')!).render(
//   <RouterProvider router={appRouter} />
// )