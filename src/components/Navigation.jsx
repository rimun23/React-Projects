import { Link } from "react-router-dom";
function Navigation({ user, setUser, auth }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/posts">Блог</Link>
        </li>
        <li>
          {!user ? (
            <Link to="/login">Войти</Link>
          ) : (
            <button
              className="exit"
              onClick={() => {
                auth.signOut().then(() => setUser(null));
              }}
            >
              Выйти
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
