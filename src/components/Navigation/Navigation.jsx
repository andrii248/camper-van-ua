import { NavLink, Outlet } from 'react-router-dom';
import css from './Navigation.module.css';
import { Suspense } from 'react';


export default function Navigation() {
  return (
    <div className={css.Navigation}>
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? `${css.active}` : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? `${css.active}` : undefined)}
        >
          Catalog
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? `${css.active}` : undefined)}
        >
          Favorites
        </NavLink>
      </nav>
      <Suspense fallback={<div />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
