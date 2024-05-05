import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const Navigation = lazy(() => import('components/Navigation/Navigation'));
const Home = lazy(() => import('pages/HomePage/HomePage'));
const Catalog = lazy(() => import('pages/CatalogPage/CatalogPage'));
const Favorites = lazy(() => import('pages/FavoritesPage/FavoritesPage'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
