import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContactPage from './Pages/ContactPage.jsx'
import HomePage from './Pages/HomePage.jsx'
import TestPage from './Pages/TestPage.jsx'
import PortfolioPage from './Pages/PortfolioPage.jsx';



// {name: "Projects", path: "/Projects"},
// {name: "LinkedIn", path: "/LinkedIn"},
// {name: "Languages", path: "/Languages"},
// {name: "Contact", path: "/Contact"}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //App for now, will be changed to Home
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "Portfolio",
        element: <PortfolioPage />
      },
      // {
      //   path: "/EmbeddedSystems",
      //   element: <EmbeddedSystemsPage />
      // },
      // {
      //   path: "/WebDevelopment",
      //   element: <WebDevPage />
      // },
      // {
      //   path: "/GameDevelopment",
      //   element: <GameDevPage />
      // },
      {
        path: "About",
        element: <p>About</p>
      },
      {
        path: "Contact",
        element: <ContactPage />
      },

      {
        path: "Test",
        element: <TestPage />
      },
      {
        path: "Skills",
        element: <p> Skills </p>
      }
    ] 
  },
], 
  {basename: "/about-me"})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-white">
      <NextUIProvider> 
        <RouterProvider router={router} /> 
      </NextUIProvider>
    </div>
  </StrictMode>,
)
