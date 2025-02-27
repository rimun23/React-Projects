import { useState, useEffect } from "react";
const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=70")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  }, []);
  return { users, isLoading };
};
export default useFetchUsers;
