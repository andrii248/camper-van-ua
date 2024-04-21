import formatPriceToEuro from 'helpers/formatPriceToEuro';
import css from './CamperCard.module.css';
import { useState } from 'react';

const CamperCard = ({
  _id,
  gallery,
  name,
  price,
  rating,
  location,
  description,
  details,
}) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <li className={css.card} id={_id}>
      <div className={css.cardImgContainer}>
        <img className={css.cardImg} src={gallery[0]} alt={name} />
      </div>

      <div className={css.cardData}>
        <div className={css.cardHeader}>
          <h2 className={css.cardTitle}>{name}</h2>
          <div className={css.cardTitle}>{formatPriceToEuro(price)}</div>
          <button
            type="button"
            className={`${css.favorite} ${favorite && css.checked}`}
            onClick={() => setFavorite(prev => !prev)}
          ></button>
        </div>
        <div className={css.cardContainer}>
          <p>Reviews: {rating}</p>
          <p>Location: {location}</p>
        </div>
        <div className={css.cardDescription}>
          <p>{description}</p>
        </div>

        <div className={css.cardFeatures}>
          <ul>
            {details.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <button className="show-more-button">Show More</button>
      </div>
    </li>
  );
};

export default CamperCard;
