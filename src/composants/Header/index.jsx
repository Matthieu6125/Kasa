import { Link } from 'react-router-dom'
import KasaLogo from '../KasaLogoHeader'
import './Header.scss'

function Header() {
    return (
    <nav>
        <KasaLogo />
        <div className="nav__link-container">
        <Link to={`/`}>Acceuil</Link>
        <Link to={`/pages/Apropos`}>A propos</Link>
        </div>
    </nav>
    )
}

export default Header