import "../styles/projectPages.css";
import postgresql from "../assets/images/icons/postgresqlLogo.png";
import prisma from "../assets/images/icons/prismalogo.png";
import react from "../assets/images/icons/reactlogo.png";
import OPSG from "../assets/images/projects/OPSG/OPSG.png";

export default function OPSGProjectDetail() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="container">
        <div className="background">
          <div className="projectsContainer">
            <div className="projectDetailHeaderWrapper">
              <div className="projectDetailHeaderLeft">projects</div>
              <div className="verticalDividerLine"></div>
              <div className="projectDetailHeaderRight">
                On Point Solutions Group
              </div>
            </div>

            <div className="projectTitle2">On Point Solutions Group</div>
            <div className="projectDescription2">
              On Points Solutions Group is a medical staff credientialing
              company. In collaboration with two other team members as a
              fullstack bootcamp final project, we built and designed this site
              to entice new clients and to offer secure access for existing
              accounts to view and pay invoices through Intuit Quickbooks.
            </div>
            <a
              className="projectLink"
              href="https://onpointsolutions.netlify.app/#/"
              target=" "
            >
              view site
            </a>
            <div className="accentLine6"></div>
                <div className="accentBox5">
                  <img className="firstSiteImage" src={OPSG}></img>
                </div>

            <div className="toolIcons">
              <img className="toolIcon" src={react} alt="react logo"></img>
              <img className="toolIcon" src={prisma} alt="prisma logo"></img>
              <img
                className="toolIcon"
                src={postgresql}
                alt="postgresql logo"
              ></img>
            </div>

            <div className="accentBox6"></div>
            <div className="projectDescription3">
              Our fullstack app was built with a <strong>PostgreSQL</strong>{" "}
              database and <strong>Prisma</strong> for data consistency. For
              building out RESTful API endpoints <strong>Express</strong>{" "}
              offered the right tools to handle our requests in a consistent and
              scaleable fashion.
                <div className="paragraphSpacer"></div>
              <strong>React Router</strong> supports our
              navigation with protected routes and allowed for lazy loading.
              Hashing and salting through <strong>Bcrypt</strong> offered
              security as well as adaptive options for future security
              assurance. 
                <div className="paragraphSpacer"></div>
              State was managed with <strong>Redux</strong> for
              predictable flow of data and ease of debugging. Throughout the
              process of UI design, <strong>React-Bootstrap</strong> was
              extremely useful for forms and other contained elements.
            </div>

            <div className="accentBox7"></div>
            <div className="projectDescription4">
              This experience reinforced the importance of delegation and goal
              management. Utilizing github project boards, our team assessed
              first, second, and third priority level elements to ensure
              operational completion by our deadline with goals for future
              improvements. 
                <div className="paragraphSpacer"></div>
              If I had the opportunity to create this site again,
              Implementing a dark mode for accounts was a future element we did
              not have time to complete, but would have offered an improved user
              experience within accounts. I have since progressed in my css
              skills and prefer to design with column grids and utilize
              scaleable units.
            </div>

            <div className="betweenSectionAccentLine2"></div>

          </div>
        </div>
      </div>
    </>
  );
}
