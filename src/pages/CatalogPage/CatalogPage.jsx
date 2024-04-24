import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampers } from '../../redux/camperts/operations';
import { selectCampers, selectIsLoading } from '../../redux/selectors';
import css from './CatalogPage.module.css';
import Loader from 'components/Loader/Loader';
import CamperList from 'components/CamperList/CamperList';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import CamperFeatures from 'components/CamperFeatures/CamperFeatures';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showCamper, setShowCamper] = useState(null);
  // const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  // const page = useSelector(selectPage);
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const handleShowMore = _id => {
    setShowCamper(_id);
    toggleModal();
  };

  return (
    <div>
      {showModal && (
        <Modal onClose={toggleModal} onClick={toggleModal}>
          <CamperFeatures id={showCamper} onClick={toggleModal} />
        </Modal>
      )}
      <div className={css.Catalog}>
        <h1 className="hidden">Catalog Page</h1>
        {isLoading && <Loader />}
        {!isLoading && (
          <CamperList campers={campers} showMoreClick={handleShowMore} />
        )}
      </div>
      {!isLoading && <Button text={'Load more'} />}
    </div>
  );
};

export default CatalogPage;
