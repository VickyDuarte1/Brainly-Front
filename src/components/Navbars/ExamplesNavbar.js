import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function ExamplesNavbar() {
  const location = useLocation();
  const handleClick = () => {
    const section = document.getElementById("subscribe");
    section.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogOut = () => {
    localStorage.removeItem("activeUser");
    setActiveUser(null);

    // Redirect to landing page if user is logging out from profile page
    if (location.pathname === "/profile-page") {
      window.location.href = "/landing-page";
    } else if (location.pathname === "/register-page") {
      window.location.href = "/landing-page";
    }
  };

  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };

  // const activeUser = JSON.parse(localStorage.getItem("activeUser"));
  // console.log(activeUser)

  const [activeUser, setActiveUser] = useState(
    JSON.parse(localStorage.getItem("activeUser")) || null
  );

  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand tag={Link} to="/landing-page" id="navbar-brand">
            <span>Brainly • </span>
            Fast and Safe!
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Diseñado para el bienestar de tu salud.
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  BLK•React
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                target="_blank"
                onClick={handleClick}
              >
                <i className="tim-icons icon-spaceship" /> Cambiate a PRO
              </Button>
            </NavItem>
            {!activeUser ? (
              <>
                <NavItem>
                  <NavLink tag={Link} to="/register-page">
                    Registrate
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/login-page">
                    {" "}
                    Inicia Sesión
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <Button onClick={handleLogOut}>Cerrar sesión</Button>
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
