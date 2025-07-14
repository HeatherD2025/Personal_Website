import NavBar from "../components/Navbar";
import "../styles/main.css";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {

    return (
        <>
   <div className="background">
      <div className="mainBody">
        <NavBar />
         <div className="quoteContainer">
            <motion.h3
              className="landingQuote"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 4.0,
                ease: [0.25, 0.75, 0.25, 1.05],
              }}
            >
              Success comes from{" "}
              <motion.span
                className="quoteEmphasis"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
              >
                curiosity,
              </motion.span>{" "}
              <motion.span
                className="quoteEmphasis"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.6, ease: "easeOut" }}
              >
                 concentration,
              </motion.span>{" "}
              <motion.span
                className="quoteEmphasis"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.2, duration: 0.6, ease: "easeOut" }}
              >
                 perseverance,
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.8, duration: 0.2, ease: "easeOut" }}
              >
                and
              </motion.span>{" "}
              <motion.span
                className="quoteEmphasis"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 4.2, duration: 0.6, ease: "easeOut" }}
              >
                self criticism
              </motion.span>
              <motion.span
                className="quoteAuthor"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5.8, duration: 1.5 }}
              >
                {" "}
                - Albert Einstein
              </motion.span>
            </motion.h3>
           {/* <h3 className="landingQuote">
            Success comes from 
            <span className="quoteEmphasis"> curiosity, concentration, perseverance </span> 
            and 
            <span className="quoteEmphasis"> self criticism</span>.
            <span className="quoteAuthor"> - Albert Einstein</span>
           </h3> */}
         </div>
      </div>
    </div>
        </>
    )
}