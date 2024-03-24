import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

const PostCard = ({ post }) => {
  const { id, title, date, image } = post;
  return (
    <Link to={`${id}`}>
      <div className='card'>
        <header>
          <h1>{title}</h1>
          <span>
            {" "}
            <FaCalendarAlt /> Post at . {date}
          </span>
        </header>
        <div className='image'>
          <img src={image} alt={title} />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
