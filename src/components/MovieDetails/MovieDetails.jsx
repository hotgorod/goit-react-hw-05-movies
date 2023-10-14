import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { getMovie } from 'services/getTrendingMovies';
import MovieDetailsItem from 'components/MovieDetailsItem/MovieDetailsItem';
import css from './MovieDetails.module.css'

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/')
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(
      'Something went wrong! Try again later'
    );

  useEffect(() => {
    if (!id) return;
    async function fetchMovieDetails() {
      try {
        setIsLoading(true);
        const mDetails = await getMovie(id);
        
        setMovieDetails(mDetails);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieDetails();
  },[id]

  )
  return (
    <>
      <Link className={css.GoBackLink} to={backLinkHref.current}>
        <button className={css.ButtonBack}>&#8678; Go back</button>
      </Link>
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
      <section>
        {movieDetails.poster_path && (
          <MovieDetailsItem
            id={movieDetails.id}
            poster_path={movieDetails.poster_path}
            title={movieDetails.title}
            genres={movieDetails.genres}
            overview={movieDetails.overview}
          />
        )}
        <div>
          <h2>Additional Information</h2>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </section>
    </>
  );
};

export default MovieDetails;
