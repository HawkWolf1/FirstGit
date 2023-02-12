const express = require('express')

const router = express.Router() 

const fs = require('fs')

router.get('/', (req, res) => {
    fs.readFile('username.txt', (err,data)=>{
        if(err){
            console.log(err)
            data='No Chat Exists'
        }
        res.send(
            `${data}<form action = "/" onsubmit="document.getElementbyId('username').value=localStorage.setItem('username')" method="POST" >
        <input id="message" type="text" name="message" placeHolder="message">
        <input type="hidden" name="username" id="username">
        <button type="submit">send</button>
        </form>`
      )
    })
    });

    //we are writing to the file username.txt(we can specifiy that), then we can strimgify username and the message and the nwe have a callback function.
router.post('/', (req,res) =>{
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{flag:'a'}, (err) => {
        err ? console.log(err) : res.redirect("/") // if nothing is wrong we redirect it to the slash
    })
    })


module.exports = router