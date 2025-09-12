import React, { useState } from "react";
import "../styles/navbar.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import CVDownload from "../components/CVDownload";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/home";

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "about-me", id: "about" },
    { label: "projects", id: "projects" },
    { label: "cv", id: "cv-download" },
  ];

  const scrollToTop =() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  // cv download helper code
    const downloadCV = () => {
      window.location.href = "https://drive.google.com/uc?export=download&id=1sMDHGPfYmFvVnfFO6n02ZnM7NvdE6ST58TmYXRblYts";
    };

  return (
    <nav className="navbar">
      <div className="navbarGrid">
        <div className="navbarInner">
          {/* left side - my name. If home, use hash anchor, if not, use route */}
          {isHome ? (
            <button
              className="homeButton"
              onClick={() => {
                const el = document.getElementById("home");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }
              }}
            >
              <div className="navbarBrand">
                <div className="floatingAccentBox1"></div>
                Heather DeLiso
              </div>
            </button>
          ) : (
            <button
              className="homeButton"
              onClick={() => {
                navigate("/home");
                scrollToTop();
              }}
            >
              <div className="navbarBrand">
                <div className="floatingAccentBox1"></div>
                Heather DeLiso
              </div>
            </button>
          )}

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
          <div className={`navItems ${isOpen ? "open" : ""}`}>
            {isHome ? (
              navItems.map((item) => (
                <button
                  key={item.id}
                  className="navItem"
                  onClick={() => {
                    const el = document.getElementById(item.id);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                      setIsOpen(false);
                    }
                    if (item.id === "cv-download") {
                      downloadCV();
                      setIsOpen(false);
                    }
                  }}
                >
                  {item.label}
                </button>
              ))
            ) : (
              navItems.map((item) => {
                const isActive = location.hash === `#${item.id}`;  
                return (
                  <Link
                    key={item.id}
                    to={`/home#${item.id}`} // Links to the home page with the hash
                    className={`navItem ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      const targetSection = document.getElementById(item.id);
                      if (targetSection) {
                        targetSection.scrollIntoView({ behavior: "smooth" });
                        setIsOpen(false);
                      }
                    }} // Close the menu when clicked
                  >
                    {item.label}
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Fixed links on the left */}
      <div className="linkBox">
        <div className="accentLine1"></div>
        <a
          href="https://github.com/HeatherD2025"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github contactIcons"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/heatherdeliso/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin contactIcons"></i>
        </a>
        <Link to="/contactForm">
          <i className="fa-regular fa-envelope contactIcons"></i>
        </Link>
      </div>
    </nav>
  );
}


