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
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand
          style={{
            fontFamily: "Arial Black",
            fontWeight: "bold",
            color: "wheat",
          }}
        >
          <Link to="/">Note Zipper</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Form inline style={{ width: "275px" }}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={searchHandle}
              />
            </Form>
          </Nav>

          {userInfo ? (
            <Nav>
              <Nav.Link
                style={{
                  fontFamily: "Arial Black",
                  fontWeight: "bold",
                  color: "wheat",
                }}
              >
                <Link to="/mynotes">My Notes</Link>
              </Nav.Link>
              <NavDropdown
                title={userInfo?.name}
                id="collasible-nav-dropdown"
                style={{
                  fontFamily: "Arial Black",
                  fontWeight: "bold",
                  color: "#1c1c50",
                }}
              >
                <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link>
                <Link to="/login">Login</Link>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
