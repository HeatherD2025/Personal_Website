import { useEffect } from "react";
import "../styles/main.css";
import "../styles/individualProjectPages.css";
import postgresql from "../assets/images/icons/postgresqlLogo.webp";
import express from "../assets/images/icons/expressJs.webp";
import json from "../assets/images/icons/json.webp";
import prisma from "../assets/images/icons/prismalogo.webp";
import react from "../assets/images/icons/reactlogo.webp";
import vite from "../assets/images/icons/vite.webp";
import OPSG from "../assets/images/projects/OPSG/OPSG.webp";
import OPSGContactForm from "../assets/images/projects/OPSG/OPSGContactForm.webp";
import ScrollToTop from "../components/ScrollToTop";

export default function OPSGProjectDetail() {

  return (
    <>
     <ScrollToTop />
      <div className="project-section-container">

        <div className="background">

            <div className="mobile-container">
              
                <div className="project-detail-header-wrapper">
                  <div className="project-detail-header-left">projects</div>
                  <div className="vertical-divider-line"></div>
                  <div className="project-detail-header-right">On Point Solutions Group</div>
                </div>

            </div>

            <div className="OPSG-container">
                <div className="OPSG-intro-container">

                    <div className="OPSG-intro">

                        <div className="project-title2">On Point Solutions Group</div>

                        <div className="project-description2">
                          On Points Solutions Group is a medical staff credentialing
                          company. In collaboration with two other team members for our
                          fullstack bootcamp final project, we built and designed this site
                          to attract new clients and to offer secure access for existing and new
                          accounts to view and pay outstanding invoices through Intuit QuickBooks. 
                        </div>

                        <a
                          className="project-link"
                          href="https://opsg-demo.netlify.app/#/"
                          target=" "
                        >
                          view site
                        </a>

                        <div className="accent-line6"></div>

                        <div className="tool-icons2">
                          <img className="tool-icon" src={react} alt="react logo"></img>
                          <img className="tool-icon" src={vite} alt="vite logo"></img>
                          <img className="tool-icon" src={prisma} alt="prisma logo"></img>
                          <img
                            className="tool-icon"
                            src={postgresql}
                            alt="postgresql logo"
                          ></img>
                          <img className="tool-icon" src={express} alt="expressJs logo"></img>
                          <img className="tool-icon" src={json} alt="json logo"></img>
                        </div>

                    </div>

                  <img className="OPSG-image1" src={OPSG}></img>

                </div>
         
                <div className="OPSG-intro-container2">

                    <img 
                      className="OPSG-image2" 
                      src={OPSGContactForm}
                    ></img>

                    <div className="project-description3">
                      Our fullstack app was built with a <strong className="emphasized-text">PostgreSQL</strong>{" "}
                      database and <strong className="emphasized-text">Prisma</strong> for data consistency. For
                      building out RESTful API endpoints, <strong className="emphasized-text">Express</strong>{" "}
                      offered the right tools to handle our requests in a consistent and
                      scalable fashion.
                        <div className="paragraph-spacer"></div>
                      <strong className="emphasized-text">React Router</strong> supports our
                      navigation with protected routes and allows for lazy loading.
                      Hashing and salting through <strong className="emphasize-text">bcrypt</strong> provided
                      security, as well as adaptive options for future security
                      assurance. 
                        <div className="paragraph-ppacer"></div>
                      State was managed with <strong className="emphasized-text">Redux</strong> for
                      predictable data flow and ease of debugging. Throughout the
                      UI design process, <strong className="emphasized-text">React-Bootstrap</strong> was
                      extremely useful for dashboard cards and other contained elements.
                        <div className="paragraph-spacer"></div>
                        This experience reinforced the importance of delegation and goal
                      management. Utilizing GitHub project boards, our team assessed
                      first-, second-, and third-priority level elements to ensure
                      operational completion by our deadline with goals for future
                      improvements.
                    </div>

                </div>                     
                
            </div> 
           {/* end of OPSG-Container */}

                <div className="divider-accent-wrapper">
                  <div className="divider-accent-line">
                  <div className="divider-accent-box"></div>
                  <div className="floating-divider-accent-box"></div>
                </div>
        </div>
        {/* end of background div */}
          
                <div className="projects-header-wrapper2">
                  <div className="projects-header">projects</div>
                  <div className="header-accent-line"></div>
                  <div className="floating-accent-box3"></div>
                </div>

              <div className="first-info-container2">
                <div className="project-mini-title">coming soon</div>
                <div className="project-mini-description">Quarky</div>

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

              <div className="footer-container">
                  <div className="footer"></div>
              </div>

            </div>

      </div>
      {/* end of project section container */}
    </>
  );
}
