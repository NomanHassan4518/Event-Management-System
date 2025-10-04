import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "1d" });
};

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const isUserExit = await User.findOne({ email });

    if (isUserExit) {
      return res.status(409).json({ message: "User already exit" });
    }

    let isAdmin = email === "malikhassanu55@gmail.com";
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      isAdmin,
    });

    return res.status(201).json({
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      token: generateToken(newUser._id),
      message: "User register successfully",
    });
  } catch (error) {
    return res.status(500).error(error.message);
  }
};
