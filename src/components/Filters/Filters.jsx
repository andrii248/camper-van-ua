import css from './Filters.module.css';

const { default: Equipment } = require('./Equipment/Equipment');

const Filters = () => {
  return (
    <div className={css.filterWrapper}>
      <Equipment />
    </div>
  );
};

export default Filters;
