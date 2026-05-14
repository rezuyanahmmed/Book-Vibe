import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, } from 'react-router'
import { RouterProvider } from 'react-router/dom';
import MainLayout from './Layout/MainLayout';
import Books from './Pages/Books/Books';
import HomePage from './Pages/homepage/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "/books",
        element: <Books></Books>
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
