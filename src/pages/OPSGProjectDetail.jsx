import { useEffect } from "react";
import "../styles/main.css";
import "../styles/individualProjectPages.css";
import postgresql from "../assets/images/icons/postgresqlLogo.webp";
import express from "../assets/images/icons/expressJs.webp";
import json from "../assets/images/icons/json.webp";
import prisma from "../assets/images/icons/prismalogo.webp";
import react from "../assets/images/icons/reactlogo.webp";
import vite from "../assets/images/icons/vite.webp";
import OPSG from "../assets/images/projects/OPSG/OPSG.webp";
import OPSGContactForm from "../assets/images/projects/OPSG/OPSGContactForm.webp";
import ScrollToTop from "../components/ScrollToTop";

export default function OPSGProjectDetail() {

  return (
    <>
     <ScrollToTop />
      <div className="projectSectionContainer">

        <div className="background">

            <div className="mobileContainer">
              
                <div className="projectDetailHeaderWrapper">
                  <div className="projectDetailHeaderLeft">projects</div>
                  <div className="verticalDividerLine"></div>
                  <div className="projectDetailHeaderRight">On Point Solutions Group</div>
                </div>

            </div>

            <div className="OPSG-Container">
                <div className="OPSGIntroContainer">

                    <div className="OPSGIntro">

                        <div className="projectTitle2">On Point Solutions Group</div>

                        <div className="projectDescription2">
                          On Points Solutions Group is a medical staff credentialing
                          company. In collaboration with two other team members for our
                          fullstack bootcamp final project, we built and designed this site
                          to attract new clients and to offer secure access for existing and new
                          accounts to view and pay outstanding invoices through Intuit QuickBooks. 
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
                      className="OPSGImage2" 
                      src={OPSGContactForm}
                    ></img>

                    <div className="projectDescription3">
                      Our fullstack app was built with a <strong className="emphasizedText">PostgreSQL</strong>{" "}
                      database and <strong className="emphasizedText">Prisma</strong> for data consistency. For
                      building out RESTful API endpoints, <strong className="emphasizedText">Express</strong>{" "}
                      offered the right tools to handle our requests in a consistent and
                      scalable fashion.
                        <div className="paragraphSpacer"></div>
                      <strong className="emphasizedText">React Router</strong> supports our
                      navigation with protected routes and allows for lazy loading.
                      Hashing and salting through <strong className="emphasizedText">bcrypt</strong> provided
                      security, as well as adaptive options for future security
                      assurance. 
                        <div className="paragraphSpacer"></div>
                      State was managed with <strong className="emphasizedText">Redux</strong> for
                      predictable data flow and ease of debugging. Throughout the
                      UI design process, <strong className="emphasizedText">React-Bootstrap</strong> was
                      extremely useful for dashboard cards and other contained elements.
                        <div className="paragraphSpacer"></div>
                        This experience reinforced the importance of delegation and goal
                      management. Utilizing GitHub project boards, our team assessed
                      first-, second-, and third-priority level elements to ensure
                      operational completion by our deadline with goals for future
                      improvements.
                    </div>

                </div>                     
                
            </div> 
           {/* end of OPSG-Container */}

                <div className="dividerAccentWrapper">
                  <div className="dividerAccentLine">
                  <div className="dividerAccentBox"></div>
                  <div className="floatingDividerAccentBox"></div>
                </div>
        </div>
        {/* end of background div */}
          
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
      {/* end of project section container */}
    </>
  );
}
