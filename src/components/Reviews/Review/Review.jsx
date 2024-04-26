import Ava from '../Ava/Ava';
import Rating from '../Rating/Rating';
import css from './Review.module.css';

const Review = ({ reviewer_name: name, reviewer_rating: rating, comment }) => {
  return (
    <li className={css.review}>
      <div className={css.header}>
        <Ava name={name} />
        <div className={css.container}>
          <p className={css.name}>{name}</p>
          <Rating rating={rating} />
        </div>
      </div>
      <p className={css.comment}>{comment}</p>
    </li>
  );
};

export default Review;
