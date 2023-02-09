const http = require('http')

const express = require('express') // importing the express package

const app = express() // express package can be used as a function

app.use('/', (req, res, next) =>{  
    console.log('I will Run') 
    next() // this always runs because we have next here.
})

app.use('/ABC', (req, res, next) =>{  
    console.log('C') 
    res.send('<h1> The ABC page </h1>')
})

app.use('/', (req, res, next) =>{  
    console.log('B') 
    res.send('<h1>CC</h1>')
})


app.listen(4000) // we are creating server here directly