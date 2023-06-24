const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const config = require('./config');
const Product = require('./models/product');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURL,
    { useNewUrlParser: true }
);

app.get('/seeddb', (req, res) => {
    const data = [
        {
            _id: "5dgd26327usyri8f84fhr77",
            name: "Javascript Mobile Application Development",
            description: "Wheather you are developing a mobile app for ipad or on a Windows Phones",
            image: "/assets/one.jpg",
            price: 10,
            __v: 0
        },
        {
            id: "5dgd26327usyri8f84fhr77",
            name: "Javascript Mobile Application Development",
            description: "Wheather you are developing a mobile app for ipad or on a Windows Phones",
            image: "/assets/one.jpg",
            price: 10,
            __v: 0
        },
        {
            _id: "5dgd26327usyri8f84fhr77",
            name: "Javascript Mobile Application Development",
            description: "Wheather you are developing a mobile app for ipad or on a Windows Phones",
            image: "/assets/one.jpg",
            price: 10,
            __v: 0
        },
        {
            id: "5dgd26327usyri8f84fhr77",
            name: "Javascript Mobile Application Development",
            description: "Wheather you are developing a mobile app for ipad or on a Windows Phones",
            image: "/assets/one.jpg",
            price: 10,
            __v: 0
        },
        {
            id: "5dgd26327usyri8f84fhr77",
            name: "Javascript Mobile Application Development",
            description: "Wheather you are developing a mobile app for ipad or on a Windows Phones",
            image: "/assets/one.jpg",
            price: 10,
            __v: 0
        },
        {
            id: "5dgd26327usyri8f84fhr77",
            name: "Javascript Mobile Application Development",
            description: "Wheather you are developing a mobile app for ipad or on a Windows Phones",
            image: "/assets/one.jpg",
            price: 10,
            __v: 0
        },
    ];
    data.forEach((product) => { 
        const newProduct = new Product({
            name: product.name,
            description: product.description,
            image: product.image,
            price: product.price,            
        });
        newProduct.save();
    })
    res.send("ok")
})

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.listen(3000, () => console.log("Listening on port 3000....."))