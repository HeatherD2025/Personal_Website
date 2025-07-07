import React from "react";
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import App from "./App.jsx";
import "./styles/main.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
