import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/BA.png';

export default function AppHeader() {
    return(
        
      <Navbar expand="lg" className="bg-dark navbar-dark "  >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" style={{width: '35px',  }} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto m-auto " >
            <Nav.Link  href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">ALLGEMEINES</Nav.Link>
            <Nav.Link href="#section1">LIEGENSCHAFTEN</Nav.Link>
            <Nav.Link href="#section2">KENNZAHLEN</Nav.Link>
            <Nav.Link href="#section3">RECHNER</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
