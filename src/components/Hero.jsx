import HeroImage from '../assets/photo-grid.png'
import '../styles/Hero.css'

function Hero() {
    return (
        <header className="header">
            <img src={HeroImage} className="hero__img" alt="" />
            <div className="hero__copy">
                <h1 className="hero__title">Online Experiences</h1>
                <p className="hero__body">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </header>
    )
}

export default Hero