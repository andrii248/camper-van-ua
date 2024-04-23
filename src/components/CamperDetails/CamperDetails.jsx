import css from './CamperDetails.module.css';
import sprite from '../../images/sprite.svg';

const UNCOUNTABLE_VALUES = ['transmission', 'engine'];
const COUNTABLE_VALUES = ['adults', 'beds'];

const CamperDetails = ({ details }) => {
  return (
    <ul className={css.detailsList}>
      {Object.entries(details).map(([key, value], index) => {
        let innerText;
        if (UNCOUNTABLE_VALUES.includes(key)) {
          innerText = value[0].toUpperCase() + value.slice(1);
        } else if (COUNTABLE_VALUES.includes(key)) {
          innerText = `${value} ${key}`;
        } else {
          if (!value) return null;
          innerText = key[0].toLocaleUpperCase() + key.slice(1);
        }

        return (
          <li key={index} className={css.detailsItem}>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-${key}`} />
            </svg>
            <span>{innerText}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default CamperDetails;
