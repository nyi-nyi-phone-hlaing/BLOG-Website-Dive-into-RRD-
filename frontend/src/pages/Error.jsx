import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='error-page'>
      <h1>404</h1>
      <h3>Sorry, we couldn't found this page.</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
        laborum.
      </p>
      <Link to={"/"}>
        <button>Back to Newsfeed</button>
      </Link>
    </section>
  );
};

export default Error;
