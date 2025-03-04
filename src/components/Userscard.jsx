import React from "react";
function UsersCard({ user }) {
  console.log(user);

  return (
    <>
      <div className="usercard">
        <img src={`${user.picture.large}`} alt="" />
        <p>
          {user.name.first} {user.name.last}
        </p>
        <p>{user.location.city}</p>
      </div>
    </>
  );
}
export default UsersCard;
