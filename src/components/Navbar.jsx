// import React, { useState } from "react";
// import "../styles/navbar.css";
// import ListGroup from "react-bootstrap/ListGroup";
// import { useLocation, useNavigate, Link } from "react-router-dom";

// export default function NavBar() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const isHome = location.pathname === "/home";

//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { label: "about-me", id: "about" },
//     { label: "projects", id: "projects" },
//     { label: "cv", id: "cv" },
//   ];

//   return (
//     <nav className="navbar">
//       <div className="navbarGrid">
//         <div className="navbarInner">

//           {/* left side - my name. If home, use hash anchor, if not, use route */}
//           {isHome ? (
//             <button
//               className="homeButton"
//               onClick={() => {
//                 const el = document.getElementById("home");
//                 if (el) {
//                   el.scrollIntoView({ behavior: "smooth" });
//                   setIsOpen(false);
//                 }
//               }}
//             >
//               <div className="navbarBrand">
//                 <div className="floatingAccentBox1"></div>
//                 Heather DeLiso
//               </div>
//             </button>
//           ) : (
//             <button
//               className="homeButton"
//               onClick={() => navigate("/home")}
//             >
//               <div className="navbarBrand">
//                 <div className="floatingAccentBox1"></div>
//                 Heather DeLiso
//               </div>
//             </button>
//           )}

//           {/* right side - hamburger and nav items */}

//             <div
//               className="hamburger"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle navigation menu"
//               role="button"
//               tabIndex={0}
//               onKeyPress={(e) => {
//                 if (e.key === "Enter") setIsOpen(!isOpen);
//               }}
//             >
//               ☰
//             </div>

//           {/* hide hash anchor buttons if not at home */}
//             <div className={`navItems ${isOpen ? "open" : ""}`}>
//               {isHome ? (
//                 navItems.map((item) => (
//                   <button
//                     key={item.id}
//                     className="navItem"
//                     onClick={() => {
//                       const el = document.getElementById(item.id);
//                       if (el) {
//                         el.scrollIntoView({ behavior: "smooth" });
//                         setIsOpen(false);
//                       }
//                     }}
//                   >
//                     {item.label}
//                   </button>
//                 ))
//               ) : (
//               navItems.map((item) => (
//                 <Link
//                   key={item.id}
//                   to={`/home#${item.id}`}  // Links to the home page with the hash
//                   className={`navItem ${isActive ? 'active' : " "}`}
//                   onClick={() => setIsOpen(false)} // Close the menu when clicked
//                 >
//                   {item.label}
//                 </Link>
//               ))
//                 // <button
//                 //   className="navItem"
//                 //   onClick={() => {
//                 //     navigate("/home");
//                 //   }}
//                 //   style={{gridColumn: "1 / -1" }}
//                 // >
//                 // </button>
//               )}
//             </div>
//         </div>
//          {/* Fixed links on left */}
//           <div className="linkBox">
//             <div className="accentLine1"></div>
//                <a href="https://github.com/HeatherD2025" target=" ">
//                   <i className="fa-brands fa-github contactIcons"></i>
//                </a>
//                <a href="https://www.linkedin.com/in/heatherdeliso/" target=" ">
//                   <i className="fa-brands fa-linkedin contactIcons"></i>
//                </a>
//                <Link to="/contactForm" target="">
//                   <i className="fa-regular fa-envelope contactIcons"></i>
//                </Link>
//           </div>
//       </div>
//     </nav>
//   );
// }


import React, { useState } from "react";
import "../styles/navbar.css";
import { useLocation, useNavigate, Link } from "react-router-dom";

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
                    onClick={() => setIsOpen(false)} // Close the menu when clicked
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


