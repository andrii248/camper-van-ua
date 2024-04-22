import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampers } from '../../redux/camperts/operations';
import {
  selectCampers,
  selectError,
  selectIsLoading,
  selectPage,
} from '../../redux/selectors';
import css from './CatalogPage.module.css';
import Loader from 'components/Loader/Loader';
import CamperList from 'components/CamperList/CamperList';
import Button from 'components/Button/Button';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  // const page = useSelector(selectPage);
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  return (
    <div>
      <div className={css.Catalog}>
        <h1 className="hidden">Catalog Page</h1>
        {isLoading && <Loader />}
        {!isLoading && <CamperList campers={campers} />}
      </div>
      {!isLoading && <Button text={'Load more'} />}
      {error && <div>Error appeared</div>}
    </div>
  );
};

export default CatalogPage;
