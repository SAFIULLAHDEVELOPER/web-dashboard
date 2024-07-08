import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="search-container">
        <input className="search-input" type="text" placeholder="Search" />
        <button className="search-button">New</button>
      </div>
      <div className="no-name">
        <text>No Name</text>
      </div>
      <nav className="nav-links">
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/order">Order</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
