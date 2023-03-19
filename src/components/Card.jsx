import Star from '../assets/star.png'
import '../styles/Card.css'

function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE'
    }


    return (
            <article className="card">
                {badgeText && <span className="card__sticker">{badgeText}</span>}
                <img className="card__image" src={`../../src/assets/${props.img}`} alt="Katie Zaferes in her swim gear smiling" />
                <div className="card__copy">
                    <div className="card__details">
                        <img className="card__rating-icon" src={Star} alt="" />
                        <p><span className="card__rating">{props.rating}</span> <span className="gray-text"><span className="card__rating-number">({props.reviewCount})</span> • <span className="card__country">{props.location}</span></span></p>
                    </div>
                    <p className="card__description">{props.title}</p>
                    <p className="card__price"><span className="strong">From ${props.price}</span> / person</p>
                </div>
            </article>
    )
}

export default Card;