import React from "react";
import PostForm from "../components/PostForm";
import { useRouteLoaderData } from "react-router-dom";

const PostEdit = () => {
  const post = useRouteLoaderData("post-detail");

  return (
    <section>
      <PostForm oldPostData={post} formType={{ type_of_post: "edit" }} />
    </section>
  );
};

export default PostEdit;
