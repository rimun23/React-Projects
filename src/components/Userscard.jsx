import React from "react";
function UsersCard({ user }) {
  return (
    <div className="usercard">
      <img src={user.picture.large} alt="" />
      <p>{`${user.name.first} ${user.name.last}`}</p>
      <p>{user.location.country}</p>
    </div>
  );
}
export default UsersCard;
