import NavBar from "../components/Navbar";

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
              <NavBar />
              <div className="quoteContainer">
                <h1>TESTING</h1>
              </div>
          </div>
         </section>
        </>
    )
}