import React, { useState } from "react";
import "../styles/navbar.css";
import ListGroup from "react-bootstrap/ListGroup";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false); // close menu on nav click (mobile)
  };

  const navItems= [
    { label: "about-me", href: "#about" },
    { label: "projects", href: "#projects" },
    { label: "contactForm", href: "#contactForm"},
  ];

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
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="navItem"
                  href={item.href}
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              ))}
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}
