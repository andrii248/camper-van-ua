import formatPriceToEuro from 'helpers/formatPriceToEuro';
import css from './CamperCard.module.css';
import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import CamperDetails from 'components/CamperDetails/CamperDetails';
import Button from 'components/Button/Button';

const CamperCard = ({
  _id,
  gallery,
  name,
  price,
  rating,
  reviews,
  location,
  adults,
  engine,
  transmission,
  description,
  details: { kitchen, beds, airConditioner },
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

          <div className={css.priceWrapper}>
            <div className={`${css.cardTitle} ${css.price}`}>
              {formatPriceToEuro(price)}
            </div>
            <button
              type="button"
              className={`${css.favoriteBtn}`}
              //  ${favorite && css.checked}
              onClick={() => setFavorite(prev => !prev)}
            >
              {!favorite ? (
                <svg width={24} height={24}>
                  <use href={sprite + '#icon-heart'} />
                </svg>
              ) : (
                <svg width={24} height={24} className={css.favor}>
                  <use href={sprite + '#icon-heart-favor'} />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={css.cardContainer}>
          <div className={css.cardReviews}>
            <svg width={16} height={16}>
              <use href={`${sprite}#icon-rating`} />
            </svg>
            <span>{`${rating}(${reviews.length} Reviews)`}</span>
          </div>

          <div className={css.cardLocation}>
            <svg width={16} height={16}>
              <use href={`${sprite}#icon-pin`} />
            </svg>
            <span>{location.split(', ').reverse().join(', ')}</span>
          </div>
        </div>

        <div>
          <p className={css.cardDescription}>{description}</p>
        </div>

        <CamperDetails
          details={{
            adults,
            engine,
            transmission,
            kitchen,
            beds,
            AC: airConditioner,
          }}
        ></CamperDetails>

        <Button text={'Show more'} />
      </div>
    </li>
  );
};

export default CamperCard;
