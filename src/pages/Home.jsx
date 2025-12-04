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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
  }, [location]); //re-run this on navigation change

  return (
    <>
      {/* <div className="container"> */}
      <div className="background">
        {/* <div className="pageGrid"> */}
        {/* Home page header section */}
        <section id="home" className="section"></section>

        {/* Main header and photo */}
        <div className="mainContainer">
          <div className="mainWrapper">
            <div className="mainHeader">I'm Heather and I'm a nerd</div>

            <div className="mainContent">
              Always learning, always building — ready to contribute to
              exciting, mission-driven teams
            </div>

            <div className="mainAccentLine"></div>
          </div>

          <div className="photoAndBoxWrapper">
            <div className="myPhotoWrapper">
              <div className="myPhoto"></div>

              <div className="photoAccentBox"></div>
            </div>
          </div>
        </div>

        {/* end of main */}

        {/* Accent elements below main*/}

        <div className="dividerAccentWrapper">
          <div className="dividerAccentLine">
            <div className="dividerAccentBox"></div>
            <div className="floatingDividerAccentBox"></div>
          </div>
        </div>

        {/* About section */}
        <About />

        <div className="dividerAccentWrapper">
          <div className="dividerAccentLine">
            <div className="dividerAccentBox"></div>
            <div className="floatingDividerAccentBox"></div>
          </div>
        </div>

        {/* Projects section */}
        <Projects />

        {/* </div> */}
        <div className="footerContainer">
          <div className="footer"></div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
