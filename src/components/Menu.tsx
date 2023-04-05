import React from "react";
// import { NavLink } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { useLocation } from "react-router-dom";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const Menu = () => {
  const getActiveRoute = useLocation().pathname ? "Active" : "";
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Activy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className={getActiveRoute}
              as={NavLink}
              to="/cliente/lista"
            >
              Clientes
            </Nav.Link>
            <Nav.Link
              className={getActiveRoute}
              as={NavLink}
              to="/atividade/lista"
            >
              Atividades
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown align="end" title="Mario" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Configurações
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

//href="/cliente/lista">Clientes
