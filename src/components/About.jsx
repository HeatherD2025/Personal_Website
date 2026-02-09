import "../styles/main.css";
import html from "../assets/images/icons/html.webp";
import css from "../assets/images/icons/css.webp";
import javascript from "../assets/images/icons/javascript.webp";
import json from "../assets/images/icons/json.webp";
import nodeJs from "../assets/images/icons/nodeJs.webp";
import postgresql from "../assets/images/icons/postgresqlLogo.webp";
import prisma from "../assets/images/icons/prismalogo.webp";
import react from "../assets/images/icons/reactlogo.webp";
import reactRedux from "../assets/images/icons/react-redux.webp";
import express from "../assets/images/icons/expressJs.webp";
import vite from "../assets/images/icons/vite.webp";

export default function About() {

    return (
      <>
        <section id="about" className="section">

            <div className="about-me-container">

                <div className="about-me-header-wrapper">
                    <div className="about-me-header">about-me</div>
                      <div className="header-accent-line"></div>
                      <div className="floating-accent-box3"></div>
                </div>
            
                {/* main section */}
                <div className="box-wrapper">
                  <div className="accent-box4">                    
                    <div className="floating-accent-box4"></div>
                  </div>
                </div>

                  <div className="about-paragraph-wrapper">
                      <div className="about-paragraph">
                        I was a curious kid-passionate about technology and science, with a knack for visualizing functionality and aesthetics. 
                        Naturally inquisitive and excited to understand cause-and-effect processes, I've always had a persistent drive to learn something new.

                        <div className="paragraph-spacer"></div>

                        After 12+ years leading teams and coordinating events, I was craving a new challenge, so I made the leap into web development 
                        through an immersive Fullstack Academy bootcamp. Now, as a full-stack developer with a background in design, operations, and hospitality,
                        I'm focused on building user-first applications with responsive design. Ready to join a new team helping create the extraordinary!
                      </div>
                      
                       <div className="paragraph-spacer"></div>

                       <div className="bullet-point-wrapper">
                          <div className="bullet-point">Graduate of Fullstack Academy's immersive web development program</div>
                            <div className="tools-container">
                              <img className="tool-icon" src={html} alt="html logo"></img>
                              <img className="tool-icon" src={css} alt="css logo"></img>
                              <img className="tool-icon" src={javascript} alt="js logo"></img>
                              <img className="tool-icon" src={json} alt="json logo"></img>
                              <img className="tool-icon" src={react} alt="react logo"></img>
                              <img className="tool-icon" src={reactRedux} alt="react-redux logo"></img>
                              <img className="tool-icon" src={nodeJs} alt="nodeJs logo"></img>
                              <img className="tool-icon" src={express} alt="expressJs logo"></img>
                              <img className="tool-icon" src={postgresql} alt="postregsql logo"></img>
                              <img className="tool-icon" src={prisma} alt="prisma logo"></img>
                              <img className="tool-icon" src={vite} alt="vite logo"></img>
                            </div>
                       </div>
                    </div>
            </div>

          </section>
        </>
    )
}