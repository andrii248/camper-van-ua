import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampers } from '../../redux/camperts/operations';
import {
  selectCampers,
  selectIsLoading,
  selectLoadMore,
  selectPage,
} from '../../redux/selectors';
import css from './CatalogPage.module.css';
import Loader from 'components/Loader/Loader';
import CamperList from 'components/CamperList/CamperList';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import CamperFeatures from 'components/CamperFeatures/CamperFeatures';
import { setPage } from '../../redux/camperts/slice';
import Filters from 'components/Filters/Filters';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showCamper, setShowCamper] = useState(null);
  // const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const campers = useSelector(selectCampers);
  const isLoadMoreAvailable = useSelector(selectLoadMore);

  useEffect(() => {
    dispatch(getCampers(page));
  }, [dispatch, page]);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const handleShowMore = _id => {
    setShowCamper(_id);
    toggleModal();
  };

  const handleLoadMoreClick = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <div className={css.catalogWrapper}>
      {showModal && (
        <Modal onClose={toggleModal} onClick={toggleModal}>
          <CamperFeatures id={showCamper} onClick={toggleModal} />
        </Modal>
      )}
      <Filters />
      <div className={css.Catalog}>
        <h1 className="hidden">Catalog Page</h1>

        {isLoading && <Loader />}

        {!isLoading && (
          <CamperList campers={campers} showMoreClick={handleShowMore} />
        )}

        {!isLoading && isLoadMoreAvailable && (
          <Button
            className={css.loadMoreBtn}
            text={'Load more'}
            onClick={handleLoadMoreClick}
          />
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
