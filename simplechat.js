const http = require('http')

const express = require('express') 
const bodyParser = require('body-parser') 
const app = express()



app.use(bodyParser.urlencoded({extended: false}))


const loginRoutes = require('./simplechat/login')
const messageRoutes = require('./simplechat/message')


app.use(loginRoutes)
app.use(messageRoutes)

app.use((req,res,next) => { 
    res.status(404).send('<h1>  OOps! Page not foundddddddd!!!!</h1>') 
})

app.listen(4000)