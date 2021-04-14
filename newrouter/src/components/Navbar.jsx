import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  /*protected path for admin page along with authcontext import*/
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    <nav>
      {/* Brand-Logo is actually the button for home page path*/}
      <NavLink className="logo" to="/">
        Brand-Logo
      </NavLink>
      <div className="nav-links">
        <NavLink activeClassName="selectedPage" className="link" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="selectedPage" className="link" to="/contacts">
          Contacts
        </NavLink>
        <NavLink activeClassName="selectedPage" className="link" to="/blog">
          Blog
        </NavLink>
        <NavLink activeClassName="selectedPage" className="link" to="/admin">
          Admin
        </NavLink>
        {/*button being used for protected admin page*/}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "logout" : "login"}
        </button>
      </div>
    </nav>

    // <ul>
    //   <li>
    //     <Link to="/home">Home</Link>
    //   </li>

    //   <li>
    //     <Link to="/about">About</Link>
    //   </li>

    //   <li>
    //     <Link to="/contacts">Contacts</Link>
    //   </li>

    //   <li>
    //     <Link to="/blog">Blog</Link>
    //   </li>
    // </ul>
  );
};

export default Navbar;
