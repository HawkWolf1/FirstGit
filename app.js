const http = require('http')

const express = require('express') 
const bodyParser = require('body-parser')

const path = require('path')

const app = express() 

const sequelize = require('./util/database')



const adminRoutes = require('./approutes/admin') 
const shopRoutes = require('./approutes/shop')

// db.execute('SELECT * FROM products')
// .then(result => {
//     console.log(result)
// })
// .catch(() => {
//     console.log(err)
// })

app.use(bodyParser.urlencoded({extended: false})) 

app.use(express.static(path.join(__dirname, 'public'))) //for serving the files statically

app.use('/admin', adminRoutes) 

app.use(shopRoutes)

app.use((req,res,next) => { 
    res.status(404).sendFile(path.join(__dirname, 'myviews', '404.html')) 
})

sequelize.sync().then(result => {
    app.listen(4000)
})
.catch(err => {
    console.log(err)
})

// app.listen(4000) 