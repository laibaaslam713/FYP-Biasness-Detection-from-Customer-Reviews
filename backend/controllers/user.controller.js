import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({
    name,
    email,
    password,
  });
  if (!newUser) {
    return res.status(400).json("user not registered");
  }
  await newUser.save();
  res.status(200).json(newUser);
};
