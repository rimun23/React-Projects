import { useState } from "react";
const useMovies = () => {
  const [movies, setMovies] = useState([
    "Дети арбата",
    "А зори здесь тихие (1972)",
  ]);
  const addMovies = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };
  const removeMovie = (index) => {
    setMovies((prevMovies) => prevMovies.filter((_, i) => i !== index));
  };
  return { movies, removeMovie, addMovies };
};

export default useMovies;
