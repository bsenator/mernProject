import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
   
    res.status(201).json({
      succeeded: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      succeeded: false,
      error,
    });
  }
};
 
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
   
    const user =  await User.findOne({ username });

    let same = false;

    if (user) {
      same = await bcrypt.compare(password, user.password);
    } else {
      return res.status(401).json({
        succeeded: false,
        error: 'No such user',
      });
    }

    if (same) {
      const token = createToken(user._id);
      res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 1000* 60* 60* 24,
      });

      res.redirect("/users/dashboard");    
    } else {
      res.status(401).json({
        succeeded: false,
        error: 'Password does not match',
      });
    }

  } catch (error) {
    res.status(500).json({
      succeeded: false,
      error: 'Internal server error',
    });
  }
};

const createToken = (userId) => {
  return jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

const getDashboardPage = (req,res) => {
  res.render('dashboard', {
  link: 'dashboard',
  });
};

export { createUser, loginUser, getDashboardPage };