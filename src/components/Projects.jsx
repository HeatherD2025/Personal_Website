import OPSG from "../assets/images/projects/OPSG/OPSG.png";
import postgresql from "../assets/images/projects/OPSG/postgresqlLogo.png";
import prisma from "../assets/images/projects/OPSG/prismalogo.png";
import react from "../assets/images/projects/OPSG/reactlogo.png"

export default function Projects() {

    return (
        <>
        <section id="projects" className="section">
         <div className="sectionSpacer"></div>
                     {/* Between section accent elements*/}
          <div className="betweenSectionContainer">
            <div className="betweenSectionAccentLine"></div>
            <div className="betweenSectionAccentBox"></div>
            <div className="betweenSectionFloatingAccentBox"></div>
          </div>

              <div className="projectsHeaderSection">
                <div className="projectsHeader">projects</div>
                  <div className="accentLine5"></div>
                  <div className="floatingAccentBox5"></div>
              </div>

          <div className="mainBody">

              <div className="firstProjectContainer">
                  <img className="firstProjectImage" src={OPSG} ></img>

                <div className="firstDividerLine"></div>
                <div className="firstInfoContainer">
                  <div className="firstProjectTitle">On Point Solutions Group</div>
                  <div className="firstProjectDescription">Medical credentialing company site and bill payment portal</div>
                  <div className="toolIcons">
                     <img className="toolIcon1" src={react} alt="react logo"></img>
                     <img className="toolIcon2" src={prisma} alt="prisma logo"></img>
                     <img className="toolIcon3" src={postgresql} alt="postgresql logo"></img>
                  </div>  
                </div>
              </div>
          </div>
         </section>
        </>
    )
}