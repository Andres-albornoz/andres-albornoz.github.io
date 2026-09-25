import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import layout from './core/layout.jsx';
import Index from './pages/Index.jsx';
//import { contacto } from './pages/conmacto.jsx';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <layout/>,
    children: [
      { index: true, element: <App /> }
    ],
  },
]);
 
createRoot(document.getElementById('layout')).render(
  <RouterProvider router={router} />
);
