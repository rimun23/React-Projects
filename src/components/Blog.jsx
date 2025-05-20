import PostList from "./PostList";
import PostForm from "./PostForm";
import Loading from "./Loading";
const Blog = ({
  posts,
  newPost,
  setNewPost,
  handleAddPost,
  handleDeletePost,
}) => {
  if (!posts) return <Loading />;
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
