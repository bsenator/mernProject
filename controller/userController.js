import User from "../models/userModel.js";
import bcrypt from 'bcrypt';

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
      res.status(200).send("You are logged in");
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

export { createUser, loginUser };