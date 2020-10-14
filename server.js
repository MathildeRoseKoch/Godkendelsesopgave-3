

const express = require("express");
const { restart } = require("nodemon");

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log('Hello world ${PORT}'));

app.get ("/", function (req,res){ // endpoint
    res.send("Hello World")
});

// import express from 'express';
// sådan at den snakker sammen med users filen
// import usersRoutes from './routes/user.js';

const express = require('express');
const app = express();
const PORT = process.env.port || 4000;
// sådan at vi bruger alle routerne i Users filen, så når folk besøger dem kører routerne
// app.use('/users', usersRoutes)
// et API endpint, vores basic route, med en get request til vores homepage '/', efterfulgt af 
app.get("/", (req, res) => {
   res.send('hej')
});
app.get("/test", (req, res) => {
    res.json({'test' : "kæmpe test"})
 })
 // vil gerne have User og de tre krav ind her
// vi lytter på porten
app.listen(PORT, err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log("listening on port http://localhost:${PORT}");
});
 

let apiButton = document.getElementById("apiButton");
apiButton.addEventListener("click",function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            alert(xhttp.responseText)
        }
    }
    xhttp.open("GET", "http://localhost:3000", true);
    xhttp.send();
});