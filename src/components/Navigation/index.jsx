import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const Navigation = ({
    onClick,
}) => {
  return (
    <nav className="navigation">
      <ul className="navigation_ul">
        <li>
          <Link to="/jogs">JOGS</Link>
        </li>
        <li>
          <Link to="/info">INFO</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT US</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
