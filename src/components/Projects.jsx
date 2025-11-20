import { useLocation, useNavigate } from "react-router-dom";
import "../styles/main.css";
import OPSG from "../assets/images/projects/OPSG/OPSG.png";
import QuarkyImg from "../assets/images/projects/Quarky/QuarkyImg.png";
import postgresql from "../assets/images/icons/postgresqlLogo.png";
import prisma from "../assets/images/icons/prismalogo.png";
import react from "../assets/images/icons/reactlogo.png";

export default function Projects() {
  const location = useLocation();
  const isOnOPSGPage = location.pathname === "/OPSGProjectDetail";
  const isOnQuarkyPage = location.pathname === "/QuarkyPropjectDetail";
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section id="projects" className="section">
        {/* <div className="sectionSpacer"></div> */}

        <div className="projectsContainer">
          {/* <div className="projectsGrid"> */}
            <div className="projectsHeaderWrapper">
              <div className="projectsHeader">projects</div>
              <div className="projectsHeaderAccentLine"></div>
              <div className="floatingAccentBox3b"></div>
            </div>

            <div className="allProjectsContainer">

            {/* bottom project links */}
            <div className="projectsWrapper">
              {isOnOPSGPage ? (
                <div></div>
             ) : (
              <a
                onClick={() => {
                  navigate("/OPSGProjectDetail");
                  scrollToTop();
                }}
              >
                <div className="projectContainer">
                  <img className="projectImage" src={OPSG}></img>

                  <div className="firstDividerLine"></div>

                  <div className="firstInfoContainer">
                    <div className="projectTitle">On Point Solutions Group</div>
                    <div className="projectDescription">
                      Medical credentialing company site and bill payment portal
                    </div>

                    <div className="toolIcons">
                      <img
                        className="toolIcon"
                        src={react}
                        alt="react logo"
                      ></img>
                      <img
                        className="toolIcon"
                        src={prisma}
                        alt="prisma logo"
                      ></img>
                      <img
                        className="toolIcon"
                        src={postgresql}
                        alt="postgresql logo"
                      ></img>
                    </div>
                  </div>
                </div>
               </a>
              )}

              { isOnQuarkyPage ? (
                <div></div>
              ) : (
              <a
                onClick={() => navigate("/QuarkyProjectDetail", scrollToTop())}
              >
                {/* <div className="projectContainer"> */}
                  {/* <img className="projectImage" src={QuarkyImg}></img> */}

                  <div className="firstDividerLine"></div>
                  <div className="firstInfoContainer">
                    <div className="projectTitle">coming soon</div>
                    <div className="projectDescription">
                      Quarky
                    </div>
                    <div className="toolIcons">
                      <img
                        className="toolIcon"
                        src={react}
                        alt="react logo"
                      ></img>
                      <img
                        className="toolIcon"
                        src={prisma}
                        alt="prisma logo"
                      ></img>
                      <img
                        className="toolIcon"
                        src={postgresql}
                        alt="postgresql logo"
                      ></img>
                    </div>
                  </div>
                {/* </div> */}
               </a>
              )}

              {/* <a onClick={() => navigate("/ProjectDetail")}>
                <div className="projectContainer">

                  <div className="firstInfoContainer">
                    <div className="projectTitle">coming soon</div>
                    <div className="projectDescription">
                      wenflew fewofnewldewldnc newloejdl cl elwdnlwekw
                    </div>
                    <div className="toolIcons">
                      <img
                        className="toolIcon"
                        src={react}
                        alt="react logo"
                      ></img>
                      <img
                        className="toolIcon"
                        src={prisma}
                        alt="prisma logo"
                      ></img>
                      <img
                        className="toolIcon"
                        src={postgresql}
                        alt="postgresql logo"
                      ></img>
                    </div>
                  </div>
                </div>
              </a> */}
              
            </div>
            <div className="betweenSectionAccentLine2"></div>
          {/* </div> */}
        </div>

       </div>
      </section>
    </>
  );
}
