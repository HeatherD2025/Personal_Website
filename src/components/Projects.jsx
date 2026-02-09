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

  return (
    <>
      <section id="projects" className="section">
  

        <div className="projects-container">

            <div className="projects-header-wrapper">
              <div className="projects-header">projects</div>
              <div className="header-accent-line"></div>
              <div className="floating-accent-box3"></div>
            </div>

            <div className="all-projects-container">

            {/* bottom project links */}
            <div className="projects-wrapper">
              {isOnOPSGPage ? (
                <div></div>
             ) : (
              <a
                onClick={() => {
                  navigate("/OPSGProjectDetail");
                  scrollToTop();
                }}
              >
                <div className="project-container">
                  <img className="project-image" src={OPSG}></img>

                  <div className="first-divider-line"></div>

                  <div className="first-info-container">
                    <div className="project-title">On Point Solutions Group</div>
                    <div className="project-description">
                      Medical credentialing company site and bill payment portal
                    </div>

                    <div className="tool-icons">
                      <img className="tool-icon" src={react} alt="react logo"></img>
                      <img className="tool-icon" src={vite} alt="vite logo"></img>
                      <img className="tool-icon" src={prisma} alt="prisma logo"></img>
                      <img className="tool-icon" src={postgresql} alt="postgresql logo"></img>
                      <img className="tool-icon" src={express} alt="expressJs logo"></img>
                      <img className="tool-icon" src={json} alt="json logo"></img>
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

                  <div className="first-divider-line"></div>
                  <div className="first-info-container">
                    <div className="projec-mini-title">coming soon</div>
                    <div className="project-mini-description">
                      Quarky
                    </div>
                    <div className="tool-icons-mini-container">
                      <img
                        className="tool-icon"
                        src={react}
                        alt="react logo"
                      ></img>
                      <img
                        className="tool-icon"
                        src={prisma}
                        alt="prisma logo"
                      ></img>
                      <img
                        className="tool-icon"
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
