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
    <form onSubmit={handleSubmit} className="adding">
      <label>Введите любимый фильм</label>
      <div className="intBtn">
        <input
          type="text"
          value={movie}
          placeholder="write your favorite film"
          onChange={(e) => setMovie(e.target.value)}
        />
        <button type="submit">Добавить фильм</button>
      </div>
    </form>
  );
}
export default AddMovies;
