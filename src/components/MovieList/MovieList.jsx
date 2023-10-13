
import MovieItem from 'components/MovieItem/MovieItem';
import React from 'react';

const MovieList = ({ trendingMovies }) => {
  
  return (
    <ul>
      {trendingMovies.map(movie => {
        return <MovieItem key={movie.id} title={movie.title} id={movie.id} />;
      })}
    </ul>
  );
};

export default MovieList;
