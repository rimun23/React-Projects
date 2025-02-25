import React, { useEffect, useState, useTransition } from "react";
import SearchBar from "./components/SearchBar";
import UsersCard from "./components/Userscard";
function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=70")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setFilteredUsers(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  }, []);
  const handleFilter = (value) => {
    setQuery(value);
    startTransition(() => {
      const filtered = users.filter((user) =>
        `${user.name.first}${user.name.last}`.toLowerCase().includes(value)
      );
      setFilteredUsers(filtered);
    });
  };

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
