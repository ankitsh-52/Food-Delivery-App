import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import UseEffectExample from './components/UseEffectExample.tsx'
// import SwiggyApiApp from './components/SwiggyApiApp.tsx'
// import './index.css'
// import { appRouter } from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage.tsx';
import AboutPage from './components/AboutPage.tsx';
import ContactUs from './components/ContactUs.tsx';
import { Body } from './components/Body.tsx';

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <App />,
    children:[
      {
        path : "/",
        element: <Body />,
      },
      {
        path : "/about",
        element: <AboutPage />,
      },
      {
        path : "/contact",
        element: <ContactUs />,
      },
    ],
    errorElement: <ErrorPage />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={appRouter} />
  </StrictMode>
)

