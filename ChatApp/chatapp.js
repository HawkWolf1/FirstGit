const express = require('express')
const app = express()
const fs = require('fs')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, res) => {
    fs.readFile('username.txt', (err,data)=>{
        if(err){
            console.log(err)
            data='No Chat Exists'
        }
        res.send(
            `${data}<form action = "/" method="POST" onsubmit="document.getElementbyId('username').value=localStorage.getItem('username')">
        <input id="message" type="text"placeHolder="message">
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
    res.send(
      '<form action="/login" method="POST"><input type="text" placeHolder="username" name="title"><button type="submit">Login</button></form>'
    );
  });
  
app.post('/login', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  });
  
app.listen(4000)