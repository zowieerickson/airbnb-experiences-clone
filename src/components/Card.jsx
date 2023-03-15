import KatieZaferesCard from '../assets/katie-zaferes.png'
import Star from '../assets/star.png'
import '../styles/Card.css'

function Card() {
    return (
        <section className="cards">
            <article className="card">
                <div className="card__image-container">
                    <img className="card__image" src={KatieZaferesCard} alt="Katie Zaferes in her swim gear smiling" />
                    <span className="card__sticker">Sold&nbsp;Out</span>
                </div>
                <div className="card__copy">
                    <div className="card__details">
                        <img className="card__rating-icon" src={Star} alt="" />
                        <p><span className="card__rating">5.0</span> <span className="gray-text"><span className="card__rating-number">(6)</span> • <span className="card__country">usa</span></span></p>
                    </div>
                    <p className="card__description">Life lessons with Katie Zaferes</p>
                    <p className="card__price"><span class="strong">From $136</span> / person</p>
                </div>
            </article>
        </section>
    )
}

export default Card;