import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({id, title}) => {
  return (
    <li>
      <Link  to={`/movies/${id}`}>
        <p>{title}</p>
      </Link>
    </li>
  );
}

export default MovieItem;
