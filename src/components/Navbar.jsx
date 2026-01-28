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
  // const isContactForm = location.pathname === "/contactForm";
  // const isOPSGProjectDetail = location.pathname === "/OPSGProjectDetail";
  // const isQuarkyProjectDetail = location.pathname === "/QuarkyProjectDetail";

  // const cleanNavigationUrl = () => {

  //   const plainUrl = window.location.href;
  //   const urlIsHashed = window.location.hash.startsWith("#/");
  //     if (!urlIsHashed) return ""; {
  //       return window.location.hash.replace("#", "");
  //     }

  //     };

  // const cleanedUrl = currentUrl
  //   .replace("/home", "")
  //   .replace("/contactForm", "")
  //   .replace("/OPSGProjectDetail", "")
  //   .replace("/QuarkyProjectDetail", "");

  //   const urlBase = cleanedUrl.endsWith("/") ? cleanedUrl : cleanedUrl + "/";
  //  }

  // resume download helper code
  const downloadResume = () => {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1RoQEA44DSp5jkYGbTcJG-URja-pG0aWT";
  };

  return (
    <nav className="navbar">
      <div className="navbarInner">
        <button
          className="homeButton"
          onClick={() => {
            navigate("/home");
          }}
        >
          <div className="navbarBrand">
            <div className="floatingAccentBox1"></div>
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
        <div className={`navItems ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className="navItem"
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
                className="hamNavItem"
                href="https://github.com/HeatherD2025"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                className="hamNavItem"
                href="https://www.linkedin.com/in/heatherdeliso/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <Link to="/contactForm">
                <i className="hamNavItem fa-regular fa-envelope contactIcons"></i>
              </Link>
            </>
          )}
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
