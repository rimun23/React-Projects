import React from "react";
import useMovies from "./UseFavoriteMovies";
import MovieList from "./components/MovieList";
import AddMovies from "./components/AddMovie";
function App() {
  const { movies, addMovies, removeMovie } = useMovies();
  return (
    <div className="main">
      <h1>Любимые Фильмчанские</h1>
      <AddMovies addMovies={addMovies} />
      <MovieList movies={movies} removeMovie={removeMovie} />
    </div>
  );
}
export default App;
