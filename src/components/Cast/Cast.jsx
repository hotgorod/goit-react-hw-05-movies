import CastItem from 'components/CastItem/CastItem';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/getTrendingMovies';
import css from './Cast.module.css'

const Cast = () => {
  const { id } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Something went wrong! Try again later'
  );

  useEffect(() => {
    if (!id) return;
    async function fetchCast() {
      try {
        setIsLoading(true);
        const mCast = await getCast(id);

        setCast(mCast);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCast();
  }, [id]);

  return (
    <>
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
      {cast.length > 0 && (
        <ul className={css.CastList}>
          {cast.map(actor => {
            return (
              <CastItem
                key={actor.id}
                character={actor.character}
                name={actor.name}
                profile_path={actor.profile_path}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
