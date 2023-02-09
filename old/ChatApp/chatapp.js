const express = require('express')
const app = express()
const fs = require('fs')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())

app.get('/', (req, res) => {
    fs.readFile('username.txt', (err,data)=>{
        if(err){
            console.log(err)
            data='No Chat Exists'
        }
        res.send(
            `${data}<form action = "/" method="POST" onsubmit="document.getElementbyId('username').value=localStorage.setItem('username')">
        <input id="message" type="text" name="message">
        <input type="hidden" name="username" id="username">
        <button type="submit">send</button>
        </form>`
      )
    })
    });

app.post('/', (req,res) =>{
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{flag:'a'}, (err) => {
        err ? console.log(err) : res.redirect("/")
    })
  })

app.get('/login', (req, res, next) => {
  fs.readFile('username')
    res.send(
      `<form action="/login" method="POST" onsubmit=localStorage.setItem('username', document.getElementbyId('username').value)><input type="text" placeHolder="username" name="title"><button type="submit">Login</button></form>`
      );
    
      // `<form action="/login" method="POST" onsubmit="document.getElementbyId('username').value=localStorage.setItem('username')><input type="text" placeHolder="username" name="title"><button type="submit">Login</button></form>`
    
  });
  
app.post('/login', (req, res, next) => {
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{flag:'a'}, (err) => {
      err ? console.log(err) : res.redirect("/")
  })
    res.redirect('/');
  });
  
app.listen(4000)