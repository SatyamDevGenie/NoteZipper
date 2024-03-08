import JWT from "jsonwebtoken";

const generateToken = (id) => {
  return JWT.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "120d",
  });
};

export default generateToken;
