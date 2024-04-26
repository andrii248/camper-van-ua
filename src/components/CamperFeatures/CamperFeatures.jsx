import { useDispatch, useSelector } from 'react-redux';
import { getCamperById } from '../../redux/camperts/operations';
import css from './CamperFeatures.module.css';
import { useEffect, useState } from 'react';
import { selectCamperByID } from '../../redux/selectors';
import sprite from '../../images/sprite.svg';
import formatPriceToEuro from 'helpers/formatPriceToEuro';
import Features from 'components/Features/Features';
import Form from 'components/Form/Form';

const CamperFeatures = ({ id, onClick }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [id, dispatch]);

  const camper = useSelector(selectCamperByID);
  console.log(camper);

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  const handleFeatures = () => {
    handleTabChange('features');
  };

  const handleReviews = () => {
    handleTabChange('reviews');
  };

  return (
    <div className={css.containerModal}>
      <div className={css.titleContainer}>
        <h2 className={css.camperTitle}>{camper?.name}</h2>
        <button type="button" onClick={onClick} className={css.cross}>
          <svg width={32} height={32}>
            <use href={sprite + '#icon-cross'} />
          </svg>
        </button>
      </div>
      <div className={css.cardContainer}>
        <div className={css.cardReviews}>
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-rating`} />
          </svg>
          <span>{`${camper?.rating}(${camper?.reviews.length} Reviews)`}</span>
        </div>

        <div className={css.cardLocation}>
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-pin`} />
          </svg>
          <span>{camper?.location.split(', ').reverse().join(', ')}</span>
        </div>
      </div>

      <div className={css.camperTitle}>{formatPriceToEuro(camper?.price)}</div>

      <ul className={css.camperGallery}>
        {camper?.gallery.map((image, idx) => (
          <li className={css.imageContainer} key={idx}>
            <img className={css.camperImg} src={image} alt={camper?.name} />
          </li>
        ))}
      </ul>

      <div>
        <p className={css.cardDescription}>{camper?.description}</p>
      </div>

      <div className={css.pagesWrapper}>
        <button
          onClick={handleFeatures}
          type="button"
          className={`${css.pageButton} ${
            activeTab === 'features' ? css.active : ''
          }`}
        >
          Features
        </button>

        <button
          onClick={handleReviews}
          type="button"
          className={`${css.pageButton} ${
            activeTab === 'reviews' ? css.active : ''
          }`}
        >
          Reviews
        </button>
      </div>

      <div className={css.pageContentWrapper}>
        {activeTab === 'features' && camper && (
          <>
            <Features data={camper} />
            <Form />
          </>
        )}
      </div>
    </div>
  );
};

export default CamperFeatures;
