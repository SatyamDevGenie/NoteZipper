import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";

const RegisterScreen = () => {
  const postDetails = (p) => {
    p.preventDefault();
  };

  return (
    <MainScreen title="REGISTER">
      <div className="loginContainer">
        <Form>
          <Form.Group controlId="name">
            <Form.Label className="name">Name</Form.Label>
            <Form.Control
              type="name"
              // value={name}
              placeholder="Enter your full name"
              // onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="mt-3">
            <Form.Label className="email">Email address</Form.Label>
            <Form.Control
              type="email"
              // value={email}
              placeholder="email@gmail.com"
              // onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label className="password">Password</Form.Label>
            <Form.Control
              type="password"
              // value={password}
              placeholder="******"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword" className="mt-3">
            <Form.Label className="password">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              // value={confirmpassword}
              placeholder="******"
              // onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mt-3">
            <Form.Label className="upload">
              {" "}
              Upload your Profile Picture
            </Form.Label>
            {/* <Form.File
              onChange={(e) => postDetails(e.target.files[0])}
              id="custom-file"
              type="image/png"
              label="Upload Profile Picture"
              custom
            /> */}
            <Form.Group controlId="formFile" className="mb-3">
              {/* <Form.Label>Choose a file</Form.Label> */}
              <Form.Control type="file" onChange={postDetails} />
            </Form.Group>
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col style={{ fontFamily: "Arial Black" }}>
            Already have a Account ? <Link to="/login">Login Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default RegisterScreen;
