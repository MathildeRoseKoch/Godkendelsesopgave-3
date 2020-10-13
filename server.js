# Godkendelsesopgave-3

const express = require("express");
const { restart } = require("nodemon");

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log('Hello world ${PORT}'));

app.get ("/", function (req,res){
    res.send("Hello World")
});
