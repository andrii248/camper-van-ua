import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <main className={css.page}>
      <h1 className="hidden">HomePage</h1>
      <p className={css.text}>
        Discover Ukraine's hidden gems with Camper Van Adventures Ukraine!
        Embark on a journey of exploration and freedom in our modern camper
        vans. Experience the breathtaking landscapes, charming towns, and
        historic cities at your own pace. With comfortable beds, kitchen
        facilities, and expert support, traveling with us is convenient and
        affordable. Start your adventure today and explore Ukraine like never
        before!
      </p>
      <div className={css.linkContainer}>
        <Link to="/catalog" className={css.link}>
          Explore our catalog
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
