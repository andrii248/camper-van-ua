import css from './Ava.module.css';

const Ava = ({ name }) => {
  return <div className={css.ava}>{name?.charAt(0).toUpperCase()}</div>;
};

export default Ava;
