import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";
import OPSGProjectDetail from "./pages/OPSGProjectDetail";
import QuarkyProjectDetail from "./pages/QuarkyProjectDetail";
import NavBar from "./components/Navbar";
// import ScrollToTop from "./components/ScrollToTop";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const routes = useRoutes([
    { path: "/", element: <Navigate to="/home" /> },
    { path: "/home", element: <Home /> },
    { path: "/contactForm", element: <ContactForm /> },
    { path: "/OPSGProjectDetail", element: <OPSGProjectDetail />},
    { path: "/QuarkyProjectDetail", element: <QuarkyProjectDetail />},
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
