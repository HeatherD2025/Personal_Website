import { useEffect } from "react";
import "../styles/main.css";
import "../styles/individualProjectPages.css";
import postgresql from "../assets/images/icons/postgresqlLogo.png";
import express from "../assets/images/icons/expressJs.png";
import json from "../assets/images/icons/json.png";
import prisma from "../assets/images/icons/prismalogo.png";
import react from "../assets/images/icons/reactlogo.png";
import vite from "../assets/images/icons/vite.png";
import OPSG from "../assets/images/projects/OPSG/OPSG.png";

import OPSGContactForm from "../assets/images/projects/OPSG/OPSGContactForm.png";
import Projects from "../components/Projects";

export default function OPSGProjectDetail() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  return (
    <>
      <div className="projectSectionContainer">
        <div className="background">
          
            <div className="projectDetailHeaderWrapper">
               <div className="projectDetailHeaderLeft">projects</div>
               <div className="verticalDividerLine"></div>
               <div className="projectDetailHeaderRight">
                On Point Solutions Group
              </div>
            </div>

            <div className="OPSG-Container">
              <div className="OPSGIntroContainer">

                <div className="OPSGIntro">

                    <div className="projectTitle2">On Point Solutions Group</div>

                    <div className="projectDescription2">
                      On Points Solutions Group is a medical staff credientialing
                      company. In collaboration with two other team members as a
                      fullstack bootcamp final project, we built and designed this site
                      to entice new clients and to offer secure access for existing and new
                      accounts to view and pay outstanding invoices through Intuit Quickbooks. 
                    </div>

                    <a
                      className="projectLink"
                      href="https://onpointsolutions.netlify.app/#/"
                      target=" "
                    >
                      view site
                    </a>
                    <div className="accentLine6"></div>
                          

                    <div className="toolIcons2">
                      <img className="toolIcon" src={react} alt="react logo"></img>
                       <img className="toolIcon" src={vite} alt="vite logo"></img>
                      <img className="toolIcon" src={prisma} alt="prisma logo"></img>
                      <img
                        className="toolIcon"
                        src={postgresql}
                        alt="postgresql logo"
                      ></img>
                      <img className="toolIcon" src={express} alt="expressJs logo"></img>
                      <img className="toolIcon" src={json} alt="json logo"></img>
                    </div>
                  </div>

                  <img className="OPSGImage1" src={OPSG}></img>

                </div>
         
                <div className="OPSGIntroContainer2">
                    <img 
                      classNme="OPSGImage2" 
                      src={OPSGContactForm}
                      style={{
                        maxWidth: "35rem",
                        margin: "0rem 5rem 0rem 0rem",
                      }}
                    ></img>

                    <div className="projectDescription3">
                      Our fullstack app was built with a <strong className="emphasizedText">PostgreSQL</strong>{" "}
                      database and <strong className="emphasizedText">Prisma</strong> for data consistency. For
                      building out RESTful API endpoints <strong className="emphasizedText">Express</strong>{" "}
                      offered the right tools to handle our requests in a consistent and
                      scaleable fashion.
                        <div className="paragraphSpacer"></div>
                      <strong className="emphasizedText">React Router</strong> supports our
                      navigation with protected routes and allowed for lazy loading.
                      Hashing and salting through <strong className="emphasizedText">Bcrypt</strong> offered
                      security as well as adaptive options for future security
                      assurance. 
                        <div className="paragraphSpacer"></div>
                      State was managed with <strong className="emphasizedText">Redux</strong> for
                      predictable flow of data and ease of debugging. Throughout the
                      process of UI design, <strong className="emphasizedText">React-Bootstrap</strong> was
                      extremely useful for dashbord cards and other contained elements.
                        <div className="paragraphSpacer"></div>
                        This experience reinforced the importance of delegation and goal
                      management. Utilizing github project boards, our team assessed
                      first, second, and third priority level elements to ensure
                      operational completion by our deadline with goals for future
                      improvements.
                </div>

              </div>                     
                
            </div>

            <div className="dividerAccentWrapper">
              <div className="dividerAccentLine">
                <div className="dividerAccentBox"></div>
                <div className="floatingDividerAccentBox"></div>
              </div>
            </div>
       
          <div className="projectsHeaderWrapper2">
              <div className="projectsHeader">projects</div>
              <div className="headerAccentLine"></div>
              <div className="floatingAccentBox3"></div>
            </div>

          <div className="firstInfoContainer2">
            <div className="projectMiniTitle">coming soon</div>
            <div className="projecMinitDescription">Quarky</div>

            <div className="toolIconsMiniContainer">
               <img
                 className="toolIcon"
                 src={react}
                 alt="react logo"
                ></img>
                <img
                 className="toolIcon"
                 src={prisma}
                 alt="prisma logo"
                ></img>
                <img
                 className="toolIcon"
                 src={postgresql}
                 alt="postgresql logo"
                 ></img>
            </div>

          </div>

        <div className="footerContainer">
            <div className="footer"></div>
        </div>
        
        </div>

      </div>
    </>
  );
}
