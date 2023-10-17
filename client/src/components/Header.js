import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const logoutHandler = () => {
    localStorage.removeItem("login-user");
    setLogin("");
    navigate("/login");
  };

  useEffect(() => {
    if (localStorage.getItem("login-user")) {
      setLogin(localStorage.getItem("login-user"));
    } else {
      setLogin("");
    }
  }, [location]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-transparent navbar-dark border-bottom">
        <div className="container">
          <Link className="navbar-brand" to="/">
            UMS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={logoutHandler}
                >
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
