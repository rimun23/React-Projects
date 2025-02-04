import React from "react";

const MovieList = ({ movies, removeMovie }) => {
  console.log(movies);

  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>
          {movie}
          <button onClick={removeMovie(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
