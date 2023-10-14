import React from 'react';
import css from './CastItem.module.css'
const baseImageUrl = 'https://image.tmdb.org/t/p/w300';
const CastItem = ({ character, name, profile_path }) => {
  return (
    <li>
      {profile_path !== null && (
        <img
          className={css.CastItem}
          src={`${baseImageUrl}${profile_path}`}
          alt=""
        />
      )}
      {profile_path === null && (
        <img
          className={css.CastItem}
          src="https://placeholder.pics/svg/300x450"
          alt=""
        />
      )}

      <p>Actors name: {name}</p>
      <p>Character: {character}</p>
    </li>
  );
};

export default CastItem;
