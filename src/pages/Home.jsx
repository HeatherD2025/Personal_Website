import React from "react";
import NavBar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
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
          <div className="pageGrid">
            <NavBar />
            <section id="home" className="section"></section>
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
            {/* end of main text box  */}
            <div className="myPhotoWrapper">
              <img className="myPhoto" src={myPortrait}></img>
            </div>
            <div className="accentBox1"></div>

            <div className="accentLine3"></div>
            <div className="accentBox2"></div>
            <div className="floatingAccentBox2"></div>
            <div className="sectionSpace">
              <div className="aboutContainer">
                <About />
              </div>
              <div className="projectsContainer">
                <Projects />
              </div>
              <div className="contactContainer">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
