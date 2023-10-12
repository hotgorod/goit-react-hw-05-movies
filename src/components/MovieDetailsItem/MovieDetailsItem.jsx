import React from 'react';
const baseImageUrl = 'https://image.tmdb.org/t/p/w300';
const MovieDetailsItem = ({ poster_path, title, overview, genres }) => {
    
  return (
    <div>
      <div>
        <img src={`${baseImageUrl}${poster_path}`} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
          <ul>
      {genres.map(genre => {
          return (
            <li key = {genre.name}>
              
              {genre.name}
            </li>
          );
      })}
    </ul>   
      </div>
    </div>
  );
};

export default MovieDetailsItem;
