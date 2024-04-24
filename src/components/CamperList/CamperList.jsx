import CamperCard from 'components/CamperCard/CamperCard';
import css from './CamperList.module.css';

const CamperList = ({ campers, showMoreClick }) => {
  return (
    <ul className={css.CardList}>
      {campers.map(camper => (
        <CamperCard
          key={camper._id}
          {...camper}
          showMoreClick={showMoreClick}
        />
      ))}
    </ul>
  );
};

export default CamperList;
