import Games from "./components/Games";
import Greetings from "./components/Greetings";
import Contacts from "./components/Contact";
import Navigation from "./components/Navigation";
import Description from "./components/Description";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function RouterApp() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Greetings />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/description" element={<Description />} />
      </Routes>
    </Router>
  );
}
export default RouterApp;
