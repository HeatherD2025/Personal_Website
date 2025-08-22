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
      <div className="container">
      <div className="navbarInner">

        {/* left side- my name */}
        <div className="navbarBrand">
          <div className="floatingAccentBox1"></div>Heather DeLiso
        </div>

        {/* right side - hamburger and nav items */}
        <div className="navbarRight">
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
            {["/about", "/projects", "/contactform"].map((path, idx) => {
              const labels = ["about-me", "projects", "cv"];
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
      </div>
      </div>
    </nav>
  );
}
