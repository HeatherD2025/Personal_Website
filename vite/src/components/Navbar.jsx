import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/navbar.css";
import ListGroup from "react-bootstrap/ListGroup";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <>
    <header>
      <nav
        className="navbar"
      >
            <ListGroup.Item
              className="navItem"
              action
              onClick={() => navigate("/")}
            >
              HOME
            </ListGroup.Item>
            <ListGroup.Item
              className="navItem"
              action
              onClick={() => navigate("/about")}
            >
              ABOUT
            </ListGroup.Item>
            <ListGroup.Item
              className="navItem"
              action
              onClick={() => navigate("/contactform")}
            >
              CONTACT
            </ListGroup.Item>
       
      </nav>
    </header>
    </>
  );
}
