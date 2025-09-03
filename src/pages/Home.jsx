import React from "react";
import NavBar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import CV from "../components/CV";
import "../styles/main.css";
import myPortrait from "../assets/images/myPortrait.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="background">
          <NavBar />
          <div className="pageGrid">

           {/* Home page header section */}
            <section id="home" className="section"></section>

           {/* Fixed links on left */}
            <div className="linkBox">
              <div className="accentLine1"></div>
              <a href="https://github.com/HeatherD2025" target=" ">
                <i className="fa-brands fa-github contactIcons"></i>
              </a>
              <a href="https://www.linkedin.com/in/heatherdeliso/" target=" ">
                <i className="fa-brands fa-linkedin contactIcons"></i>
              </a>
              <Link to="/contactForm" target="">
                <i className="fa-regular fa-envelope contactIcons"></i>
              </Link>
            </div>


            {/* Main header and photo */}
            <div className="mainLandingText">
              <p className="mainHeader">
                I'm Heather and I don't know what to put here
              </p>
              <div className="mainContent">
                <p>
                  Always learning, always building—ready to contribute to
                  exciting, mission-driven teams
                </p>
                <div className="accentLine2"></div>
              </div>
            </div>
            <div className="myPhotoWrapper">
              <img className="myPhoto" src={myPortrait}></img>
            </div>
            {/* end of main */}

            {/* Accent elements*/}
            <div className="accentBox1"></div>
            <div className="accentLine3"></div>
            <div className="accentBox2"></div>
            <div className="floatingAccentBox2"></div>

            {/* Section separater */}
            <div className="sectionSpace"></div>

              {/* About section */}
              <div className="full-width-grid">
                <About />
              </div>

            {/* Section separater */}
            {/* <div className="sectionSpace"></div> */}

              {/* Projects section */}
              <div className="full-width-grid">
                <Projects />
              </div>

            {/* Section separater */}
            {/* <div className="sectionSpace"></div> */}

              {/* Contact Form section */}
              <div className="full-width-grid">
                <CV />
              </div>

            
          </div>
        </div>
      </div>
    </>
  );
}
