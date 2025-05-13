import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import axios from "axios";
import PostList from "./components/PostList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
function App() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    };
    fetchPosts();
  }, []);
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
          <Route path="/posts" element={<PostList posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
