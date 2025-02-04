import React, { useState } from "react";
function AddMovies({ addMovies }) {
  const [movie, setMovie] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie) {
      addMovies(movie);
      setMovie("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Введите любимый фильм</label>
      <input
        type="text"
        value={movie}
        placeholder="write your favorite film"
        onChange={(e) => setMovie(e.target.value)}
      />
      <button type="submit"></button>
    </form>
  );
}
export default AddMovies;
