import { useDispatch, useSelector } from 'react-redux';
import { getCamperById } from '../../redux/camperts/operations';
import css from './CamperFeatures.module.css';
import { useEffect } from 'react';
import { selectCamperByID } from '../../redux/selectors';
import sprite from '../../images/sprite.svg';

const CamperFeatures = ({ id, onClick }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [id, dispatch]);

  const camper = useSelector(selectCamperByID);

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
          <svg width={32} height={32}>
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

      <div>
        <p className={css.cardDescription}>{camper?.description}</p>
      </div>

      {/* <div className={css.scrollingArea}>
        <div className={css.imageContainer}>
          {camperData?.gallery.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt={camperData?.name}
              className={css.image}
            ></img>
          ))}
        </div>
        <p>{camperData?.description}</p>
      </div>
      <div className={css.buttonsContainer}>
        <button className={css.button} onClick={toggleActive}>
          Features
        </button>
        <button className={css.button} onClick={toggleActive}>
          Reviews
        </button>
      </div>
      <div className={css.wrapper}>
        {extended && isFeaturesOpen ? (
          <Features data={parseDataForFeature(camperData)} />
        ) : (
          <Reviews data={camperData?.reviews} />
        )}
        {extended && <ModalForm />}
      </div> */}
    </div>
  );
};

export default CamperFeatures;
