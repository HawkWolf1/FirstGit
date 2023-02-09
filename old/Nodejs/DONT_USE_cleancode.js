const http = require('http');

const routes = require('./DONT_USE_routes')

const port = 4000

const server = http.createServer(routes.handler) 

server.listen(port, function(error){
    if (error){
        console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port ' + port)
    }
})