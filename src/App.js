import React from "react";
import "./App.css";
import * as ReactBootstrap from "react-bootstrap";
import Main from "./Component/main";
import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      <ReactBootstrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="header-color"
      >
        <ReactBootstrap.Navbar.Brand href="/">
          MY PORTFOLIO
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto"></ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <ReactBootstrap.Nav.Link href="/aboutme">
              About Me
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="/projects">
              Projects
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="/contacts">
              Contact
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
      <div className="page-content">
        <Main />
      </div>
    </div>
  );
}

export default App;
