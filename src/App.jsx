import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index.jsx'
import Contacto from './pages/contacto.jsx'
import Layout from './core/layout.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
    </Routes>
  )
}