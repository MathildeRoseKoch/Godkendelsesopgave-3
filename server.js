
const express = require('express');
const server = express();
const PORT = process.env.port || 4000;


const usercontroller = require('../Controller/userController')

//henter controller fra sti
let userController = require('./Controller/userController')
  

server.get('/', userController)
  
const Users = require('./Model/user.js');
  users = [];

server.get("/user1", (req, res) => {
    res.json(Users[0])//henter alle info om user 1
 });

server.get("/user2", (req, res) => {
    res.json(Users[1]) // henter alle info om user 2 
 });
 

server.route('.Model/users.js') //Users route
  .get(function (req, res) { //get handling der sender og returner 
    res.send(JSON.stringify(users)) //returnere userarray igennem JSON 
  })
  .post(function (req, res) { //POST handling
    // skaber en ny paymentuser udfra variablerne fra POST request 
    let user = new userClass.paymentUser(req.body.firstname, rep.body.lastname, req.body.gender, rep.body.age, req.body.interest, req.body.email, req.body.city, req.body.password, req.body.creditCardName, req.body.creditCardNumber, req.body.creditCardExpiryDate, req.body.creditCardCVC)
    users.push(user); //tilføjer den nye user til array

  })
  .put(function (req, res) {

      tempemail=req.body.email; //henter email put request 
      tempparam=req.body.param; //henter parametre fra put request
      tempval=req.body.val; //henter value fra put request

      for (index = 0; index < users.length; ++index) { //loop der går igennem hver user
          if (users[index].email==tempemail){ //If statement: hvis user email i arrayet matcher PUT request 
            users[index][tempparam] = tempval; //så ville den sætte parametrene til det foreløbige value fra PUT request
          }
      }
    

    res.send(users[index])
    })

  .delete(function (req, res){
      tempemail=req.body.email;
    for (index = 0; index < users.length; ++index) { // for loop der går igennem hver user 
        if (users[index].email==tempemail){ //If statement: hvis user email i arrayet matcher delete request 
          users.splice(index, 1) //så sletter den user
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