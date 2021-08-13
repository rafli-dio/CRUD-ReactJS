import React from "react";
import { Navbar, Container } from "react-bootstrap";
const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Rumah Makan</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
