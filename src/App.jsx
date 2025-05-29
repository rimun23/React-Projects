import { useState } from "react";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Auth from "./components/Auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { auth } from "./firebaseConfig";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Navigation user={user} setUser={setUser} auth={auth} />
      <div className="cloud" id="cloud1">
        <div className="in_cloud">
          <div className="ball b1"></div>
          <div className="ball b2"></div>
          <div className="ball b3"></div>
          <div className="ball b4"></div>
          <div className="ball b5"></div>
        </div>
      </div>
      <div className="cloud" id="cloud2">
        <div className="in_cloud">
          <div className="ball b1"></div>
          <div className="ball b2"></div>
          <div className="ball b3"></div>
          <div className="ball b4"></div>
          <div className="ball b5"></div>
        </div>
      </div>
      <div className="whole">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/posts"
            element={<ProtectedRoute user={user} element={<Blog />} />}
          />
          <Route path="/login" element={<Auth setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
