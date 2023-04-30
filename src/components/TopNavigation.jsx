import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import cursor from "../images/flickering_cursor.gif"
import "bootstrap/dist/css/bootstrap.min.css"
export default function Topavigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Talvorn Corporation{" "}
            <span>
              <img
                src={cursor}
                height="15px"
                width="2px"
                alt="blinking cursor"
              />
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#realms">Realms</Nav.Link>
              <Nav.Link href="#signup">Signup</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
