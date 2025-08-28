import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRoutes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./components/ContactForm";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Navigate to="/home" /> },
    { path: "/home", element: <Home /> },
    { path: "/contactForm", element: <ContactForm /> },
  ]);

  return routes;
}

export default App;
