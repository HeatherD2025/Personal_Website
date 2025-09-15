import "../styles/projectPages.css";
import postgresql from "../assets/images/icons/postgresqlLogo.png";
import prisma from "../assets/images/icons/prismalogo.png";
import react from "../assets/images/icons/reactlogo.png";

export default function QuarkyProjectDetail() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="container">
        <div className="background">
          <div className="projectGrid">
            <div className="projectDetailHeaderWrapper">
              <div className="projectDetailHeaderLeft">projects</div>
              <div className="verticalDividerLine"></div>
              <div className="projectDetailHeaderRight">
                Quarky
              </div>
            </div>

            <div className="projectTitle">Quarky</div>
            <div className="projectDescription">
              Quarky is a science themed social media site. Users can interact with science news, podcasts, and 
            </div>
            <a
              className="projectLink"
              href="https://onpointsolutions.netlify.app/#/"
              target=" "
            >
              view site
            </a>
            <div className="accentLine6"></div>
            <div className="accentBox5"></div>

            <div className="toolIconsb">
              <img className="toolIcon1b" src={react} alt="react logo"></img>
              <img className="toolIcon2b" src={prisma} alt="prisma logo"></img>
              <img
                className="toolIcon3b"
                src={postgresql}
                alt="postgresql logo"
              ></img>
            </div>

            <div className="accentBox6"></div>
            <div className="projectDescription2">
              Our fullstack app was built with a <strong>PostgreSQL</strong>{" "}
              database and <strong>Prisma</strong> for data consistency. For
              building out RESTful API endpoints <strong>Express</strong>{" "}
              offered the right tools to handle our requests in a consistent and
              scaleable fashion. <strong>React Router</strong> supports our
              navigation with protected routes and allowed for lazy loading.
              Hashing and salting through <strong>Bcrypt</strong> offered
              security as well as adaptive options for future security
              assurance. State was managed with <strong>Redux</strong> for
              predictable flow of data and ease of debugging. Throughout the
              process of UI design, <strong>React-Bootstrap</strong> was
              extremely useful for forms and other contained elements.
            </div>

            <div className="accentBox7"></div>
            <div className="projectDescription3">
              This experience reinforced the importance of delegation and goal
              management. Utilizing github project boards, our team assessed
              first, second, and third priority level elements to ensure
              operational completion by our deadline with goals for future
              improvements. If I had the opportunity to create this site again,
              Implementing a dark mode for accounts was a future element we did
              not have time to complete, but would have offered an improved user
              experience within accounts. I have since progressed in my css
              skills and prefer to design with column grids and utilize
              scaleable units.
            </div>

            <div className="betweenSectionAccentLine4">
              <div className="betweenSectionAccentBox3"></div>
              <div className="betweenSectionFloatingAccentBox3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
