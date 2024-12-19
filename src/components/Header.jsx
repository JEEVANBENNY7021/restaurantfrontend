import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <div className="logo">
            <img src={logo} alt="Deep Net Soft" />
            <h1>
              DEEP <span>NET</span> SOFT
            </h1>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link}to="createmenu">MENU</Nav.Link>
            <Nav.Link href="#">MAKE A RESERVATION</Nav.Link>
            <Nav.Link href="CONTACT">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
