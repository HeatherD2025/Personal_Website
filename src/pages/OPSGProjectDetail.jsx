import "../styles/projectPages.css";
import postgresql from "../assets/images/icons/postgresqlLogo.png";
import prisma from "../assets/images/icons/prismalogo.png";
import react from "../assets/images/icons/reactlogo.png";

export default function OPSGProjectDetail() {

  const scrollToTop =() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

return (
   <>
    <div className="container">
      <div className="background">
        <div className="projectGrid">

            <div className="projectDetailHeaderWrapper">
              <div className="projectDetailHeaderLeft">projects</div>
              <div className="verticalDividerLine"></div>
              <div className="projectDetailHeaderRight">On Point Solutions Group</div>
            </div>

            <div className="projectTitle">On Point Solutions Group</div>
              <div className="projectDescription">  
                On Points Solutions Group is a medical staff credientialing company. In collaboration with two other 
                team members as a fullstack bootcamp final project, we built and designed this site to entice new 
                clients and to offer secure access for existing accounts to view and pay invoices through Intuit Quickbooks.
              </div>
              <a className="projectLink" href="https://onpointsolutions.netlify.app/#/" target=" ">view site</a>
            <div className="accentLine6"></div>
            <div className="accentBox5"></div>

            <div className="toolIconsb">
               <img className="toolIcon1b" src={react} alt="react logo"></img>
               <img className="toolIcon2b" src={prisma} alt="prisma logo"></img>
               <img className="toolIcon3b" src={postgresql} alt="postgresql logo"></img>
            </div>  

            <div className="accentBox6"></div>
              <div className="projectDescription2">
                 Our fullstack app was built with a <strong>PostgreSQL</strong> database and <strong>Prisma</strong> for data consistency. <strong>Express</strong> ensured scalable RESTful API endpoints for
                 user and administrative actions. <strong>React Router</strong> in combination with <strong>Bootstrap</strong> supported navigation and responsive UI components. Hashing and salting through <strong>Bcrypt</strong> offered
                 security as well as adaptive options for future security assurance. State was managed with 
                 <strong>Redux</strong> for predictable flow of data and ease of debugging.
                
              </div>

            <div className="accentBox7"></div>
              <div className="projectDescription3">
                This experience taught me the importance of delegation and goal management. Utilizing github project boards, our team assessed first, second, and third priority level elements to ensure operational completion by our deadline with goals for future improvements.
              </div>


              <div className="betweenSectionAccentLine4">
                <div className="betweenSectionAccentBox3"></div>
                <div className="betweenSectionFloatingAccentBox3"></div>
              </div>

        </div>
      </div>
    </div>
   </>
)
}