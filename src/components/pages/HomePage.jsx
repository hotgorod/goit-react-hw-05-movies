import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';

import { getTrendingMovies } from 'services/getTrendingMovies';


const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Something went wrong! Try again later'
  );
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    async function fetchTrendingMovies() { 
      try {
        setIsLoading(true);
        const allTrendingMovies = await getTrendingMovies();
        setTrendingMovies(allTrendingMovies.results);
              
      } catch (error) { 
        setError(true);
        setErrorMessage(error.message);
      }
      finally {
        setIsLoading(false);
      }

    }
    fetchTrendingMovies();

     
}, []);
   
    
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
        <div>
          <h2>Trending today</h2>
         <MovieList trendingMovies={trendingMovies}/>
        </div>
      </>
    );
}

export default HomePage;
