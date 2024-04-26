import Button from 'components/Button/Button';
import css from './Form.module.css';

const Form = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const bookingDate = e.target.date.value;

    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
      alert('Please enter letters and spaces only for the name field');
      return;
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    if (!bookingDate) {
      alert('Please select a booking date');
      return;
    }

    window.location.reload();
  };

  return (
    <div className={css.form}>
      <h2 className={css.formTitle}>Book your campervan now</h2>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <form>
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

        <Button text={'Send'} type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
