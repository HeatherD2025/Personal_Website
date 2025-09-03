import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRoutes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./components/ContactForm";
import ProjectDetail from "./components/projectDetail";
import NavBar from "./components/Navbar";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Navigate to="/home" /> },
    { path: "/home", element: <Home /> },
    { path: "/contactForm", element: <ContactForm /> },
    { path: "/ProjectDetail", element: <ProjectDetail />},
  ]);

  return (
    <>
      <NavBar />
      {routes}
    </>
  )
}

export default App;
