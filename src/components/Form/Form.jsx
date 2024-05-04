import Button from 'components/Button/Button';
import css from './Form.module.css';

const Form = () => {
  const handleSubmit = e => {
    e.preventDefault();

    window.location.reload();
  };

  return (
    <div className={css.form}>
      <h2 className={css.formTitle}>Book your campervan now</h2>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit}>
        <div className={css.inputWrapper}>
          <input
            className={css.formInput}
            type="text"
            id="name"
            name="name"
            pattern="^[A-Za-z\s]+$"
            title="Please enter letters and spaces only"
            required
            placeholder="Name"
          />

          <input
            className={css.formInput}
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
          />

          <input
            className={css.formInput}
            type="date"
            id="date"
            name="date"
            required
            placeholder="Booking date"
          />
          <textarea
            className={`${css.formInput} ${css.formTextarea}`}
            id="comment"
            name="comment"
            rows="5"
            cols="60"
            placeholder="Comment"
          ></textarea>
        </div>

        <Button text={'Send'} type="submit" />
      </form>
    </div>
  );
};

export default Form;
