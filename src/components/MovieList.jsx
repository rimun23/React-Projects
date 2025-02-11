import React from "react";

const MovieList = ({ movies, removeMovie }) => {
  return (
    <ul className="films">
      {movies.map((movie, index) => (
        <li key={index} className="film">
          {movie}
          <button
            onClick={() => {
              removeMovie(index);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
