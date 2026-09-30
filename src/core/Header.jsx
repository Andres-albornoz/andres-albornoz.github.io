import { NavLink } from 'react-router-dom';

function Header() {
    return (
            <header>
                <nav>
                    <NavLink to="/">Inicio</NavLink> |
                    <NavLink to="/contacto">Contacto</NavLink> |
                    <a href="https://github.com/Andres-albornoz?tab=repositories" target="_blank" rel="noreferrer">Portafolio</a>
                </nav>
            </header>
    );

}

export default Header;