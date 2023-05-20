import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
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
              {user && (
                <>
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
                </>
              )}
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
              className="btn btn-ghost normal-case text-xl mt-1 text-[#101010] lg:text-white"
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
            {user && (
              <>
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
              </>
            )}
            <li>
              <NavLink to="/blogs" activeClassName="">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <button>
                <img
                  className="w-10 mt-2 rounded-xl"
                  src={user.photoURL}
                  alt={user.photoURL}
                />
              </button>
            </div>
          )}
          {user ? (
            <button
              className="btn btn-primary mr-3 ml-3"
              onClick={handleLogOut}>
              Logout
            </button>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-primary mr-3">Login</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
