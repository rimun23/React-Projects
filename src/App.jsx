import Home from "./components/Home";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
function App() {
  return (
    <Router>
      <Navigation />
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
          <Route path="/posts" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
