import User from "../../models/User.js";
import { generateToken } from "../../utils/generateToken.js";
import dotenv from "dotenv";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../../errors/index.js";

dotenv.config();

//----------------------------------------------------------------
//Register User
//----------------------------------------------------------------
const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values.");
  }

  const userExistsAlready = await User.findOne({ email });
  if (userExistsAlready) {
    throw new BadRequestError("Email already exists.");
  }

  const user = await User.create({
    name,
    email,
    password,
  });
  res.status(StatusCodes.CREATED).json({ user });
};

//----------------------------------------------------------------
//Login User
//----------------------------------------------------------------
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Credentials");
  } else {
    res.status(StatusCodes.OK).json({
      _id: user?._id,
      name: user?.name,
      email: user?.email,
      isAdmin: user?.isAdmin,
      token: generateToken(user?._id),
    });
  }
};

const logout = async (req, res) => {};

export { register, login, logout };
