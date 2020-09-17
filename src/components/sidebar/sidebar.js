import React from 'react';
import logo from '../../assets/img/logo.svg';

function Sidebar () {
  return (
    <nav
      className="
        navbar navbar-vertical fixed-left navbar-expand-md navbar-light
      "
      >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} className="navbar-brand-img mx-auto" alt="logo" />
        </a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mb-md-4">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#sidebarBasics"
                data-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarBasics"
              >
                <i className="fe fe-clipboard"></i> Basics
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
