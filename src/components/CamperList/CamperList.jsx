import CamperCard from 'components/CamperCard/CamperCard';
import css from './CamperList.module.css';
import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/selectors';

const CamperList = () => {
  const campers = useSelector(selectCampers);

  return (
    <ul className={css.list}>
      {campers.map(
        ({
          _id,
          gallery,
          name,
          price,
          rating,
          location,
          description,
          details,
        }) => (
          <CamperCard
            key={_id}
            id={_id}
            gallery={gallery}
            name={name}
            price={price}
            rating={rating}
            location={location}
            description={description}
            details={details}
          />
        )
      )}
    </ul>
  );
};

export default CamperList;
