import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/projectDetail" element={<projectDetail />} /> */}
        <Route path="/contactForm" element={<ContactForm />} />
      </Routes>
      <Home />
    </>
  )
}

export default App
