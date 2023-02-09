const http = require('http')

const express = require('express') // importing the express package

const app = express() // express package can be used as a function

app.use((req, res, next) =>{ // use allows to add a new middleware function // next is a function that is passed by this function in express js
    console.log('A') // next allows the request to travel on next middleware
    next()
})

app.use((req, res, next) =>{  
    console.log('B') 
    res.send('<h1>CC</h1>')
})


app.listen(4000) // we are creating server here directly