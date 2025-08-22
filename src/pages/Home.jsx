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
        <div className="linkBox">
           <div className="accentLine1"></div>
           <i className="fa-brands fa-github"></i>
           <i className="fa-brands fa-linkedin"></i>
           <i className="fa-regular fa-envelope"></i>
        </div>
        <div className="mainLandingText">
            <p className="mainHeader">I'm Heather and I don't know what to put here</p>
            <div className="mainContent">
              <p>
                Always learning, always building—ready to contribute to exciting,
               mission-driven teams
              </p>
              <div className="accentLine2"></div>
            </div>
        </div>
          <div className="myPhotoWrapper">
            <img className="myPhoto" src={myPortrait}></img>
          </div>
          <div className="accentBox1"></div>

          <div className="accentLine3"></div>
          <div className="accentBox2"></div>
          <div className="floatingAccentBox2"></div>
        </div>
      </div>
    </div>
    </>
  );
}
