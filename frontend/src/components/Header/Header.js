import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout);
    navigate("/");
  };

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
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
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
