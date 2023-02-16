const http = require('http')

const express = require('express') 
const bodyParser = require('body-parser')

const path = require('path')

const app = express() 

const adminRoutes = require('./approutes/admin') 

const shopRoutes = require('./approutes/shop')

app.use(bodyParser.urlencoded({extended: false})) 

app.use(express.static(path.join(__dirname, 'public'))) //for serving the files statically

app.use('/admin', adminRoutes) 

app.use(shopRoutes)

app.use((req,res,next) => { 
    res.status(404).sendFile(path.join(__dirname, 'myviews', '404.html')) 
})


app.listen(4000) 