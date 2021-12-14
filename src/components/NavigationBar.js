import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

function NavigationBar() {
  return (
    <div>
      <Container className="mt-3">
        <Navbar variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img className="logo" src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <CgMenuGridO color="rgb(255, 173, 51)" size="35px" />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/services">
                  Services
                </Nav.Link>
                <Nav.Link as={Link} to="/mywork">
                  My Work
                </Nav.Link>
                {/* <Nav.Link as={Link} to="/projects">
                  Projects
                </Nav.Link> */}
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavigationBar;
