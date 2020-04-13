import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

function NavTabs(props) {
  return (
  <div>
 <Navbar expand="sm" variant="light" bg="light" fixed="top">
 <Navbar.Brand href="#home">Kayla San Filippo</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
</Navbar>

   

    </div>
  );
}

export default NavTabs;
