import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import CV from "../components/CV";
import "../styles/main.css";
import myPortrait from "../assets/images/myPortrait.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location])  //re-run this on navigation change

  return (
    <>
      <div className="container">
        <div className="background">
          <div className="pageGrid">

           {/* Home page header section */}
            <section id="home" className="section"></section>

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
              <div className="photoAndBoxWrapper">
                <div className="myPhotoWrapper">
                  <img className="myPhoto" src={myPortrait}></img>
                </div>
                <div className="accentBox1"></div>
              </div>
            {/* end of main */}

            {/* Accent elements below main*/}
              <div className="accentLine3"></div>
              <div className="accentBox2"></div>
              <div className="floatingAccentBox2"></div>


            {/* Section separater */}
            <div className="sectionSpacer"></div>

              {/* About section */}
              <div className="full-width-grid">
                <About />
              </div>

              {/* Projects section */}
              <div className="full-width-grid">
                <Projects />
              </div>

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
