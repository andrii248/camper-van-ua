import css from './Type.module.css';
import sprite from '../../../images/sprite.svg';

const VAN_TYPES = {
  panelTruck: 'Van',
  fullyIntegrated: 'Fully Integrated',
  alcove: 'Alcove',
};

const Types = () => {
  return (
    <ul className={css.vanTypes}>
      {Object.entries(VAN_TYPES).map(([key, value], index) => {
        let innerText;
        if (value) {
          innerText = value;
        } else {
          if (!value) return null;
          innerText = key[0].toLocaleUpperCase() + key.slice(1);
        }

        return (
          <li key={index} className={css.vanTypeItem}>
            <svg width={40} height={28}>
              <use href={`${sprite}#icon-${key}`} />
            </svg>
            <span className={css.typeText}>{innerText}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Types;
