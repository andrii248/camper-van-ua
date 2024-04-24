import { useDispatch, useSelector } from 'react-redux';
import { getCamperById } from '../../redux/camperts/operations';
import css from './CamperFeatures.module.css';
import { useEffect } from 'react';
import { selectCamperByID } from '../../redux/selectors';

const CamperFeatures = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [id, dispatch]);

  const camper = useSelector(selectCamperByID);

  return <div className={css.wrapper}>{camper?.name}</div>;
};

export default CamperFeatures;
