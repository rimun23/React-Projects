import React from "react";
function PostList({ posts, handleDeletePost }) {
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
            <button onClick={() => handleDeletePost(post.id)}>Х</button>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PostList;
