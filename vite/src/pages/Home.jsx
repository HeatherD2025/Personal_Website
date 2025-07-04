import NavBar from "../components/Navbar";
import "../styles/main.css";
import React from "react";

export default function Home() {

    return (
        <>
          <div className="background">
            <NavBar />
            <div className="quoteContainer">
              <h3 className="landingQuote">
                Success comes from <span className="quoteEmphasis">curiosity, concentration, perseverance </span> and <span className="quoteEmphasis">self criticism</span>.
              <span className="quoteAuthor"> - Albert Einstein</span>
              </h3>
            </div>
          </div>
        </>
    )
}