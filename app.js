const http = require('http')

const express = require('express') // importing the express package

const app = express() // express package can be used as a function


app.use('/mycart', (req, res, next) =>{  
    console.log('CCCCCCCCCCCCCC') 
    res.send('<form action="/product" method="POST"><input type ="text" name="title"><button type="submit">Add product</button></form>')
})

app.use('/product', (req, res, next) =>{  
    console.log(req.body)
    res.redirect('/') 
})

app.use('/', (req, res, next) =>{  
    console.log('BBBBBBBBBBBBB') 
    res.send('<h1>This is working</h1>')
})




app.listen(4000) // we are creating server here directly