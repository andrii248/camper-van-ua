import { useSelector } from 'react-redux';
import css from './FavoritesPage.module.css';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import CamperFeatures from 'components/CamperFeatures/CamperFeatures';
import CamperList from 'components/CamperList/CamperList';
import { selectFavorites, selectIsLoading } from '../../redux/selectors';

const FavoritePage = () => {
  const favorites = useSelector(selectFavorites);
  const [showModal, setShowModal] = useState(false);
  const [showCamper, setShowCamper] = useState(null);
  const isLoading = useSelector(selectIsLoading);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const handleShowMore = _id => {
    setShowCamper(_id);
    toggleModal();
  };

  return (
    <div className={css.favoritesWrapper}>
      {showModal && (
        <Modal onClose={toggleModal} onClick={toggleModal}>
          <CamperFeatures id={showCamper} onClick={toggleModal} />
        </Modal>
      )}
      <div className={css.Favorites}>
        <h1 className="hidden">Favorites Page</h1>

        {favorites.length > 0 ? (
          <CamperList campers={favorites} showMoreClick={handleShowMore} />
        ) : (
          <div className={css.noItems}>You have no favorite items yet</div>
        )}

        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default FavoritePage;
