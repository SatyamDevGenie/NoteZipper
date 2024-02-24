import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand
          style={{
            fontFamily: "Arial Black",
            fontWeight: "bold",
            color: "wheat",
          }}
        >
          <Link to="/"> Note Zipper</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Form inline style={{ width: "275px" }}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Nav>
          <Nav>
            <>
              <Nav.Link
                style={{
                  fontFamily: "Arial Black",
                  fontWeight: "bold",
                  color: "wheat",
                }}
              >
                <Link to="/mynotes"> My Notes</Link>
              </Nav.Link>
              <NavDropdown
                title="Satyam Sawant"
                id="collasible-nav-dropdown"
                style={{
                  fontFamily: "Arial Black",
                  fontWeight: "bold",
                  color: "#1c1c50",
                }}
              >
                <NavDropdown.Item>My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </>
            {/* <Nav.Link style={{ fontFamily: "Georgia", fontWeight: "bold" }}>
              Login
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
