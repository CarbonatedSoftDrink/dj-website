
import React from "react";



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Hiba, DJ Website
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Services 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Packages
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Media
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Song Suggestions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Deposit
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
