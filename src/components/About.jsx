import NavBar from "../components/Navbar";
import "../styles/main.css";
import html from "../assets/images/icons/html.png";
import css from "../assets/images/icons/css.png";
import javascript from "../assets/images/icons/javascript.png";
import json from "../assets/images/icons/json.png";
import nodeJs from "../assets/images/icons/nodeJs.png";
import postgresql from "../assets/images/icons/postgresqlLogo.png";
import prisma from "../assets/images/icons/prismalogo.png";
import react from "../assets/images/icons/reactlogo.png";

export default function About() {

    return (
      <>
        <section id="about" className="section">
          <div className="sectionSpacer"></div>

            <div className="aboutMeContainer">

               <div className="aboutGrid">
                <div className="aboutMeHeaderWrapper">
                    <div className="aboutMeHeader">about-me</div>
                      <div className="accentLine4"></div>
                      <div className="floatingAccentBox3"></div>
                </div>
            
                {/* main section */}
                <div className="boxWrapper">
                  <div className="accentBox4">                    
                    <div className="floatingAccentBox4"></div>
                  </div>
                </div>

                  <div className="aboutParagraphWrapper">
                      <div className="aboutParagraph">
                        I was a curious kid - passionate about technology and science with a knack for visualizing functionality and aesthetic. 
                        Naturally inquisitive and excited to understand cause-and-effect processes, I've always had a persistant drive to learn something new. 
                        After 12+ years leading teams and coordinating events, I was craving a new challenge, so I made the leap into web development 
                        through an immersive Fullstack Academy bootcamp. Now, as a fullstack developer with a background in design, operations, and hospitality,
                        I'm focused on building user-first applications with responsive design. Ready to join a new team helping create the extraordinary!
                      </div>
                       <div className="bulletPointWrapper">
                          <div className="bulletPoint">Graduate of Fullstack Academy's immersive web development program</div>
                            <div className="toolsContainer">
                              <img className="toolIcon" src={html} alt="html logo"></img>
                              <img className="toolIcon" src={css} alt="css logo"></img>
                              <img className="toolIcon" src={javascript} alt="js logo"></img>
                              <img className="toolIcon" src={json} alt="json logo"></img>
                              <img className="toolIcon" src={react} alt="react logo"></img>
                              <img className="toolIcon" src={nodeJs} alt="nodeJs logo"></img>
                              <img className="toolIcon" src={postgresql} alt="postregsql logo"></img>
                              <img className="toolIcon" src={prisma} alt="prisma logo"></img>
                            </div>
                          {/* <div className="bulletPoint">Background in event operations, team leadership, and client-focused communication</div>
                          <div className="bulletPoint">Passionate about turning complex ideas into intuitive interfaces</div>
                          <div className="bulletPoint">Driven to design responsive, accessible web experiences that work everywhere</div>
                          <div className="bulletPoint">Collaborative mindset with a creative eye and strategic approach</div> */}
                       </div>
                  </div>
              
                  <div className="betweenSectionContainer">
                    <div className="betweenSectionAccentLine"></div>
                    <div className="betweenSectionAccentBox"></div>
                    <div className="betweenSectionFloatingAccentBox"></div>
                  </div>
                </div>
            </div>
          </section>
        </>
    )
}