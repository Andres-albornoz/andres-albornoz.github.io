// Root.jsx
import { Outlet, NavLink } from 'react-router-dom';
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Certificado from './Certificado.jsx'
 
export function layout () {
  return (
    <div className="app">
      <header>
        <nav>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/pages/contacto.jsx/1">contacto</NavLink>
        </nav>
      </header>
 
      <main>
        <Outlet />
      </main>

      <Certificado />
 
      <Footer />
    </div>
  );
}

export default layout ;