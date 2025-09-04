import NavBar from "../components/Navbar";
import "../styles/main.css";

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
                  <div className="accentBox4"></div>
                  <div className="floatingAccentBox4"></div>
                </div>

                  <div className="aboutParagraph">
                      <div>
                        I’m a fullstack developer with a background in design, operations, and hospitality—and a lifelong curiosity about science, technology, and how things work.
                        After 12+ years leading teams and coordinating events, I made the leap into web development through an immersive Fullstack Academy bootcamp. 
                        I’m now focused on building creative, user-first applications with responsive design across all known dimensions.
                      </div>
                       <ul>
                        <li>Graduate of Fullstack Academy's immersive web development program (JavaScript, React, Node.js, Express, SQL)</li>
                        <li>Background in event operations, team leadership, and client-focused communication</li>
                        <li>Passionate about science, technology, and turning complex ideas into intuitive interfaces</li>
                        <li>Driven to design responsive, accessible web experiences that work everywhere</li>
                        <li>Collaborative mindset with a creative eye and strategic approach</li>
                       </ul>
                      Whether you’re building tools for Earth or beyond, I’d love to be part of your next mission. Let’s create something extraordinary—together.
                  </div>
              </div>
                  <div className="betweenSectionContainer">
                    <div className="betweenSectionAccentLine"></div>
                    <div className="betweenSectionAccentBox"></div>
                    <div className="betweenSectionFloatingAccentBox"></div>
                  </div>
            </div>
          </section>
        </>
    )
}