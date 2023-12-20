import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import cookieParser from "cookie-parser";
import pageRoute from "./routers/pageRoute.js";
import photoRoute from "./routers/photoRoute.js";
import userRoute from "./routers/userRoute.js";
import { checkUser } from "./middlewares/authMiddleware.js";


dotenv.config();

conn();

const app = express(); //expressi çalıştıracağımız değişkeni oluşturdukl
const port = process.env.PORT;

//ejs template engine
//rezillik cikartan o kod
app.set('views', 'views');  
app.set("view engine", "ejs");

//static files middleware (yapmak istedigim ek islemler icin mw)
//publicin icindekiler static dedik yani bunu tanımladık
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.get("/about", (req, res) => {
//   res.render("about");
// });

//routes
app.use("*", checkUser);
app.use("/",pageRoute );
app.use("/photos", photoRoute );
app.use("/users", userRoute );


//get metodu, ilgili yonlendirmeyi yapar
// projemizin kok adresindeki istek gönderdiğimizde get isteği yapması gereken seyi söylüyoruz
// ikinci parametre ise callback fonsiyonu yazarız

//node js web uygulaması bir request response donsunden ibarettir.

//kapatıp acma islemleri yapma yerine bunun daha otomatize olmasını isteriz
//otomatik olarak guncellemeleri alabilmek icin nodemon paketi installiton ediyorum

app.listen(port, () => {
  console.log(`application running on port: ${port}`);
});
