import React from "react";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import Detail from "../components/Detail";
import { getToken } from "../util/auth";

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
  const response = await fetch(`http://localhost:7070/posts/${params.id}`);
  if (!response.ok) {
    throw json(
      {
        message: "Page Not Found!",
        messageText: "Something went wrong.",
      },
      { status: 404, statusText: "Back to Newsfeed" }
    );
  } else {
    const posts = await response.json();

    return posts.post;
  }
};

// * action
export const action = async ({ request, params }) => {
  const token = getToken();

  const response = await fetch(`http://localhost:7070/posts/${params.id}`, {
    method: request.method,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (!response.ok) {
    throw json(
      {
        message: "Delete Post Failed",
        messageText:
          "We're sorry, but there was an error while trying to delete the post. Please try again later. If the problem persists, please contact support for assistance.",
      },
      { status: 500, statusText: "Back to Newsfeed" }
    );
  }
  return redirect("/");
};
