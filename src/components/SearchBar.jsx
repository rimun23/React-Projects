import React from "react";
function SearchBar({ handleFilter, query }) {
  return (
    <input
      type="text"
      value={query}
      placeholder="type a name"
      onChange={(e) => handleFilter(e.target.value)}
    />
  );
}
export default SearchBar;
