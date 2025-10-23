import React, { use } from "react";
import { Link, NavLink } from "react-router";
import usericon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    console.log("Logout");
    logOut()
      .then(() => alert("Logout Done"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      {user ? (
        <div onClick={handleLogout} className="login-btn flex gap-5">
          <img src={usericon} alt="" />
          <button className="btn btn-primary px-10 ">Logout</button>
        </div>
      ) : (
        <Link to={"/auth/login"}>
          <div className="login-btn flex gap-5">
            <img src={usericon} alt="" />
            <button className="btn btn-primary px-10 ">Login</button>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
