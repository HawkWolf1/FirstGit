const http = require('http')

const express = require('express') 
const bodyParser = require('body-parser') 
const app = express()

app.use(bodyParser.urlencoded({extended: false}))

const loginRoutes = require('./simplechat/login')
const messageRoutes = require('./simplechat/message')

app.use(loginRoutes)
app.use(messageRoutes)

app.listen(4000)