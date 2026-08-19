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
import Projects from "../components/Projects";
import ScrollToTop from "../components/ScrollToTop";

export default function OPSGProjectDetail() {
  return (
    <>
      <ScrollToTop />
      <div className="background">

         <div className="project-section">

          <div className="project-detail-header-wrapper">
            <div className="project-detail-header-left">projects</div>
            <div className="vertical-divider-line"></div>
            <div className="project-detail-header-right">OPSG</div>
          </div>

          <div className="project-detail-container">
            <div className="project-intro-wrapper">
              <div className="project-title2">On Point Solutions Group</div>

              <div className="project-description2">
                OnPoint Solutions Group, a medical credentialing firm, required
                a secure, scalable platform to streamline client onboarding and
                automate financial workflows. As part of a collaborative team, I
                focused on bridging the gap between sensitive medical data
                management and a user-friendly financial interface.
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
                <img className="tool-icon2" src={prisma} alt="prisma logo"></img>
                <img className="tool-icon2" src={postgresql} alt="postgresql logo"></img>
                <img className="tool-icon2" src={express} alt="expressJs logo"></img>
                <img className="tool-icon2" src={json} alt="json logo"></img>
              </div>
            </div>
            {/* project intro wrapper ends here */}

            {/* <img className="project-image" src={landingPage} /> */}
            <img className="project-image1" src={landingPage} alt="Landing Page of OPSG" />

            <div className="divider-accent-wrapper1">
              <div className="divider-accent-line">
                <div className="divider-accent-box"></div>
                <div className="floating-divider-accent-box"></div>
              </div>
            </div>
   
              {/* <img className="-main" src={userInvoice} /> */}
              <img className="project-image2" src={userInvoice} alt="User Invoice Page of OPSG" />

            <div className="project-description-wrapper2">
              <div className="project-description3">
                We architected a full-stack application centered on security and
                seamless billing integration. I led the effort to integrate
                <span className="emphasized-text"> Intuit QuickBooks</span>,
                allowing clients to view and pay outstanding invoices directly
                through the platform, which significantly reduced administrative
                overhead.
              </div>

              <div className="project-description4">
                We developed a robust backend using
                <span className="emphasized-text"> Node.js</span> and
                <span className="emphasized-text"> Express</span>, utilizing
                <span className="emphasized-text"> bcrypt </span>
                for industry-standard authentication to protect sensitive
                medical provider data. This project implemented a
                <span className="emphasized-text"> PostgreSQL</span> database
                managed via
                <span className="emphasized-text"> Prisma</span> ORM. This
                ensure consistent data flow across the administrative and
                client-facing dashboards.
                <div className="paragraph-spacer"></div>
              </div>
            </div>

            <div className="divider-accent-wrapper1">
              <div className="divider-accent-line">
                <div className="divider-accent-box"></div>
                <div className="floating-divider-accent-box"></div>
              </div>
            </div>

            <div className="project-description-wrapper">
              <div className="project-description5">
                Using <span className="emphasized-text">React-Bootstrap</span>,
                I designed sophisticated administrative and user dashboards
                featuring modular cards and responsive data to simplify billing.
                We leveraged <span className="emphasized-text">Redux </span>
                to manage global state, ensuring consistency and predictable
                behavior as clients navigated through the dashboard and payment
                portal. The UI was built using
                <span className="emphasized-text"> React (Vite)</span>, focusing
                on protected routing and "lazy loading" to optimize performance
                and ensure a secure user experience.
              </div>

              <div className="project-description6">
                Beyond the code, I utilized my background in operations to
                manage our GitHub project boards, prioritizing features to meet
                strict deadlines. This role reinforced my ability to lead
                technical teams while remaining focused on the end-users need
                for a stable, secure, and intuitive product.
              </div>
            </div>

            {/* <img className="project-image" src={adminDashboard} /> */}
            <img className="project-image3" src={adminDashboard} alt="Admin Dashboard of OPSG" />

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

        <Projects />

        <div className="footer-container">
          <div className="footer"></div>
        </div>
      </div>
      {/* background ends here */}
    </>
  );
}
