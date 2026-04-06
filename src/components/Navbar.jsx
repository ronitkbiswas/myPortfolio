import React from "react";
// import "../styles.css";
import "/src/App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="./logos.webp" width="40" alt="a logo" />
      <div>
        <ul className="menu_list">
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Services</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
