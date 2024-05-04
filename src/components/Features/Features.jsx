import css from './Features.module.css';
import sprite from '../../images/sprite.svg';

const Features = ({ data }) => {
  const { adults, engine, transmission, details } = data;

  const newObject = {
    adults,
    engine,
    transmission,
    ...details,
  };

  const featureEntries = Object.entries(newObject);

  const { form, length, width, height, tank, consumption } = data;

  const campDetails = {
    Form: form,
    Length: length,
    Width: width,
    Height: height,
    Tank: tank,
    Consumption: consumption,
  };

  const detailEntries = Object.entries(campDetails);

  return (
    <div className={css.featuresWrapper}>
      <ul className={css.featuresList}>
        {featureEntries.map(([key, value], index) => (
          <li key={index} className={css.featuresItem}>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-${key}`} />
            </svg>
            <span>
              {typeof value === 'number' && value === 1
                ? key.charAt(0).toUpperCase() + key.slice(1)
                : typeof value === 'number'
                ? `${value} ${key}`
                : value.charAt(0).toUpperCase() + value.slice(1)}
            </span>
          </li>
        ))}
      </ul>
      <h3 className={css.detailsTitle}>Vehicle details</h3>
      <div className={css.underline}></div>
      <ul className={css.detailsList}>
        {detailEntries.map(([key, value], index) => (
          <li key={index} className={css.detailsItem}>
            <span>{key}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
