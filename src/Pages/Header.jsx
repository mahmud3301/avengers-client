import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useState } from "react";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const renderTooltip = () => {
    return (
      <ReactTooltip place="bottom" effect="solid">
        {user.displayName}
      </ReactTooltip>
    );
  };
  return (
    <div>
      <div className="navbar bg-[#101010]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink exact to="/" activeClassName="">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/all-toys" activeClassName="">
                  All Toys
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-toys" activeClassName="">
                  My Toys
                </NavLink>
              </li>
              <li>
                <NavLink to="/add-toys" activeClassName="">
                  Add A Toy
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" activeClassName="">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex">
            <NavLink to="/" className="btn btn-ghost btn-square mt-1 ml-3">
              <div className="w-20 rounded-full">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-marvel-282124.png?f=webp"
                  alt=""
                />
              </div>
            </NavLink>
            <NavLink
              to="/"
              className="btn btn-ghost normal-case text-xl mt-1"
              activeClassName="">
              Avengers Shop
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink exact to="/" activeClassName="">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-toys" activeClassName="">
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-toys" activeClassName="">
                My Toys
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-toys" activeClassName="">
                Add Toys
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" activeClassName="">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div
              className="relative flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <div
                className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
                data-tip={user.displayName}>
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {showTooltip && renderTooltip()}
            </div>
          ) : (
            <NavLink to="/login" className="btn btn-primary mr-2">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
