import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import ListGroup from "react-bootstrap/ListGroup";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    setIsOpen(false); // close menu on nav click (mobile)
  };

  return (
    <nav className="navbar">
      <div className="navbarInner">
      {/* Hamburger menu button */}
      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === "Enter") setIsOpen(!isOpen);
        }}
      >
        ☰
      </div>

      {/* Navigation links container */}
      <div className={`navItems ${isOpen ? "open" : ""}`}>
        {["/", "/about", "/projects", "/contactform"].map((path, idx) => {
          const labels = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];
          return (
            <ListGroup.Item
              key={path}
              className="navItem"
              action
              onClick={() => handleNavClick(path)}
            >
              {labels[idx]}
            </ListGroup.Item>
          );
        })}
       </div>
      </div>
    </nav>
  );
}
