import MovieItem from 'components/MovieItem/MovieItem';
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovieSearch } from 'services/getTrendingMovies';
import css from './Movie.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [MovieSearch, setMovieSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Something went wrong! Try again later'
  );

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    async function fetchMovieSearch() {
      try {
        setIsLoading(true);
        const mSearch = await getMovieSearch(query);
        
        setMovieSearch(mSearch);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieSearch();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchMovie.value;
    setSearchParams({ query: searchValue });
  };
  return (
    <>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <label>
          <input
            className={css.SearchInput}
            name="searchMovie"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies..."
            required
          />
        </label>
        <button className={css.SearchButton} type="submit">
          Search
        </button>
      </form>
      <section>
        {error && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
        {isLoading && (
          <div>
            <p>Loading...</p>
          </div>
        )}
        <ul className={css.MovieList}>
          {MovieSearch !== 0 &&
            MovieSearch.map(movie => {
              return (
                <MovieItem
                  key={movie.id}
                  title={movie.title}
                  id={movie.id}
                  location={location}
                  poster_path={movie.poster_path}
                />
              );
            })}
        </ul>
      </section>
    </>
  );
};

export default Movies;
