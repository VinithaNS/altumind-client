import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Outlet } from "react-router-dom";

import "../Styles/Navbar.css";

const MainBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        className="border"
        sticky="top"
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>Scketch</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Services" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/services/design">
                  Design
                </NavDropdown.Item>
                <NavDropdown.Item href="/services/development">
                  Development
                </NavDropdown.Item>
                <NavDropdown.Item href="/services/digitalmarketing">
                  Digital Marketing
                </NavDropdown.Item>
                <NavDropdown.Item href="/services/digitalconsulting">
                  Degital Consulting
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <NavDropdown title="Blog" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/blog/insights">
                  Insight
                </NavDropdown.Item>
                <NavDropdown.Item href="/blog/digitals">
                  Digitals
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Careers" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/careers/culture">
                  Culture
                </NavDropdown.Item>
                <NavDropdown.Item href="/careers/currentopenings">
                  Current Openings
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <div className="fluid flex">
                <Outlet />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainBar;
