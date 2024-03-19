import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <nav className='flex-justify-between'>
      <h1>BLOG.io</h1>
      <button
        onClick={() => {
          setIsShow((prev) => !prev);
        }}>
        <FaBars />
      </button>
      <ul className={isShow ? "active" : ""}>
        <NavLink
          to={"/"}
          onClick={() => {
            setIsShow(false);
          }}>
          Feed
        </NavLink>
        <NavLink
          to={"/create-post"}
          onClick={() => {
            setIsShow(false);
          }}>
          Create Post
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
