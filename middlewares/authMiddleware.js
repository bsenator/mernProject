import jwt from "jsonwebtoken";

async function authenticateToken(req, res, next) {
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
}

export { authenticateToken };






