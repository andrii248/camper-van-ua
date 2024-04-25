import css from './Equipment.module.css';
import sprite from '../../../images/sprite.svg';

const EQUIPMENT_LIST = {
  AC: 'AC',
  transmission: 'Automatic',
  kitchen: 'Kitchen',
  TV: 'TV',
  shower: 'Shower/WC',
};

const Equipment = () => {
  return (
    <ul className={css.equipmentList}>
      {Object.entries(EQUIPMENT_LIST).map(([key, value], index) => {
        let innerText;
        if (value) {
          innerText = value[0].toUpperCase() + value.slice(1);
        } else {
          if (!value) return null;
          innerText = key[0].toLocaleUpperCase() + key.slice(1);
        }

        return (
          <li key={index} className={css.equipmentItem}>
            <svg width={32} height={32}>
              <use href={`${sprite}#icon-${key}`} />
            </svg>
            <span className={css.equipmentText}>{innerText}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Equipment;
