import css from './CamperCard.module.css';

const CamperCard = ({
  id,
  gallery,
  name,
  price,
  rating,
  location,
  description,
  details,
}) => {
  return (
    <li className={css.card} id={id}>
      <div className={css.cardImg}>
        <img src={gallery} alt={name} />
      </div>
      <div className={css.cardDescription}>
        <div className={css.cardHeader}>
          <h2>{name}</h2>
          <h2>{price}</h2>
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
