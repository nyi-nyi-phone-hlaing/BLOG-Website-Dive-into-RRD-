import React from "react";
import PostForm from "../components/PostForm";

const CreatePost = () => {
  return (
    <section className='pages'>
      <PostForm formType={{ type_of_post: "create" }} />
    </section>
  );
};

export default CreatePost;
