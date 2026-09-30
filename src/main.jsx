import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Layout from './core/Layout.jsx';
import Contacto from './pages/contacto.jsx';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

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
