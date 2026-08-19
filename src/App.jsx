import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";
import OPSGProjectDetail from "./pages/OPSGProjectDetail";
import ExoplanetProjectDetail from "./pages/ExoplanetProjectDetail";
import NavBar from "./components/Navbar";
// import ScrollToTop from "./components/ScrollToTop";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const routes = useRoutes([
    { path: "/", element: <Navigate to="/home" /> },
    { path: "/home", element: <Home /> },
    { path: "/contactForm", element: <ContactForm /> },
    { path: "/OPSGProjectDetail", element: <OPSGProjectDetail />},
    { path: "/ExoplanetProjectDetail", element: <ExoplanetProjectDetail />},
  ]);

  return (
    <>
      <NavBar />
      {/* <ScrollToTop /> */}
      {routes}
    </>
  )
}

export default App;
