import { useLocation, useNavigate } from "react-router-dom";
import "../styles/main.css";
import OPSG from "../assets/images/projects/OPSG/OPSG.webp";
import vite from "../assets/images/icons/vite.webp";
import express from "../assets/images/icons/expressJs.webp";
import postgresql from "../assets/images/icons/postgresqlLogo.webp";
import prisma from "../assets/images/icons/prismalogo.webp";
import react from "../assets/images/icons/reactlogo.webp";
import json from "../assets/images/icons/json.webp";

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
  

        <div className="projectsContainer">

            <div className="projectsHeaderWrapper">
              <div className="projectsHeader">projects</div>
              <div className="headerAccentLine"></div>
              <div className="floatingAccentBox3"></div>
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
                      <img className="toolIcon" src={react} alt="react logo"></img>
                      <img className="toolIcon" src={vite} alt="vite logo"></img>
                      <img className="toolIcon" src={prisma} alt="prisma logo"></img>
                      <img className="toolIcon" src={postgresql} alt="postgresql logo"></img>
                      <img className="toolIcon" src={express} alt="expressJs logo"></img>
                      <img className="toolIcon" src={json} alt="json logo"></img>
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

                  <div className="firstDividerLine"></div>
                  <div className="firstInfoContainer">
                    <div className="projectMiniTitle">coming soon</div>
                    <div className="projecMinitDescription">
                      Quarky
                    </div>
                    <div className="toolIconsMiniContainer">
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

               </a>
              )}
              
            </div>

        </div>

       </div>
      </section>
    </>
  );
}
