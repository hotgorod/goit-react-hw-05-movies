import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import Header from './Header/Header';
import MovieDetails from './MovieDetails/MovieDetails';
import css from './App.module.css'

export const App = () => {
  return (
    <div className={css.Container}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id/*" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
