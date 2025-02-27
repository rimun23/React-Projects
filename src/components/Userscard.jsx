import React from "react";
function UsersCard({ user }) {
  console.log(user);

  return (
    <div className="usercard">
      <img src={`${user.picture}`} alt="" />
      <p>{`${user.name} ${user.name}`}</p>
      <p>{user.location}</p>
    </div>
  );
}
export default UsersCard;
