import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './Sidebar.css'; // Import your CSS file

function Sidebar() {
  return (
    <aside id="sidebar">
      <nav className="nav-links">
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" to="/" >Home</Link>
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
