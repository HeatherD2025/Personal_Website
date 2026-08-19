import { useLocation, useNavigate } from "react-router-dom";
import "../styles/main.css";
import landingPage from "../assets/images/projects/OPSG/landingPage.webp";
import vite from "../assets/images/icons/vite.webp";
import express from "../assets/images/icons/expressJs.webp";
import postgresql from "../assets/images/icons/postgresqlLogo.webp";
import prisma from "../assets/images/icons/prismalogo.webp";
import react from "../assets/images/icons/reactlogo.webp";
import json from "../assets/images/icons/json.webp";
import claude from "../assets/images/icons/claude.webp";
import typescript from "../assets/images/icons/typescript.webp";
import docker from "../assets/images/icons/docker.webp";
import planetGrid from "../assets/images/projects/ExoplanetRealEstate/planetGrid.webp";

export default function Projects() {
  const location = useLocation();
  const isOnOPSGPage = location.pathname === "/OPSGProjectDetail";
  const isOnExoplanetPage = location.pathname === "/ExoplanetProjectDetail";
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section id="projects" className="section">
  
            <div className="projects-header-wrapper">
              <div className="projects-header">projects</div>
              <div className="header-accent-line"></div>
              <div className="floating-accent-box3"></div>
            </div>

        {/* <div className="projects-container"> */}

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
                  <img className="project-image" src={landingPage}></img>

                  <div className="first-divider-line"></div>

                  <div className="info-container">
                    <div className="project-title">On Point Solutions Group</div>
                    <div className="project-description">
                      Medical credentialing company site and bill payment portal
                    </div>

                    <div className="tools-container2">
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

              { isOnExoplanetPage ? (
                <div></div>
              ) : (
              <a
                onClick={() => {
                  navigate("/ExoplanetProjectDetail");
                  scrollToTop();
                }}
              >

              <div className="project-container">
                <img className="project-image" src={planetGrid}></img>

                  <div className="first-divider-line"></div>

                  <div className="info-container">
                    <div className="project-title">Exoplanet Real Estate</div>
                    <div className="project-description">
                      Real Estate inspired platform for exoplanet discovery and exploration
                    </div>

                    <div className="tools-container2">
                      <img className="tool-icon" src={react} alt="react logo"></img>
                      <img className="tool-icon" src={vite} alt="vite logo"></img>
                      <img className="tool-icon" src={prisma} alt="prisma logo"></img>
                      <img className="tool-icon" src={claude} alt="claude logo"></img>
                      <img
                        className="tool-icon"
                        src={docker}
                        alt="docker logo"
                      ></img>
                      <img
                        className="tool-icon"
                        src={typescript}
                        alt="typescript logo"
                      ></img>
                    </div>
                  </div>
                </div>
               </a>
              )}
              
            </div>

        </div>

       {/* </div> */}
      </section>
    </>
  );
}
