import React from "react";

function Navbar() {
  return (
    <div className="m-0 p-0">
      <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-dark fixed-top"
      >
        <div className="container-fluid">
          <a id="logo" className="navbar-brand" href="#">
            The Mandalorian
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Characters
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Races
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Technology
                </a>
              </li>
            </ul>
            <span className="navbar-text" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
