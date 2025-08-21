import NavBar from "../components/Navbar";
import "../styles/main.css";
import myPortrait from "../assets/images/myPortrait.jpg";
import React from "react";

export default function Home() {
  return (
    <>
    <div className="container">
    <div className="background">
      <div className="pageGrid">
       <NavBar />
        <div className="heroSection"></div>
          <div className="mainContent">
            <h5>I'm Heather and I don't know what to put here</h5>
            <p>
              Always learning, always building—ready to contribute to exciting,
             mission-driven teams
            </p>
          </div>
          <img className="myPhoto" src={myPortrait}></img>
        </div>
      </div>
      </div>
    </>
  );
}
