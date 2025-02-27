import { useMemo } from "react";
const useFilteredUsers = (users, query) => {
  return (
    useMemo(() => {
      return users.filter((user) =>
        `${user.name.first}${user.name.last}`.toLowerCase().includes(query)
      );
    }),
    [users, query]
  );
};
export default useFilteredUsers;
