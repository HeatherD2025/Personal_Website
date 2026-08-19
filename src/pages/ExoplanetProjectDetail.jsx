import "../styles/main.css";
import "../styles/individualProjectPages.css";
import claude from "../assets/images/icons/claude.webp";
import prisma from "../assets/images/icons/prismalogo.webp";
import react from "../assets/images/icons/reactlogo.webp";
import vite from "../assets/images/icons/vite.webp";
import typescript from "../assets/images/icons/typescript.webp";
import docker from "../assets/images/icons/docker.webp";
import postgresql from "../assets/images/icons/postgresqlLogo.webp";
import planetDetail from "../assets/images/projects/ExoplanetRealEstate/planetDetail.webp";
import planetFilters from "../assets/images/projects/ExoplanetRealEstate/planetFilters.webp";
import planetGrid from "../assets/images/projects/ExoplanetRealEstate/planetGrid.webp";
import Projects from "../components/Projects";
import ScrollToTop from "../components/ScrollToTop";

export default function ExoplanetProjectDetail() {
  return (
    <>
      <ScrollToTop />
      <div className="background">
        <div className="project-section">
          <div className="project-detail-header-wrapper">
            <div className="project-detail-header-left">projects</div>
            <div className="vertical-divider-line"></div>
            <div className="project-detail-header-right">
              Exoplanet Real Estate
            </div>
          </div>

          <div className="project-detail-container">
            <div className="project-intro-wrapper">
              <div className="project-title2">Exoplanet Real Estate</div>

              <div className="project-description2">
                I built this project because of my fascination with astrophysics
                and space exploration. I wanted to create an interactive
                platform that takes dense astronomical data directly from NASA
                and transforms it into something intuitive and visual so users
                can explore candidate worlds and see how factors like
                temperature, orbit, and atmospheric conditions impact planetary
                habitability.
              </div>

              <a
                className="project-link"
                href="https://exoplanet-real-estate.netlify.app"
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
                  src={claude}
                  alt="claude logo"
                ></img>
                <img
                  className="tool-icon2"
                  src={docker}
                  alt="docker logo"
                ></img>
                <img
                  className="tool-icon2"
                  src={typescript}
                  alt="typescript logo"
                ></img>
              </div>
            </div>
            {/* project intro wrapper ends here */}

            <img
              className="project-image1"
              src={planetFilters}
              alt="Planet filters"
            />

            <div className="divider-accent-wrapper1">
              <div className="divider-accent-line">
                <div className="divider-accent-box"></div>
                <div className="floating-divider-accent-box"></div>
              </div>
            </div>

            <img
              className="project-image2"
              src={planetGrid}
              alt="Planet grid"
            />

            <div className="project-description-wrapper2">
              <div className="project-description3">
                I started out building the app inside
                <span className="emphasized-text"> Docker</span>. Running
                <span className="emphasized-text"> Node</span>,
                <span className="emphasized-text"> Express</span>, and
                <span className="emphasized-text"> PostgreSQL</span> in isolated
                containers made local setup effortless without messy database
                installations directly on my machine, and full confidence that
                this will work on any machine.
              </div>

              <div className="project-description4">
                Astrophysics calculations get complicated fast. I paired with{" "}
                <span className="emphasized-text">Claude</span> to speed up the
                backend math—specifically modeling habitability zone boundaries
                and equilibrium temperatures—and to lay down a solid
                architecture for the API. It allowed me to focus heavily on data
                modeling and UI execution.
              </div>
            </div>

            <div className="divider-accent-wrapper1">
              <div className="divider-accent-line">
                <div className="divider-accent-box"></div>
                <div className="floating-divider-accent-box"></div>
              </div>
            </div>

            <img
              className="project-image3"
              src={planetDetail}
              alt="Planet detail modal"
            />

            <div className="project-description-wrapper">
              <div className="project-description5">
                Working in <span className="emphasized-text">TypeScript</span>{" "}
                across the entire stack was a huge advantage. When dealing with
                complex datasets flowing from PostgreSQL through Express and
                into React components, strong typing kept everything predictable
                and effectively flagged data structure issues before they hit
                runtime.
              </div>

              <div className="project-description6">
                The production backend runs on Node/Express with Prisma talking
                to a Supabase PostgreSQL database on Render, while the
                React/Vite frontend sits on Netlify. Setting up proxy rewrites
                keeps API traffic seamless under a single origin.
              </div>
            </div>
          </div>
        </div>

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
