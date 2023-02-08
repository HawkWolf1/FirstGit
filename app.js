const http = require('http')

const express = require('express') // importing the express package

const app = express() // express package can be used as a function

app.use((req,res,next) =>{ // use allows to add a new middleware function // next is a function that is passed by this function in express js
    console.log('learning Middleware') // next allows the request to travel on next middleware
})

const server = http.createServer(app) // now this app (which is express function) can be passed thrugh the server

server.listen(4050)