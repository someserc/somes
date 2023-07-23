import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/logo1.png";
const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt=""
              style={{ height: "40px" }}
            />
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
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 ">
              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link "
                  activeClassName="active-link"
                  aria-current="page"
                  to="/"
                >
                  HOME
                </NavLink>
              </li>

              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link"
                  activeClassName="active-link"
                  to="/committee"
                >
                  COMMITTEE
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link"
                  activeClassName="active-link"
                  to="/notes"
                >
                  NOTES
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link"
                  activeClassName="active-link"
                  to="/events"
                >
                  EVENTS
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link"
                  activeClassName="active-link"
                  to="/gallery"
                >
                  GALLERY
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link"
                  activeClassName="active-link"
                  to="/alumni"
                >
                  ALUMNI
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
