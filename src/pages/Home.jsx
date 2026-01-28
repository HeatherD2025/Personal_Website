import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import "../styles/main.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // strip hash symbol from location to match id
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);

    // scroll logic
    if (id && el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      scrollToTop();
    }

    // clean url
    const currentUrl = window.location.pathname; // the current path
    const cleanedUrl = currentUrl
      .replace("/home", "")
      .replace("/contactForm", "")
      .replace("/OPSGProjectDetail", "")
      .replace("/QuarkyProjectDetail", "");

    // normalize trailing slash
    const baseUrl = cleanedUrl.endsWith("/") ? cleanedUrl : cleanedUrl + "/";

    // update url without relooading the page only if url is different
    if (window.location.href !== baseUrl)
      window.history.replaceState(null, "", baseUrl);
  }, [location]); //re-run this on navigation change

  return (
    <>
      <div className="background">
        <section id="home" className="section">
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
        </section>
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

        <div className="footerContainer">
          <div className="footer"></div>
        </div>
      </div>
    </>
  );
}
