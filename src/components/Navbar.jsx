import React, { useState } from "react";
import "../styles/navbar.css";
import ListGroup from "react-bootstrap/ListGroup";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/home";

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "about-me", id: "about" },
    { label: "projects", id: "projects" },
    { label: "cv", id: "cv" },
  ];

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
              onClick={() => navigate("/home")}
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
              onKeyPress={(e) => {
                if (e.key === "Enter") setIsOpen(!isOpen);
              }}
            >
              ☰
            </div>

          {/* hide hash anchor buttons if not at home */}
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
                    }}
                  >
                    {item.label}
                  </button>
                ))
              ) : (
                <button
                  className="navItem"
                  onClick={() => {
                    navigate("/home");
                  }}
                  style={{gridColumn: "1 / -1" }}
                >
                </button>
              )}
            </div>
        </div>
      </div>
    </nav>
  );
}
