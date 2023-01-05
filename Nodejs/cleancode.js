const http = require('http');

const routes = require('./routes')

const port = 4000

const server = http.createServer(routes) 

server.listen(port, function(error){
    if (error){
        console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port ' + port)
    }
})