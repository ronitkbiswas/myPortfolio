import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        <h1 className="logo">My Portfolio - ronitkbiswas</h1>

        {/* Desktop */}
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>

        {/* Mobile Button */}
        <div className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <a href="#" onClick={() => setOpen(false)}>Home</a>
        <a href="#" onClick={() => setOpen(false)}>About</a>
        <a href="#" onClick={() => setOpen(false)}>Projects</a>
        <a href="#" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}