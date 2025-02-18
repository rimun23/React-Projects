import React from "react";

const MovieList = ({ movies }) => {
  return (
    <ul className="films">
      {movies.map((movie) => (
        <li key={movie.kinopoiskId} className="film">
          <img
            src={movie.posterUrlPreview}
            alt={movie.nameOriginal}
            style={{ width: "200px", height: "300px" }}
          />
          <div>
            <h3>{movie.nameRu}</h3>
            <p>{movie.year}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
