import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({id, title, location}) => {
  return (
    <li>
      <Link state={{from: location}} to={`/movies/${id}`}>
        <p>{title}</p>
      </Link>
    </li>
  );
}

export default MovieItem;
