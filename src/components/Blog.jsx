import { database } from "../firebaseConfig";
import { ref, set, onValue, remove } from "firebase/database";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { useState, useEffect } from "react";
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  useEffect(() => {
    const postsRef = ref(database, "posts");
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      const loadedPosts = [];
      for (let id in data) {
        loadedPosts.push({ id, ...data[id] });
      }
      setPosts(loadedPosts);
    });
  }, []);
  const handleAddPost = (post) => {
    const postId = Date.now();
    set(ref(database, "posts/" + postId), {
      title: post.title,
      body: post.body,
    });
  };
  const handleDeletePost = (postId) => {
    remove(ref(database, "posts/" + postId));
  };

  return (
    <div
      className="blog"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PostForm
        newPost={newPost}
        setNewPost={setNewPost}
        handleAddPost={handleAddPost}
      />
      <PostList posts={posts} handleDeletePost={handleDeletePost} />
    </div>
  );
};
export default Blog;
