import CamperCard from 'components/CamperCard/CamperCard';
import css from './CamperList.module.css';

const CamperList = ({ campers }) => {
  return (
    <ul className={css.CardList}>
      {campers.map(camper => (
        <CamperCard key={camper._id} {...camper} />
      ))}
    </ul>
  );
};

export default CamperList;
