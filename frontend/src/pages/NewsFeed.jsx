import PostCard from "../components/PostCard";
import { useLoaderData } from "react-router-dom";

const NewsFeed = () => {
  const posts = useLoaderData();
  return (
    <section className='pages newsfeed'>
      {posts.length > 0 &&
        posts.map((post) => <PostCard key={post.id} post={post} />)}
    </section>
  );
};

export default NewsFeed;

// * loader
export const loader = async () => {
  const response = await fetch("http://localhost:8080/posts");
  if (!response.ok) {
    // * code...
  } else {
    const posts = await response.json();
    return posts.posts;
  }
};
