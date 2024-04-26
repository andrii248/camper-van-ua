import Review from './Review/Review';
import css from './ReviewsList.module.css';

const ReviewsList = ({ data }) => {
  return (
    <ul className={css.reviewsList}>
      {data.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </ul>
  );
};

export default ReviewsList;
