import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import cursor from "../images/flickering_cursor.gif"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
export default function Topavigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
              Talvorn Corporation{" "}
            </Link>
            <span>
              <img
                src={cursor}
                height="15px"
                width="2px"
                alt="blinking cursor"
                id="logo"
              />
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  component={Link}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/#realms"
                >
                  Realms
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  component={Link}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/#signup"
                >
                  Signup
                </Link>
              </Nav.Link>
              <Nav.Link href="#about">
                {" "}
                <Link
                  component={Link}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/#about"
                >
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  component={Link}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/privacy"
                >
                  Privacy Policy
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
