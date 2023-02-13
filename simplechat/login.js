const express = require('express')

const router = express.Router()


router.get('/login', (req, res, next) =>{   
    res.send(
     //   '<form action="/" method="POST" onsubmit = "localStorage.setItem(`username`, document.getElementbyId(`username`).value)"><input type = "text" placeHolder = "username" id = "username" name = "username"><button type = "submit"> Login </button></input></form>'

      `<form action="/login" 
        onsubmit = "localStorage.setItem('username', document.getElementbyId('username').value)" method="POST"  >
        <input type="text" placeHolder="username" name="username" id="username">
        <button type="submit" value="">Login</button></form>` 
        )
    }) 
        
    

 router.post('/login', (req, res, next) =>{   
    res.redirect('/') 
})

module.exports = router

