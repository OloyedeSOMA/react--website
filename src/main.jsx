import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import PhotoGallery from './Components/Pages/PhotoGallery.jsx'
import Project from './Components/Pages/Project.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    
  },
  {
    path:'/photogallery',
    element: <PhotoGallery />,
  },
  {
    path:'/projects',
    element: <Project />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
