import React, { useState, useTransition, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import UsersCard from "./components/Userscard";
import useFetchUsers from "./hooks/useFetchUsers";
import useFilteredUsers from "./hooks/useFilteredUsers";
function App() {
  const [query, setQuery] = useState("");
  const [filtredUsers, setFilteredUsers] = useState([]);
  const [isPending, startTransition] = useTransition();
  const { users, isLoading } = useFetchUsers();
  const filteredUsers = useFilteredUsers(users, query);
  const handleFilter = useCallback((value) => {
    setQuery(value);
    startTransition(() => {
      setFilteredUsers(value);
    });
  }, []);
  return (
    <div className="main">
      <div className="all">
        <h1 style={{ color: "white", margin: "15px" }}>Рандом челики</h1>
        <SearchBar query={query} handleFilter={handleFilter} />
        {isPending && <p>Фильтрация</p>}
        {isLoading ? (
          <p>Загрузка данных</p>
        ) : (
          <div className="list">
            {filteredUsers.map((user) => (
              <UsersCard user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
