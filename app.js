const http = require('http')

const express = require('express') // importing the express package
const bodyParser = require('body-parser') // used  to parse the incoming request body (parse means converting the request to the run-able format )

const app = express() // express package can be used as a function

const adminRoutes = require('./routes/admin') // we are creating the route to the route folder (admin file)

const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false})) //It does the whole body parsing ehich would have to be manually otherwise

//sometimes the outsourced path have a common starting path e.g. admin in this case.
//we do this to get a common path to direct the request to a common channel
app.use('/admin', adminRoutes) // we dont need to call it like a function
//order matters. we cant place it after the middleware present at the bottom

app.use(shopRoutes)

app.use((req,res,next) => { // we have a catch a;ll middleware at the bottom where we dont need a path filter but we could use slash if want
    res.status(404).send('<h1> Page not foundddddddd!!!!</h1>') // when we write use it handles all http method not just post and get requests.
})


app.listen(4000) // we are creating server here directly