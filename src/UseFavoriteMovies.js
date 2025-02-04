import { useState } from "react";
const useMovies = () => {
  const [movies, setMovies] = useState([
    "Дети арбата",
    "А зори здесь тихие (1972)",
  ]);
  const addMovies = (movie) => {
    setMovies([...movies, movie]);
  };
  const removeMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };
  return { movies, removeMovie, addMovies };
};

export default useMovies;
