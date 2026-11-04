import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Ir al inicio">
        <span className="brand-mark" aria-hidden="true">
          AA
        </span>
        <span className="brand-text">
          Andrés Albornoz
          <small>CV personal</small>
        </span>
      </Link>

      <nav className="site-nav" aria-label="Navegación principal">
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="/portafolio">Portafolio</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
        <a
          href="https://github.com/Andres-albornoz?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}

export default Header
