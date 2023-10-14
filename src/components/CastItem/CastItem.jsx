import React from 'react';
const baseImageUrl = 'https://image.tmdb.org/t/p/w300';
const CastItem = ({ character, name, profile_path }) => {
  return (
    <li>
      {profile_path !== null && (
        <img src={`${baseImageUrl}${profile_path}`} alt="" />
      )}
      {profile_path === null && (
        <img src="https://placeholder.pics/svg/300x450" alt="" />
      )}

      <p>Actors name: {name}</p>
      <p>Character: {character}</p>
    </li>
  );
};

export default CastItem;
