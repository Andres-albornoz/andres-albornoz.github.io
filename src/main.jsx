/*import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import Layout from './core/Layout.jsx';
import Contacto from './pages/contacto.jsx';
import Index from './pages/Index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: 'contacto', element: <Contacto /> },
    ],
  },
]);

createRoot(document.getElementById('Layout')).render(
  <RouterProvider router={router} />
);
/*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
/**/