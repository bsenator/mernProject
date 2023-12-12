import express from "express";

const app = express(); //expressi çalıştıracağımız değişkeni oluşturdukl
const port= 3000;

//ejs template engine
app.set('view engine', 'ejs');

//static files middleware (yapmak istedigim ek islemler icin mw)
//publicin icindekiler static dedik yani bunu tanımladık
app.use(express.static('public'));


app.get('/', (req, res) =>{
    res.render('index');
});

app.get('/about', (req, res) =>{
    res.render('about');
});


//get metodu, ilgili yonlendirmeyi yapar
// projemizin kok adresindeki istek gönderdiğimizde get isteği yapması gereken seyi söylüyoruz
// ikinci parametre ise callback fonsiyonu yazarız

//node js web uygulaması bir request response donsunden ibarettir.

//kapatıp acma islemleri yapma yerine bunun daha otomatize olmasını isteriz
//otomatik olarak guncellemeleri alabilmek icin nodemon paketi installiton ediyorum

app.listen(port, ()=> {
    console.log(`application running on port: ${port}`);
});
