import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="11">
            <h1 className="title">Brainly •</h1>
          </Col>
          <Nav>
            <NavItem>
              <NavLink to="/" tag={Link}>
                Landing Page
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/home" tag={Link}>
                Home
              </NavLink>
            </NavItem>
          </Nav>
        </Row>
      </Container>
    </footer>
  );
}
