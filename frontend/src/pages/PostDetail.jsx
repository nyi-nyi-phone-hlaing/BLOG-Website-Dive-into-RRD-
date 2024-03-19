import React from "react";
import { redirect, useRouteLoaderData } from "react-router-dom";
import Detail from "../components/Detail";

const PostDetail = () => {
  const post = useRouteLoaderData("post-detail");
  return (
    <section className='postdetail'>
      <Detail key={post.id} post={post} />
    </section>
  );
};

export default PostDetail;

// * loader
export const loader = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  if (!response.ok) {
    // * code...
  } else {
    const posts = await response.json();

    return posts.post;
  }
};

// * action
export const action = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`, {
    method: request.method,
  });
  if (!response.ok) {
    // * code...
  }
  return redirect("/");
};
