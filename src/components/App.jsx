import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import Header from './Header/Header';
import MovieDetails from './MovieDetails/MovieDetails';


export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id/*" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
