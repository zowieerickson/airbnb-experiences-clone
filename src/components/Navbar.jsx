import AirbnbLogo from '../assets/airbnb-logo.png'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav className="nav">
            <img src={AirbnbLogo} className="nav__logo" alt="Airbnb logo" />
        </nav>
    )
}

export default Navbar
