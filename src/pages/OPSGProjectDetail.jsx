import "../styles/projectPages.css";
import postgresql from "../assets/images/icons/postgresqlLogo.png";
import prisma from "../assets/images/icons/prismalogo.png";
import react from "../assets/images/icons/reactlogo.png";

export default function OPSGProjectDetail() {

return (
   <>
    <div className="container">
      <div className="background">
        <div className="projectGrid">

            <div className="projectDetailHeaderWrapper">
              <div className="projectDetailHeaderLeft">projects</div>
              <div className="verticalDividerLine"></div>
              <div className="projectDetailHeaderRight">On Point Solutions Group</div>
            </div>

            <div className="projectTitle">On Point Solutions Group</div>
              <div className="projectDescription">
                On Points Solutions Group is a medical staff credientialing company.  
                This site was desiged to entice new clients and includes an option for existing accounts to log in.
                From the user dashboard, users can see any outstanding invoices and connect to the Intuit payment system.
              </div>
              <a className="projectLink" href="https://onpointsolutions.netlify.app/#/" target=" ">view site</a>
            <div className="accentLine6"></div>
            <div className="accentBox5"></div>

            <div className="toolIconsb">
               <img className="toolIcon1b" src={react} alt="react logo"></img>
               <img className="toolIcon2b" src={prisma} alt="prisma logo"></img>
               <img className="toolIcon3b" src={postgresql} alt="postgresql logo"></img>
            </div>  

            <div className="accentBox6"></div>
              <div className="projectDescription2">
                testing asf canfckjnfkw asdjoelfewlnvelwnclkeandflewncleskcmneldkcmlcmac
              </div>

            <div className="accentBox7"></div>
              <div className="projectDescription3">
                arbgiprhegfinwa;fnewklcrmgwexs rlkefjs krcjtd bejnvks.krafx;kls.n glk. cdnxd
              </div>
        </div>
      </div>
    </div>
   </>
)
}