import css from './Location.module.css';
import sprite from '../../../images/sprite.svg';

const LOCATIONS = [
  'Ukraine, Kyiv',
  'Ukraine, Poltava',
  'Ukraine, Dnipro',
  'Ukraine, Odesa',
  'Ukraine, Kharkiv',
  'Ukraine, Sumy',
  'Ukraine, Lviv',
];

const Location = () => {
  return (
    <div className={css.selectContainer}>
      <select name="select" className={css.selectLocation} defaultValue="City">
        <option value="City" disabled hidden>
          City
        </option>
        {LOCATIONS.map((location, idx) => (
          <option key={idx} value={location} className={css.optionLocation}>
            {location.split(', ').reverse().join(', ')}
          </option>
        ))}
      </select>

      <svg width={16} height={16} className={css.iconLocation}>
        <use href={`${sprite}#icon-pin`} />
      </svg>
    </div>
  );
};

export default Location;
