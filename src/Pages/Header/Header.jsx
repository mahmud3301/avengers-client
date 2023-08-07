import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then();
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "whiteTheme"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleThemeChange = (e) => {
    if (e.target.checked) {
      setTheme("darkTheme");
    } else {
      setTheme("whiteTheme");
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <button className="btn btn-ghost btn-sm lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/all-toys">All Toys</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contract-us">Contract Us</NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink to="/my-toys">My Toys</NavLink>
                  </li>
                  <li>
                    <NavLink to="/add-toys">Add A Toy</NavLink>
                  </li>
                </>
              )}
              <li>
                <NavLink to="/blogs">Blog</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <NavLink to="/" className="btn btn-ghost btn-square mt-1 ml-3">
              <div className="w-20 rounded-full">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-marvel-282124.png?f=webp"
                  alt=""
                />
              </div>
            </NavLink>
            <NavLink to="/" className="font-bold text-xl ml-3 hidden lg:block">
              Avengers Shop
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-toys">All Toys</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contract-us">Contract Us</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="/my-toys">My Toys</NavLink>
                </li>
                <li>
                  <NavLink to="/add-toys">Add Toys</NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink to="/blogs">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate mr-4">
            <input
              type="checkbox"
              onChange={handleThemeChange}
              checked={theme === "darkTheme"}
            />
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {user && (
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <button>
                <PhotoProvider className="rounded-xl">
                  <PhotoView src={user.photoURL}>
                    <img
                      className="w-10 mt-2 rounded-xl"
                      src={user.photoURL}
                      alt={user.displayName}
                    />
                  </PhotoView>
                </PhotoProvider>
              </button>
            </div>
          )}
          {user ? (
            <button className="btn btn-error mr-3 ml-3" onClick={handleLogOut}>
              Logout
            </button>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-error mr-3">Login</button>
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;