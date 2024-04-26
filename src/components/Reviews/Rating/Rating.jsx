import css from './Rating.module.css';
import sprite from '../../../images/sprite.svg';

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    return index < Math.floor(rating) ? (
      <svg width={16} height={16} key={index}>
        <use href={`${sprite}#icon-rating`} />
      </svg>
    ) : (
      <svg width={16} height={16} key={index}>
        <use href={`${sprite}#icon-star`} />
      </svg>
    );
  });
  return <div className={css.ratingWrapper}>{stars}</div>;
};

export default Rating;
