import React from "react";
import Loading from "./Loading";
function PostList({ posts }) {
  if (!posts) return <Loading />;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: "30px" }}>Посты:</h1>
      <ul className="postList">
        {posts.map((post) => (
          <li key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PostList;
