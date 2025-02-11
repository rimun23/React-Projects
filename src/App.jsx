import React from "react";
import useMovies from "./UseFavoriteMovies";
import MovieList from "./components/MovieList";
import AddMovies from "./components/AddMovie";
import useMath from "./UseMath";
import MathComp from "./components/MathComp";
import MathRes from "./components/MathRes";
function App() {
  const { movies, addMovies, removeMovie } = useMovies();
  const { factorial, numbers } = useMath();
  return (
    <div className="main">
      <h1>Любимые Фильмчанские</h1>
      <AddMovies addMovies={addMovies} />
      <MovieList movies={movies} removeMovie={removeMovie} />
      <MathComp factorial={factorial} />
      <MathRes numbers={numbers} />
    </div>
  );
}
export default App;
