import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
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
            {/* <div className="mainWrapper"> */}
              <div className="mainLandingText">
                <div className="mainHeader">
                  I'm Heather and I'm a nerd
                </div>
                
                  <div className="mainContent">
                    Always learning, always building — ready to contribute to
                    exciting, mission-driven teams
                  </div>
                  <div className="accentLine2"></div>
    
              </div>
              <div className="photoAndBoxWrapper">
                <div className="myPhotoWrapper">
                  <div className="myPhoto"></div>
                </div>
                <div className="accentBox1"></div>
              </div>
         
            {/* end of main */}

            {/* Accent elements below main*/}
            {/* <div className="betweenSectionContainerTop"> */}
              <div className="accentLine3">
                <div className="accentBox2"></div>
                <div className="floatingAccentBox2"></div>
              </div>
            {/* </div> */}

            {/* Section separater */}
            {/* <div className="sectionSpacer"></div> */}

              {/* About section */}
              <div className="full-width-grid">
                <About />
              </div>

              {/* Projects section */}
              <div className="full-width-grid">
                <Projects />
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
