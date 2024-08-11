import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../actions/userActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setMessage("Please fill in all fields");
    } else {
      dispatch(login(email, password));
      navigate("/mynotes");
    }
  };

  return (
    <MainScreen title="LOGIN">
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
          {loading && <Loading />}
          <form onSubmit={submitHandler} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="email@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="******"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
          <div className="text-center py-4">
            <p className="text-gray-600 font-medium">
              New Customer?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </MainScreen>
  );
};

export default LoginScreen;

// ------------------------------------------------------------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import { Button, Col, Form, Row } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import MainScreen from "../../components/MainScreen";
// // import "./LoginScreen.css";

// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../actions/userActions";
// import ErrorMessage from "../../components/ErrorMessage";
// import Loading from "../../components/Loading";

// const LoginScreen = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const userLogin = useSelector((state) => state.userLogin);
//   const { loading, error, userInfo } = userLogin;

//   useEffect(() => {
//     if (userInfo) {
//       navigate("/login");
//     }
//   }, [navigate, userInfo]);

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (email === "" && password === "") {
//       setMessage("Please fill this feilds");
//     } else {
//       dispatch(login(email, password));
//       navigate("/mynotes");
//     }
//   };

//   return (
//     <MainScreen title="LOGIN">
//       <div className="loginContainer">
//         {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
//         {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
//         {loading && <Loading />}
//         <Form onSubmit={submitHandler}>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label className="email">Email Address</Form.Label>
//             <Form.Control
//               type="email"
//               value={email}
//               placeholder="email@gmail.com"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>
//           <br />
//           <Form.Group controlId="formBasicPassword">
//             <Form.Label className="password">Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={password}
//               placeholder="******"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>

//           <Button variant="secondary mt-3" type="submit" className="btn">
//             Login
//           </Button>
//         </Form>
//         <Row className="py-3">
//           <Col style={{ fontFamily: "Arial Black" }}>
//             New Customer ? <Link to="/register">Register Here</Link>
//           </Col>
//         </Row>
//       </div>
//     </MainScreen>
//   );
// };

// export default LoginScreen;
