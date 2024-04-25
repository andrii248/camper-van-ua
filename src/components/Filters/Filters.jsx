import css from './Filters.module.css';
import Types from './Type/Type';
import Equipment from './Equipment/Equipment';
import Location from './Location/Location';

const Filters = () => {
  return (
    <div className={css.filterWrapper}>
      <div>
        <p className={css.filtersOptionTitle}>Location</p>
        <Location />
      </div>

      <div>
        <p className={`${css.filtersOptionTitle} ${css.filterTitle}`}>
          Filters
        </p>
        <h3 className={css.filterSubTitle}>Vehicle equipment</h3>
        <div className={css.underline}></div>
        <Equipment />
      </div>

      <div>
        <h3 className={css.filterSubTitle}>Vehicle type</h3>
        <div className={css.underline}></div>
        <Types />
      </div>
    </div>
  );
};

export default Filters;
