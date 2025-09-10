import { useNavigate } from "react-router-dom";
import OPSG from "../assets/images/projects/OPSG/OPSG.png";
import postgresql from "../assets/images/icons/postgresqlLogo.png";
import prisma from "../assets/images/icons/prismalogo.png";
import react from "../assets/images/icons/reactlogo.png"

export default function Projects() {
  const navigate = useNavigate();
  const scrollToTop =() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

    return (
        <>
        <section id="projects" className="section">

          <div className="projectsContainer">

            <div className="projectsGrid">
              <div className="projectsHeaderWrapper">
                <div className="projectsHeader">projects</div>
                  <div className="accentLine5"></div>
                  <div className="floatingAccentBox5"></div>
              </div>

             {/* main section */}
              <div className="projectsWrapper">
                <a onClick={() => {
                  navigate("/OPSGProjectDetail");
                  scrollToTop();
                }}>

                  
                  <div className="firstProjectContainer" >
                    <img className="firstProjectImage" src={OPSG} ></img>

                    <div className="firstDividerLine"></div>

                    <div className="firstInfoContainer">

                      <div className="firstProjectTitle">On Point Solutions Group</div>
                      <div className="firstProjectDescription">Medical credentialing company site and bill payment portal</div>
                      
                      <div className="toolIcons">
                        <img className="toolIcon" src={react} alt="react logo"></img>
                        <img className="toolIcon" src={prisma} alt="prisma logo"></img>
                        <img className="toolIcon" src={postgresql} alt="postgresql logo"></img>
                      </div>  
                    </div>
                  </div>
                </a>

                <a onClick={() => navigate("/ProjectDetail")}>
                  <div className="firstProjectContainer" >
                      <img className="firstProjectImage" src={OPSG} ></img>

                    <div className="firstDividerLine"></div>
                    <div className="firstInfoContainer">
                      <div className="firstProjectTitle">Quarky</div>
                      <div className="firstProjectDescription">News, discussion, and podcasts - all centered around science</div>
                      <div className="toolIcons">
                        <img className="toolIcon" src={react} alt="react logo"></img>
                        <img className="toolIcon" src={prisma} alt="prisma logo"></img>
                        <img className="toolIcon" src={postgresql} alt="postgresql logo"></img>
                      </div>  
                    </div>
                  </div>
                </a>

                <a onClick={() => navigate("/ProjectDetail")}>
                  <div className="firstProjectContainer" >
                      <img className="firstProjectImage" src={OPSG} ></img>

                    <div className="firstDividerLine"></div>
                    <div className="firstInfoContainer">
                      <div className="firstProjectTitle">On Point Solutions Group</div>
                      <div className="firstProjectDescription">Medical credentialing company site and bill payment portal</div>
                      <div className="toolIcons">
                        <img className="toolIcon" src={react} alt="react logo"></img>
                        <img className="toolIcon" src={prisma} alt="prisma logo"></img>
                        <img className="toolIcon" src={postgresql} alt="postgresql logo"></img>
                      </div>  
                    </div>
                  </div>
                </a>
              </div>

              <div className="betweenSectionContainer">
                    <div className="betweenSectionAccentLine2"></div>
              </div>

            </div>
          </div>
         </section>
        </>
    )
}