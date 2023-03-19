import Star from '../assets/star.png'
import '../styles/Card.css'

function Card(props) {
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.item.location === 'Online') {
        badgeText = 'ONLINE'
    }


    return (
            <article className="card">
                {badgeText && <span className="card__sticker">{badgeText}</span>}
                <img className="card__image" src={`../../src/assets/${props.item.coverImg}`} alt="" />
                <div className="card__copy">
                    <div className="card__details">
                        <img className="card__rating-icon" src={Star} alt="" />
                        <p><span className="card__rating">{props.item.stats.rating}</span> <span className="gray-text"><span className="card__rating-number">({props.item.stats.reviewCount})</span> • <span className="card__country">{props.item.location}</span></span></p>
                    </div>
                    <p className="card__description">{props.item.title}</p>
                    <p className="card__price"><span className="strong">From ${props.item.price}</span> / person</p>
                </div>
            </article>
    )
}

export default Card;