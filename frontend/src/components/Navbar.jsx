import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, Link, useRouteLoaderData } from "react-router-dom";

const Navbar = () => {
  const isToken = useRouteLoaderData("root");
  const [isShow, setIsShow] = useState(false);
  const closeMenu = () => {
    setIsShow(false);
  };
  return (
    <nav className='flex-justify-between'>
      <Link to={"/"}>
        <h1>BLOG.io</h1>
      </Link>
      <button
        onClick={() => {
          setIsShow((prev) => !prev);
        }}>
        <FaBars />
      </button>
      <ul className={isShow ? "active" : ""}>
        <NavLink to={"/"} onClick={closeMenu}>
          Feed
        </NavLink>
        {isToken && (
          <NavLink to={"/create-post"} onClick={closeMenu}>
            Create Post
          </NavLink>
        )}
        {isToken && (
          <NavLink to={"/logout"} onClick={closeMenu}>
            Logout
          </NavLink>
        )}
        {!isToken && (
          <NavLink to={"/auth?mode=login"} onClick={closeMenu}>
            Login
          </NavLink>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
