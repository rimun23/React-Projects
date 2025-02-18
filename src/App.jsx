import React from "react";
import useMovies from "./UseFavoriteMovies";
import MovieList from "./components/MovieList";
import SearchMovies from "./components/SearchMovies";
function App() {
  const { movies, removeMovie, searchMovies, loading } = useMovies();

  return (
    <div className="main">
      <h1>Поиск любимых фильмов</h1>
      <SearchMovies searchMovies={searchMovies} />
      {loading && <p>Загрузка.....</p>}
      <MovieList movies={movies} removeMovie={removeMovie} />
    </div>
  );
}
export default App;
