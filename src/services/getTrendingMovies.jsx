import axios from "axios";
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzBkM2RjMGNmMjJjMDliNGI5NDNmNjgwM2ZmZjczMCIsInN1YiI6IjY1MjMwN2RjYWI1ZTM0MDBmZTMyYzlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b0SYdjTLCVBaZ4ILSq2IP-U1xZgGEb11pX7z428YP2w';

const authAxios = axios.create({
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export const getTrendingMovies = async () => {
    const { data } = await authAxios.get(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    
  );
 
    return data;
  } 

export const getMovie = async (movieId) => {
  const { data } = await authAxios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`
  );
  
  return data;
}

export const getCast = async (movieId) => {
  const { data } = await authAxios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`
  );
  
  return data.cast;
}

export const getReview = async (movieId) => {
  const { data } = await authAxios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`
  );
  console.log(data.results);
  return data.results;
}