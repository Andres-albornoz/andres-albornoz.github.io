import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

export function Layout() {
  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>

      <Header />

      <main id="main">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
