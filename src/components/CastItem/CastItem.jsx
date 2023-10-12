import React from 'react';
const baseImageUrl = 'https://image.tmdb.org/t/p/w300';
const CastItem = ({ character, name, profile_path }) => {
  return (
    <li>
      <img src={`${baseImageUrl}${profile_path}`} alt="" />
      <p>Actors name: {name}</p>
      <p>Character: {character}</p>
    </li>
  );
};

export default CastItem;
