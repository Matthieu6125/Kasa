import { Link, useLocation } from 'react-router-dom'
import KasaLogo from '../KasaLogoHeader'
import './Header.scss'

function Header() {
    const location = useLocation();

    return (
    <nav>
        <KasaLogo />
        <div className="nav__link-container">
        <Link to={`/`} className={location.pathname === '/' ? 'active' : ''}>Acceuil</Link>
        <Link to={`/pages/Apropos`} className={location.pathname === '/pages/Apropos' ? 'active' : ''}>A propos</Link>
        </div>
    </nav>
    )
}

export default Header 