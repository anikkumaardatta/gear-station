import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Gear Station-1.png";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <button onClick={handleSignOut} className="btn-ghost">
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-white bg-base-100 sticky top-0  z-50">
      <div
        className="max-w-6xl mx-auto
     navbar bg-white"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
              className="
            menu
            menu-compact
            dropdown-content
            mt-3 p-2 shadow
            bg-base-100
            rounded-box
            w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="normal-case text-xl">
            <img
              style={{ height: "40px", borderRadius: "0" }}
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-sm lg:btn-md btn-outline btn-success">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
