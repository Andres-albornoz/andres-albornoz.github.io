// Root.jsx
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Certificado from './Certificado.jsx'
 
export function Layout () {
  return (
    <div className="app">
      <Header />
 
      <main>
        <Outlet />
      </main>

      <Certificado />
 
      <Footer />
    </div>
  );
}

export default Layout ;