import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/posts">Блог</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
