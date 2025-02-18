import React, { useState } from "react";

function SearchMovies({ searchMovies }) {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(query);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        placeholder="Введите название фильма"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Поиск</button>
    </form>
  );
}
export default SearchMovies;
