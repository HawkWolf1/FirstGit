const http = require('http')

const express = require('express') // importing the express package
const bodyParser = require('body-parser') // used  to parse the incoming request body (parse means converting the request to the run-able format )

const app = express() // express package can be used as a function

app.use(bodyParser.urlencoded({extended: false})) //It does the whole body parsing ehich would have to be manually otherwise


app.use('/mycart', (req, res, next) =>{   
    res.send('<form action="/product" method="POST"><input type ="text" name="title"><button type="submit">Add product</button></form>')
})

app.post('/product', (req, res, next) =>{   //post tag is used to filter for post requests
    console.log(req.body) //line 8 reaches here 
    res.redirect('/') 
})

app.use('/', (req, res, next) =>{  
    res.send('<h1>This is working</h1>')
})


app.listen(4000) // we are creating server here directly