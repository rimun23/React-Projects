import { useState } from "react";
const useMovies = () => {
  const [movies, setMovies] = useState([
    "Дети арбата",
    "А зори здесь тихие (1972)",
  ]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const API_KEY = "cff04c20-66ed-4eb4-b22e-0bc65600bf82";
  const API_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films";
  const searchMovies = async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await fetch(
        "https://kinopoiskapiunofficial.tech/api/v2.2/films/301",
        {
          method: "GET",
          headers: {
            "X-API-KEY": "cff04c20-66ed-4eb4-b22e-0bc65600bf82",
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.json();
      if (data.items) {
        setMovies(data.items);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Ошибка при запросе API", error);
    }
    setLoading(false);
  };
  const addMovies = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };
  const removeMovie = (index) => {
    setMovies((prevMovies) => prevMovies.filter((_, i) => i !== index));
  };
  return { movies, removeMovie, addMovies, searchMovies, error, loading };
};

export default useMovies;
