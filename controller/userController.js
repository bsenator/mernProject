import User from "../models/userModel.js";


const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body); // burada bi sorun var yarın videodan izle bi veritabanına baglanıyor yazdırıyor ama webte kullanıcya gostermiyor

    res.status(201).json({
      succeded: true,
      photo,
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const {username, password} = req.body;
   
    const user = User.findOnve({username})

    let same = false;

    if(user) {
      same = await bycrpt.compare(password, user.password)
    } else {
      return res.status(401).json({
        succeded: false,
        error: 'here is no such user',
      });
    }

    if(user) {
      res.status(200).send("u are logged in") 
    } else {
      res.status(401).json({
        succeded: false,
        error: 'here is no such user',
      });
    }

  } catch (error) {
    res.status(500).json({
      succeded: false,
      error, 'password are not match'
    });
  }
};



export {createUser, loginUser};