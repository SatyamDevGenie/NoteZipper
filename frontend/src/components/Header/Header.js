import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../actions/userActions";
import "./Header.css";

function Header({ setSearch }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const searchHandle = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="navbar-brand-link">
            Note Zipper
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={searchHandle}
              />
            </Form>
          </Nav>

          <Nav className="ms-auto">
            {userInfo ? (
              <>
                <Nav.Link as={Link} to="/mynotes" className="nav-link-custom">
                  My Notes
                </Nav.Link>
                <NavDropdown
                  title={userInfo.name}
                  id="collasible-nav-dropdown"
                  className="nav-dropdown-custom"
                >
                  <NavDropdown.Item as={Link} to="/profile">
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" className="nav-link-custom">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
