import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Contacts from "./components/Contacts";
import { Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/manga">Манга</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga" element={<ProductList />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}
export default App;
