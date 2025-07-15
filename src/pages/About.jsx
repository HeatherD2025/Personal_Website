import NavBar from "../components/Navbar";
import myPortrait from "../assets/images/myPortrait.png";

export default function About() {

    return (
        <>
          <div className="background"> 
            <div className="mainBody">
              <NavBar />
              <div className="quoteContainer">
                <div className="aboutMeContainer">
                   <img className="myPhoto" src={myPortrait}></img>
                   <div className="aboutParagraph">
                     <p>Hi, I’m a fullstack developer with a background in design, operations, and hospitality—and a lifelong curiosity about science, technology, and how things work.
                      After 12+ years leading teams and coordinating events, I made the leap into web development through an immersive Fullstack Academy bootcamp. 
                      I’m now focused on building creative, user-first applications with responsive design across all known dimensions.

                      <ul>
                        <li>🎓 Graduate of Fullstack Academy's immersive web development program (JavaScript, React, Node.js, Express, SQL)</li>
                        <li>🛠️ Background in event operations, team leadership, and client-focused communication</li>
                        <li>🌌 Passionate about science, technology, and turning complex ideas into intuitive interfaces</li>
                        <li>💡 Driven to design responsive, accessible web experiences that work everywhere</li>
                        <li>🤝 Collaborative mindset with a creative eye and strategic approach</li>
                        <li>🚀 Always learning, always building—ready to contribute to exciting, mission-driven teams</li>
                      </ul>
                      Whether you’re building tools for Earth or beyond, I’d love to be part of your next mission. Let’s create something extraordinary—together.
                     </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}