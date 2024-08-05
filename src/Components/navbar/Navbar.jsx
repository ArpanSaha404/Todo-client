import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import { useSelector } from "react-redux";
import { NotebookPen } from 'lucide-react';

const Navbar = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const logOut = () => {
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  };

    return <div><nav className="navbar navbar-expand-lg">
    <div className="container">
      <Link className="navbar-brand" to="/"><b><NotebookPen />&nbsp;&nbsp; Todo</b></Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-Link active mx-2" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-Link active mx-2" aria-current="page" to="/about">About US</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-Link active mx-2" aria-current="page" to="/todo">Todo</Link>
          </li>
          {!isLoggedIn && (
            <>
            <li className="nav-item">
            <Link className="nav-Link active btn-nav mx-2" aria-current="page" to="/signup">Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-Link active btn-nav mx-2" aria-current="page" to="/login">Login</Link>
          </li>
          </>
          )}
          {isLoggedIn && (
            <li className="nav-item">
            <Link className="nav-Link active btn-nav mx-2" aria-current="page" to="#" onClick={logOut}>Log out</Link>
          </li>
          )}
        </ul>
      </div>
    </div>
  </nav></div>
};

export default Navbar;