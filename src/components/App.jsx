import { NavLink, Route, Routes } from "react-router-dom";
import css from './App.module.css'

export const App = () => {
  return (
    <div>
      <nav className={css.Header}>
        <NavLink to="/" className={css.NavElement}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.NavElement}>
          Movies
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movies" element={<div>Movies</div>} />
      </Routes>
    </div>
  );
};
