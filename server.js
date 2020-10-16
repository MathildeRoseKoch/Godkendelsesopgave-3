
// import express from 'express';
// sådan at den snakker sammen med users filen
// import usersRoutes from './routes/user.js';

const express = require('express');
const server = express();
const PORT = process.env.port || 4000;
  // sådan at vi bruger alle routerne i Users filen, så når folk besøger dem kører routerne
  // app.use('/users', usersRoutes)
  // et API endpint, vores basic route, med en get request til vores homepage '/', efterfulgt af 

 //const port =  

const usercontroller = require('../Controller/userController')

//henter controller fra sti
let userController = require('./Controller/userController')
  
//read endpoint pÃ¥ routen '/'
server.get('/', userController)
  
  
const Users = require('./Model/user.js');
  users = [];

server.get("/user1", (req, res) => {
    res.json(Users[0])//henter alle info om user 
 });

server.get("/user2", (req, res) => {
    res.json(Users[1])
 });
 

  // vil gerne have User og de tre krav ind her
 // vi lytter på porten

server.route('.Model/users.js') //Users route
  .get(function (req, res) { //GET handling
    res.send(JSON.stringify(users)) //Return users array
  })
  .post(function (req, res) { //POST handling
    //Create a new payment user with the variables from the POST request
    let user = new userClass.paymentUser(req.body.firstname, rep.body.lastname, req.body.gender, rep.body.age, req.body.interest, req.body.email, req.body.city, req.body.password, req.body.creditCardName, req.body.creditCardNumber, req.body.creditCardExpiryDate, req.body.creditCardCVC)
    users.push(user); //Add the user to the array

  })
  .put(function (req, res) {

      tempemail=req.body.email; //Grab email, parameter and value from PUT request
      tempparam=req.body.param;
      tempval=req.body.val

      for (index = 0; index < users.length; ++index) { //Go through each user
          if (users[index].email==tempemail){ //If a user email in the array matches the PUT request
            users[index][tempparam] = tempval; //Set the parameter to the temp value from the PUT request
          }
      }
    

    res.send(users[index])
    })

  .delete(function (req, res){
      tempemail=req.body.email;
    for (index = 0; index < users.length; ++index) { //Go through each user
        if (users[index].email==tempemail){ //If a user email in the array matches the delete request
          users.splice(index, 1) //Delete user
        }
    }
  
      res.send("delete")
    })



const match = require('./Model/user.js');

server.post("/match",(req, res) => {
    res.json(match[0], "match has been created")
});

server.post("/match",(req, res) => {
        res.json(match[1],"match has been created")
});

server.get("/match", (req, res) => {
  res.json(match[1])
});

server.get("/match", (req, res) => {
  res.json(match[1])
});

server.put("/match", (req, res) => {
  res.json(match[1], "match has been updated")
});

server.put("/match", (req, res) => {
  res.json(match[1], "match has been updated")
});

server.delete("/match", (req, res) => {
  res.json(match[1], "match has been deleted")
});

server.delete("/match", (req, res) => {
  res.json(match[1], "match has been deleted")
});



const interest = require('./Model/user.js');

server.post("/interest",(req, res) => {
  res.json(interest[0], "interest has been created")
});

server.post("/interest",(req, res) => {
  res.json(interest[1], "interest has been created")
});

server.get("/interest",(req, res) => {
    res.json(interest[0])
});

server.get("/interest",(req, res) => {
    res.json(interest[1])
});

server.put("/interest",(req, res) => {
  res.json(interest[0], "User updated")
});

server.put("/interest",(req, res) => {
  res.json(interest[1], "User updated")
});

server.delete("/interest",(req, res) => {
  res.json(interest[0], "interest has been deleted")
});

server.delete("/interest",(req, res) => {
  res.json(interest[1], "interest has been created")
});


server.listen(PORT, () => {
  console.log(`Server-applikation lytter pÃ¥ http://localhost:${PORT}`)
})