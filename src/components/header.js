import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/BA.png";

export default function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark fixed-top">
      <Container>
        <Navbar.Brand href="#introduction">
          <img
            src={logo}
            alt="logo"
            style={{ width: "35px" }}
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto m-auto">
            <Nav.Link href="#introduction">HOME</Nav.Link>
            <Nav.Link href="#fact-section">WARUM GREEN CONTROLLING?</Nav.Link>
            <Nav.Link href="#general-facts">AUSGANGSLAGE</Nav.Link>
            <Nav.Link href="#concept-section">KONZEPT BA</Nav.Link>
            <Nav.Link href="#calculator-section">GREEN-RECHNER</Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1HtN4q10k_BSL97Wmf95NKur1LK6ooUuA/view?usp=sharing"
              target="_blank"
            >
              PROJEKTARBEIT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
