import "../styles/individualProjectPages.css";
import postgresql from "../assets/images/icons/postgresqlLogo.webp";
import prisma from "../assets/images/icons/prismalogo.webp";
import react from "../assets/images/icons/reactlogo.webp";
import ScrollToTop from "../components/ScrollToTop";

export default function QuarkyProjectDetail() {
  useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

   return (
      <>
       <ScrollToTop />
        <div className="container">
          <div className="background">
            <div className="project-grid">
              <div className="project-detail-header-wrapper">
                <div className="project-detail-header-left">projects</div>
                <div className="vertical-divider-line"></div>
                <div className="project-detail-header-right">
                  Quarky
                </div>
              </div>
  
              <div className="project-title2">Quarky</div>
              <div className="project-description2">
                I created this site so users can find news, podcasts 
                and conversation - all centered around physics and space. 
                Registered users have an account where they can FILL IN MORE HERE..........
              </div>
              <a
                className="project-link"
                href="quark-y.netlify.app"
                target=" "
              >
                view site
              </a>
              <div className="accent-line6"></div>
              <div className="accent-box5"></div>
  
              <div className="tool-icons">
                <img className="tool-icon" src={react} alt="react logo"></img>
                <img className="tool-icon" src={prisma} alt="prisma logo"></img>
                <img
                  className="tool-icon"
                  src={postgresql}
                  alt="postgresql logo"
                ></img>
              </div>
  
              <div className="project-description3">
                Our fullstack app was built with a <strong>PostgreSQL</strong>{" "}
                database and <strong>Prisma</strong> for data consistency. For
                building out RESTful API endpoints <strong>Express</strong>{" "}
                offered the right tools to handle our requests in a consistent and
                scaleable fashion.
                  <div className="paragraph-spacer"></div>
                <strong>React Router</strong> supports our
                navigation with protected routes and allowed for lazy loading.
                Hashing and salting through <strong>Bcrypt</strong> offered
                security as well as adaptive options for future security
                assurance. 
                  <div className="paragraph-spacer"></div>
                State was managed with <strong>Redux</strong> for
                predictable flow of data and ease of debugging. Throughout the
                process of UI design, <strong>React-Bootstrap</strong> was
                extremely useful for forms and other contained elements.
              </div>
  
              <div className="project-description4">
                This experience reinforced the importance of delegation and goal
                management. Utilizing github project boards, our team assessed
                first, second, and third priority level elements to ensure
                operational completion by our deadline with goals for future
                improvements. 
                  <div className="paragraph-spacer"></div>
                If I had the opportunity to create this site again,
                Implementing a dark mode for accounts was a future element we did
                not have time to complete, but would have offered an improved user
                experience within accounts. I have since progressed in my css
                skills and prefer to design with column grids and utilize
                scaleable units.
              </div>


            </div>
          </div>
        </div>
      </>
    );
  }
  