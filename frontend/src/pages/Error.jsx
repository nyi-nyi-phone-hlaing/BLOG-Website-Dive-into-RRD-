import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  let routPath = "/";

  switch (error.statusText) {
    case "Back to SignUp":
      routPath = "/auth?mode=signup";
      break;

    default:
      routPath = "/";
      break;
  }

  return (
    <section className='error-page'>
      <h1>{error.status}</h1>
      <h3>{error.data.message}</h3>
      <p>{error.data.messageText}</p>
      <Link to={routPath}>
        <button>
          {error.statusText === "" ? "Back to Newsfeed" : error.statusText}
        </button>
      </Link>
    </section>
  );
};

export default Error;
