import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/description">Description</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
