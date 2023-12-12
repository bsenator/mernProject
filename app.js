import express from "express"

const app = express() //expressi çalıştıracağımız değişkeni oluşturdukl
const port= 3000


app.get("/", (req,res) =>{
    res.send("project start");
});


//get metodu, ilgili yonlendirmeyi yapar
// projemizin kok adresindeki istek gönderdiğimizde get istedği
// yapması gereken seyi söylüyoruz
// ikinci parametre ise callback fonsiyonu yazarız

//node js web uygulaması bir request response donsunden ibarettir.

//kapatıp acma islemleri yapma yerine bunun daha otomatize olmasını isteriz
//otomatik olarak guncellemeleri alabilmek icin nodemon paketi installiton ediyorum

app.listen(port, ()=> {
    console.log(`application running on port: ${port}`);
});
