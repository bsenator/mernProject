import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;
        next();
      } else {
        const user = await User.findById(decodedToken.userId);
        res.locals.user = user; //hangi kullanıcı oldguunu tutuoyrum
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

const authenticateToken = async (req, res, next) => {
  try {
    // Cookie'den token'ı alma
    const token = req.cookies.jwt;

    if (token) {
      // Token doğrulama
      jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) {
          console.log(err.message);
          // Token geçerli değilse veya bir hata oluşursa, login sayfasına yönlendirme
          return res.redirect("/login");
        } else {
          // Token doğrulandıysa, bir sonraki adıma geçme
          next();
        }
      });
    } else {
      // Token bulunamazsa, login sayfasına yönlendirme
      res.redirect("/login");
    }
  } catch (error) {
    // Genel bir hata durumunda 401 hatası ve hata mesajını döndürme
    res.status(401).json({
      succeeded: false,
      error: "not authorized",
    });
  }
};

export { authenticateToken, checkUser };
