import { useEffect } from "react";
import "../styles/main.css";
import "../styles/individualProjectPages.css";
import postgresql from "../assets/images/icons/postgresqlLogo.webp";
import express from "../assets/images/icons/expressJs.webp";
import json from "../assets/images/icons/json.webp";
import prisma from "../assets/images/icons/prismalogo.webp";
import react from "../assets/images/icons/reactlogo.webp";
import vite from "../assets/images/icons/vite.webp";
import landingPage from "../assets/images/projects/OPSG/landingPage.webp";
import userInvoice from "../assets/images/projects/OPSG/userInvoice.webp";
import adminDashboard from "../assets/images/projects/OPSG/adminDashboard.webp";
import ScrollToTop from "../components/ScrollToTop";

export default function OPSGProjectDetail() {
  return (
    <>
      <ScrollToTop />
      <div className="background">
        <div className="opsg-section">
          <div className="project-detail-header-wrapper">
            <div className="project-detail-header-left">projects</div>
            <div className="vertical-divider-line"></div>
            <div className="project-detail-header-right">OPSG</div>
          </div>

         <div className="project-detail-container">

            <div className="project-intro-wrapper">
              <div className="project-title2">On Point Solutions Group</div>

              <div className="project-description2">
                On Points Solutions Group is a medical staff credentialing
                company. In collaboration with two other team members for our
                fullstack bootcamp final project, we built and designed this
                site to attract new clients and to offer secure access for
                existing and new accounts to view and pay outstanding invoices
                through Intuit QuickBooks.
              </div>

              <a
                className="project-link"
                href="https://opsg-demo.netlify.app/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                view site
              </a>
              <div className="accent-line6"></div>

              <div className="tools-container3">
                <img className="tool-icon2" src={react} alt="react logo"></img>

                <img className="tool-icon2" src={vite} alt="vite logo"></img>

                <img
                  className="tool-icon2"
                  src={prisma}
                  alt="prisma logo"
                ></img>

                <img
                  className="tool-icon2"
                  src={postgresql}
                  alt="postgresql logo"
                ></img>

                <img
                  className="tool-icon2"
                  src={express}
                  alt="expressJs logo"
                ></img>

                <img className="tool-icon2" src={json} alt="json logo"></img>
              </div>
            </div>
            {/* project intro wrapper ends here */}

      {/* <div className="mobile-project-container"> */}

        
            <img className="OPSG-image1" src={landingPage} />

            <div className="divider-accent-wrapper1">
              <div className="divider-accent-line">
                <div className="divider-accent-box"></div>
                <div className="floating-divider-accent-box"></div>
              </div>
            </div>

            <img className="OPSG-image2" src={userInvoice} />

            <div className="project-description-wrapper">
              <div className="project-description3">
                Our fullstack app was built with a{" "}
                <span className="emphasized-text">PostgreSQL</span> database and{" "}
                <span className="emphasized-text">Prisma</span> for data
                consistency. For building out RESTful API endpoints,{" "}
                <span className="emphasized-text">Express</span> offered the
                right tools to handle our requests in a consistent and scalable
                fashion.
              </div>

              <div className="project-description4">
                <span className="emphasized-text">React Router</span> supports
                our navigation with protected routes and allows for lazy
                loading. Hashing and salting through{" "}
                <span className="emphasized-text">bcrypt</span> provided
                security, as well as adaptive options for future security
                assurance.
                <div className="paragraph-spacer"></div>
              </div>
            </div>

            <div className="divider-accent-wrapper1">
              <div className="divider-accent-line">
                <div className="divider-accent-box"></div>
                <div className="floating-divider-accent-box"></div>
              </div>
            </div>

            <div className="project-description-wrapper2">
              <div className="project-description5">
                State was managed with{" "}
                <span className="emphasized-text">Redux</span> for predictable
                data flow and ease of debugging. Throughout the UI design
                process,{" "}
                <span className="emphasized-text">React-Bootstrap</span> was
                extremely useful for dashboard cards and other contained
                elements.
              </div>

              <div className="project-description6">
                This experience reinforced the importance of delegation and goal
                management. Utilizing GitHub project boards, our team assessed
                first-, second-, and third-priority level elements to ensure
                operational completion by our deadline with goals for future
                improvements.
              </div>
            </div>

            <img className="OPSG-image3" src={adminDashboard} />
          </div>
          {/* project detail container ends here */}
        </div>
        {/* opsg section ends here */}

      {/* </div> */}

        <div className="divider-accent-wrapper2">
          <div className="divider-accent-line">
            <div className="divider-accent-box"></div>
            <div className="floating-divider-accent-box"></div>
          </div>
        </div>

        <div className="projects-header-wrapper2">
          <div className="projects-header">projects</div>
          <div className="header-accent-line"></div>
          <div className="floating-accent-box3"></div>
        </div>

        <div className="first-info-container2">
          <div className="project-mini-title">coming soon</div>
          <div className="project-mini-description">Quarky</div>

          <div className="tool-icons-mini-container2">
            <img className="tool-icon2" src={react} alt="react logo"></img>
            <img className="tool-icon2" src={prisma} alt="prisma logo"></img>
            <img
              className="tool-icon2"
              src={postgresql}
              alt="postgresql logo"
            ></img>
          </div>
        </div>
        {/* first info container 2 ends here */}

        <div className="footer-container">
          <div className="footer"></div>
        </div>
      </div>
      {/* background ends here */}
    </>
  );
}
