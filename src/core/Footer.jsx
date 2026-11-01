import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>© {currentYear} Andrés Albornoz</p>
      <div className="footer-links">
        <a href="mailto:AN.ALBORNOZC@duocuc.cl">Correo</a>
        <a
          href="https://github.com/Andres-albornoz?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <Link to="/contacto">Contacto</Link>
      </div>
    </footer>
  )
}

export default Footer
