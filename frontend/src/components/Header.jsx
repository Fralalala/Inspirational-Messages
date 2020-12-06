import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar
      style={{ background: "#797a7e" }}
      variant="dark"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>RandMsg</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Fragment>
              <LinkContainer to="/send">
                <Nav.Link>
                <i className="fas fa-paper-plane" /> Send Message!
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/receive">
                <Nav.Link>
                <i className="fas fa-hand-holding-heart" /> Receive Message!
                </Nav.Link>
              </LinkContainer>
            </Fragment>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
