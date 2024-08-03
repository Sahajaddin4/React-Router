import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <nav className="nav-bar w-full flex justify-between items-center bg-white p-4 mb-2">
        <div className="logo"><h1 className="text-lg font-semibold">React Router</h1></div>
        <div className="auth flex justify-between  gap-3 items-center">
          <div className="login">
            <NavLink to="/user/login" className=' font-serif'>Login</NavLink>
          </div>
          <div className="sign-up">
            <NavLink to="/user/singup" className=' font-serif'>SingUp</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
