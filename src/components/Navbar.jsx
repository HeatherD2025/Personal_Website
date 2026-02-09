import React, { useState } from "react";
import "../styles/navbar.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import useIsMobile from "./useIsMobile";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "about-me", id: "about" },
    { label: "projects", id: "projects" },
    { label: "resume", id: "resume-download" },
  ];

  const hamNavItem = [{ id: "github" }, { id: "linked-in" }];

  const isHome = location.pathname === "/home" || location.pathname === "/";

  // resume download helper code
  const downloadResume = () => {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1RoQEA44DSp5jkYGbTcJG-URja-pG0aWT";
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <button
          className="home-button"
          onClick={() => {
            navigate("/home");
          }}
        >
          <div className="navbar-brand">
            <div className="floating-accent-box1"></div>
            Heather DeLiso
          </div>
        </button>

        {/* right side - hamburger and nav items */}
        <div
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") setIsOpen(!isOpen);
          }}
        >
          ☰
        </div>

        {/* Nav items */}
        <div className={`nav-items ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-item"
              onClick={() => {
                setIsOpen(false);
                navigate("/home#" + item.id || `"/${item.route}"`)
                if (item.label === "resume") {
                  downloadResume();
                }
              }}
            >
              {item.label === "resume" ? (
                <>
                  resume <i className="fa-solid fa-download"></i>
                </>
              ) : (
                item.label
              )}
            </button>
          ))}
          {isMobile && (
            <>
              <a
                className="ham-nav-item"
                href="https://github.com/HeatherD2025"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                className="ham-nav-item"
                href="https://www.linkedin.com/in/heatherdeliso/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <Link to="/contactForm">
                <i className="ham-nav-item fa-regular fa-envelope contact-icons"></i>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Fixed links on the left */}
      <div className="link-box">
        <div className="accent-line1"></div>
        <a
          href="https://github.com/HeatherD2025"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github contact-icons"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/heatherdeliso/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin contact-icons"></i>
        </a>
        <Link to="/contactForm">
          <i className="fa-regular fa-envelope contact-icons"></i>
        </Link>
      </div>
    </nav>
  );
}
