import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/img/logo.svg';

import { MAIN_ROUTER } from 'constants/router';

function Sidebar() {
  const navItems = MAIN_ROUTER.filter((router) => !router.hidden).map(
    (item, index) => (
      <li className="nav-item" key={index}>
        <Link className="nav-link" to={item.path}>
          <i className={`fe fe-${item.icon}`}></i> {item.name}
        </Link>
      </li>
    )
  );

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
          <ul className="navbar-nav">{navItems}</ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
