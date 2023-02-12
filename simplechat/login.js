const express = require('express')

const router = express.Router()


router.get('/login', (req, res, next) =>{   
    res.send(
        //  '<form action="/login" method="POST" onsubmit = "localStorage.setItem(`username`: document.getElementbyId(`username`).value)"><input type = "text" placeHolder = "username" id = "username" name = "title"><button type = "Submit"> Login </button></input></form>'

      `<form action="/login" method="POST"  
        onsubmit = localStorage.setItem('username', document.getElementbyId('username').value)>
        <input type="text" placeHolder="username" name="title" id="username">
        <button type="submit">Login</button> </form>`)
    }) 
        
    

router.post('/login', (req, res, next) =>{   
    console.log(req.body)  
    res.redirect('/') 
})

module.exports = router

