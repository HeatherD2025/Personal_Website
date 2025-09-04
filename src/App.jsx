import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRoutes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./components/ContactForm";
import OPSGProjectDetail from "./pages/OPSGProjectDetail";
import NavBar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Navigate to="/home" /> },
    { path: "/home", element: <Home /> },
    { path: "/contactForm", element: <ContactForm /> },
    { path: "/OPSGProjectDetail", element: <OPSGProjectDetail />},
  ]);

  return (
    <>
      <NavBar />
      <ScrollToTop />
      {routes}
    </>
  )
}

export default App;
