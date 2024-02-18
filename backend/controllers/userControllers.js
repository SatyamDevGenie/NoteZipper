import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  // Create a new User
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  // Response after creating a new user
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
});

export { registerUser };
