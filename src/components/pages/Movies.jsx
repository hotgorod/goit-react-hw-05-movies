import React, { useState } from 'react';

const Movies = () => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    // handleSearch(value);
    setValue('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
          onChange={handleChange}
          value={value}
              />
              <button>Search</button>
      </form>
    </>
  );
};

export default Movies;
